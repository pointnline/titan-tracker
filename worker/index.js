/**
 * Titan Tracker — Gemini API Proxy (Cloudflare Worker)
 * 
 * 배포 방법:
 * 1. https://dash.cloudflare.com → Workers & Pages → Create
 * 2. 이 코드를 붙여넣기
 * 3. Settings → Variables → GEMINI_API_KEY 추가 (환경변수)
 * 4. 도메인: titan-api.{your-subdomain}.workers.dev
 * 5. config.js에서 WORKER_URL을 이 도메인으로 설정
 */

const ALLOWED_ORIGINS = [
  'https://pointnline.github.io',
  'http://localhost:8765',
  'http://127.0.0.1:8765',
];

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const headers = corsHeaders(origin);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'POST only' }), {
        status: 405,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    // Rate limiting (간단한 IP 기반)
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    
    try {
      const body = await request.json();
      const apiKey = env.GEMINI_API_KEY;
      
      if (!apiKey) {
        return new Response(JSON.stringify({ error: 'API key not configured' }), {
          status: 500,
          headers: { ...headers, 'Content-Type': 'application/json' },
        });
      }

      // Gemini API 호출
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
      const geminiRes = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await geminiRes.json();
      
      return new Response(JSON.stringify(data), {
        status: geminiRes.status,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }
  },
};
