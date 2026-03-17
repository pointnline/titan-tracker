#!/usr/bin/env python3
"""
Titan Tracker — Weekly Digest Automation
RSS 피드 수집 → Claude API 분석 → HTML 다이제스트 생성

사용법:
  python weekly_digest.py              # 전체 실행
  python weekly_digest.py --dry-run    # API 호출 없이 샘플 데이터로 테스트
"""

import os
import re
import json
import logging
import argparse
from datetime import datetime, timedelta
from pathlib import Path

import feedparser
from dotenv import load_dotenv

# 로깅 설정
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s"
)
logger = logging.getLogger(__name__)

# 환경 변수
load_dotenv(Path(__file__).parent / ".env")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY", "")
OUTPUT_DIR = Path(os.getenv("OUTPUT_DIR", Path(__file__).parent.parent))

# 카테고리 매핑 (동적 필터링용)
CATEGORY_MAP = {
    "AI": [
        "Geoffrey Hinton",
        "Yoshua Bengio",
        "Dario Amodei",
        "Sam Altman",
        "Yann LeCun",
        "Andrej Karpathy",
        "Demis Hassabis",
        "Ilya Sutskever",
        "Fei-Fei Li",
        "Andrew Ng",
        "Ian Goodfellow",
        "Jim Fan",
        "Lilian Weng",
        "Jeremy Howard",
        "Lex Fridman",
        "Arthur Mensch",
        "Noam Shazeer",
        "Harrison Chase",
        "Mustafa Suleyman",
        "Mira Murati",
        "Greg Brockman",
        "Matt Shumer",
        "Matthew Berman",
        "David Shapiro",
    ],
    "Science": [
        "Ed Witten",
        "Brian Cox",
        "Sabine Hossenfelder",
        "Neil deGrasse Tyson",
        "Sean Carroll",
        "Jennifer Doudna",
        "Terence Tao",
        "Roger Penrose",
        "Max Tegmark",
    ],
    "Tech": [
        "Elon Musk",
        "Jensen Huang",
        "Satya Nadella",
        "Sundar Pichai",
        "Tim Cook",
        "Mark Zuckerberg",
        "Linus Torvalds",
        "Vitalik Buterin",
        "Patrick Collison",
        "George Hotz",
        "Chris Lattner",
    ],
    "Business": [
        "Ray Dalio",
        "Charlie Munger",
        "Naval Ravikant",
        "Paul Graham",
        "Marc Andreessen",
        "Peter Thiel",
        "Jeff Bezos",
        "Cathie Wood",
        "Ben Thompson",
        "Lenny Rachitsky",
    ],
    "Philosophy": [
        "Yuval Noah Harari",
        "Daniel Kahneman",
        "Nassim Nicholas Taleb",
        "Nick Bostrom",
        "Balaji Srinivasan",
    ],
    "Health": ["Andrew Huberman", "Peter Attia", "David Sinclair", "Eric Topol"],
    "Finance": [
        "Michael Burry",
        "Stanley Druckenmiller",
        "Aswath Damodaran",
        "Chamath Palihapitiya",
    ],
}


def load_titans_dynamic():
    """titans-data.js에서 타이탄 이름을 동적으로 로드"""
    data_path = Path(__file__).parent.parent / "titans-data.js"
    if not data_path.exists():
        logger.warning("titans-data.js not found, using CATEGORY_MAP fallback")
        names = []
        for cat_names in CATEGORY_MAP.values():
            names.extend(cat_names)
        return {name: name.replace(" ", "+") for name in names}

    content = data_path.read_text(encoding="utf-8")
    # TITAN_PROFILES 키에서 이름 추출 (형태: "Full Name": {)
    names = re.findall(r'^"([^"]+)":\s*\{', content, re.MULTILINE)
    logger.info(f"  titans-data.js에서 {len(names)}명 로드됨")
    return {name: name.replace(" ", "+") for name in names}


def get_titans(category=None, limit=20):
    """카테고리 필터 + 제한 적용한 타이탄 딕셔너리 반환"""
    all_titans = load_titans_dynamic()

    if category:
        cat_upper = category.upper()
        for cat, names in CATEGORY_MAP.items():
            if cat.upper() == cat_upper:
                filtered = {n: q for n, q in all_titans.items() if n in names}
                logger.info(f"  카테고리 '{category}' 필터: {len(filtered)}명")
                return dict(list(filtered.items())[:limit])
        logger.warning(f"  카테고리 '{category}'를 찾을 수 없음. 전체 사용")

    return dict(list(all_titans.items())[:limit])


