# Cloudflare Worker 배포 가이드

## 1. Cloudflare 대시보드 접속
https://dash.cloudflare.com → Workers & Pages

## 2. Worker 생성
- "Create" 클릭
- 이름: `titan-api`
- `worker/index.js` 코드 붙여넣기
- "Deploy" 클릭

## 3. 환경변수 설정
- Settings → Variables and Secrets
- `GEMINI_API_KEY` 추가 (config.js에 있는 키 값)

## 4. config.js 업데이트
```js
const TITAN_CONFIG = {
  GEMINI_API_KEY: '',  // 비워두기!
  WORKER_URL: 'https://titan-api.xxx.workers.dev',  // Worker URL
  GA4_ID: 'G-XXXXXXXXXX',
};
```

## 5. 테스트
```bash
curl -X POST https://titan-api.xxx.workers.dev \
  -H "Content-Type: application/json" \
  -d '{"contents":[{"role":"user","parts":[{"text":"hello"}]}]}'
```

## 완료
이제 API 키가 서버에만 존재하고 클라이언트에 노출되지 않습니다.
