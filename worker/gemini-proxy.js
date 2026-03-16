// ============================================
// Titan Tracker — Gemini API Proxy (Cloudflare Worker)
// API 키를 서버에 숨기고 프론트엔드는 이 프록시를 호출
// ============================================

// 🔑 Cloudflare Dashboard > Workers > Settings > Variables에 등록
// 변수명: GEMINI_API_KEY

const ALLOWED_ORIGINS = [
  'https://pointnline.github.io',
  'http://localhost',
  'http://127.0.0.1',
  'null' // file:// 프로토콜 (로컬 테스트)
];

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export default {
  async fetch(request, env) {
    // CORS Preflight
    if (request.method === 'OPTIONS') {
      return handleCORS(request);
    }

    // Origin 체크
    const origin = request.headers.get('Origin') || '';
    const isAllowed = ALLOWED_ORIGINS.some(o => origin.startsWith(o));
    if (!isAllowed && origin !== '') {
      return new Response(JSON.stringify({ error: 'Forbidden origin' }), { 
        status: 403, 
        headers: { 'Content-Type': 'application/json' } 
      });
    }

    // POST만 허용
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { 
        status: 405,
        headers: corsHeaders(origin)
      });
    }

    // API 키 확인
    const apiKey = env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), { 
        status: 500,
        headers: corsHeaders(origin) 
      });
    }

    try {
      // 요청 바디 파싱
      const body = await request.json();

      // Gemini API 호출
      const geminiRes = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await geminiRes.json();

      return new Response(JSON.stringify(data), {
        status: geminiRes.status,
        headers: corsHeaders(origin)
      });

    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: corsHeaders(origin)
      });
    }
  }
};

function corsHeaders(origin) {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function handleCORS(request) {
  const origin = request.headers.get('Origin') || '*';
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}
