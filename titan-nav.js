// Titan Tracker — 공통 네비게이션 + 유틸리티 (v1.06)
// 모든 페이지에서 <script src="titan-nav.js"></script> 로 로드

(function() {
  'use strict';

  // === 네비게이션 바 ===
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  const navLinks = [
    { href: 'index.html', label: '🔭 Titan Tracker', isBrand: true },
    { href: 'insights.html', label: '📝 Insights' },
    { href: 'dashboard.html', label: '📊 Dashboard' },
    { href: 'digest.html', label: '📰 Digest' },
    { href: 'study.html', label: '🧠 Study' },
    { href: 'search.html', label: '🔍 Search' },
  ];

  const nav = document.createElement('nav');
  nav.className = 'titan-nav';
  nav.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;gap:0;padding:0 1rem;height:40px;background:rgba(10,11,16,0.85);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,0.06);font-size:11px';

  navLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.label;
    const isActive = currentPage === link.href;
    if (link.isBrand) {
      a.style.cssText = 'color:' + (isActive ? '#818cf8' : '#8b8fa3') + ';font-weight:600;margin-right:auto;text-decoration:none;display:flex;align-items:center;gap:5px';
    } else {
      a.style.cssText = 'color:' + (isActive ? '#818cf8' : '#5a5e72') + ';padding:4px 10px;text-decoration:none;border-radius:6px;transition:color .2s';
      if (!isActive) {
        a.onmouseover = function() { this.style.color = '#818cf8'; };
        a.onmouseout = function() { this.style.color = '#5a5e72'; };
      }
    }
    nav.appendChild(a);
  });

  // body 맨 앞에 삽입
  document.body.insertBefore(nav, document.body.firstChild);

  // body padding-top 보장
  const cs = getComputedStyle(document.body);
  const pt = parseInt(cs.paddingTop) || 0;
  if (pt < 40) document.body.style.paddingTop = '44px';

  // === 테마 토글 (모든 페이지 통일) ===
  if (!document.querySelector('.theme-toggle')) {
    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.title = '라이트/다크 모드 전환';
    btn.style.cssText = 'position:fixed;top:48px;right:1rem;z-index:50;width:32px;height:32px;border-radius:50%;border:1px solid rgba(255,255,255,0.06);background:rgba(26,29,39,0.8);color:#e8e8ed;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;transition:all .3s;box-shadow:0 2px 8px rgba(0,0,0,0.1);backdrop-filter:blur(8px)';
    btn.textContent = document.documentElement.getAttribute('data-theme') === 'light' ? '🌙' : '☀️';
    btn.onclick = function() {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('titan-theme', next);
      btn.textContent = next === 'light' ? '🌙' : '☀️';
    };
    document.body.appendChild(btn);
  }

  // 테마 초기 로드
  const savedTheme = localStorage.getItem('titan-theme');
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);

  // === 피드 자동 새로고침 (5분) ===
  if (typeof window.loadAllFeeds === 'function') {
    setInterval(() => {
      window.loadAllFeeds();
    }, 5 * 60 * 1000);
  } else {
    // loadAllFeeds가 나중에 정의될 수 있으므로 재시도
    setTimeout(() => {
      if (typeof window.loadAllFeeds === 'function') {
        setInterval(() => window.loadAllFeeds(), 5 * 60 * 1000);
      }
    }, 3000);
  }

  // === 공통 유틸리티 ===
  window.titanUtils = {
    escapeHtml: function(str) {
      if (!str) return '';
      const d = document.createElement('div');
      d.appendChild(document.createTextNode(str));
      return d.innerHTML;
    },
    sanitizeUrl: function(url) {
      try { const u = new URL(url); return ['http:', 'https:'].includes(u.protocol) ? url : '#'; }
      catch { return '#'; }
    },
    formatDate: function(dateStr) {
      const d = new Date(dateStr), now = new Date();
      const diff = Math.floor((now - d) / (1000 * 60 * 60 * 24));
      if (diff === 0) return '오늘';
      if (diff === 1) return '어제';
      if (diff < 7) return diff + '일 전';
      if (diff < 30) return Math.floor(diff / 7) + '주 전';
      return d.getFullYear() + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + String(d.getDate()).padStart(2, '0');
    },
    stripHtml: function(html) {
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || '';
    },
    translateText: async function(text) {
      if (!text) return '';
      try {
        const res = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ko&dt=t&q=' + encodeURIComponent(text.substring(0, 500)));
        const data = await res.json();
        return data[0].map(s => s[0]).join('');
      } catch (e) { return text; }
    },
    RSS_PROXY: 'https://api.rss2json.com/v1/api.json?rss_url=',

    // 키워드 하이라이트
    highlightKeywords: function(text, keywords) {
      if (!text || !keywords || keywords.length === 0) return text;
      const escaped = keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      const regex = new RegExp('(' + escaped.join('|') + ')', 'gi');
      return text.replace(regex, '<mark style="background:rgba(99,102,241,0.25);color:#c7d2fe;padding:1px 3px;border-radius:3px">$1</mark>');
    },

    // 전체 타이탄 목록
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
})();