def fetch_feeds(max_items_per_titan=5, timeout=10, category=None, limit=20):
    """Google News RSS로 타이탄별 최신 뉴스 수집"""
    titans = get_titans(category=category, limit=limit)
    all_items = {}
    for name, query in titans.items():
        url = f"https://news.google.com/rss/search?q={query}&hl=en&gl=US"
        logger.info(f"Fetching: {name}...")
        try:
            feed = feedparser.parse(
                url, request_headers={"User-Agent": "TitanTracker/1.0"}
            )
            items = []
            for entry in feed.entries[:max_items_per_titan]:
                items.append(
                    {
                        "title": entry.get("title", ""),
                        "link": entry.get("link", ""),
                        "published": entry.get("published", ""),
                        "summary": entry.get("summary", "")[:200],
                    }
                )
            all_items[name] = items
            logger.info(f"  → {len(items)} items")
        except Exception as e:
            logger.warning(f"  → Failed: {e}")
            all_items[name] = []
    return all_items


def analyze_with_claude(feed_data: dict, dry_run=False):
    """Claude API로 투자 시그널 분석"""
    if dry_run:
        logger.info("DRY RUN — 샘플 데이터 사용")
        return {
            "executive_summary": "[DRY RUN] 이번 주 AI 업계는 NVIDIA의 새로운 GPU 발표와 OpenAI의 제품 업데이트가 주도했습니다.\n\n투자 관점에서 AI 인프라 수요는 여전히 강세이며, 반도체 관련주에 대한 관심이 지속됩니다.\n\n주요 리스크로는 AI 규제 강화 움직임과 기술주 밸류에이션 부담이 있습니다.",
            "top_signals": [
                {
                    "title": "[샘플] NVIDIA Blackwell GPU 수요 폭발",
                    "titans": ["Jensen Huang"],
                    "relevance": "high",
                    "theme": "AI",
                    "description": "AI 학습/추론 수요 급증으로 Blackwell 칩 사전주문 폭주",
                    "action": "NVDA, SMCI, AMD",
                },
                {
                    "title": "[샘플] OpenAI GPT-5 개발 가속",
                    "titans": ["Sam Altman"],
                    "relevance": "high",
                    "theme": "AI",
                    "description": "AGI 향해 스케일업 지속. Microsoft Azure 수혜",
                    "action": "MSFT, OpenAI 관련",
                },
                {
                    "title": "[샘플] ARK Invest AI 포지션 확대",
                    "titans": ["Cathie Wood"],
                    "relevance": "medium",
                    "theme": "AI",
                    "description": "ARKK ETF AI 관련 종목 비중 확대",
                    "action": "ARKK, TSLA, COIN",
                },
            ],
            "theme_analysis": [
                {
                    "theme": "AI & Compute",
                    "temperature": "hot",
                    "summary": "GPU 수요 폭발 지속. NVIDIA 독점적 위치 강화.",
                    "watchlist": ["NVDA", "AMD", "SMCI", "TSM"],
                },
                {
                    "theme": "Fintech & Crypto",
                    "temperature": "warm",
                    "summary": "ETH ETF 기대감. DeFi TVL 회복세.",
                    "watchlist": ["ETH", "COIN", "SQ"],
                },
            ],
            "risk_alerts": [
                "[샘플] AI 규제 강화 (EU AI Act 시행)",
                "[샘플] 기술주 밸류에이션 과열 우려",
            ],
        }

    # 실제 Claude API 호출
    import anthropic

    client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

    # 프롬프트 로드
    prompt_path = Path(__file__).parent / "prompt_template.txt"
    prompt_template = prompt_path.read_text(encoding="utf-8")

    # 피드 데이터 포맷
    feed_text = ""
    for name, items in feed_data.items():
        if items:
            feed_text += f"\n### {name}\n"
            for item in items:
                feed_text += f"- [{item['published']}] {item['title']}\n"

    prompt = prompt_template.replace("{feed_data}", feed_text)

    logger.info("Claude API 호출 중...")
    message = client.messages.create(
        model="claude-3-haiku-20240307",
        max_tokens=2000,
        messages=[{"role": "user", "content": prompt}],
    )

    response_text = message.content[0].text
    # JSON 추출
    json_match = re.search(r"\{[\s\S]*\}", response_text)
    if json_match:
        return json.loads(json_match.group())
    else:
        logger.error("Claude 응답에서 JSON을 파싱할 수 없습니다")
        return {
            "executive_summary": response_text,
            "top_signals": [],
            "theme_analysis": [],
            "risk_alerts": [],
        }


