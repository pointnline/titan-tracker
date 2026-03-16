// Titan Tracker — 공통 네비 + Hermes 챗봇 + AI 유틸 (v1.07)
// 모든 페이지에서 <script src="titan-nav.js"></script> 하나로 전부 로드

(function() {
  'use strict';

  // === config.js 자동 로드 (동기) ===
  // config.js가 없으면 (배포 환경) localStorage fallback
  try {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'config.js', false); // 동기 로드
    xhr.send();
    if (xhr.status === 200) { eval(xhr.responseText); }
  } catch(e) { /* config.js 없음 — fallback */ }

  // === 네비게이션 바 ===
  // 기존 인라인 nav 제거 (중복 방지)
  document.querySelectorAll('.titan-nav').forEach(el => el.remove());
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  const navLinks = [
    { href: 'index.html', label: '🔭 Titan Tracker', isBrand: true },
    { href: 'insights.html', label: '📝 Insights' },
    { href: 'dashboard.html', label: '📊 Dashboard' },
    { href: 'signals.html', label: '🎯 Signals' },
    { href: 'digest.html', label: '📰 Digest' },
    { href: 'study.html', label: '🧠 Study' },
    { href: 'search.html', label: '🔍 Search' },
  ];

  const nav = document.createElement('nav');
  nav.className = 'titan-nav';
  nav.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;gap:0;padding:0 1rem;height:40px;background:rgba(10,11,16,0.85);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,0.06);font-size:11px';

  // 브랜드 링크 (항상 표시)
  const brandLink = navLinks.find(l => l.isBrand);
  const brandA = document.createElement('a');
  brandA.href = brandLink.href;
  brandA.textContent = brandLink.label;
  const isBrandActive = currentPage === brandLink.href;
  brandA.style.cssText = 'color:' + (isBrandActive ? '#818cf8' : '#8b8fa3') + ';font-weight:600;margin-right:auto;text-decoration:none;display:flex;align-items:center;gap:5px;flex-shrink:0';
  nav.appendChild(brandA);

  // 데스크탑 링크 컨테이너 (모바일에서 숨김)
  const linksWrap = document.createElement('div');
  linksWrap.className = 'nav-links-desktop';
  linksWrap.style.cssText = 'display:flex;align-items:center;gap:0';

  navLinks.filter(l => !l.isBrand).forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.label;
    const isActive = currentPage === link.href;
    a.style.cssText = 'color:' + (isActive ? '#818cf8' : '#5a5e72') + ';padding:4px 10px;text-decoration:none;border-radius:6px;transition:color .2s;white-space:nowrap;font-size:11px';
    if (!isActive) {
      a.onmouseover = function() { this.style.color = '#818cf8'; };
      a.onmouseout = function() { this.style.color = '#5a5e72'; };
    }
    linksWrap.appendChild(a);
  });
  nav.appendChild(linksWrap);

  // 모바일 햄버거 메뉴
  const burger = document.createElement('button');
  burger.className = 'nav-burger';
  burger.innerHTML = '☰';
  burger.style.cssText = 'display:none;background:none;border:1px solid rgba(255,255,255,0.1);color:#8b8fa3;font-size:16px;cursor:pointer;padding:4px 8px;border-radius:6px;line-height:1';
  nav.appendChild(burger);

  // 모바일 드롭다운 메뉴
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'nav-mobile-menu';
  mobileMenu.style.cssText = 'display:none;position:fixed;top:40px;left:0;right:0;background:rgba(10,11,16,0.95);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,0.08);padding:8px 0;z-index:99;flex-direction:column';
  navLinks.filter(l => !l.isBrand).forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.label;
    const isActive = currentPage === link.href;
    a.style.cssText = 'color:' + (isActive ? '#818cf8' : '#8b8fa3') + ';padding:10px 1.5rem;text-decoration:none;font-size:13px;border-left:3px solid ' + (isActive ? '#6366f1' : 'transparent') + ';transition:all .2s';
    a.onmouseover = function() { this.style.background = 'rgba(99,102,241,0.08)'; };
    a.onmouseout = function() { this.style.background = 'transparent'; };
    mobileMenu.appendChild(a);
  });
  document.body.insertBefore(mobileMenu, document.body.firstChild);

  let menuOpen = false;
  burger.onclick = function() {
    menuOpen = !menuOpen;
    mobileMenu.style.display = menuOpen ? 'flex' : 'none';
    burger.innerHTML = menuOpen ? '✕' : '☰';
  };

  // 반응형 CSS 주입
  if (!document.getElementById('titan-nav-responsive')) {
    const style = document.createElement('style');
    style.id = 'titan-nav-responsive';
    style.textContent = '@media(max-width:768px){.nav-links-desktop{display:none!important}.nav-burger{display:block!important}}@media(min-width:769px){.nav-mobile-menu{display:none!important}}';
    document.head.appendChild(style);
  }

  document.body.insertBefore(nav, document.body.firstChild);
  const cs = getComputedStyle(document.body);
  if ((parseInt(cs.paddingTop) || 0) < 40) document.body.style.paddingTop = '44px';

  // === 테마 토글 ===
  const savedTheme = localStorage.getItem('titan-theme');
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);

  if (!document.querySelector('.theme-toggle')) {
    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.title = '라이트/다크 모드 전환';
    btn.style.cssText = 'position:fixed;top:48px;right:1rem;z-index:50;width:32px;height:32px;border-radius:50%;border:1px solid rgba(255,255,255,0.06);background:rgba(26,29,39,0.8);color:#e8e8ed;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;transition:all .3s;box-shadow:0 2px 8px rgba(0,0,0,0.1);backdrop-filter:blur(8px)';
    btn.textContent = document.documentElement.getAttribute('data-theme') === 'light' ? '🌙' : '☀️';
    btn.onclick = function() {
      const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('titan-theme', next);
      btn.textContent = next === 'light' ? '🌙' : '☀️';
    };
    document.body.appendChild(btn);
  }

  // === 피드 자동 새로고침 (5분) ===
  setTimeout(() => {
    if (typeof window.loadAllFeeds === 'function') {
      setInterval(() => window.loadAllFeeds(), 5 * 60 * 1000);
    }
  }, 3000);

  // === API Key ===
  const _GEMINI_KEY = 'AIzaSyCBMfHMEinauf_LuL9Q-O_HB8FelLCc4kY';
  window.getGeminiKey = function() {
    return _GEMINI_KEY;
  };

  // === Gemini API 호출 ===
  window.callGemini = async function(systemPrompt, userMessage, opts) {
    const key = window.getGeminiKey();
    if (!key) throw new Error('API 키 없음');
    const o = opts || {};
    const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + key, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: [{ role: 'user', parts: [{ text: userMessage }] }],
        generationConfig: { temperature: o.temperature || 0.7, maxOutputTokens: o.maxTokens || 1024, topP: 0.9 }
      })
    });
    if (!res.ok) { const e = await res.json().catch(() => ({})); throw new Error(e.error?.message || 'API 오류 ' + res.status); }
    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  };

  // === 페이지 조회수 추적 ===
  (function trackViews() {
    const page = currentPage;
    const titanPages = {
      'wolfram.html':'Stephen Wolfram','gates.html':'Bill Gates','musk.html':'Elon Musk',
      'bezos.html':'Jeff Bezos','amodei.html':'Dario Amodei','dalio.html':'Ray Dalio',
      'altman.html':'Sam Altman','huang.html':'Jensen Huang','nadella.html':'Satya Nadella',
      'karpathy.html':'Andrej Karpathy','lecun.html':'Yann LeCun','huberman.html':'Andrew Huberman',
      'pichai.html':'Sundar Pichai'
    };
    if (titanPages[page]) {
      const key = 'tv_' + page.replace('.html','');
      const data = JSON.parse(localStorage.getItem(key) || '{"count":0,"last":0}');
      data.count++;
      data.last = Date.now();
      localStorage.setItem(key, JSON.stringify(data));
    }
    // 조회수 읽기 함수
    window.getTitanViews = function() {
      const views = [];
      Object.entries(titanPages).forEach(([page, name]) => {
        const key = 'tv_' + page.replace('.html','');
        const data = JSON.parse(localStorage.getItem(key) || '{"count":0,"last":0}');
        views.push({ page, name, count: data.count, last: data.last,
          color: window.titanUtils?.ACTIVE_TITANS?.[page.replace('.html','')]?.color || '#6366f1' });
      });
      views.sort((a, b) => b.count - a.count || b.last - a.last);
      return views;
    };
  })();

  // === 피드 아코디언 시스템 ===
  const feedStyle = document.createElement('style');
  feedStyle.textContent = `
.feed-section .feed-title{cursor:pointer;user-select:none;padding:12px 0;border-radius:8px;transition:background .15s}
.feed-section .feed-title:hover{background:rgba(255,255,255,0.03)}
.feed-section .feed-title::after{content:'\u25B8';float:right;font-size:10px;color:var(--text-muted,#5a5e72);transition:transform .25s;margin-top:3px}
.feed-section.expanded .feed-title::after{transform:rotate(90deg)}
.feed-section .feed-list{display:none;animation:feedSlide .3s ease}
.feed-section.expanded .feed-list{display:flex}
@keyframes feedSlide{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
.feed-section .feed-title .feed-count{font-size:10px;color:var(--text-muted,#5a5e72);font-family:'JetBrains Mono',monospace;margin-left:8px;opacity:0;transition:opacity .3s}
.feed-section.loaded .feed-title .feed-count{opacity:1}
`;
  document.head.appendChild(feedStyle);

  // 피드 아코디언 초기화 (페이지 로드 후 실행)
  window.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.feed-section');
    if (!sections.length) return;

    sections.forEach(function(section) {
      const feedList = section.querySelector('.feed-list');
      const title = section.querySelector('.feed-title');
      if (!feedList || !title) return;

      // 초기 상태: 접음 (loading 문구 제거)
      feedList.innerHTML = '';
      section.classList.remove('expanded');
      section._loaded = false;

      // feed key 추출: id가 'xxx-feed' 형식
      const feedId = feedList.id || '';
      const feedKey = feedId.replace('-feed', '');

      // 클릭 핸들러
      title.addEventListener('click', function() {
        const isExpanded = section.classList.contains('expanded');
        if (isExpanded) {
          section.classList.remove('expanded');
          return;
        }
        section.classList.add('expanded');
        // 처음 열 때만 로드
        if (!section._loaded && typeof window.loadFeed === 'function' && feedKey) {
          section._loaded = true;
          window.loadFeed(feedKey).then(function() {
            var count = feedList.querySelectorAll('.feed-item').length;
            var countEl = title.querySelector('.feed-count');
            if (!countEl) {
              countEl = document.createElement('span');
              countEl.className = 'feed-count';
              title.appendChild(countEl);
            }
            countEl.textContent = count + '개';
            section.classList.add('loaded');
          });
        }
      });
    });

    // 새로고침 버튼이 있으면 풀 리로드
    var refreshBtn = document.querySelector('.refresh-btn');
    if (refreshBtn) {
      var origOnclick = refreshBtn.onclick;
      refreshBtn.onclick = function() {
        document.querySelectorAll('.feed-section').forEach(function(s) {
          s._loaded = false;
          s.classList.add('expanded');
          var fl = s.querySelector('.feed-list');
          if (fl) fl.innerHTML = '<div class="loading"><div class="spinner"></div>로딩 중...</div>';
        });
        if (typeof window.loadAllFeeds === 'function') window.loadAllFeeds();
      };
    }
  });

  // === 공통 유틸리티 ===
  window.titanUtils = {
    escapeHtml: function(str) { if (!str) return ''; const d = document.createElement('div'); d.appendChild(document.createTextNode(str)); return d.innerHTML; },
    sanitizeUrl: function(url) { try { const u = new URL(url); return ['http:', 'https:'].includes(u.protocol) ? url : '#'; } catch { return '#'; } },
    formatDate: function(dateStr) { const d = new Date(dateStr), now = new Date(), diff = Math.floor((now - d) / 864e5); if (!diff) return '오늘'; if (diff === 1) return '어제'; if (diff < 7) return diff + '일 전'; if (diff < 30) return Math.floor(diff / 7) + '주 전'; return d.getFullYear() + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + String(d.getDate()).padStart(2, '0'); },
    stripHtml: function(html) { const t = document.createElement('div'); t.innerHTML = html; return t.textContent || ''; },
    translateText: async function(text) { if (!text) return ''; try { const r = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ko&dt=t&q=' + encodeURIComponent(text.substring(0, 500))); const d = await r.json(); return d[0].map(s => s[0]).join(''); } catch { return text; } },
    RSS_PROXY: 'https://api.rss2json.com/v1/api.json?rss_url=',

    // 캐시 우선 피드 로드 (stale-while-revalidate)
    cachedFetch: async function(cacheKey, url, ttlMs) {
      const ttl = ttlMs || 10 * 60 * 1000; // 기본 10분
      try {
        const cached = localStorage.getItem('tf_' + cacheKey);
        if (cached) {
          const { items, ts } = JSON.parse(cached);
          if (items && items.length) {
            // 캐시 유효 → 바로 반환
            if (Date.now() - ts < ttl) return { items, fromCache: true };
            // 캐시 만료 → 캐시 반환 + 백그라운드 갱신
            setTimeout(() => {
              fetch('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url))
                .then(r => r.json()).then(d => {
                  if (d.status === 'ok' && d.items?.length) localStorage.setItem('tf_' + cacheKey, JSON.stringify({ items: d.items, ts: Date.now() }));
                }).catch(() => {});
            }, 100);
            return { items, fromCache: true };
          }
        }
      } catch(e) {}
      // 캐시 없음 → 네트워크
      const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url));
      const data = await res.json();
      if (data.status === 'ok' && data.items?.length) {
        localStorage.setItem('tf_' + cacheKey, JSON.stringify({ items: data.items, ts: Date.now() }));
        return { items: data.items, fromCache: false };
      }
      throw new Error('Feed empty');
    },

    // 간단 피드 가져오기 (이름으로 Google News)
    fetchTitanFeed: async function(name, maxItems) {
      const q = encodeURIComponent(name);
      const url = 'https://news.google.com/rss/search?q=' + q + '&hl=en&gl=US';
      const key = name.replace(/\s+/g, '_').toLowerCase();
      const result = await this.cachedFetch(key, url, 15 * 60 * 1000);
      let items = result.items || [];
      items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
      return items.slice(0, maxItems || 5);
    },
    highlightKeywords: function(text, keywords) { if (!text || !keywords?.length) return text; const e = keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); return text.replace(new RegExp('(' + e.join('|') + ')', 'gi'), '<mark style="background:rgba(99,102,241,0.25);color:#c7d2fe;padding:1px 3px;border-radius:3px">$1</mark>'); },
    formatAiText: function(text) { return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>').replace(/^- /gm, '• '); },
    ACTIVE_TITANS: {
      wolfram: { name: 'Stephen Wolfram', color: '#6366f1', page: 'wolfram.html' },
      gates: { name: 'Bill Gates', color: '#0ea5e9', page: 'gates.html' },
      musk: { name: 'Elon Musk', color: '#a855f7', page: 'musk.html' },
      bezos: { name: 'Jeff Bezos', color: '#f59e0b', page: 'bezos.html' },
      amodei: { name: 'Dario Amodei', color: '#ef4444', page: 'amodei.html' },
      dalio: { name: 'Ray Dalio', color: '#eab308', page: 'dalio.html' },
      altman: { name: 'Sam Altman', color: '#10b981', page: 'altman.html' },
      huang: { name: 'Jensen Huang', color: '#84cc16', page: 'huang.html' },
      nadella: { name: 'Satya Nadella', color: '#0078d4', page: 'nadella.html' },
      karpathy: { name: 'Andrej Karpathy', color: '#22c55e', page: 'karpathy.html' },
      lecun: { name: 'Yann LeCun', color: '#3b82f6', page: 'lecun.html' },
      huberman: { name: 'Andrew Huberman', color: '#ec4899', page: 'huberman.html' },
      pichai: { name: 'Sundar Pichai', color: '#4285f4', page: 'pichai.html' },
    }
  };

  // ==========================================================
  // ✨ Hermes 플로팅 챗봇 (모든 페이지에 자동 삽입)
  // ==========================================================

  // CSS 삽입
  const style = document.createElement('style');
  style.textContent = `
.hermes-btn{position:fixed;bottom:1.5rem;right:1.5rem;z-index:200;width:56px;height:56px;border-radius:50%;border:none;
  background:linear-gradient(135deg,#6366f1,#a855f7);color:white;cursor:pointer;font-size:24px;
  box-shadow:0 4px 24px rgba(99,102,241,0.4),0 0 40px rgba(168,85,247,0.15);
  transition:all .35s cubic-bezier(0.4,0,0.2,1);display:flex;align-items:center;justify-content:center;overflow:visible}
.hermes-btn:hover{transform:scale(1.1) translateY(-2px);box-shadow:0 8px 32px rgba(99,102,241,0.5),0 0 60px rgba(168,85,247,0.25)}
.hermes-btn.open{border-radius:14px;width:48px;height:48px;bottom:calc(480px + 1.5rem);font-size:18px}
.hermes-btn .wing-l,.hermes-btn .wing-r{position:absolute;font-size:16px;top:-4px;opacity:0.9}
.hermes-btn .wing-l{left:-10px;animation:wingFlapL 2s ease-in-out infinite}
.hermes-btn .wing-r{right:-10px;animation:wingFlapR 2s ease-in-out infinite}
.hermes-btn.open .wing-l,.hermes-btn.open .wing-r{display:none}
@keyframes wingFlapR{0%,100%{transform:rotate(-8deg) translateY(0)}50%{transform:rotate(8deg) translateY(-3px)}}
@keyframes wingFlapL{0%,100%{transform:scaleX(-1) rotate(-8deg) translateY(0)}50%{transform:scaleX(-1) rotate(8deg) translateY(-3px)}}
.hermes-glow{position:absolute;inset:-6px;border-radius:50%;background:conic-gradient(from 0deg,#6366f1,#a855f7,#ec4899,#f59e0b,#22c55e,#6366f1);
  opacity:0;animation:hermesPulse 3s ease-in-out infinite;filter:blur(8px);z-index:-1}
.hermes-btn:hover .hermes-glow{opacity:0.5}
@keyframes hermesPulse{0%,100%{opacity:0;transform:scale(0.95)}50%{opacity:0.4;transform:scale(1.05)}}
.hermes-panel{position:fixed;bottom:1.5rem;right:1.5rem;z-index:190;width:380px;height:480px;
  background:#1a1d27;border:1px solid rgba(255,255,255,0.08);border-radius:20px;
  display:none;flex-direction:column;overflow:hidden;
  box-shadow:0 20px 60px rgba(0,0,0,0.5),0 0 40px rgba(99,102,241,0.1);animation:panelIn .3s ease both}
.hermes-panel.open{display:flex}
@keyframes panelIn{from{opacity:0;transform:translateY(20px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
.hp-header{padding:14px 18px;border-bottom:1px solid rgba(255,255,255,0.06);
  background:linear-gradient(135deg,rgba(99,102,241,0.08),rgba(168,85,247,0.04));display:flex;align-items:center;gap:10px}
.hp-avatar{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#a855f7);
  display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
.hp-info{flex:1}.hp-name{font-size:13px;font-weight:700;color:#e8e8ed}
.hp-status{font-size:10px;color:#5a5e72;display:flex;align-items:center;gap:4px}
.hp-status .dot{width:5px;height:5px;border-radius:50%;background:#22c55e;animation:statusPulse 2s ease infinite}
@keyframes statusPulse{0%,100%{opacity:1}50%{opacity:0.4}}
.hp-close{width:28px;height:28px;border-radius:50%;border:1px solid rgba(255,255,255,0.06);background:transparent;
  color:#5a5e72;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;transition:all .2s}
.hp-close:hover{border-color:rgba(255,255,255,0.12);color:#e8e8ed}
.hp-msgs{flex:1;overflow-y:auto;padding:14px 18px;display:flex;flex-direction:column;gap:10px;
  scrollbar-width:thin;scrollbar-color:rgba(255,255,255,0.06) transparent}
.hp-msgs::-webkit-scrollbar{width:4px}.hp-msgs::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.08);border-radius:4px}
.hp-msg{max-width:85%;padding:10px 14px;border-radius:14px;font-size:12px;line-height:1.7;word-break:break-word}
.hp-msg.user{align-self:flex-end;background:linear-gradient(135deg,#6366f1,#a855f7);color:white;border-bottom-right-radius:4px}
.hp-msg.ai{align-self:flex-start;background:rgba(255,255,255,0.04);color:#8b8fa3;border-bottom-left-radius:4px}
.hp-msg.ai strong{color:#e8e8ed}
.hp-msg.sys{align-self:center;font-size:10px;color:#5a5e72;background:transparent}
.hp-input{display:flex;gap:8px;padding:12px 18px;border-top:1px solid rgba(255,255,255,0.06);background:rgba(0,0,0,0.15)}
.hp-input input{flex:1;padding:10px 14px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.03);
  color:#e8e8ed;font-size:12px;font-family:'Inter',sans-serif;outline:none}
.hp-input input:focus{border-color:#6366f1}.hp-input input::placeholder{color:#5a5e72}
.hp-input button{width:40px;height:40px;border-radius:12px;border:none;background:linear-gradient(135deg,#6366f1,#a855f7);
  color:white;cursor:pointer;font-size:16px;transition:all .2s;display:flex;align-items:center;justify-content:center}
.hp-input button:hover{transform:scale(1.05)}.hp-input button:disabled{opacity:0.3;cursor:not-allowed;transform:none}
@media(max-width:480px){.hermes-panel{width:calc(100vw - 2rem);right:1rem;left:1rem;height:calc(100vh - 6rem);bottom:5rem}
  .hermes-btn.open{bottom:calc(100vh - 6rem + 1.5rem)}}
`;
  document.head.appendChild(style);

  // HTML 삽입
  const btnHtml = `<button class="hermes-btn" id="hermes-btn" onclick="window._hermesToggle()">
    <span class="wing-l">🪽</span><span class="hermes-glow"></span>⚡<span class="wing-r">🪽</span>
  </button>`;
  const panelHtml = `<div class="hermes-panel" id="hermes-panel">
    <div class="hp-header">
      <div class="hp-avatar">🪽</div>
      <div class="hp-info"><div class="hp-name">Hermes · Titan AI</div><div class="hp-status"><span class="dot"></span>거인들의 세계를 안내합니다</div></div>
      <button class="hp-close" onclick="window._hermesToggle()">✕</button>
    </div>
    <div class="hp-msgs" id="hm-msgs">
      <div class="hp-msg ai">안녕하세요! <strong>Hermes</strong> ⚡입니다.<br><br>13명 타이탄의 <strong>철학, 전략, 기술</strong>에 대해 무엇이든 물어보세요!</div>
    </div>
    <div id="hm-key-area" style="display:none;padding:8px 18px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;gap:6px;align-items:center">
      <span id="hm-key-dot" style="width:6px;height:6px;border-radius:50%;background:#ef4444;flex-shrink:0"></span>
      <input type="password" id="hm-api-key" placeholder="Gemini API Key" oninput="window._hermesSaveKey(this.value)"
        style="flex:1;padding:6px 10px;border-radius:8px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.03);color:#e8e8ed;font-size:10px;font-family:'JetBrains Mono',monospace;outline:none">
    </div>
    <div class="hp-input">
      <input type="text" id="hm-input" placeholder="거인에게 질문하세요..." onkeydown="if(event.key==='Enter')window._hermesSend()">
      <button id="hm-send" onclick="window._hermesSend()">➤</button>
    </div>
  </div>`;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = btnHtml + panelHtml;
  while (wrapper.firstChild) document.body.appendChild(wrapper.firstChild);

  // Hermes 로직
  let hermesOpen = false;
  let hmHistory = [];

  const HERMES_SYSTEM = `당신은 "Hermes"(에르메스) — Titan Tracker의 AI 어시스턴트입니다. 한국어로 답변하세요.
거인들(Titans)의 세계를 안내하는 메신저. 그리스 신화의 헤르메스처럼 지식을 전달합니다.

알고 있는 13명: Stephen Wolfram(계산과학), Bill Gates(Microsoft/보건), Elon Musk(Tesla/SpaceX/xAI), Jeff Bezos(Amazon/Blue Origin), Dario Amodei(Anthropic/AI Safety), Ray Dalio(Bridgewater/투자원칙), Sam Altman(OpenAI/AGI), Jensen Huang(NVIDIA/GPU), Satya Nadella(Microsoft/Azure), Andrej Karpathy(AI교육/Tesla AI), Yann LeCun(Meta AI/CNN), Andrew Huberman(신경과학/건강), Sundar Pichai(Google/Gemini)

답변 원칙: 1)타이탄들의 실제 철학/발언/전략 기반 2)비교분석, 투자인사이트, 기술트렌드에 강함 3)간결하되 통찰력 있게(3-4문단) 4)이모지 적절 사용 5)MBA/비즈니스 관점 포함 6)불확실한 정보는 솔직히 밝힘`;

  function escapeHm(s) { if (!s) return ''; const d = document.createElement('div'); d.appendChild(document.createTextNode(s)); return d.innerHTML; }

  function addHmMsg(role, text) {
    const c = document.getElementById('hm-msgs');
    const d = document.createElement('div');
    d.className = 'hp-msg ' + role;
    d.innerHTML = role === 'ai' ? text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>').replace(/^- /gm, '• ') : escapeHm(text);
    c.appendChild(d); c.scrollTop = c.scrollHeight; return d;
  }

  // API 키 UI 표시 여부
  setTimeout(function() {
    const key = window.getGeminiKey();
    const area = document.getElementById('hm-key-area');
    if (!key && area) { area.style.display = 'flex'; }
    else if (area) { area.style.display = 'none'; }
    const dot = document.getElementById('hm-key-dot');
    if (dot) dot.style.background = key ? '#22c55e' : '#ef4444';
    const saved = localStorage.getItem('titan-gemini-key');
    const inp = document.getElementById('hm-api-key');
    if (saved && inp) inp.value = saved;
  }, 500);

  window._hermesSaveKey = function(v) {
    localStorage.setItem('titan-gemini-key', v.trim());
    const dot = document.getElementById('hm-key-dot');
    if (dot) dot.style.background = v.trim().length > 10 ? '#22c55e' : '#ef4444';
  };

  window._hermesToggle = function() {
    hermesOpen = !hermesOpen;
    document.getElementById('hermes-panel').classList.toggle('open', hermesOpen);
    document.getElementById('hermes-btn').classList.toggle('open', hermesOpen);
    if (hermesOpen) document.getElementById('hm-input').focus();
  };

  window._hermesSend = async function() {
    const input = document.getElementById('hm-input');
    const text = input.value.trim();
    if (!text) return;
    const key = window.getGeminiKey();
    if (!key) {
      addHmMsg('sys', '⚠️ API 키를 입력해주세요 — <a href="https://aistudio.google.com/apikey" target="_blank" style="color:#818cf8">Google AI Studio</a>에서 무료 발급');
      document.getElementById('hm-key-area').style.display = 'flex';
      return;
    }
    addHmMsg('user', text); input.value = '';
    hmHistory.push({ role: 'user', parts: [{ text }] });
    const loading = addHmMsg('ai', '<span style="animation:spin 1s linear infinite;display:inline-block">⏳</span> 생각 중...');
    document.getElementById('hm-send').disabled = true;
    try {
      const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + key, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: HERMES_SYSTEM }] },
          contents: hmHistory.slice(-10),
          generationConfig: { temperature: 0.7, maxOutputTokens: 1024, topP: 0.9 }
        })
      });
      if (!res.ok) { const e = await res.json().catch(() => ({})); throw new Error(e.error?.message || 'API 오류'); }
      const data = await res.json();
      const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || '응답 생성 불가';
      loading.innerHTML = aiText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>').replace(/^- /gm, '• ');
      hmHistory.push({ role: 'model', parts: [{ text: aiText }] });
    } catch (e) {
      loading.innerHTML = '❌ ' + escapeHm(e.message);
    }
    document.getElementById('hm-send').disabled = false;
    document.getElementById('hm-input').focus();
  };

})();