def generate_html(analysis: dict, feed_data: dict) -> str:
    """분석 결과를 HTML로 변환"""
    now = datetime.now()
    week_num = now.isocalendar()[1]
    year = now.year

    signals_html = ""
    for s in analysis.get("top_signals", []):
        rel_color = {"high": "#ef4444", "medium": "#f59e0b", "low": "#22c55e"}.get(
            s.get("relevance", "low"), "#22c55e"
        )
        rel_emoji = {"high": "🔴", "medium": "🟡", "low": "🟢"}.get(
            s.get("relevance", "low"), "🟢"
        )
        titans_str = ", ".join(s.get("titans", []))
        signals_html += f"""<div class="signal-card">
      <div class="signal-head">
        <span class="signal-rel" style="background:{rel_color}22;color:{rel_color}">{rel_emoji} {s.get("relevance", "").upper()}</span>
        <span class="signal-theme">{s.get("theme", "")}</span>
      </div>
      <div class="signal-title">{s.get("title", "")}</div>
      <div class="signal-desc">{s.get("description", "")}</div>
      <div class="signal-meta">👤 {titans_str} · 📈 {s.get("action", "")}</div>
    </div>"""

    themes_html = ""
    for t in analysis.get("theme_analysis", []):
        temp_color = {"hot": "#ef4444", "warm": "#f59e0b", "cool": "#22c55e"}.get(
            t.get("temperature", "cool"), "#22c55e"
        )
        watchlist = ", ".join(t.get("watchlist", []))
        themes_html += f"""<div class="theme-card">
      <div class="theme-head"><span class="theme-name">{t.get("theme", "")}</span>
        <span class="theme-temp" style="background:{temp_color}22;color:{temp_color}">{t.get("temperature", "").upper()}</span></div>
      <div class="theme-summary">{t.get("summary", "")}</div>
      <div class="theme-watchlist">📊 Watchlist: {watchlist}</div>
    </div>"""

    risks_html = "".join(f"<li>{r}</li>" for r in analysis.get("risk_alerts", []))
    summary = (analysis.get("executive_summary", "") or "").replace("\n", "<br>")

    return f"""<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Titan Digest — {year} W{week_num}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*{{box-sizing:border-box;margin:0;padding:0}}
:root{{--bg:#0a0b10;--surface:#12141d;--surface2:#1a1d2a;--border:rgba(255,255,255,0.06);--text:#e8e8ed;--text-sub:#8b8fa3;--text-muted:#4a4e62;--accent:#6366f1;--gold:#f59e0b;--red:#ef4444;--green:#22c55e;--radius:16px;--radius-sm:12px}}
body{{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);padding:2rem 1rem;max-width:800px;margin:0 auto;line-height:1.7}}
h1{{font-size:28px;font-weight:900;text-align:center;margin-bottom:8px;background:linear-gradient(135deg,#e8e8ed,var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent}}
.subtitle{{text-align:center;font-size:12px;color:var(--text-muted);margin-bottom:2rem;font-family:'JetBrains Mono',monospace}}
.section-title{{font-size:18px;font-weight:800;margin:2rem 0 1rem;display:flex;align-items:center;gap:8px}}
.summary{{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:1.5rem;margin-bottom:2rem;font-size:13px;color:var(--text-sub);line-height:1.8}}
.signal-card{{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-sm);padding:1rem;margin-bottom:10px}}
.signal-head{{display:flex;gap:8px;margin-bottom:6px}}
.signal-rel{{font-size:10px;padding:2px 8px;border-radius:8px;font-weight:700}}
.signal-theme{{font-size:10px;color:var(--text-muted);padding:2px 8px;background:var(--surface2);border-radius:8px}}
.signal-title{{font-size:14px;font-weight:700;margin-bottom:4px}}
.signal-desc{{font-size:12px;color:var(--text-sub);margin-bottom:6px}}
.signal-meta{{font-size:10px;color:var(--text-muted)}}
.theme-card{{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-sm);padding:1rem;margin-bottom:10px}}
.theme-head{{display:flex;align-items:center;gap:10px;margin-bottom:8px}}
.theme-name{{font-size:14px;font-weight:700}}
.theme-temp{{font-size:10px;padding:2px 8px;border-radius:8px;font-weight:700}}
.theme-summary{{font-size:12px;color:var(--text-sub);line-height:1.6;margin-bottom:6px}}
.theme-watchlist{{font-size:11px;color:var(--gold);font-family:'JetBrains Mono',monospace}}
.risks{{background:rgba(239,68,68,0.05);border:1px solid rgba(239,68,68,0.15);border-radius:var(--radius-sm);padding:1rem;margin-bottom:2rem}}
.risks ul{{padding-left:1.5rem;font-size:12px;color:var(--text-sub)}}
.risks li{{margin-bottom:6px}}
.footer{{text-align:center;font-size:11px;color:var(--text-muted);padding-top:2rem;border-top:1px solid var(--border)}}
</style>
</head>
<body>
<h1>📊 Titan Weekly Digest</h1>
<div class="subtitle">{year} W{week_num} · {now.strftime("%Y.%m.%d")} · 자동 생성</div>

<div class="section-title">📝 Executive Summary</div>
<div class="summary">{summary}</div>

<div class="section-title">🎯 Top Investment Signals</div>
{signals_html}

<div class="section-title">💡 Theme Analysis</div>
{themes_html}

<div class="section-title">⚠️ Risk Alerts</div>
<div class="risks"><ul>{risks_html}</ul></div>

<div class="footer">
  Generated by Titan Tracker Automation · <a href="index.html" style="color:#818cf8">Titan Tracker</a> · Point & Line 🌈
</div>
</body>
</html>"""


def main():
    parser = argparse.ArgumentParser(description="Titan Tracker Weekly Digest")
    parser.add_argument(
        "--dry-run", action="store_true", help="API 호출 없이 샘플 데이터로 테스트"
    )
    parser.add_argument(
        "--category",
        type=str,
        default=None,
        help="카테고리 필터 (AI, Science, Tech, Business, Philosophy, Health, Finance)",
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=20,
        help="처리할 타이탄 수 제한 (기본: 20, 과부하 방지)",
    )
    args = parser.parse_args()

    logger.info("=== Titan Tracker Weekly Digest ===")
    if args.category:
        logger.info(f"  카테고리 필터: {args.category}")
    logger.info(f"  타이탄 제한: {args.limit}명")

    # Step 1: RSS 수집
    logger.info("Step 1: RSS 피드 수집")
    feed_data = fetch_feeds(category=args.category, limit=args.limit)
    total_items = sum(len(items) for items in feed_data.values())
    logger.info(f"  수집 완료: {total_items} items from {len(feed_data)} titans")

    # Step 2: Claude 분석
    logger.info("Step 2: Claude API 분석")
    if not args.dry_run and not ANTHROPIC_API_KEY:
        logger.error(
            "ANTHROPIC_API_KEY가 설정되지 않았습니다. --dry-run으로 실행하거나 .env 파일을 설정하세요."
        )
        return
    analysis = analyze_with_claude(feed_data, dry_run=args.dry_run)

    # Step 3: HTML 생성
    logger.info("Step 3: HTML 생성")
    html = generate_html(analysis, feed_data)
    now = datetime.now()
    week_num = now.isocalendar()[1]
    filename = f"digest-{now.year}-W{week_num:02d}.html"
    output_path = OUTPUT_DIR / filename
    output_path.write_text(html, encoding="utf-8")
    logger.info(f"  저장: {output_path}")

    # Windows Task Scheduler 명령
    script_path = Path(__file__).resolve()
    logger.info("\n=== Windows Task Scheduler 설정 ===")
    logger.info(
        f'schtasks /create /tn "TitanDigest" /tr "python \\"{script_path}\\"" /sc weekly /d SAT /st 08:00'
    )

    logger.info(f"\n✅ 완료! {filename} 생성됨")


if __name__ == "__main__":
    main()
