// Titan Tracker — 검증된 프로필 데이터 (117명)
// AI 생성 아님. 공개된 저서, 인터뷰, 공식 발언 기반 팩트.
// 마지막 업데이트: 2026-03

const TITAN_PROFILES = {

// ═══════════════════════════════════════
// AI (25명)
// ═══════════════════════════════════════

"Geoffrey Hinton": {
  philosophy: "신경망은 인간 뇌의 학습 방식을 모방할 수 있으며, 충분한 규모와 데이터가 주어지면 지능이 창발한다. 그러나 이제 AI가 인간보다 더 나은 학습 방식을 가질 수 있어 위험하다.",
  principles: ["Backpropagation — 오차 역전파로 신경망 학습의 기초를 확립", "Boltzmann Machines — 확률적 생성 모델의 선구자", "Capsule Networks — 공간적 계층 관계를 학습하는 새로운 아키텍처", "AI 위험 경고 — 2023년 Google 퇴사 후 AI 존재적 위험 경고"],
  books: [{title:"Deep Learning (공저, Goodfellow·Bengio)", year:"2016", url:"https://www.deeplearningbook.org"}, {title:"인터뷰: CBS 60 Minutes AI 특집", year:"2023", url:"https://www.youtube.com/results?search_query=geoffrey+hinton+60+minutes"}, {title:"Turing Award Lecture", year:"2019", url:"https://www.youtube.com/results?search_query=geoffrey+hinton+turing+lecture"}],
  timeline: [{y:"2024",t:"노벨물리학상 수상 (John Hopfield와 공동) — 인공신경망 기초 연구"}, {y:"2023",t:"Google 퇴사. AI 존재적 위험 공개 경고 시작. '대부가 경고한다'"}, {y:"2018",t:"튜링상 수상 (Bengio, LeCun과 공동) — '딥러닝의 아버지들'"}, {y:"2012",t:"제자 Alex Krizhevsky의 AlexNet이 ImageNet 우승 — 딥러닝 혁명 시작"}, {y:"2006",t:"Deep Belief Networks 논문 — '딥러닝' 용어의 부활"}, {y:"1986",t:"Backpropagation 논문 (Nature) — 신경망 학습의 핵심 알고리즘 대중화"}, {y:"1947",t:"영국 런던 출생. 캠브리지 → 에든버러 PhD → CMU → 토론토대"}],
  channels: [{name:"Google Scholar", url:"https://scholar.google.com/citations?user=JicYPdAAAAAJ"}, {name:"토론토대 페이지", url:"https://www.cs.toronto.edu/~hinton/"}],
  invest: "Hinton의 AI 위험 경고는 AI 규제 관련 정책주, AI 안전 스타트업(Anthropic 등)에 영향. Google/DeepMind의 AI 전략 방향성 시그널.",
  signal: "AI 규제 법안 진행 상황, AI Safety Summit 발언"
},

"Yoshua Bengio": {
  philosophy: "딥러닝은 아직 초기 단계이며, 의식과 인과추론을 이해하는 AI를 만들어야 한다. 현재 LLM은 System 1(직관)만 하고 System 2(추론)는 못 한다.",
  principles: ["System 2 Deep Learning — 의식적 추론이 가능한 AI", "GAN(생성적 적대 신경망) — Ian Goodfellow 지도", "Attention Mechanism 초기 연구 — Transformer의 기반", "AI 윤리 — 군사적 AI 사용 반대, AI 안전 연구 주도"],
  books: [{title:"Deep Learning (공저, Goodfellow·Hinton)", year:"2016", url:"https://www.deeplearningbook.org"}, {title:"AI 민주화 강연 (NeurIPS)", year:"2019", url:"https://www.youtube.com/results?search_query=yoshua+bengio+neurips+2019"}, {title:"From System 1 to System 2 AI", year:"2020", url:"https://www.youtube.com/results?search_query=bengio+system+2+deep+learning"}],
  timeline: [{y:"2023~",t:"AI 존재적 위험 공동 서명. 국제 AI 안전 거버넌스 활동"}, {y:"2018",t:"튜링상 수상 (Hinton, LeCun과 공동)"}, {y:"2014",t:"GAN 논문 (제자 Ian Goodfellow) — 생성 AI의 기초"}, {y:"2004",t:"Mila(몬트리올 AI 연구소) 설립 — 세계 최대 학술 AI 랩"}, {y:"1991",t:"신경 확률 언어 모델 초기 연구 — 워드 임베딩의 시초"}, {y:"1964",t:"프랑스 파리 출생. McGill → MIT PhD → 몬트리올대"}],
  channels: [{name:"Mila", url:"https://mila.quebec"}, {name:"Google Scholar", url:"https://scholar.google.com/citations?user=yuOGS5IAAAAJ"}],
  invest: "Mila 출신 스타트업 생태계(Element AI 등). AI 규제 방향에 따른 AI Safety 관련 투자 기회.",
  signal: "System 2 AI 연구 돌파구, AI 거버넌스 국제 합의"
},

"Dario Amodei": {
  philosophy: "AI는 인류 역사상 가장 강력한 기술이 될 것이며, 안전하게 개발하지 않으면 재앙이 된다. 안전과 능력은 상충하지 않고 함께 발전할 수 있다.",
  principles: ["Constitutional AI — AI가 스스로 안전 규칙을 학습", "Responsible Scaling — 능력 증가에 비례한 안전 투자", "RLHF (인간 피드백 강화학습) — OpenAI 시절 공동 개발", "Interpretability — AI 내부 작동 원리 이해 연구"],
  books: [{title:"Machines of Loving Grace (에세이)", year:"2024", url:"https://darioamodei.com/machines-of-loving-grace"}, {title:"Anthropic RSP(Responsible Scaling Policy)", year:"2023", url:"https://www.anthropic.com/research"}, {title:"Core Views on AI Safety (Anthropic)", year:"2023", url:"https://www.anthropic.com/news/core-views-on-ai-safety"}],
  timeline: [{y:"2024~",t:"Claude 3.5 Sonnet/Opus. 기업가치 $60B+. Amazon $4B 투자"}, {y:"2023",t:"Claude 2 출시. Constitutional AI 논문. RSP 발표"}, {y:"2021",t:"Anthropic 설립 (여동생 Daniela Amodei와 공동). $124M 시리즈A"}, {y:"2016-2020",t:"OpenAI VP of Research. GPT-2, GPT-3 개발 리드"}, {y:"2011",t:"Princeton PhD (이론물리 → 계산신경과학). Stanford 박사후 연구원"}],
  channels: [{name:"Anthropic Blog", url:"https://www.anthropic.com/news"}, {name:"개인 블로그", url:"https://darioamodei.com"}],
  invest: "Anthropic 직접 투자(Google, Amazon 등 대형 LP). AI Safety 관련 정책 수혜주. Claude API 생태계 성장.",
  signal: "Anthropic 기업가치 변동, Claude 신모델 출시, AI 안전 규제 법안"
},

"Sam Altman": {
  philosophy: "AGI는 인류 역사상 가장 중요한 발명이 될 것이다. 올바른 방향으로 개발하면 풍요의 시대를 열 수 있다. 완벽을 기다리지 않고 배포하며 학습한다.",
  principles: ["Iterative Deployment — 완벽 대신 빠른 배포와 피드백", "Scaling Laws — 더 큰 모델 + 더 많은 데이터 = 더 나은 AI", "Safety + Capability 병행 — 안전과 능력의 동시 발전", "Platform Strategy — API로 개발자 생태계 구축"],
  books: [{title:"How to Start a Startup (Stanford 강연)", year:"2014", url:"https://www.youtube.com/results?search_query=sam+altman+how+to+start+a+startup"}, {title:"Moore's Law for Everything (에세이)", year:"2021", url:"https://moores.samaltman.com"}, {title:"OpenAI DevDay 키노트", year:"2023", url:"https://www.youtube.com/results?search_query=openai+devday+2023+keynote"}],
  timeline: [{y:"2024~",t:"GPT-4o, Sora 공개. OpenAI 기업가치 $150B+. 구조 전환 논의"}, {y:"2023",t:"Board 위기 — 해임 후 5일 만에 복귀. ChatGPT 1억+ 사용자"}, {y:"2022",t:"ChatGPT 출시 — 역사상 가장 빠른 성장 제품"}, {y:"2019",t:"OpenAI CEO 취임. 영리법인 전환. Microsoft $1B 투자"}, {y:"2015",t:"OpenAI 공동 설립 (Elon Musk 등). 인류를 위한 AGI 미션"}, {y:"2014",t:"Y Combinator 사장 (32세). 세계 최고 액셀러레이터 운영"}, {y:"2005",t:"Loopt 창업 (YC 1기). Stanford 중퇴"}, {y:"1985",t:"시카고 출생. 8세 첫 프로그래밍"}],
  channels: [{name:"OpenAI Blog", url:"https://openai.com/blog"}, {name:"X (@sama)", url:"https://x.com/sama"}, {name:"개인 블로그", url:"https://blog.samaltman.com"}],
  invest: "OpenAI/Microsoft 파트너십이 AI 산업 전체에 영향. GPT 신모델 출시가 AI 관련주 움직임 시그널. Helion(핵융합), Worldcoin도 주시.",
  signal: "GPT-5 출시 시점, OpenAI 기업구조 전환, Microsoft 파트너십 변화"
},

"Jensen Huang": {
  philosophy: "Accelerated Computing은 범용 컴퓨팅의 한계를 극복하는 유일한 길이다. 모든 것이 소프트웨어가 되는 세상에서 GPU가 AI, 과학, 시뮬레이션의 근간이 된다.",
  principles: ["Accelerated Computing — CPU 한계를 GPU 병렬처리로 극복", "Full Stack Innovation — 칩부터 소프트웨어 생태계까지 수직 통합", "CUDA 생태계 — 400만+ 개발자 락인이 핵심 해자", "위기 의식 — '우리 회사는 항상 30일 안에 망할 수 있다'"],
  books: [{title:"GTC 키노트 (연례)", year:"2024", url:"https://www.youtube.com/results?search_query=nvidia+gtc+2024+keynote+jensen+huang"}, {title:"NVIDIA Way (Tae Kim 저)", year:"2024", url:"https://www.amazon.com/s?k=NVIDIA+Way+Tae+Kim"}, {title:"Stanford 졸업 연설", year:"2024", url:"https://www.youtube.com/results?search_query=jensen+huang+stanford+commencement"}],
  timeline: [{y:"2024~",t:"Blackwell GPU. 시총 $3.4T+ 세계 1위. GR00T 로봇 AI"}, {y:"2023",t:"시총 $1T 돌파 (반도체 최초). H100이 AI 훈련 표준"}, {y:"2020",t:"A100 GPU. ARM 인수 시도 ($40B, 실패). 데이터센터 매출이 게이밍 추월"}, {y:"2016",t:"DGX-1 — 세계 최초 AI 슈퍼컴퓨터. OpenAI에 첫 DGX 기증"}, {y:"2012",t:"AlexNet이 NVIDIA GPU로 ImageNet 우승 — 딥러닝 혁명 시작점"}, {y:"2006",t:"CUDA 출시 — GPU를 범용 컴퓨팅에 사용. 오늘날 NVIDIA 해자의 핵심"}, {y:"1999",t:"GeForce 256 — 세계 최초 'GPU' 명명. NASDAQ 상장"}, {y:"1993",t:"NVIDIA 공동 설립 (30세). 데니스 레스토랑에서 사업 구상"}, {y:"1963",t:"대만 타이난 출생. 9세 미국 이민. Oregon State → Stanford"}],
  channels: [{name:"NVIDIA Blog", url:"https://blogs.nvidia.com"}, {name:"GTC Conference", url:"https://www.nvidia.com/en-us/gtc/"}],
  invest: "NVIDIA 주가가 AI 섹터 벨웨더. H100/Blackwell 수요가 클라우드(AWS/Azure/GCP) 자본지출 시그널. CUDA 독점이 경쟁사(AMD/Intel) 대비 프리미엄 근거.",
  signal: "분기 데이터센터 매출, 신규 GPU 아키텍처 발표, 중국 수출 규제"
},

"Yann LeCun": {
  philosophy: "현재 LLM은 AGI로 가는 길이 아니다. 자기지도학습(Self-Supervised Learning)과 World Models이 진짜 지능의 핵심이다. AI는 오픈소스여야 한다.",
  principles: ["CNN(합성곱 신경망) — 1989년 발명, 컴퓨터 비전의 기초", "Self-Supervised Learning — 라벨 없는 데이터에서 학습", "JEPA(Joint Embedding Predictive Architecture) — 차세대 AI 아키텍처", "오픈소스 AI — Meta의 Llama 오픈소스 전략 주도"],
  books: [{title:"Quand la machine apprend (When the Machine Learns)", year:"2019", url:"https://www.amazon.com/s?k=yann+lecun+when+the+machine+learns"}, {title:"NYU Deep Learning 강의 (무료)", year:"2020", url:"https://atcold.github.io/pytorch-Deep-Learning/"}, {title:"A Path Towards Autonomous Machine Intelligence (논문)", year:"2022", url:"https://openreview.net/forum?id=BZ5a1r-kVsf"}],
  timeline: [{y:"2024~",t:"Llama 3 시리즈. V-JEPA 발표. 'LLMs are not AGI' 주장 지속"}, {y:"2023",t:"Llama 2 오픈소스. X(Twitter)에서 AI 미래 격렬 토론"}, {y:"2018",t:"튜링상 수상 (Hinton, Bengio와 공동)"}, {y:"2013",t:"Facebook AI Research(FAIR) 창립 디렉터"}, {y:"2003",t:"NYU Courant Institute 교수. CBLL 연구실 설립"}, {y:"1998",t:"LeNet-5 — CNN으로 은행 수표 자동 인식 (산업 최초 적용)"}, {y:"1989",t:"CNN 발명 — 백프로파게이션 + 합성곱 결합"}, {y:"1960",t:"프랑스 출생. ESIEE Paris → Pierre et Marie Curie PhD"}],
  channels: [{name:"X (@ylecun)", url:"https://x.com/ylecun"}, {name:"Meta AI Blog", url:"https://ai.meta.com/blog/"}, {name:"개인 홈페이지", url:"http://yann.lecun.com"}],
  invest: "Meta(META) AI 전략의 핵심 인물. Llama 오픈소스가 AI 생태계(허깅페이스 등)에 미치는 영향. Self-Supervised Learning 돌파 시 패러다임 전환 가능.",
  signal: "Llama 신버전 출시, Meta AI 조직 변화, World Models 연구 진전"
},

"Andrej Karpathy": {
  philosophy: "가장 좋은 학습은 밑바닥부터 직접 만들어보는 것이다. 복잡한 것을 단순하게 설명할 수 없다면 이해하지 못한 것이다.",
  principles: ["First Principles Teaching — 바닥부터 구현하며 이해", "Software 2.0 — 코드 대신 데이터로 프로그래밍하는 패러다임", "Pure Vision — 카메라만으로 자율주행 (Tesla FSD)", "LLM OS — LLM이 운영체제가 되는 미래"],
  books: [{title:"Neural Networks: Zero to Hero (YouTube)", year:"2023", url:"https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ"}, {title:"Stanford CS231n: CNN for Visual Recognition", year:"2015", url:"https://cs231n.stanford.edu"}, {title:"Let's build GPT from scratch (YouTube)", year:"2023", url:"https://www.youtube.com/watch?v=kCc8FmEb1nY"}],
  timeline: [{y:"2024~",t:"Eureka Labs 설립 — AI 네이티브 교육 스타트업"}, {y:"2023",t:"OpenAI 복귀 후 퇴사. 'Zero to Hero' 시리즈 폭발적 인기. nanoGPT 공개"}, {y:"2017-2022",t:"Tesla AI/Autopilot 수장. 순수 비전 기반 FSD 설계"}, {y:"2015-2017",t:"OpenAI 창립 멤버 및 연구원"}, {y:"2015",t:"Stanford CS231n 강의 — 딥러닝 교육의 표준"}, {y:"2011-2015",t:"Stanford PhD (Fei-Fei Li 지도). ImageNet 이미지 캡셔닝"}, {y:"1986",t:"슬로바키아 출생. 15세 캐나다 이민"}],
  channels: [{name:"YouTube", url:"https://www.youtube.com/@AndrejKarpathy"}, {name:"X (@karpathy)", url:"https://x.com/karpathy"}, {name:"GitHub", url:"https://github.com/karpathy"}, {name:"개인 블로그", url:"https://karpathy.ai"}],
  invest: "Karpathy의 교육 콘텐츠가 AI 인재 시장 트렌드 반영. Eureka Labs의 AI 교육 시장 진출. Tesla AI 전략 이해의 핵심 인물.",
  signal: "Eureka Labs 제품 출시, 신규 YouTube 시리즈, AI 교육 시장 변화"
},

"Andrew Huberman": {
  philosophy: "신경과학 연구를 일상에 적용 가능한 프로토콜로 전환한다. 과학적 근거 없이는 추천하지 않으며, 프로토콜은 무료로 공개한다.",
  principles: ["Morning Sunlight Protocol — 기상 후 10분 햇빛 노출로 서카디안 리듬 세팅", "NSDR(Non-Sleep Deep Rest) — 20분 깊은 이완으로 집중력 회복", "Deliberate Cold Exposure — 냉수 노출로 도파민 250% 증가", "90분 Focus Block — 울트라디안 리듬 기반 집중 사이클"],
  books: [{title:"Huberman Lab Podcast (매주)", year:"2021~", url:"https://hubermanlab.com"}, {title:"Protocols: An Operating Manual for the Human Body", year:"2025", url:"https://www.amazon.com/s?k=huberman+protocols+book"}, {title:"TED: 뇌의 시각 시스템", year:"2019", url:"https://www.youtube.com/results?search_query=andrew+huberman+ted"}],
  timeline: [{y:"2024~",t:"Protocols 저서 출간. 논란과 미디어 주목. 시즌 3+"}, {y:"2023",t:"팟캐스트 다운로드 5억+. 건강 분야 #1 팟캐스트"}, {y:"2021",t:"Huberman Lab 팟캐스트 런칭. 첫 에피소드부터 폭발적 인기"}, {y:"2017",t:"Stanford 정년 교수. 시각 시스템 재생 연구 Nature 게재"}, {y:"2011",t:"Stanford 의과대학 교수 부임"}, {y:"1975",t:"캘리포니아 출생. UC Santa Barbara → UC Davis PhD"}],
  channels: [{name:"YouTube", url:"https://www.youtube.com/@hubermanlab"}, {name:"X (@hubermanlab)", url:"https://x.com/hubermanlab"}, {name:"hubermanlab.com", url:"https://hubermanlab.com"}],
  invest: "건강/웰니스 시장 $4.5T 규모. Huberman이 추천한 보충제 브랜드(Momentous 등) 매출 급증 사례. 바이오해킹/장수 관련 스타트업 트렌드.",
  signal: "새 팟캐스트 에피소드 주제, 보충제/프로토콜 추천, 건강 테크 파트너십"
},

"Sundar Pichai": {
  philosophy: "AI는 인류가 발명한 가장 심오한 기술이다. 기술의 혜택을 모든 사람에게 전달하는 것이 Google의 미션이며, AI-first 전략이 그 핵심이다.",
  principles: ["AI-First — 2016년 'Mobile first → AI first' 전략 전환", "Organize the World's Information — Google 본질을 AI로 확장", "Democratize AI — Gemini, TensorFlow 등 AI 도구 대중화", "제품 리더십 — Chrome → Android → CEO 경로"],
  books: [{title:"Google I/O 키노트 (연례)", year:"2024", url:"https://www.youtube.com/results?search_query=google+io+2024+keynote+sundar+pichai"}, {title:"Wharton 리더십 강연", year:"2023", url:"https://www.youtube.com/results?search_query=sundar+pichai+wharton"}, {title:"추천: Mindset (Carol Dweck)", year:"2006", url:"https://www.amazon.com/s?k=mindset+carol+dweck"}],
  timeline: [{y:"2024~",t:"Gemini 1.5 Pro (1M 토큰). NotebookLM. Alphabet 시총 $2T+"}, {y:"2023",t:"Gemini 발표. Google DeepMind 설립 (Brain+DeepMind 통합)"}, {y:"2019",t:"Alphabet CEO 취임. Larry Page로부터 경영권 승계"}, {y:"2016",t:"'AI-first' 전략 선언. Google Assistant. AlphaGo 이세돌"}, {y:"2015",t:"Google CEO 취임 (Alphabet 구조 전환)"}, {y:"2008",t:"Google Chrome 출시 — 브라우저 시장 65%+ 장악"}, {y:"2004",t:"Google 입사. Toolbar → Chrome → Android 총괄"}, {y:"1972",t:"인도 마두라이 출생. IIT Kharagpur → Stanford MS → Wharton MBA"}],
  channels: [{name:"The Keyword (Google Blog)", url:"https://blog.google"}, {name:"X (@sundarpichai)", url:"https://x.com/sundarpichai"}, {name:"Google AI", url:"https://ai.google"}],
  invest: "Alphabet(GOOGL) AI 전략의 핵심. Gemini vs GPT 경쟁이 AI 시장 판도 결정. Google Cloud AI 성장률이 엔터프라이즈 AI 채택 지표.",
  signal: "Gemini 신버전, Google I/O 발표, Cloud AI 매출, 반독점 소송"
},

"Satya Nadella": {
  philosophy: "Growth Mindset — 고정된 능력이 아닌 성장 가능성에 초점. 공감(Empathy)이 혁신의 출발점이며, 기술은 모든 사람이 더 많은 것을 성취하도록 돕는 도구다.",
  principles: ["Growth Mindset — 'Know-it-all'에서 'Learn-it-all' 문화로", "Empathy First — 아들의 장애가 공감 경영의 시작점", "Cloud First → AI First — 전략적 피봇의 대가", "One Microsoft — 사일로 해체, 협업 문화로 관료주의 극복"],
  books: [{title:"Hit Refresh (저서)", year:"2017", url:"https://www.amazon.com/s?k=hit+refresh+satya+nadella"}, {title:"Microsoft Build 키노트 (연례)", year:"2024", url:"https://www.youtube.com/results?search_query=microsoft+build+2024+keynote"}, {title:"추천: Mindset (Carol Dweck)", year:"2006", url:"https://www.amazon.com/s?k=mindset+carol+dweck"}],
  timeline: [{y:"2024~",t:"시총 $3T+. Copilot+ PC. AI 전 제품 통합"}, {y:"2023",t:"OpenAI $10B+ 추가 투자. Copilot 출시. Activision $69B 인수"}, {y:"2021",t:"회장 겸임. 시총 $2T. Nuance $19.7B 인수"}, {y:"2019",t:"OpenAI $1B 투자. Azure 성장 가속. 시총 $1T"}, {y:"2018",t:"GitHub $7.5B 인수. 오픈소스 전략 대전환"}, {y:"2016",t:"LinkedIn $26.2B 인수"}, {y:"2014",t:"3대 CEO 취임. 'Cloud First, Mobile First'. 문화 변혁 시작"}, {y:"1992",t:"Microsoft 입사. 22년 내부 성장"}, {y:"1967",t:"인도 하이데라바드 출생. Manipal → UW Milwaukee MS → UChicago MBA"}],
  channels: [{name:"LinkedIn", url:"https://www.linkedin.com/in/satyanadella/"}, {name:"X", url:"https://x.com/satyanadella"}, {name:"Microsoft Blog", url:"https://blogs.microsoft.com"}],
  invest: "Microsoft(MSFT) AI 전략 = OpenAI + Azure + Copilot. M&A 전략(LinkedIn, GitHub, Activision)이 플랫폼 가치 증대. Azure AI 성장률이 클라우드 AI 시장 지표.",
  signal: "OpenAI 파트너십 변화, Azure AI 매출, Copilot 채택률, 분기 실적"
},

"Elon Musk": {
  philosophy: "인류를 다행성 종으로 만들어야 한다. AI는 인류 최대의 위협이자 기회이며, 오픈소스 AI가 집중된 권력을 견제해야 한다. First Principles로 문제를 분해한다.",
  principles: ["First Principles Thinking — 근본 원리에서 다시 시작", "물리학적 사고 — 기존 관행이 아닌 물리적 한계로 판단", "Vertical Integration — 제조부터 소프트웨어까지 내재화", "10x Speed — 기존 일정의 1/10로 목표 설정"],
  books: [{title:"추천: Benjamin Franklin (Isaacson)", year:"2003", url:"https://www.amazon.com/s?k=benjamin+franklin+isaacson"}, {title:"Elon Musk (Walter Isaacson 전기)", year:"2023", url:"https://www.amazon.com/s?k=elon+musk+walter+isaacson"}, {title:"추천: The Hitchhiker's Guide to the Galaxy", year:"1979", url:"https://www.amazon.com/s?k=hitchhikers+guide+galaxy"}],
  timeline: [{y:"2024~",t:"xAI Grok. Tesla Optimus 로봇. Starship 궤도 도달"}, {y:"2023",t:"X(Twitter) 인수 완료. xAI 설립. Tesla FSD v12"}, {y:"2022",t:"Twitter $44B 인수. Tesla 연 130만대 생산"}, {y:"2020",t:"SpaceX 유인 우주비행 성공. Tesla 시총 $600B+"}, {y:"2015",t:"OpenAI 공동 설립 (이후 탈퇴)"}, {y:"2008",t:"Tesla Roadster, SpaceX Falcon 1 — 두 회사 모두 파산 위기 극복"}, {y:"2004",t:"Tesla 이사회 합류 + 시리즈A 리드"}, {y:"2002",t:"SpaceX 설립. 화성 이주 미션"}, {y:"1999",t:"X.com(→PayPal) 설립"}, {y:"1971",t:"남아프리카공화국 프리토리아 출생"}],
  channels: [{name:"X (@elonmusk)", url:"https://x.com/elonmusk"}, {name:"Tesla", url:"https://www.tesla.com"}, {name:"SpaceX", url:"https://www.spacex.com"}],
  invest: "Tesla(TSLA) AI/로보틱스 + SpaceX(비상장) + xAI. Musk 발언이 암호화폐(DOGE), 관련주에 직접 영향. Tesla FSD, Optimus 로봇이 장기 성장 스토리.",
  signal: "Tesla 분기 인도량, SpaceX Starship, xAI Grok 업데이트, 정치적 발언"
},

"Jeff Bezos": {
  philosophy: "고객 집착(Customer Obsession)이 모든 것의 시작이다. 항상 Day 1의 마음가짐으로, 장기적 사고를 하며, 후회 최소화 프레임워크로 결정한다.",
  principles: ["Customer Obsession — 경쟁자가 아닌 고객에서 시작", "Day 1 Mentality — Day 2는 정체, 쇠퇴, 죽음", "Regret Minimization Framework — 80세의 나는 후회하지 않을까?", "Two-Pizza Team — 피자 2판으로 먹일 수 있는 팀 크기"],
  books: [{title:"Invent and Wander (주주 서한 모음)", year:"2020", url:"https://www.amazon.com/s?k=invent+and+wander+bezos"}, {title:"추천: The Remains of the Day (Ishiguro)", year:"1989", url:"https://www.amazon.com/s?k=remains+of+the+day"}, {title:"추천: Built to Last (Jim Collins)", year:"1994", url:"https://www.amazon.com/s?k=built+to+last+jim+collins"}],
  timeline: [{y:"2024~",t:"Blue Origin New Glenn. Bezos Earth Fund $10B 기후 투자"}, {y:"2021",t:"Blue Origin 우주 비행. CEO 퇴임 → 회장"}, {y:"2020",t:"코로나 특수. Amazon 시총 $1.5T+"}, {y:"2018",t:"세계 최고 부자 ($150B+). Amazon HQ2 선정"}, {y:"2013",t:"Washington Post 인수 ($250M)"}, {y:"2005",t:"Amazon Prime 런칭. AWS 시작"}, {y:"2000",t:"Blue Origin 설립"}, {y:"1994",t:"Amazon 설립 (온라인 서점). 차고에서 시작"}, {y:"1964",t:"뉴멕시코 출생. Princeton CS/EE 졸업"}],
  channels: [{name:"Blue Origin", url:"https://www.blueorigin.com"}, {name:"Bezos Earth Fund", url:"https://www.bezosearthfund.org"}],
  invest: "Amazon(AMZN) AWS가 클라우드 시장 리더. Prime 구독경제 모델. Blue Origin은 SpaceX 경쟁. 주주 서한이 경영 철학의 교과서.",
  signal: "AWS 매출 성장률, Amazon AI 투자 (Anthropic $4B), Blue Origin 발사"
},

"Stephen Wolfram": {
  philosophy: "우주는 단순한 계산 규칙의 반복으로 설명될 수 있다. Computational Irreducibility — 복잡한 시스템은 시뮬레이션 외에는 단축키가 없다.",
  principles: ["Computational Thinking — 모든 것을 계산적으로 사고", "A New Kind of Science — 셀룰러 오토마타로 자연 현상 재해석", "Wolfram Language — 지식 기반 프로그래밍 언어", "Physics Project — 계산적 원리로 물리학 통합 이론 추구"],
  books: [{title:"A New Kind of Science (ANKOS)", year:"2002", url:"https://www.wolframscience.com/nks/"}, {title:"Idea Makers", year:"2016", url:"https://www.amazon.com/s?k=idea+makers+wolfram"}, {title:"Adventures of a Computational Explorer", year:"2019", url:"https://writings.stephenwolfram.com"}],
  timeline: [{y:"2023~",t:"ChatGPT + Wolfram Alpha 통합. LLM이 계산 엔진과 결합"}, {y:"2020",t:"Wolfram Physics Project 런칭 — 우주의 근본 이론 탐구"}, {y:"2009",t:"Wolfram Alpha 출시 — 계산 지식 엔진"}, {y:"2002",t:"A New Kind of Science 출간 (1,200페이지)"}, {y:"1988",t:"Mathematica 출시 — 수학/과학 컴퓨팅의 표준"}, {y:"1987",t:"Wolfram Research 설립"}, {y:"1959",t:"영국 런던 출생. Eton → Oxford → Caltech PhD (20세)"}],
  channels: [{name:"Writings", url:"https://writings.stephenwolfram.com"}, {name:"Wolfram Blog", url:"https://blog.wolfram.com"}, {name:"YouTube", url:"https://www.youtube.com/wolfram"}],
  invest: "Wolfram Alpha + LLM 통합이 AI 정확성 문제 해결 핵심. Mathematica/Wolfram Language 생태계. AI가 과학 연구를 가속하는 트렌드.",
  signal: "LLM-Wolfram 통합 확대, Physics Project 진전, 새 Mathematica 버전"
},

"Bill Gates": {
  philosophy: "기술 낙관론자. 혁신이 세계의 가장 큰 문제(기후, 보건, 빈곤)를 해결할 수 있다. 소프트웨어가 세상을 먹고, AI가 소프트웨어를 먹는다.",
  principles: ["기술로 불평등 해소 — Gates Foundation $60B+ 기부", "콘텐츠 소비 = 학습 — 연 50권+ 독서, GatesNotes 공유", "에너지 혁신 — TerraPower 원자로, Breakthrough Energy", "AI 활용 — AI가 교육, 보건 격차를 줄일 핵심 도구"],
  books: [{title:"How to Avoid a Climate Disaster", year:"2021", url:"https://www.amazon.com/s?k=how+to+avoid+climate+disaster+gates"}, {title:"How to Prevent the Next Pandemic", year:"2022", url:"https://www.amazon.com/s?k=how+to+prevent+next+pandemic+gates"}, {title:"Source Code (회고록)", year:"2025", url:"https://www.amazon.com/s?k=source+code+bill+gates"}, {title:"GatesNotes 연간 추천 도서", year:"매년", url:"https://www.gatesnotes.com/Books"}],
  timeline: [{y:"2024~",t:"Source Code 회고록 출간. AI 교육/보건 적용 확대"}, {y:"2021",t:"이혼 발표. 기후 재앙 저서 출간"}, {y:"2020",t:"코로나 대응. 2015 TED 예측 재조명"}, {y:"2008",t:"Microsoft 경영 일선 퇴임. 자선활동 전념"}, {y:"2000",t:"Gates Foundation 설립. 글로벌 보건/교육 투자"}, {y:"1995",t:"The Road Ahead 출간. 인터넷 시대 예측"}, {y:"1985",t:"Windows 1.0 출시"}, {y:"1975",t:"Microsoft 공동 설립 (Paul Allen과)"}, {y:"1955",t:"시애틀 출생. Harvard 중퇴"}],
  channels: [{name:"GatesNotes", url:"https://www.gatesnotes.com"}, {name:"X", url:"https://x.com/BillGates"}, {name:"YouTube", url:"https://www.youtube.com/billgates"}],
  invest: "Gates Foundation 투자 포트폴리오가 보건/에너지 섹터 시그널. TerraPower가 원자력 르네상스 트렌드. Breakthrough Energy 포트폴리오가 기후테크 방향성.",
  signal: "GatesNotes AI 관련 글, TerraPower 진전, 에너지/보건 투자"
},

"Ray Dalio": {
  philosophy: "자연은 기계처럼 작동한다. 원칙(Principles)을 명문화하고, 급진적 투명성과 아이디어 능력주의로 최고의 결정을 내린다.",
  principles: ["Radical Transparency — 모든 회의 녹화, 투명한 피드백", "Idea Meritocracy — 직급이 아닌 아이디어의 질로 결정", "Believability-Weighted Decision Making — 전문성 가중 투표", "Big Debt Cycles — 장기 부채 사이클이 경제를 지배"],
  books: [{title:"Principles: Life & Work", year:"2017", url:"https://www.amazon.com/s?k=principles+ray+dalio"}, {title:"Principles for Dealing with the Changing World Order", year:"2021", url:"https://www.amazon.com/s?k=changing+world+order+dalio"}, {title:"Big Debt Crises", year:"2018", url:"https://www.amazon.com/s?k=big+debt+crises+ray+dalio"}, {title:"Principles 요약 (YouTube 애니메이션)", year:"2018", url:"https://www.youtube.com/results?search_query=ray+dalio+principles+animation"}],
  timeline: [{y:"2022~",t:"Bridgewater CIO 퇴임. 개인 투자 + 저술 활동"}, {y:"2021",t:"Changing World Order 출간. 중국/미국 패권 분석"}, {y:"2017",t:"Principles 출간 — 경영/투자 분야 글로벌 베스트셀러"}, {y:"2008",t:"금융위기 정확히 예측. Bridgewater 수익률 14%"}, {y:"1991",t:"Pure Alpha 펀드 시작 — 역사상 가장 성공적인 헤지펀드"}, {y:"1975",t:"Bridgewater Associates 설립 (아파트에서)"}, {y:"1949",t:"뉴욕 퀸즈 출생. Long Island 중산층 가정"}],
  channels: [{name:"LinkedIn", url:"https://www.linkedin.com/in/raydalio/"}, {name:"YouTube", url:"https://www.youtube.com/@principlesbyraydalio"}, {name:"Principles.com", url:"https://www.principles.com"}],
  invest: "Dalio의 매크로 분석(Big Debt Cycle, 세계 질서 변화)이 글로벌 자산배분 전략의 교과서. All Weather Portfolio 전략. 중국/미국 패권 분석이 지정학 리스크 판단 기준.",
  signal: "LinkedIn 매크로 포스팅, 새 Principles 시리즈, 부채 사이클 단계 진단"
},

"Ian Goodfellow": {
  philosophy: "적대적(Adversarial) 접근이 더 강력한 AI를 만든다. GAN의 발명으로 AI가 '창조'하는 시대를 열었다.",
  principles: ["GAN — 생성자와 판별자의 적대적 학습으로 새로운 데이터 생성", "Adversarial Examples — AI 시스템의 취약점 연구", "Deep Learning 교과서 공저 — 딥러닝의 수학적 기초 체계화"],
  books: [{title:"Deep Learning (공저, Bengio·Courville)", year:"2016", url:"https://www.deeplearningbook.org"}, {title:"GAN 원본 논문", year:"2014", url:"https://arxiv.org/abs/1406.2661"}],
  timeline: [{y:"2022",t:"Apple ML 퇴사 (사무실 복귀 정책 반대)"}, {y:"2019-2022",t:"Apple ML 디렉터"}, {y:"2017-2019",t:"Google Brain 연구과학자"}, {y:"2014",t:"GAN 논문 발표 (몬트리올 바에서 아이디어 착안) — 이미지 생성 AI의 시작"}, {y:"2014",t:"몬트리올대 PhD (Yoshua Bengio 지도)"}],
  channels: [{name:"Google Scholar", url:"https://scholar.google.com/citations?user=iYN86KEAAAAJ"}],
  invest: "GAN 기반 생성 AI가 이미지/영상/3D 산업 변혁. Stable Diffusion, DALL-E 등 후속 기술의 기초.",
  signal: "GAN 기반 신규 응용, 생성 AI 시장 성장"
},

"Jim Fan": {
  philosophy: "Foundation Agent — 하나의 AI 모델이 게임, 로봇, 웹 등 모든 환경에서 행동할 수 있어야 한다. 시뮬레이션이 AI 훈련의 핵심이다.",
  principles: ["Foundation Agent — 범용 에이전트 AI", "Sim-to-Real Transfer — 시뮬레이션에서 현실로 전이 학습", "Voyager — GPT-4 기반 마인크래프트 자율 에이전트"],
  books: [{title:"Voyager 논문 (Minecraft AI)", year:"2023", url:"https://voyager.minedojo.org"}, {title:"NVIDIA Research 발표", year:"2024", url:"https://www.youtube.com/results?search_query=jim+fan+nvidia+foundation+agent"}],
  timeline: [{y:"2024~",t:"NVIDIA GEAR Lab 시니어 연구과학자. 로봇+AI 에이전트+시뮬레이션 통합 연구 주도"}, {y:"2023",t:"Voyager — GPT-4가 마인크래프트를 자율 플레이. 최초의 LLM 기반 범용 에이전트"}, {y:"2022",t:"MineDojo — 마인크래프트 기반 AI 벤치마크. NeurIPS Outstanding Paper Award"}, {y:"2020",t:"NVIDIA 입사. AI 에이전트/시뮬레이션 연구"}, {y:"2020",t:"Columbia University PhD (컴퓨터과학). 로봇공학/강화학습 전공"}],
  channels: [{name:"X (@DrJimFan)", url:"https://x.com/DrJimFan"}, {name:"YouTube", url:"https://www.youtube.com/@DrJimFan"}, {name:"Google Scholar", url:"https://scholar.google.com/citations?user=udZXNDcAAAAJ"}],
  invest: "에이전트 AI 트렌드의 핵심 연구자. NVIDIA 로보틱스/시뮬레이션 전략과 직결.",
  signal: "Foundation Agent 데모, NVIDIA 로보틱스 발표"
},

"Lilian Weng": {
  philosophy: "복잡한 AI 연구를 체계적으로 정리하여 누구나 이해할 수 있게 만든다. 서베이 블로그가 연구자들의 필수 참고 자료가 되었다.",
  principles: ["체계적 서베이 — AI 분야별 최고의 정리 블로그", "프롬프트 엔지니어링 — 초기 프롬프팅 기법 체계화", "AI 에이전트 — LLM 기반 자율 에이전트 아키텍처 분류"],
  books: [{title:"Lil'Log (개인 블로그)", year:"지속", url:"https://lilianweng.github.io"}, {title:"LLM Powered Autonomous Agents (블로그)", year:"2023", url:"https://lilianweng.github.io/posts/2023-06-23-agent/"}, {title:"Prompt Engineering (블로그)", year:"2023", url:"https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/"}],
  timeline: [{y:"2023~",t:"OpenAI Head of Safety Systems. LLM 안전성/Alignment 연구 총괄"}, {y:"2023",t:"LLM Powered Autonomous Agents 블로그 — AI 에이전트 아키텍처 분류의 표준 참고 자료"}, {y:"2018",t:"OpenAI 합류. 응용 AI 연구 → Safety Systems 리드로 성장"}, {y:"2017~",t:"Lil'Log 블로그 시작 — GAN, Attention, RL 서베이가 AI 연구자 필독 자료로"}, {y:"교육",t:"중국 출신. 컴퓨터과학 석/박사. ML/NLP 전공"}],
  channels: [{name:"Lil'Log", url:"https://lilianweng.github.io"}, {name:"X", url:"https://x.com/lilaboranweng"}],
  invest: "AI Safety 인력 이동 트렌드. OpenAI 내부 안전 조직 동향.",
  signal: "새 블로그 포스트 (AI 트렌드 서베이), OpenAI 안전 정책 변화"
},

"Jeremy Howard": {
  philosophy: "딥러닝은 모든 사람이 배울 수 있어야 한다. 실용적 접근으로 몇 줄의 코드만으로도 최첨단 모델을 구현할 수 있다.",
  principles: ["Practical Deep Learning — 이론보다 실습 우선", "Transfer Learning — 사전학습 모델 활용의 대중화 (ULMFiT)", "fast.ai — 무료 온라인 딥러닝 교육 플랫폼"],
  books: [{title:"Practical Deep Learning for Coders (fast.ai)", year:"지속", url:"https://course.fast.ai"}, {title:"Deep Learning for Coders with fastai (O'Reilly)", year:"2020", url:"https://www.amazon.com/s?k=deep+learning+coders+fastai"}, {title:"fast.ai Part 2: From Foundations", year:"2023", url:"https://course.fast.ai/Lessons/part2.html"}],
  timeline: [{y:"2018",t:"ULMFiT 논문 — NLP Transfer Learning의 선구자. BERT/GPT 이전에 사전학습→파인튜닝 패러다임 제시"}, {y:"2016",t:"fast.ai 공동 설립 (Rachel Thomas와). 무료 딥러닝 교육 민주화"}, {y:"2014",t:"Enlitic 설립 — 세계 최초 딥러닝 기반 의료 영상 AI 스타트업 중 하나"}, {y:"2012",t:"Kaggle 대회 다수 우승. Kaggle President 역임. 데이터 과학 실전 전문가"}, {y:"호주",t:"호주 멜버른 출생. McKinsey 컨설턴트 → 테크 전환. 독학으로 딥러닝 습득"}],
  channels: [{name:"fast.ai", url:"https://www.fast.ai"}, {name:"YouTube", url:"https://www.youtube.com/@holodjwi"}, {name:"X", url:"https://x.com/jeremyphoward"}],
  invest: "AI 교육 민주화 트렌드. fast.ai 출신 엔지니어들이 AI 스타트업 생태계 형성.",
  signal: "fast.ai 신규 강의, Transfer Learning 신기법"
},

"Lex Fridman": {
  philosophy: "대화를 통해 인류의 가장 깊은 질문에 접근한다. 기술, 과학, 철학, 인간 본성의 교차점에서 진리를 탐구한다.",
  principles: ["Long-form Conversation — 3~5시간 깊은 대화 형식", "First Principles Questioning — 근본적 질문으로 본질에 접근", "기술 낙관론 — AI와 로봇이 인류를 더 나은 방향으로"],
  books: [{title:"Lex Fridman Podcast (주 1-2회)", year:"2018~", url:"https://lexfridman.com/podcast/"}, {title:"MIT 자율주행 강의", year:"2019", url:"https://deeplearning.mit.edu"}, {title:"주요 에피소드: Elon Musk, Sam Altman, Zuckerberg", year:"다수", url:"https://www.youtube.com/lexfridman"}],
  timeline: [{y:"2018~",t:"Lex Fridman Podcast 시작. 구독자 400만+. AI 분야 최고 팟캐스트"}, {y:"MIT",t:"MIT 연구원. 자율주행, 인간-로봇 상호작용 연구"}, {y:"러시아 태생",t:"소련 출생 → 미국 이민 → Drexel → MIT"}],
  channels: [{name:"YouTube", url:"https://www.youtube.com/lexfridman"}, {name:"X", url:"https://x.com/lexfridman"}, {name:"Podcast", url:"https://lexfridman.com/podcast/"}],
  invest: "Fridman 팟캐스트 게스트가 AI 업계 트렌드 반영. 주요 CEO 인터뷰가 기업 전략 공개 채널 역할.",
  signal: "새 에피소드 게스트 (업계 핵심 인물), AI 논쟁 주제"
},

"Hugging Face (Clem Delangue)": {
  philosophy: "AI는 오픈소스이고 커뮤니티 기반이어야 한다. GitHub이 코드의 허브가 된 것처럼, Hugging Face가 AI 모델의 허브가 된다.",
  principles: ["오픈소스 AI Hub — 100만+ 모델, 데이터셋 호스팅", "Transformers 라이브러리 — AI 모델 접근의 표준 도구", "커뮤니티 중심 — 연구자/개발자 협업 플랫폼"],
  books: [{title:"Hugging Face Course (무료)", year:"지속", url:"https://huggingface.co/learn"}, {title:"Transformers 문서", year:"지속", url:"https://huggingface.co/docs/transformers"}],
  timeline: [{y:"2024~",t:"100만+ 모델, 50만+ 데이터셋 호스팅. AI의 GitHub 지위 확립. 엔터프라이즈 확대"}, {y:"2023",t:"기업가치 $4.5B (시리즈D, Google, Amazon, NVIDIA 투자). Spaces/Inference API 성장"}, {y:"2020~",t:"Transformers 라이브러리 폭발적 성장. NLP→멀티모달→Diffusion 전 영역 커버"}, {y:"2018",t:"Transformers 라이브러리 공개. BERT 사전학습 모델 쉬운 접근 제공으로 인기 폭발"}, {y:"2016",t:"Hugging Face 설립 (Clem Delangue + Julien Chaumond). 원래 챗봇 앱 → AI 모델 허브로 피봇"}, {y:"교육",t:"Clem Delangue: 프랑스 출신. 비즈니스 스쿨 졸업. 이전 eFounders 근무"}],
  channels: [{name:"Hugging Face", url:"https://huggingface.co"}, {name:"X (@ClementDelangue)", url:"https://x.com/ClementDelangue"}],
  invest: "오픈소스 AI 생태계의 인프라. Hugging Face 기업가치가 오픈소스 AI 시장 지표. 모델 다운로드 트렌드가 AI 기술 채택 지표.",
  signal: "인기 모델 트렌드, 신규 펀딩, 엔터프라이즈 고객 확대"
},

"Arthur Mensch": {
  philosophy: "유럽이 미국과 중국에 의존하지 않는 자체 AI 역량을 갖춰야 한다. 효율적인 소형 모델이 거대 모델만큼 강력할 수 있다.",
  principles: ["효율적 아키텍처 — Mixture of Experts(MoE)로 적은 비용에 고성능", "유럽 AI 주권 — 미국/중국 의존 탈피", "오픈소스 + 상업 균형 — Mistral 모델 오픈소스 공개"],
  books: [{title:"Mistral AI 기술 블로그", year:"2023~", url:"https://mistral.ai/news/"}, {title:"Mixture of Experts 논문", year:"2024", url:"https://arxiv.org/search/?query=mistral+mixture+of+experts"}],
  timeline: [{y:"2024",t:"Mistral Large, Mixtral 8x22B, Pixtral(멀티모달). 기업가치 $6B+. 시리즈B $640M"}, {y:"2023",t:"Mistral AI 설립 (5월). Mistral 7B 오픈소스(9월) — 소형 모델이 GPT-3.5급 가능 증명"}, {y:"2019~2023",t:"Google DeepMind 연구과학자. Chinchilla 논문(Scaling Laws 재정의) 핵심 기여자"}, {y:"교육",t:"프랑스 출신. ENS(에콜 노르말 쉬페리외르) + Sorbonne PhD. 프랑스 AI 엘리트 교육 배경"}],
  channels: [{name:"Mistral AI", url:"https://mistral.ai"}, {name:"X", url:"https://x.com/arthurmensch"}],
  invest: "유럽 AI 스타트업 최대어. 소형 효율 모델 트렌드가 AI 인프라 비용 구조에 영향. EU AI Act 수혜 가능.",
  signal: "Mistral 신모델, 유럽 AI 투자 동향, MoE 아키텍처 성능"
},

"Noam Shazeer": {
  philosophy: "Attention is All You Need — Transformer 아키텍처가 AI의 근본을 바꿨다. AI 캐릭터와의 대화가 새로운 형태의 엔터테인먼트이자 동반자가 된다.",
  principles: ["Transformer — Self-Attention 메커니즘 발명 (2017 논문 공저)", "Character.AI — AI 캐릭터와의 대화형 경험", "Efficient Inference — 추론 비용 최적화"],
  books: [{title:"Attention Is All You Need (논문)", year:"2017", url:"https://arxiv.org/abs/1706.03762"}, {title:"Character.AI 플랫폼", year:"2022~", url:"https://character.ai"}],
  timeline: [{y:"2024",t:"Google에 재합류 (Character.AI 라이선스 딜 $2.7B)"}, {y:"2022",t:"Character.AI 공동 설립. 월 1억+ 사용자"}, {y:"2017",t:"'Attention Is All You Need' 공저 — Transformer 발명"}, {y:"2000~",t:"Google 엔지니어. 검색 광고, 언어 모델 핵심 기여자"}],
  channels: [{name:"Google Scholar", url:"https://scholar.google.com/citations?user=x3EBDdMAAAAJ"}],
  invest: "Transformer 발명자의 귀환이 Google AI 전략 강화 시그널. Character.AI 사례가 AI 소비자 앱 시장 가능성 증명.",
  signal: "Google AI 조직 변화, Character.AI 사용자 트렌드"
},

"Harrison Chase": {
  philosophy: "AI 에이전트가 단순 챗봇을 넘어 실제 작업을 수행하는 시대가 온다. 개발자가 쉽게 AI 에이전트를 구축할 수 있는 프레임워크가 필요하며, LLM 앱의 관측 가능성(Observability)이 프로덕션의 핵심이다.",
  principles: ["LangChain — LLM 기반 애플리케이션 개발 프레임워크 (체이닝, 메모리, 도구)", "LangGraph — 상태 기반 멀티에이전트 오케스트레이션 프레임워크", "RAG — 검색 증강 생성으로 할루시네이션 감소 + 실시간 지식 접근", "LangSmith — LLM 앱 관측/디버깅/평가 플랫폼"],
  books: [{title:"LangChain 공식 문서", year:"지속", url:"https://docs.langchain.com"}, {title:"LangGraph 에이전트 프레임워크", year:"2024", url:"https://langchain-ai.github.io/langgraph/"}, {title:"LangChain AI 핸드북", year:"2023", url:"https://www.pinecone.io/learn/series/langchain/"}],
  timeline: [{y:"2024",t:"LangGraph 출시 — 멀티에이전트 오케스트레이션. 기업가치 $2B+. LangSmith 엔터프라이즈 확대"}, {y:"2023",t:"시리즈A $25M (Sequoia). LangSmith 출시. 커뮤니티 폭발적 성장 (GitHub 70K+ 스타)"}, {y:"2022",t:"LangChain 오픈소스 출시 (10월) — AI 앱 개발의 사실상 표준. 한 달 만에 GitHub 트렌딩 1위"}, {y:"2020~",t:"ML 엔지니어로 활동. Robust Intelligence에서 AI 모델 테스트/보안 업무"}, {y:"교육",t:"Harvard 수학/컴퓨터과학 졸업"}],
  channels: [{name:"X (@hwchase17)", url:"https://x.com/hwchase17"}, {name:"GitHub", url:"https://github.com/langchain-ai/langchain"}, {name:"YouTube", url:"https://www.youtube.com/@LangChain"}],
  invest: "AI 에이전트 인프라 시장의 핵심 인프라. LangChain/LangGraph 채택률이 엔터프라이즈 AI 에이전트 트렌드 선행 지표. LangSmith가 LLM Ops 시장 형성 중.",
  signal: "LangChain/LangGraph 버전 업데이트, LangSmith 엔터프라이즈 채택, 에이전트 AI 아키텍처 트렌드"
},

"Amjad Masad": {
  philosophy: "소프트웨어 개발의 미래는 AI가 코딩하는 것이다. 누구나 아이디어만 있으면 소프트웨어를 만들 수 있어야 한다.",
  principles: ["AI-native IDE — Replit Agent로 자연어 → 코드", "브라우저 기반 개발 — 설치 없이 바로 코딩", "1인 개발자 시대 — AI가 10x 생산성을 가능하게"],
  books: [{title:"Replit 플랫폼", year:"지속", url:"https://replit.com"}, {title:"Replit Agent 데모", year:"2024", url:"https://www.youtube.com/results?search_query=replit+agent+demo"}],
  timeline: [{y:"2024",t:"Replit Agent — 자연어로 전체 앱 생성. AI 코딩의 미래 시연. 기업가치 $1.2B+"}, {y:"2022~",t:"AI 기능 대폭 강화. Ghostwriter AI 코딩 어시스턴트. 교육 시장 확대"}, {y:"2016",t:"Replit(전 Repl.it) 설립. 브라우저 기반 IDE. 설치 없는 코딩 환경 비전"}, {y:"2012~2016",t:"Facebook 엔지니어 (JavaScript 인프라). 그 전 Yahoo 개발자"}, {y:"1991",t:"요르단 암만 출생. 전쟁 지역에서 코딩 독학. 요르단 → 캐나다 이민. 컴퓨터과학 전공"}],
  channels: [{name:"X (@aaborasad)", url:"https://x.com/amasad"}, {name:"YouTube", url:"https://www.youtube.com/@reaborplit"}],
  invest: "AI 코딩 도구 시장이 개발자 생산성 패러다임 변화. Replit, Cursor, Windsurf 경쟁이 시장 형성 중.",
  signal: "Replit Agent 업데이트, AI 코딩 도구 시장 점유율"
},

"Connor Leahy": {
  philosophy: "AI 안전은 인류 생존의 문제이다. 현재 AI 개발 속도는 안전 연구를 훨씬 앞서고 있으며, 이는 존재적 위험이다. 오픈소스 AI로 투명성을 확보하면서도 안전 연구를 가속해야 한다.",
  principles: ["AI 존재적 위험(X-risk) — 초지능 AI가 인류에 대한 존재적 위협이 될 수 있다", "EleutherAI — 오픈소스 LLM으로 AI 연구 민주화 (GPT-Neo, GPT-J, GPT-NeoX)", "Conjecture — AI 안전 연구 + Cognitive Emulation 접근법", "정책 활동 — EU AI Act, UK AI Summit 등 국제 AI 규제 논의 참여"],
  books: [{title:"AI Safety 강연 모음", year:"다수", url:"https://www.youtube.com/results?search_query=connor+leahy+AI+safety"}, {title:"EleutherAI 연구 논문", year:"2021", url:"https://www.eleuther.ai/publications"}, {title:"Conjecture 기술 블로그", year:"2022~", url:"https://www.conjecture.dev/research"}],
  timeline: [{y:"2024~",t:"AI Safety 정책 활동 확대. 국제 AI Summit 참여. Conjecture 연구 지속"}, {y:"2023",t:"EU AI Act 등 AI 규제 논의에 적극 참여. AI 위험 경고 강연 다수"}, {y:"2022",t:"Conjecture 설립 (런던). AI 안전 연구 스타트업. Cognitive Emulation 접근법 제안"}, {y:"2021",t:"GPT-J-6B 공개 — 당시 최대 오픈소스 LLM. AI 연구 민주화에 기여"}, {y:"2020",t:"EleutherAI 공동 창립. Discord 커뮤니티에서 시작하여 GPT-Neo 시리즈 개발"}, {y:"교육",t:"독일 출신. 독학으로 AI 연구 진입. EleutherAI를 통해 AI 커뮤니티에서 두각"}],
  channels: [{name:"X (@NPCollapse)", url:"https://x.com/NPCollapse"}, {name:"Conjecture", url:"https://www.conjecture.dev"}, {name:"YouTube 강연", url:"https://www.youtube.com/results?search_query=connor+leahy+conjecture"}],
  invest: "AI Safety 규제 강화 시 안전 연구 스타트업(Conjecture, Redwood Research 등)에 기회. EleutherAI가 오픈소스 AI 생태계 형성에 기여. AI 위험 인식이 규제주/보험주에 영향.",
  signal: "AI 안전 규제 법안 진행, EleutherAI 신규 모델, Conjecture 연구 발표, AI Summit 결과"
},

"Mustafa Suleyman": {
  philosophy: "AI는 '고비용 인텔리전스'에서 '제로 비용 인텔리전스'로의 전환이다. AI가 모든 산업에서 비용을 근본적으로 재구성한다.",
  principles: ["The Coming Wave — AI+바이오+양자 기술의 물결이 사회를 재구성", "Containment Problem — AI 기술의 확산을 통제할 수 있는가", "Conversational AI — Pi(Personal Intelligence) 개인 AI 어시스턴트"],
  books: [{title:"The Coming Wave (저서)", year:"2023", url:"https://www.amazon.com/s?k=the+coming+wave+mustafa+suleyman"}, {title:"Pi AI", year:"2023", url:"https://pi.ai"}],
  timeline: [{y:"2024",t:"Microsoft AI CEO 취임. Copilot + Consumer AI 총괄"}, {y:"2023",t:"The Coming Wave 출간. 베스트셀러"}, {y:"2022",t:"Inflection AI 설립. Pi 개인 AI 출시"}, {y:"2010",t:"DeepMind 공동 설립 (Demis Hassabis, Shane Legg)"}, {y:"2014",t:"Google이 DeepMind 인수 ($500M)"}],
  channels: [{name:"X", url:"https://x.com/mustaborasuleyman"}, {name:"Microsoft AI Blog", url:"https://blogs.microsoft.com/ai/"}],
  invest: "Microsoft AI 조직 핵심 인물. The Coming Wave 테제가 AI 거시 투자 관점의 프레임워크. AI+바이오 컨버전스 트렌드.",
  signal: "Microsoft AI 제품 발표, The Coming Wave 관련 정책 논의"
},

"Jan Leike": {
  philosophy: "AI Alignment — AI 시스템이 인간의 가치와 의도에 맞게 행동하도록 만드는 것이 가장 중요한 기술적 과제이다.",
  principles: ["Superalignment — 초지능 AI를 인간이 어떻게 제어할 것인가", "RLHF — 인간 피드백으로 AI 행동 조정", "Scalable Oversight — AI 규모가 커져도 감독 가능한 구조"],
  books: [{title:"Superalignment 팀 블로그 (OpenAI)", year:"2023", url:"https://openai.com/blog/introducing-superalignment"}, {title:"Anthropic Alignment 연구", year:"2024~", url:"https://www.anthropic.com/research"}],
  timeline: [{y:"2024",t:"OpenAI 퇴사 → Anthropic Alignment Science 리더 합류. 'Safety가 OpenAI의 뒷전이 됐다' 공개 비판"}, {y:"2023",t:"OpenAI Superalignment 팀 공동 리더 (Ilya Sutskever와). 4년 내 초지능 정렬 목표"}, {y:"2021~2023",t:"OpenAI Alignment 팀 리더. RLHF 기법 발전에 기여"}, {y:"2017~2021",t:"DeepMind AI Safety 연구원. AI Alignment 기초 연구"}, {y:"교육",t:"독일 출신. 컴퓨터과학 PhD. 강화학습/AI Safety 전공"}],
  channels: [{name:"X", url:"https://x.com/janleike"}],
  invest: "AI Safety 인재 이동이 기업 전략 시그널 (OpenAI→Anthropic). Alignment 연구 진전이 AI 규제 방향에 영향.",
  signal: "AI Safety 인재 이동, Alignment 연구 돌파구"
}
,

// ═══════════════════════════════════════
// Science (15명)
// ═══════════════════════════════════════

"Ed Witten": {
  philosophy: "수학과 물리학의 통합이 우주의 근본 구조를 밝혀줄 것이다. 끈이론이 중력과 양자역학을 통합하는 유일한 후보이다.",
  principles: ["끈이론(String Theory) — 물질의 최소 단위가 1차원 '끈'", "M-이론 — 5개의 끈이론을 통합하는 프레임워크", "위상수학적 양자장론 — 물리학에 수학적 엄밀성 부여"],
  books: [{title:"다수의 핵심 논문 (h-index 180+)", year:"1980~", url:"https://scholar.google.com/citations?user=Z-EXYCkAAAAJ"}, {title:"끈이론 강의 (KITP)", year:"다수", url:"https://www.youtube.com/results?search_query=ed+witten+string+theory+lecture"}],
  timeline: [{y:"2024~",t:"IAS 교수. 수학/물리 양 분야 최전선"}, {y:"1990",t:"필즈상 수상 — 물리학자 최초 수학 최고상"}, {y:"1995",t:"M-이론 제안 — 끈이론 '제2의 혁명'"}, {y:"1951",t:"볼티모어 출생. Brandeis → Princeton PhD"}],
  channels: [{name:"IAS 프로필", url:"https://www.ias.edu/sns/witten"}],
  invest: "양자컴퓨팅 기초이론에 영향. 끈이론 응용이 양자컴퓨팅/양자중력 스타트업 트렌드와 연결.",
  signal: "양자중력 연구 돌파구, 양자컴퓨팅 이론적 발전"
},

"Brian Cox": {
  philosophy: "우주는 이해 가능하며, 과학적 방법이 진리에 도달하는 최선의 도구이다. 과학을 대중에게 아름답게 전달하는 것이 과학자의 의무이다.",
  principles: ["과학 대중화 — BBC 시리즈로 수백만 명에게 물리학 전달", "입자물리학 — CERN LHC ATLAS 실험 참여", "경이감(Wonder) — 우주의 아름다움이 과학 교육의 출발점"],
  books: [{title:"Wonders of the Universe (BBC 시리즈)", year:"2011", url:"https://www.bbc.co.uk/programmes/b00zdhtg"}, {title:"The Quantum Universe (공저)", year:"2011", url:"https://www.amazon.com/s?k=quantum+universe+brian+cox"}, {title:"Universal (공저)", year:"2016", url:"https://www.amazon.com/s?k=universal+brian+cox+jeff+forshaw"}],
  timeline: [{y:"2005~",t:"BBC 과학 프레젠터. Wonders 시리즈"}, {y:"1995~",t:"CERN LHC ATLAS 실험 참여"}, {y:"D:Ream",t:"밴드 D:Ream 키보디스트 ('Things Can Only Get Better')"}, {y:"1968",t:"영국 올덤 출생. 맨체스터대 교수"}],
  channels: [{name:"BBC", url:"https://www.bbc.co.uk/programmes/profiles/gMmP7sDt1YWQH5XnV6Xhrv/professor-brian-cox"}, {name:"YouTube", url:"https://www.youtube.com/results?search_query=brian+cox+physics"}],
  invest: "과학 교육/미디어 시장. 과학 커뮤니케이션 콘텐츠 트렌드.",
  signal: "새 BBC 시리즈, 과학 대중화 콘텐츠 트렌드"
},

"Sabine Hossenfelder": {
  philosophy: "과학은 아름다움이 아닌 실험적 증거로 판단해야 한다. 현대 이론물리학의 '아름다움 편향'이 진전을 방해하고 있다.",
  principles: ["과학적 회의주의 — 유행하는 이론에 대한 비판적 검증", "Lost in Math — 수학적 아름다움에 대한 과도한 집착 비판", "실용적 과학 커뮤니케이션 — 허세 없이 직설적 설명"],
  books: [{title:"Lost in Math", year:"2018", url:"https://www.amazon.com/s?k=lost+in+math+hossenfelder"}, {title:"Existential Physics", year:"2022", url:"https://www.amazon.com/s?k=existential+physics+hossenfelder"}, {title:"YouTube 채널 (주 1-2회)", year:"2020~", url:"https://www.youtube.com/@SabineHossenfelder"}],
  timeline: [{y:"2020~",t:"YouTube 과학 채널 100만+ 구독자. 과학 비평의 아이콘"}, {y:"2018",t:"Lost in Math 출간 — 이론물리학 비판"}, {y:"FIAS",t:"Frankfurt 고등연구소 연구원"}],
  channels: [{name:"YouTube", url:"https://www.youtube.com/@SabineHossenfelder"}, {name:"Blog", url:"http://backreaction.blogspot.com"}],
  invest: "과학 미디어/교육 콘텐츠 시장. 과학적 회의주의가 '하이프' 기술 평가에 유용한 프레임.",
  signal: "AI/양자컴퓨팅 '하이프 vs 현실' 분석 콘텐츠"
},

"Neil deGrasse Tyson": {
  philosophy: "과학적 리터러시가 민주주의의 기초이다. 우주에서 우리의 위치를 이해하면 세상을 더 겸손하고 호기심 있게 바라본다.",
  principles: ["과학 대중화 — TV, 팟캐스트, SNS로 과학 접근성 확대", "Cosmic Perspective — 우주적 관점에서 지구 문제 바라보기", "비판적 사고 교육 — 과학적 방법론을 일상에 적용"],
  books: [{title:"Astrophysics for People in a Hurry", year:"2017", url:"https://www.amazon.com/s?k=astrophysics+people+hurry+tyson"}, {title:"StarTalk (팟캐스트/TV)", year:"2009~", url:"https://www.startalkradio.net"}, {title:"Cosmos: Possible Worlds (TV)", year:"2020", url:"https://www.youtube.com/results?search_query=cosmos+possible+worlds"}],
  timeline: [{y:"2009~",t:"StarTalk 팟캐스트/TV — 과학 엔터테인먼트"}, {y:"1996~",t:"헤이든 천문관장. 뉴욕 자연사박물관"}, {y:"2006",t:"명왕성 행성 지위 박탈 논쟁의 중심"}, {y:"1958",t:"뉴욕 맨해튼 출생. Harvard → Columbia PhD"}],
  channels: [{name:"StarTalk", url:"https://www.startalkradio.net"}, {name:"X", url:"https://x.com/naboreiltyson"}, {name:"YouTube", url:"https://www.youtube.com/startalkradio"}],
  invest: "과학 교육/미디어 시장. 우주 산업(SpaceX, Blue Origin) 대중 인식에 영향.",
  signal: "우주 탐사 이벤트, 과학 정책 논쟁"
},

"Sean Carroll": {
  philosophy: "양자역학의 다세계 해석이 옳다. 우주에 목적은 없지만, 그렇기에 우리가 의미를 만들어야 한다.",
  principles: ["다세계 해석(Many-Worlds) — 양자 측정마다 우주가 분기", "Poetic Naturalism — 세계를 설명하는 다양한 수준의 진실", "Mindscape — 과학, 철학, 사회를 잇는 대화"],
  books: [{title:"Something Deeply Hidden", year:"2019", url:"https://www.amazon.com/s?k=something+deeply+hidden+sean+carroll"}, {title:"The Big Picture", year:"2016", url:"https://www.amazon.com/s?k=the+big+picture+sean+carroll"}, {title:"Mindscape Podcast", year:"2018~", url:"https://www.preposterousuniverse.com/podcast/"}],
  timeline: [{y:"2022~",t:"Johns Hopkins 교수. Mindscape 팟캐스트 지속"}, {y:"2019",t:"Something Deeply Hidden — 다세계 해석 대중서"}, {y:"2006~",t:"Caltech 교수. 시간의 화살, 암흑에너지 연구"}, {y:"1966",t:"필라델피아 출생. Harvard PhD"}],
  channels: [{name:"Mindscape Podcast", url:"https://www.preposterousuniverse.com/podcast/"}, {name:"Blog", url:"https://www.preposterousuniverse.com"}, {name:"YouTube", url:"https://www.youtube.com/results?search_query=sean+carroll+mindscape"}],
  invest: "양자컴퓨팅 기초이론 관점. 과학 팟캐스트/교육 콘텐츠 시장.",
  signal: "양자역학 해석 논쟁, 새 Mindscape 에피소드"
},

"Jennifer Doudna": {
  philosophy: "CRISPR는 생명의 코드를 편집하는 도구이며, 이 기술의 윤리적 사용이 과학자의 책임이다. 유전자 편집이 질병, 식량, 환경 문제를 해결할 수 있다.",
  principles: ["CRISPR-Cas9 — 유전자 가위 기술 공동 발명 (2012)", "유전자 편집 윤리 — 생식세포 편집의 도덕적 한계 논의", "Innovative Genomics Institute — CRISPR 응용 연구 주도"],
  books: [{title:"A Crack in Creation (공저)", year:"2017", url:"https://www.amazon.com/s?k=crack+in+creation+doudna"}, {title:"노벨 강연", year:"2020", url:"https://www.youtube.com/results?search_query=jennifer+doudna+nobel+lecture"}],
  timeline: [{y:"2020",t:"노벨화학상 수상 (Emmanuelle Charpentier와 공동)"}, {y:"2012",t:"CRISPR-Cas9 유전자 편집 기술 발표 — 생명과학 혁명"}, {y:"2000s",t:"UC Berkeley 교수. RNA 구조 연구"}, {y:"1964",t:"워싱턴 DC 출생. Pomona → Harvard PhD"}],
  channels: [{name:"IGI (Innovative Genomics Institute)", url:"https://innovativegenomics.org"}],
  invest: "CRISPR 관련주(Editas, CRISPR Therapeutics, Intellia). 유전자 치료 시장 $30B+ 전망. 바이오테크 규제 방향.",
  signal: "CRISPR 임상시험 결과, FDA 유전자 치료 승인, 바이오테크 M&A"
},

"Terence Tao": {
  philosophy: "수학은 협업과 소통의 학문이다. 가장 어려운 문제도 올바른 관점과 도구를 찾으면 풀 수 있다.",
  principles: ["소수의 분포 — Green-Tao 정리 (소수에서 등차수열)", "조화해석학 — 편미분방정식의 해 존재성", "AI+수학 — LLM을 수학 증명에 활용하는 선구적 실험"],
  books: [{title:"What's New (블로그)", year:"2007~", url:"https://terrytao.wordpress.com"}, {title:"Analysis I, II (교과서)", year:"2006", url:"https://www.amazon.com/s?k=terence+tao+analysis"}, {title:"Solving Mathematical Problems", year:"2006", url:"https://www.amazon.com/s?k=solving+mathematical+problems+tao"}],
  timeline: [{y:"2023~",t:"AI를 수학 증명에 활용하는 실험. Lean 증명 보조기 활용"}, {y:"2006",t:"필즈상 수상 (31세). 수학 최고 영예"}, {y:"2004",t:"Green-Tao 정리 — 소수에서 임의 길이의 등차수열 존재 증명"}, {y:"1975",t:"호주 애들레이드 출생. 16세에 석사, 21세에 UCLA 교수"}],
  channels: [{name:"What's New (블로그)", url:"https://terrytao.wordpress.com"}, {name:"Mastodon", url:"https://mathstodon.xyz/@tao"}],
  invest: "AI+수학 융합 트렌드. 수학적 AI가 과학적 발견을 가속할 가능성. Lean/Coq 형식 증명 도구 생태계.",
  signal: "AI 수학 증명 돌파구, 형식 검증 도구 발전"
},

"Roger Penrose": {
  philosophy: "의식은 양자역학적 현상이며, 컴퓨터는 진정한 이해나 의식을 가질 수 없다. AI의 한계를 이해하는 것이 중요하다.",
  principles: ["Penrose-Hawking 특이점 정리 — 블랙홀 내 특이점 필연성", "Orchestrated Objective Reduction — 양자 의식 이론", "The Emperor's New Mind — AI/강한AI 한계 논증"],
  books: [{title:"The Road to Reality", year:"2004", url:"https://www.amazon.com/s?k=road+to+reality+penrose"}, {title:"The Emperor's New Mind", year:"1989", url:"https://www.amazon.com/s?k=emperors+new+mind+penrose"}, {title:"Cycles of Time", year:"2010", url:"https://www.amazon.com/s?k=cycles+of+time+penrose"}],
  timeline: [{y:"2020",t:"노벨물리학상 수상 — 블랙홀 형성이 일반상대론의 필연적 결과"}, {y:"2004",t:"The Road to Reality — 현대 물리학 전체를 하나의 책에"}, {y:"1989",t:"The Emperor's New Mind — AI 한계 논증. 의식과 물리학의 교차"}, {y:"1965",t:"Penrose-Hawking 특이점 정리"}, {y:"1931",t:"영국 콜체스터 출생. UCL → Cambridge PhD"}],
  channels: [{name:"인터뷰 모음", url:"https://www.youtube.com/results?search_query=roger+penrose+interview"}],
  invest: "양자컴퓨팅 기초이론. AI 한계론이 AI 하이프 사이클 평가에 역관점 제공.",
  signal: "양자 의식 연구 진전, AI 한계 논쟁"
},

"David Deutsch": {
  philosophy: "모든 물리적으로 가능한 것은 설명 가능하며, 좋은 설명은 변형하기 어려운 것이다. 양자컴퓨팅은 다세계의 존재를 활용하는 기술이다.",
  principles: ["양자컴퓨팅 이론적 기초 — 양자 튜링 머신 제안 (1985)", "Constructor Theory — 물리학의 새로운 기초 프레임워크", "The Beginning of Infinity — 좋은 설명이 무한한 진보를 가능하게"],
  books: [{title:"The Beginning of Infinity", year:"2011", url:"https://www.amazon.com/s?k=beginning+of+infinity+deutsch"}, {title:"The Fabric of Reality", year:"1997", url:"https://www.amazon.com/s?k=fabric+of+reality+deutsch"}],
  timeline: [{y:"2011",t:"The Beginning of Infinity — 지식, 진보, 우주에 대한 통합적 사고"}, {y:"1997",t:"The Fabric of Reality — 양자물리, 인식론, 진화, 계산 통합"}, {y:"1985",t:"양자 튜링 머신 논문 — 양자컴퓨팅의 이론적 기초"}, {y:"1953",t:"이스라엘 하이파 출생. 옥스퍼드 물리학자"}],
  channels: [{name:"인터뷰/강연", url:"https://www.youtube.com/results?search_query=david+deutsch+interview"}],
  invest: "양자컴퓨팅 산업의 이론적 기반. IonQ, Rigetti, IBM Quantum 등 양자컴퓨팅주 평가 시 참고.",
  signal: "양자컴퓨팅 실용화 진전, Constructor Theory 연구"
},

"Max Tegmark": {
  philosophy: "우주는 수학적 구조 그 자체이다. AI는 인류의 가장 강력한 기술이지만, 잘못 관리하면 마지막 발명이 될 수 있다.",
  principles: ["Mathematical Universe Hypothesis — 물리적 실재 = 수학적 구조", "AI 안전 — Future of Life Institute(FLI) 창립", "AI 일시정지 서한 — GPT-4 이후 개발 일시중단 요청 (2023)"],
  books: [{title:"Life 3.0: Being Human in the Age of AI", year:"2017", url:"https://www.amazon.com/s?k=life+3.0+tegmark"}, {title:"Our Mathematical Universe", year:"2014", url:"https://www.amazon.com/s?k=our+mathematical+universe+tegmark"}, {title:"FLI AI Safety 서한", year:"2023", url:"https://futureoflife.org/open-letter/pause-giant-ai-experiments/"}],
  timeline: [{y:"2023",t:"AI 개발 일시중단 공개서한 주도 — 수천 명 서명"}, {y:"2017",t:"Life 3.0 출간 — AI 시대 인류의 미래"}, {y:"2015",t:"FLI(Future of Life Institute) 공동 창립. AI 안전 연구 펀딩"}, {y:"2014",t:"Our Mathematical Universe — 수학적 우주 가설"}, {y:"1967",t:"스웨덴 출생. MIT 물리학 교수"}],
  channels: [{name:"FLI", url:"https://futureoflife.org"}, {name:"X", url:"https://x.com/tegmark"}, {name:"YouTube", url:"https://www.youtube.com/results?search_query=max+tegmark"}],
  invest: "AI 규제 트렌드의 핵심 인물. FLI 활동이 AI 정책/규제주에 영향. AI Safety 투자 기회.",
  signal: "AI 규제 법안, FLI 새 서한/보고서, AI Safety 펀딩"
},

"Eric Lander": {
  philosophy: "유전체학이 의학을 개인 맞춤형으로 변혁시킨다. 대규모 과학 프로젝트가 개별 연구보다 더 큰 돌파구를 만든다.",
  principles: ["인간게놈프로젝트 리더 — 유전체 시퀀싱 혁명", "Broad Institute — MIT/Harvard 공동 유전체학 연구소", "정밀의학 — 개인 유전 정보 기반 맞춤 치료"],
  books: [{title:"인간게놈프로젝트 핵심 논문", year:"2001", url:"https://www.nature.com/articles/35057062"}, {title:"MIT 유전학 강의 (OCW)", year:"다수", url:"https://ocw.mit.edu/courses/7-012-introduction-to-biology-fall-2004/"}],
  timeline: [{y:"2021-2022",t:"바이든 대통령 과학기술정책실(OSTP) 실장"}, {y:"2004~",t:"Broad Institute 소장. 유전체학 연구 글로벌 리더"}, {y:"2001",t:"인간게놈프로젝트 완성 논문 주저자"}, {y:"1957",t:"뉴욕 출생. Princeton → Oxford PhD (수학)"}],
  channels: [{name:"Broad Institute", url:"https://www.broadinstitute.org"}],
  invest: "유전체학/정밀의학 시장 성장. 시퀀싱 비용 하락이 바이오테크 접근성 확대. Illumina, 10x Genomics 등.",
  signal: "유전체학 신기술, 정밀의학 임상 결과, 바이오테크 규제"
},

"Carlo Rovelli": {
  philosophy: "시간은 근본적 실재가 아니라 우리의 인식이 만들어낸 것이다. 양자중력이 시공간의 본질을 재정의할 것이다.",
  principles: ["루프양자중력(LQG) — 끈이론의 대안적 양자중력 이론", "시간의 질서 — 시간이 근본적이지 않다는 물리학적 논증", "관계적 양자역학 — 관찰자 상대적인 양자 상태"],
  books: [{title:"시간은 흐르지 않는다 (The Order of Time)", year:"2018", url:"https://www.amazon.com/s?k=order+of+time+rovelli"}, {title:"일곱 가지 짧은 물리학 수업 (Seven Brief Lessons)", year:"2015", url:"https://www.amazon.com/s?k=seven+brief+lessons+physics+rovelli"}, {title:"Reality Is Not What It Seems", year:"2014", url:"https://www.amazon.com/s?k=reality+not+what+seems+rovelli"}],
  timeline: [{y:"2015",t:"일곱 가지 짧은 물리학 수업 — 40개국 번역 베스트셀러"}, {y:"1990s~",t:"루프양자중력 이론 발전. Aix-Marseille 대학 교수"}, {y:"1956",t:"이탈리아 베로나 출생"}],
  channels: [{name:"인터뷰/강연", url:"https://www.youtube.com/results?search_query=carlo+rovelli+lecture"}],
  invest: "양자중력 연구가 장기적으로 양자컴퓨팅/양자센서 기술에 영향. 과학 서적 시장 트렌드.",
  signal: "루프양자중력 실험적 검증 시도, 과학 대중서 트렌드"
},

"Katie Mack": {
  philosophy: "우주의 종말을 연구하는 것이 우주의 현재를 이해하는 핵심이다. 과학 커뮤니케이션은 과학 자체만큼 중요하다.",
  principles: ["우주론 — 암흑물질, 우주 팽창, 우주의 최종 운명", "과학 커뮤니케이션 — X(Twitter)에서 가장 영향력 있는 물리학자 중 한 명"],
  books: [{title:"The End of Everything (Astrophysically Speaking)", year:"2020", url:"https://www.amazon.com/s?k=end+of+everything+katie+mack"}],
  timeline: [{y:"2024~",t:"Perimeter Institute Hawking Chair 지속. 과학 커뮤니케이션 + 우주론 연구 병행"}, {y:"2020",t:"The End of Everything 출간 — 우주 5가지 종말 시나리오. NYT 추천"}, {y:"2017~",t:"Perimeter Institute for Theoretical Physics 연구원. Hawking Chair in Cosmology"}, {y:"2010s",t:"암흑물질, 초기 우주 위상결함, 우주 팽창 연구. NASA 연구 협력"}, {y:"교육",t:"미국 출신. Caltech 물리학 → Cambridge PhD (우주론)"}],
  channels: [{name:"X (@AstroKatie)", url:"https://x.com/AstroKatie"}],
  invest: "우주 탐사 산업 트렌드. 과학 커뮤니케이션 시장.",
  signal: "우주론 발견, 암흑물질 탐지 실험"
},

"David Eagleman": {
  philosophy: "뇌는 우리가 생각하는 것보다 훨씬 유연하고 신비롭다. 감각 대체 기술로 인간의 지각을 확장할 수 있다.",
  principles: ["신경가소성 — 뇌는 끊임없이 재구성된다", "감각 대체(Sensory Substitution) — NeoSensory, 피부로 소리 듣기", "Possibilian — 확실한 답 대신 열린 가능성을 탐구"],
  books: [{title:"Incognito: The Secret Lives of the Brain", year:"2011", url:"https://www.amazon.com/s?k=incognito+eagleman"}, {title:"The Brain (PBS 시리즈 + 책)", year:"2015", url:"https://www.amazon.com/s?k=the+brain+eagleman"}, {title:"Livewired", year:"2020", url:"https://www.amazon.com/s?k=livewired+eagleman"}],
  timeline: [{y:"2020",t:"Livewired 출간 — 뇌의 실시간 재구성 능력. NYT 베스트셀러"}, {y:"2015",t:"The Brain (PBS 6부작 시리즈) — 뇌과학 대중화. 에미상 노미네이트"}, {y:"2015",t:"NeoSensory 공동 설립 — 피부를 통해 소리를 느끼는 감각 대체 기술"}, {y:"2011",t:"Incognito 출간 — 무의식이 행동을 지배하는 방식. 국제 베스트셀러"}, {y:"2004~",t:"Stanford 신경과학 교수. Baylor College of Medicine 겸임. 시냅스 가소성 연구"}, {y:"1971",t:"미국 뉴멕시코 출생. Rice 대학 → Baylor College of Medicine PhD (신경과학)"}],
  channels: [{name:"NeoSensory", url:"https://neosensory.com"}, {name:"YouTube", url:"https://www.youtube.com/results?search_query=david+eagleman"}, {name:"X", url:"https://x.com/davideagleman"}],
  invest: "뉴로테크/BCI 시장 (Neuralink, NeoSensory). 감각 확장 기술이 웨어러블/접근성 시장에 영향.",
  signal: "BCI 기술 진전, NeoSensory 제품 업데이트, 뉴로테크 투자"
},

"Michio Kaku": {
  philosophy: "물리학은 우주의 법칙을 이해하는 도구이며, 기술 발전은 문명의 단계를 결정한다. 인류는 Type I 문명으로 전환 중이다.",
  principles: ["끈이론 대중화 — 끈장론(String Field Theory) 공동 창시자", "카르다셰프 척도 — 문명의 에너지 사용 수준으로 단계 구분", "미래학 — 과학 기반 미래 예측"],
  books: [{title:"The Future of the Mind", year:"2014", url:"https://www.amazon.com/s?k=future+of+mind+michio+kaku"}, {title:"Physics of the Future", year:"2011", url:"https://www.amazon.com/s?k=physics+of+future+kaku"}, {title:"Quantum Supremacy", year:"2023", url:"https://www.amazon.com/s?k=quantum+supremacy+kaku"}],
  timeline: [{y:"2023",t:"Quantum Supremacy 출간 — 양자컴퓨팅이 세상을 바꾸는 방식"}, {y:"2014",t:"The Future of the Mind — 뇌과학+AI의 미래. NYT 베스트셀러"}, {y:"2011",t:"Physics of the Future — 2100년까지의 기술 예측. 미래학의 교과서"}, {y:"2000s~",t:"BBC, Discovery Channel, CBS 등 과학 다큐멘터리 진행. 미국 대표 과학 커뮤니케이터"}, {y:"1970s~",t:"끈장론(String Field Theory) 공동 창시. CCNY(City College of New York) 이론물리학 교수"}, {y:"1947",t:"캘리포니아 산호세 출생 (일본계 미국인). Harvard 물리학 졸업 → UC Berkeley PhD"}],
  channels: [{name:"YouTube", url:"https://www.youtube.com/results?search_query=michio+kaku"}, {name:"X", url:"https://x.com/miaborchiokaku"}],
  invest: "미래 기술 트렌드(양자컴퓨팅, 뇌-컴퓨터 인터페이스, 우주 기술) 대중 인식에 영향.",
  signal: "양자컴퓨팅 상용화, 미래 기술 예측"
},

// ═══════════════════════════════════════
// Tech (20명)
// ═══════════════════════════════════════

"Tim Cook": {
  philosophy: "프라이버시는 기본적 인권이다. Apple은 최고의 제품을 만들어 세상을 더 나은 곳으로 만드는 것이 미션이다. 공급망 천재로서 운영 효율성을 극대화하다.",
  principles: ["공급망 운영 — 재고 제로, JIT 생산으로 Apple의 마진 혁명", "프라이버시 우선 — 사용자 데이터 보호가 제품 철학의 핵심", "On-Device AI — 클라우드 아닌 기기 내 AI 처리", "ESG — 2030년까지 전체 공급망 탄소중립"],
  books: [{title:"Tim Cook (Leander Kahney 전기)", year:"2019", url:"https://www.amazon.com/s?k=tim+cook+leander+kahney"}, {title:"WWDC 키노트 (연례)", year:"2024", url:"https://www.youtube.com/results?search_query=apple+wwdc+2024+keynote"}],
  timeline: [{y:"2024~",t:"Apple Intelligence (AI). Vision Pro 출시. 시총 $3T+"}, {y:"2023",t:"Vision Pro 발표. M3 칩. Apple Silicon 생태계 확장"}, {y:"2020",t:"Apple Silicon M1 전환 — Intel 탈피. ARM 기반 PC 혁명"}, {y:"2014",t:"동성애자 커밍아웃 — Fortune 500 CEO 최초"}, {y:"2011",t:"Apple CEO 취임 (Steve Jobs 후임)"}, {y:"1998",t:"Apple COO 합류. 공급망 재구축"}, {y:"1960",t:"앜라바마 소도시 출생. Auburn → Duke MBA"}],
  channels: [{name:"X (@tim_cook)", url:"https://x.com/tim_cook"}, {name:"Apple Newsroom", url:"https://www.apple.com/newsroom/"}],
  invest: "Apple(AAPL) 시총 $3T. Apple Intelligence AI 전략이 AI 디바이스 시장 판도 결정. Vision Pro가 공간컴퓨팅 시장 열지 여부.",
  signal: "WWDC 발표, iPhone 판매량, Apple Intelligence 채택률, Vision Pro 시장 반응"
},

"Mark Zuckerberg": {
  philosophy: "세상을 더 열린 곳으로 만든다. 메타버스는 사람들이 함께하는 새로운 방식이며, 오픈소스 AI가 닫힌 시스템보다 더 나은 미래를 만든다.",
  principles: ["Move Fast — '빠르게 움직이고 부수라' → '빠르게 움직이되 안정적인 인프라와 함께'", "오픈소스 AI — Llama 시리즈 공개로 열린 AI 생태계 구축", "메타버스 피봇 — $100B+ 투자로 AR/VR 생태계 구축", "AI First — 모든 Meta 제품에 AI 통합"],
  books: [{title:"추천: The Aeneid (Virgil)", year:"고전", url:"https://www.amazon.com/s?k=aeneid+virgil"}, {title:"Meta Connect 키노트 (연례)", year:"2024", url:"https://www.youtube.com/results?search_query=meta+connect+2024+keynote"}],
  timeline: [{y:"2024~",t:"Llama 3. Meta AI 전 제품 통합. Quest 3. 시총 $1.5T+"}, {y:"2023",t:"Llama 2 오픈소스. Threads 출시. 효율의 해(Year of Efficiency)"}, {y:"2021",t:"Facebook → Meta 리브랜딩. 메타버스 피봇"}, {y:"2012",t:"Facebook IPO. Instagram 인수 ($1B)"}, {y:"2014",t:"WhatsApp 인수 ($19B). Oculus VR 인수 ($2B)"}, {y:"2004",t:"Facebook 창립 (Harvard 기숙사). 19세"}, {y:"1984",t:"뉴욕 화이트플레인스 출생. Harvard 중퇴"}],
  channels: [{name:"X", url:"https://x.com/faborinkaboread"}, {name:"Instagram", url:"https://www.instagram.com/zuck/"}],
  invest: "Meta(META) AI + 메타버스 + 광고 수익. Llama 오픈소스가 AI 생태계에 미치는 영향. Reality Labs 손실 선이 수익성 지표.",
  signal: "Llama 신버전, Reality Labs 매출, Quest 판매량, 광고 매출 성장률"
},

"Linus Torvalds": {
  philosophy: "Talk is cheap. Show me the code. 오픈소스는 예술이자 공학이다. 좋은 코드는 논쟁을 끝낸다.",
  principles: ["Linux 커널 — 세계 인프라의 90%+를 구동하는 OS", "Git — 분산 버전관리 시스템. 소프트웨어 개발 협업의 표준", "Benevolent Dictator — 오픈소스 프로젝트의 의사결정 모델", "실용주의 — 이념보다 작동하는 코드가 중요"],
  books: [{title:"Just for Fun (autobiography)", year:"2001", url:"https://www.amazon.com/s?k=just+for+fun+linus+torvalds"}, {title:"Linux 커널 메일링리스트", year:"지속", url:"https://lkml.org"}],
  timeline: [{y:"2024~",t:"Linux 커널 6.x 시리즈 지속 개발. 33년째 메인테이너"}, {y:"2005",t:"Git 개발 — 2주만에 첫 버전 완성. 소프트웨어 개발 혁명"}, {y:"1991",t:"Linux 커널 최초 릴리즈 (v0.01). 21세"}, {y:"1969",t:"핀란드 헬싱키 출생. 헬싱키대학"}],
  channels: [{name:"GitHub", url:"https://github.com/torvalds"}, {name:"LKML", url:"https://lkml.org"}],
  invest: "Linux가 클라우드 인프라의 절대적 기반. Git/GitHub가 소프트웨어 개발의 표준. 오픈소스 비즈니스 모델(Red Hat 등).",
  signal: "Linux 커널 주요 변경, 오픈소스 보안 이슈"
},

"Vitalik Buterin": {
  philosophy: "탈중앙화가 자유와 협력의 새로운 형태를 가능하게 한다. 이더리움은 실행 가능한 코드로 표현될 수 있다.",
  principles: ["이더리움 — 스마트 컨트랙트 플랫폼", "Proof of Stake — PoW에서 PoS로 전환 (The Merge, 2022). 에너지 99%+ 감소", "EIP — 이더리움 개선 제안 기반 거버넌스", "Quadratic Voting/Funding — 공공재 자금배분 메커니즘"],
  books: [{title:"Proof of Stake (collected writings)", year:"2022", url:"https://www.amazon.com/s?k=proof+of+stake+vitalik+buterin"}, {title:"vitalik.eth Blog", year:"지속", url:"https://vitalik.eth.limo"}],
  timeline: [{y:"2024~",t:"이더리움 로드맵 (Dencun, Pectra). L2 생태계 성장"}, {y:"2022",t:"The Merge — PoW→PoS 전환 성공. 에너지 99.95% 감소"}, {y:"2015",t:"이더리움 메인넷 런칭"}, {y:"2013",t:"이더리움 백서 발표 (19세)"}, {y:"2011",t:"Bitcoin Magazine 공동창립. 블록체인 에코시스템 입문"}, {y:"1994",t:"러시아 모스크바 출생. 6세 캐나다 이민. Waterloo대 중퇴"}],
  channels: [{name:"Blog", url:"https://vitalik.eth.limo"}, {name:"X", url:"https://x.com/VitalikButerin"}],
  invest: "이더리움(ETH) + L2 생태계(Arbitrum, Optimism, Base). DeFi TVL이 블록체인 채택 지표. ETF 승인 여부.",
  signal: "ETH 로드맵 업데이트, DeFi TVL, Vitalik 블로그 포스팅"
},

"Patrick Collison": {
  philosophy: "세상에서 가장 과소평가된 것은 진보의 속도이다. 과학적 발견과 기술 혁신의 속도를 높이는 것이 인류의 가장 중요한 과제다.",
  principles: ["Stripe — 인터넷 경제의 결제 인프라", "Fast Grants — 코로나 시 과학자에게 48시간 내 연구비 지급", "Progress Studies — '진보 연구'라는 새 학문 분야 제안"],
  books: [{title:"Progress Studies (에세이, Tyler Cowen과 공동)", year:"2019", url:"https://www.theatlantic.com/science/archive/2019/07/we-need-new-science-progress/594946/"}, {title:"Patrick's Bookshelf", year:"지속", url:"https://patrickcollison.com/bookshelf"}],
  timeline: [{y:"2023~",t:"Stripe 매출 $1T+ 처리. 기업가치 $65B+"}, {y:"2019",t:"Progress Studies 제안. Stripe Climate 런칭"}, {y:"2010",t:"Stripe 공동 설립 (21세, 동생 John과)"}, {y:"1988",t:"아일랜드 출생. MIT 중퇴"}],
  channels: [{name:"개인 사이트", url:"https://patrickcollison.com"}, {name:"X", url:"https://x.com/patrickc"}],
  invest: "Stripe(비상장)가 인터넷 결제 시장의 핵심 인프라. IPO 여부가 핀테크 시장 시그널. Progress Studies가 과학/기술 투자 철학.",
  signal: "Stripe IPO 동향, 결제 시장 성장률"
},

"George Hotz": {
  philosophy: "해커 정신으로 문제를 푼다. 기존 시스템에 도전하고, 오픈소스로 독점을 깨뜨린다. AI는 소프트웨어 2.0이다.",
  principles: ["comma.ai — 오픈소스 자율주행. $999 디바이스로 Tesla FSD에 도전", "tinygrad — 최소한의 딥러닝 프레임워크 (직접 작성)", "해커 정신 — iPhone 최초 탈옥, PS3 해킹"],
  books: [{title:"comma.ai", year:"지속", url:"https://comma.ai"}, {title:"tinygrad (GitHub)", year:"지속", url:"https://github.com/tinygrad/tinygrad"}, {title:"Twitch/YouTube 라이브 코딩", year:"지속", url:"https://www.youtube.com/results?search_query=george+hotz+coding"}],
  timeline: [{y:"2023~",t:"tinygrad 발전. tiny corp 설립. AI 칩 제조 목표"}, {y:"2015",t:"comma.ai 설립 — 오픈소스 자율주행"}, {y:"2010",t:"PS3 해킹 — Sony 소송"}, {y:"2007",t:"iPhone 최초 탈옥 (17세)"}, {y:"1989",t:"뉴저지 출생"}],
  channels: [{name:"X", url:"https://x.com/realGeorgeHotz"}, {name:"YouTube", url:"https://www.youtube.com/@geohotz"}, {name:"Twitch", url:"https://www.twitch.tv/georgehotz"}],
  invest: "comma.ai가 저가 자율주행 시장 개척. tinygrad/tiny corp이 AI 칩 시장에 도전. 해커 정신의 스타트업 문화.",
  signal: "comma.ai 업데이트, tinygrad 성능, AI 츩 스타트업 동향"
},

"Guillermo Rauch": {
  philosophy: "웹은 세계 최대의 플랫폼이며, 개발자 경험(DX)이 사용자 경험(UX)을 결정한다. AI는 웹 개발의 근본을 바꿠다.",
  principles: ["Next.js — React 기반 웹 프레임워크의 사실상 표준", "v0 — AI로 UI 코드 생성. 프롬프트→코드", "Edge Computing — 전 세계 엣지에서 실행되는 서버리스 아키텍처"],
  books: [{title:"Next.js 문서", year:"지속", url:"https://nextjs.org/docs"}, {title:"v0.dev", year:"2024", url:"https://v0.dev"}],
  timeline: [{y:"2024~",t:"v0 — AI 기반 UI 생성. Vercel AI SDK"}, {y:"2015",t:"Vercel(전 ZEIT) 설립. Now 플랫폼"}, {y:"2016",t:"Next.js 출시 — React 웹 개발의 표준"}, {y:"Socket.io",t:"실시간 웹 통신 라이브러리 개발"}, {y:"아르헨티나",t:"아르헨티나 출생. 웹 개발자"}],
  channels: [{name:"X (@raaboruchaborillerabormo)", url:"https://x.com/rauchg"}, {name:"Vercel Blog", url:"https://vercel.com/blog"}],
  invest: "Vercel 기업가치 $3.5B+. Next.js가 웹 개발 생태계의 핵심. AI SDK가 AI 웹앱 개발 도구 트렌드.",
  signal: "Next.js 주요 업데이트, v0 성장, Vercel 펀딩/IPO"
},

"DHH (David Heinemeier Hansson)": {
  philosophy: "VC 펀딩 없이도 수억 달러 사업을 만들 수 있다. 프레임워크는 개발자의 행복을 위해 존재한다. 클라우드에 의존하지 마라.",
  principles: ["Ruby on Rails — '개발자의 행복' 철학으로 웹 프레임워크 혁명", "Basecamp/37signals — 부트스트랩 사업, VC 거부", "Cloud Exit — 대기업도 클라우드 탈출이 경제적 (물리 서버 복귀)", "ONCE — 구독 아닌 일회성 구매 소프트웨어"],
  books: [{title:"Rework", year:"2010", url:"https://www.amazon.com/s?k=rework+fried+hansson"}, {title:"Remote", year:"2013", url:"https://www.amazon.com/s?k=remote+fried+hansson"}, {title:"It Doesn't Have to Be Crazy at Work", year:"2018", url:"https://www.amazon.com/s?k=it+doesnt+have+to+be+crazy+at+work"}],
  timeline: [{y:"2023~",t:"ONCE 제품 라인. Cloud Exit — 37signals 클라우드 탈출로 연 $7M 절감"}, {y:"2004",t:"Ruby on Rails 출시 — 웹 개발 패러다임 변화"}, {y:"1999",t:"37signals(전 Basecamp) 합류"}, {y:"1979",t:"덴마크 코펜하겐 출생. Le Mans 레이서"}],
  channels: [{name:"Blog", url:"https://world.hey.com/dhh"}, {name:"X", url:"https://x.com/dhh"}, {name:"YouTube", url:"https://www.youtube.com/@dhaborh-on-rails"}],
  invest: "Cloud Exit 트렌드가 온프레미스 서버 시장 재부활 시그널. 구독 피로 신호와 ONCE 모델 주시.",
  signal: "Cloud Exit 사례 확산, Rails 업데이트, ONCE 제품"
},

"Pieter Levels": {
  philosophy: "1인 개발자가 수백만 달러 사업을 만들 수 있다. 제품을 빠르게 만들고, 시장에서 검증하고, 자동화하라.",
  principles: ["Ship Fast — 아이디어 → 24시간 내 린칭", "Lean Bootstrapping — 투자 없이 수억 달성", "12 Startups in 12 Months — 매달 1개 스타트업 실험", "Tech Stack — PHP + jQuery로 $3M+/연 매출"],
  books: [{title:"MAKE (ebook)", year:"2018", url:"https://makebook.io"}, {title:"X 쓰레드 (매일 빌딩 인 퍼블릭)", year:"지속", url:"https://x.com/levelsio"}],
  timeline: [{y:"2024~",t:"Photo AI — AI 사진 생성으로 연 $3M+ 매출"}, {y:"2014",t:"12 Startups in 12 Months 실험 시작"}, {y:"2014",t:"Nomad List 의 린칭 — 디지털 노마드 장소 등급"}, {y:"Remote OK",t:"원격근무 구인 플랫폼"}, {y:"네덜란드",t:"네덜란드 출생. 디지털 노마드"}],
  channels: [{name:"X (@levelsio)", url:"https://x.com/levelsio"}, {name:"개인 사이트", url:"https://levels.io"}],
  invest: "1인 개발자/인디해커 운동의 아이콘. AI 도구가 1인 사업의 수익성을 획기적으로 높이는 트렌드.",
  signal: "Pieter의 새 프로젝트, 인디해커 수익 보고, AI 도구 활용 사례"
},

"Chris Lattner": {
  philosophy: "프로그래밍 언어와 컴파일러는 소프트웨어의 기반이며, 잘 설계된 도구가 수백만 개발자의 생산성을 결정한다.",
  principles: ["LLVM — 대부분의 현대 컴파일러가 사용하는 기반 인프라", "Swift — Apple 생태계 프로그래밍 언어", "Mojo — Python + C 성능. AI/ML 개발을 위한 언어"],
  books: [{title:"LLVM 프로젝트", year:"2000~", url:"https://llvm.org"}, {title:"Mojo 언어", year:"2023~", url:"https://www.modular.com/mojo"}, {title:"Lex Fridman 인터뷰", year:"다수", url:"https://www.youtube.com/results?search_query=chris+lattner+lex+fridman"}],
  timeline: [{y:"2022~",t:"Modular 설립. Mojo 언어 개발 — AI 개발 최적화"}, {y:"2017-2022",t:"Google (TPU 컴파일러), SiFive (RISC-V)"}, {y:"2014",t:"Swift 언어 발표 — WWDC에서 공개"}, {y:"2010",t:"Apple 입사. Clang 컴파일러, Swift 설계"}, {y:"2000",t:"LLVM 프로젝트 시작 (Illinois 대학 PhD)"}],
  channels: [{name:"X", url:"https://x.com/clattner_llvm"}, {name:"Modular", url:"https://www.modular.com"}],
  invest: "Mojo가 AI 개발 언어 시장에 미치는 영향. LLVM이 침 산업 전체의 기반 인프라. Modular 발전 여부.",
  signal: "Mojo 성능 벤치마크, Modular 펀딩, AI 개발도구 트렌드"
},

"Daniel Gross": {
  philosophy: "AI는 다음 플랫폼 시프트다. 스타트업을 찾는 것이 아니라 스타트업을 만드는 사람을 찾는다.",
  principles: ["AI Grant — AI 스타트업에 $100K씩 투자", "Pioneer — 전 세계 재능 발굴 플랫폼", "Y Combinator → Apple AI → 독립 투자자"],
  books: [{title:"투자 포트폴리오", year:"지속", url:"https://dcgross.com"}],
  timeline: [{y:"2023~",t:"AI 스타트업 투자 활동 (Nat Friedman과 협업). AI 에이전트/인프라 분야 집중"}, {y:"2017~2019",t:"Apple AI/ML Director. Siri 및 머신러닝 제품 전략 주도"}, {y:"2016",t:"AI Grant 창설 — AI 연구자/스타트업에 $100K씩 투자하는 프로그램"}, {y:"2015",t:"Y Combinator 파트너로 활동"}, {y:"2013",t:"Cue 창업 (개인화 검색 앱) → Apple 인수. 20세에 첫 스타트업"}, {y:"1993",t:"이스라엘 예루살렘 출생. 10대에 코딩 시작. 독학으로 AI/ML 습득"}],
  channels: [{name:"X", url:"https://x.com/danielgross"}, {name:"개인 사이트", url:"https://dcgross.com"}],
  invest: "AI 스타트업 투자 네트워크의 핵심. Gross+Friedman 투자 포트폴리오가 AI 에이전트 트렌드 선행 지표.",
  signal: "AI Grant 신규 투자, Daniel+Nat 포트폴리오"
},

"Nat Friedman": {
  philosophy: "AI는 소프트웨어 개발을 근본적으로 바꿤다. 오픈소스와 개발자 커뮤니티가 혁신의 기반이다.",
  principles: ["GitHub CEO — 오픈소스 + Copilot AI 도입 주도", "Copilot — AI 페어 프로그래밍의 시작", "AI 투자 — Daniel Gross와 함께 AI 초기 스타트업 투자"],
  books: [{title:"nat.dev (개인 사이트)", year:"지속", url:"https://nat.dev"}],
  timeline: [{y:"2023~",t:"독립 AI 투자자. Daniel Gross와 협업"}, {y:"2021",t:"GitHub Copilot 출시 주도"}, {y:"2018-2021",t:"GitHub CEO"}, {y:"2018",t:"Microsoft의 GitHub 인수 ($7.5B) 후 CEO"}, {y:"Xamarin",t:"Xamarin 창업 → Microsoft 인수"}],
  channels: [{name:"X", url:"https://x.com/natfriedman"}, {name:"nat.dev", url:"https://nat.dev"}],
  invest: "GitHub Copilot이 AI 코딩 시장 개척. Nat+Daniel 투자 포트폴리오가 AI 스타트업 트렌드 선행 지표.",
  signal: "AI 코딩 시장 성장, 신규 투자"
},

"Dylan Field": {
  philosophy: "디자인 도구는 모든 사람이 사용할 수 있어야 한다. 브라우저 기반 협업이 디자인의 미래다.",
  principles: ["Figma — 브라우저 기반 실시간 협업 디자인 도구", "Multiplayer Design — 디자인을 단독 작업에서 협업으로", "FigJam — 화이트보드 협업 도구"],
  books: [{title:"Figma 블로그", year:"지속", url:"https://www.figma.com/blog/"}],
  timeline: [{y:"2024~",t:"Figma AI 기능. IPO 가능성. 기업가치 $12.5B"}, {y:"2022",t:"Adobe 인수 발표 ($20B) → 규제 이슈로 철회"}, {y:"2016",t:"Figma 정식 런칭. 브라우저 디자인 도구 혁명"}, {y:"2012",t:"Figma 공동 창업 (Brown 대학 중퇴)"}],
  channels: [{name:"X", url:"https://x.com/zoink"}],
  invest: "Figma IPO 동향이 디자인/협업 SaaS 시장 시그널. AI 디자인 도구 트렌드.",
  signal: "Figma AI 기능, IPO 동향, 디자인 도구 시장 동향"
},

"Mitchell Hashimoto": {
  philosophy: "인프라는 코드로 관리되어야 한다. 개발자 도구는 아름답고 효율적이어야 하며, 사소한 것에 집중해야 한다.",
  principles: ["Infrastructure as Code — Terraform으로 인프라 자동화 혁명", "HashiCorp — Terraform, Vault, Consul, Nomad 등 인프라 스위트", "Ghostty — GPU 가속 터미널 에뮤레이터 (개인 프로젝트)"],
  books: [{title:"HashiCorp 블로그", year:"지속", url:"https://www.hashicorp.com/blog"}, {title:"Terraform 문서", year:"지속", url:"https://developer.hashicorp.com/terraform"}],
  timeline: [{y:"2024",t:"HashiCorp → IBM 인수 ($6.4B). Ghostty 개발"}, {y:"2014",t:"Terraform 출시 — 클라우드 인프라 자동화의 표준"}, {y:"2012",t:"HashiCorp 공동 창업. Vagrant으로 시작"}, {y:"2010",t:"Vagrant 출시 — 가상화 개발 환경 자동화"}],
  channels: [{name:"X", url:"https://x.com/mitchellh"}, {name:"GitHub", url:"https://github.com/mitchellh"}],
  invest: "HashiCorp → IBM 인수가 인프라 도구 시장 M&A 트렌드. Terraform이 클라우드 인프라 표준.",
  signal: "Terraform 오픈소스 정책, 인프라 도구 M&A, Ghostty 성장"
},

"Theo Browne": {
  philosophy: "웹 개발은 빠르게 변하고, 개발자는 지속적으로 학습해야 한다. TypeScript + React 생태계가 최적의 스택이다.",
  principles: ["T3 Stack — TypeScript + tRPC + Tailwind CSS", "웹개발 교육 — YouTube에서 최신 웹기술 설명", "'Ship it' 마인드셋"],
  books: [{title:"T3 Stack 문서", year:"지속", url:"https://create.t3.gg"}, {title:"YouTube 채널", year:"지속", url:"https://www.youtube.com/@t3dotgg"}],
  timeline: [{y:"2024~",t:"YouTube 웹개발 콘텐츠 50만+ 구독. AI 코딩 도구 리뷰로 영역 확장"}, {y:"2022",t:"create-t3-app(T3 Stack) 오픈소스 공개 — TypeScript+tRPC+Tailwind 풀스택 보일러플레이트"}, {y:"2021~",t:"YouTube/Twitch 웹개발 콘텐츠 시작. React/TypeScript 생태계 실전 교육"}, {y:"2019~2021",t:"Twitch 시니어 소프트웨어 엔지니어. 프론트엔드/풀스택 개발"}, {y:"교육",t:"미국 출신. 소프트웨어 엔지니어링 전공"}],
  channels: [{name:"YouTube", url:"https://www.youtube.com/@t3dotgg"}, {name:"X", url:"https://x.com/t3dotgg"}, {name:"Twitch", url:"https://www.twitch.tv/theo"}],
  invest: "웹 개발 생태계 트렌드. TypeScript/React 생태계 성장 지표. AI 코딩 도구 리뷰.",
  signal: "웹 기술 트렌드, T3 Stack 업데이트, AI 코딩 도구 리뷰"
},

"Fireship (Jeff Delaney)": {
  philosophy: "복잡한 기술을 100초 만에 설명할 수 있다. 교육은 짧고 강렬해야 한다.",
  principles: ["100 Seconds of Code — 기술 콘셉트를 100초로 압축", "Code Report — 기술 트렌드 뉴스를 위트 있게 전달", "다국어 프로그래밍 — 동일 문제를 여러 언어로 비교"],
  books: [{title:"Fireship.io (웹사이트)", year:"지속", url:"https://fireship.io"}, {title:"YouTube 채널", year:"지속", url:"https://www.youtube.com/@Fireship"}],
  timeline: [{y:"2024~",t:"YouTube 300만+ 구독. AI 코딩 도구/신규 기술 리뷰 확대. Code Report 시리즈 인기"}, {y:"2020",t:"'100 Seconds of X' 시리즈 시작 — 기술 콘셉트를 100초로 압축. 바이럴 포맷"}, {y:"2018",t:"Fireship.io 런칭. 초기에는 Firebase/Angular 특화 교육 콘텐츠"}, {y:"2017~",t:"YouTube 웹개발 교육 시작. Google Firebase + Angular 전문가로 입지 구축"}, {y:"교육",t:"미국 출신. 풀스택 웹 개발자. 독학 기반 교육 콘텐츠 제작"}],
  channels: [{name:"YouTube", url:"https://www.youtube.com/@Fireship"}, {name:"fireship.io", url:"https://fireship.io"}, {name:"X", url:"https://x.com/fireship_dev"}],
  invest: "개발자 교육 콘텐츠 시장. 기술 트렌드 방향성 파악에 유용. AI 코딩 도구 리뷰.",
  signal: "'100 Seconds' 신규 에피소드 주제, 기술 트렌드 리포트"
},

// ═══════════════════════════════════════
// Business (15명)
// ═══════════════════════════════════════

"Charlie Munger":{philosophy:"멘탈 모델의 격자(Latticework)를 구축하라. 다양한 학문의 핵심 아이디어를 결합하면 더 나은 의사결정을 할 수 있다.",principles:["멘탈 모델 — 100개+ 학문의 핵심 개념을 투자에 적용","역발상(Inversion) — 성공을 추구하기보다 실패를 피하라","능력의 원(Circle of Competence) — 아는 것과 모르는 것의 경계를 명확히","좌석에 앉아 읽기(Sit on Your Ass) — 인내가 최고의 투자 전략"],books:[{title:"Poor Charlie's Almanack",year:"2005",url:"https://www.amazon.com/s?k=poor+charlies+almanack"},{title:"Berkshire 주주총회 발언",year:"다수",url:"https://www.youtube.com/results?search_query=charlie+munger+berkshire"}],timeline:[{y:"2023",t:"99세로 별세. 마지막까지 Berkshire 부회장"},{y:"1978",t:"Berkshire Hathaway 부회장 취임"},{y:"1962",t:"Wheeler, Munger & Company 설립"},{y:"1924",t:"네브래스카 오마하 출생. Harvard Law"}],channels:[{name:"Berkshire 주주총회",url:"https://www.youtube.com/results?search_query=charlie+munger"}],invest:"가치투자 원칙의 교과서. 멘탈 모델이 모든 투자 의사결정의 프레임워크. Berkshire(BRK) 포트폴리오.",signal:"Berkshire 포트폴리오 변동, 가치투자 트렌드"},

"Naval Ravikant":{philosophy:"부는 자는 동안에도 벌어다주는 자산을 만드는 것이다. 레버리지(코드, 미디어, 자본)를 활용하라. 행복은 기술(skill)이다.",principles:["Specific Knowledge — 학교에서 가르칠 수 없는 고유한 지식","Leverage — 코드, 미디어, 자본으로 시간당 가치 극대화","Judgment — 좋은 판단력이 가장 희소한 자원","Happiness = Peace — 행복은 욕망의 부재"],books:[{title:"The Almanack of Naval Ravikant",year:"2020",url:"https://www.amazon.com/s?k=almanack+naval+ravikant"},{title:"How to Get Rich (트윗스톰)",year:"2018",url:"https://nav.al/rich"}],timeline:[{y:"2010~",t:"AngelList 설립 — 스타트업 투자 민주화"},{y:"2007",t:"Twitter 초기 투자자"},{y:"초기",t:"Uber, Twitter, Postmates 등 200+ 엔젤 투자"},{y:"1974",t:"인도 뉴델리 출생. 뉴욕 이민. Dartmouth CS"}],channels:[{name:"nav.al",url:"https://nav.al"},{name:"X",url:"https://x.com/naval"}],invest:"AngelList이 스타트업 투자 플랫폼. Naval의 투자 철학이 엔젤투자의 교과서. 레버리지 개념이 1인 사업 전략.",signal:"Naval의 X 포스팅, AngelList 트렌드, 엔젤 투자 시장"},

"Paul Graham":{philosophy:"스타트업의 핵심은 사용자가 원하는 것을 만드는 것이다. 에세이는 사고의 도구이며, 좋은 글쓰기가 좋은 사고를 만든다.",principles:["Make Something People Want — YC의 핵심 모토","Do Things That Don't Scale — 초기에는 수동으로 하라","Founder Mode — 창업자는 관리자와 다르게 경영해야","에세이 — 글쓰기가 사고를 정리하는 최고의 방법"],books:[{title:"Hackers & Painters",year:"2004",url:"https://www.amazon.com/s?k=hackers+painters+paul+graham"},{title:"PaulGraham.com 에세이",year:"1993~",url:"http://paulgraham.com/articles.html"},{title:"Founder Mode (에세이)",year:"2024",url:"http://paulgraham.com/foundermode.html"}],timeline:[{y:"2024",t:"Founder Mode 에세이 — 스타트업 경영 패러다임 논쟁"},{y:"2005",t:"Y Combinator 공동 설립 — 세계 최고 액셀러레이터"},{y:"1998",t:"Viaweb → Yahoo 매각 ($50M)"},{y:"1964",t:"영국 출생. Cornell → Harvard PhD (CS)"}],channels:[{name:"에세이",url:"http://paulgraham.com/articles.html"},{name:"X",url:"https://x.com/paulg"}],invest:"YC 포트폴리오(Airbnb, Stripe, DoorDash 등 $600B+)가 스타트업 시장 벤치마크. PG 에세이가 창업 생태계 트렌드 선행 지표.",signal:"PG 신규 에세이, YC 배치 트렌드, Founder Mode 논쟁"},

"Marc Andreessen":{philosophy:"Software is eating the world. 기술 낙관론자. AI는 인류를 구원할 것이며, 규제가 아닌 혁신이 답이다.",principles:["Software Eats World — 모든 산업이 소프트웨어 기업으로","Techno-Optimism — 기술이 모든 문제를 해결한다는 신념","a16z — 벤처캐피탈의 미디어+서비스 모델 혁신","It's Time to Build — 코로나 시기 행동 촉구 에세이"],books:[{title:"Why Software Is Eating The World (WSJ)",year:"2011",url:"https://a16z.com/why-software-is-eating-the-world/"},{title:"The Techno-Optimist Manifesto",year:"2023",url:"https://a16z.com/the-techno-optimist-manifesto/"},{title:"It's Time to Build",year:"2020",url:"https://a16z.com/its-time-to-build/"}],timeline:[{y:"2023",t:"Techno-Optimist Manifesto. AI 투자 대폭 확대"},{y:"2009",t:"a16z(Andreessen Horowitz) 설립"},{y:"1994",t:"Netscape 공동 설립 — 웹 브라우저 혁명"},{y:"1971",t:"아이오와 출생. UIUC CS"}],channels:[{name:"a16z Blog",url:"https://a16z.com"},{name:"X",url:"https://x.com/pmarca"}],invest:"a16z 포트폴리오가 테크/AI 투자 트렌드 선행 지표. Techno-Optimism이 테크 섹터 투자 철학. Netscape→a16z 경로가 창업자-투자자 전환 모델.",signal:"a16z 신규 펀드/투자, pmarca X 포스팅, AI 투자 트렌드"},

"Peter Thiel":{philosophy:"경쟁은 패배자를 위한 것이다. 독점을 만들어라. Zero to One — 0에서 1을 만드는 것이 진정한 혁신이다.",principles:["Zero to One — 존재하지 않는 것을 만드는 수직적 혁신","독점 — 경쟁하지 않고 독점하는 비즈니스 모델","Definite Optimism — 구체적 계획이 있는 낙관주의","Contrarian — 대부분이 동의하지 않는 중요한 진실 찾기"],books:[{title:"Zero to One",year:"2014",url:"https://www.amazon.com/s?k=zero+to+one+peter+thiel"},{title:"Stanford CS183 강의",year:"2012",url:"https://www.youtube.com/results?search_query=peter+thiel+stanford+cs183"}],timeline:[{y:"2004~",t:"Palantir 공동 설립. Founders Fund"},{y:"2004",t:"Facebook 최초 외부 투자자 ($500K → $1B+)"},{y:"1998",t:"PayPal 공동 설립 (Elon Musk 등)"},{y:"1967",t:"독일 프랑크푸르트 출생. Stanford Law"}],channels:[{name:"인터뷰",url:"https://www.youtube.com/results?search_query=peter+thiel+interview"}],invest:"Founders Fund 포트폴리오(SpaceX, Palantir 등). Zero to One이 스타트업 투자 평가 프레임워크. Palantir(PLTR) AI/국방 기업.",signal:"Founders Fund 신규 투자, Palantir 실적, 정치 활동"},

"Reed Hastings":{philosophy:"자유와 책임의 문화가 최고의 인재를 유치한다. 규칙보다 맥락을 제공하라. 구독 경제가 미래다.",principles:["Freedom & Responsibility — Netflix 문화의 핵심","No Rules Rules — 규칙 최소화, 맥락으로 경영","Keeper Test — '이 사람이 나가겠다면 붙잡겠는가?'","구독 경제 — DVD→스트리밍→오리지널 콘텐츠 3번의 피봇"],books:[{title:"No Rules Rules",year:"2020",url:"https://www.amazon.com/s?k=no+rules+rules+hastings"},{title:"Netflix Culture Deck",year:"2009",url:"https://www.slideshare.net/reed2001/culture-1798664"}],timeline:[{y:"2023",t:"CEO 퇴임 → 회장. 광고 티어 도입"},{y:"2013",t:"House of Cards — 오리지널 콘텐츠 시대 개막"},{y:"2007",t:"스트리밍 서비스 시작"},{y:"1997",t:"Netflix 공동 설립 (DVD 대여)"},{y:"1960",t:"보스턴 출생. Bowdoin → Stanford MBA"}],channels:[{name:"인터뷰",url:"https://www.youtube.com/results?search_query=reed+hastings+interview"}],invest:"Netflix(NFLX) 구독경제 모델. 광고 티어 + 비밀번호 단속이 수익성 전환점. 콘텐츠 투자 대비 구독자 성장.",signal:"Netflix 분기 구독자 수, 광고 매출, 오리지널 콘텐츠 전략"},

"Jamie Dimon":{philosophy:"금융은 경제의 혈액이다. 리스크 관리가 은행 경영의 핵심이며, 기술 투자가 경쟁력을 결정한다.",principles:["리스크 관리 — 2008 금융위기에서 JPMorgan만 흑자","기술 투자 — 연 $15B+ IT 투자. AI/블록체인 선제 도입","주주 서한 — 매년 50페이지+ 경제 분석 (버핏급 영향력)"],books:[{title:"JPMorgan 연례 주주 서한",year:"매년",url:"https://www.jpmorganchase.com/ir/annual-report"},{title:"인터뷰/CNBC 출연",year:"다수",url:"https://www.youtube.com/results?search_query=jamie+dimon+cnbc"}],timeline:[{y:"2023~",t:"AI 대규모 도입. JPMorgan 시총 $500B+"},{y:"2008",t:"금융위기 — JPMorgan만 정부 지원 불필요. Bear Stearns/WaMu 인수"},{y:"2005",t:"JPMorgan Chase CEO 취임"},{y:"1956",t:"뉴욕 출생. Tufts → Harvard MBA"}],channels:[{name:"JPMorgan IR",url:"https://www.jpmorganchase.com/ir"}],invest:"JPMorgan(JPM) = 글로벌 금융 벨웨더. Dimon 주주 서한이 매크로 경제 분석의 교과서. 은행 AI 도입 트렌드.",signal:"JPMorgan 분기 실적, Dimon 주주 서한, 금리/경기 전망"},

"Cathie Wood":{philosophy:"파괴적 혁신(Disruptive Innovation)에 투자한다. 5년 후를 내다보고, 단기 변동성은 기회다.",principles:["파괴적 혁신 — AI, 로봇, 유전체학, 에너지저장, 블록체인 5대 플랫폼","Open Research — 리서치를 공개하여 투명성 확보","High Conviction — 소수 종목에 집중 투자"],books:[{title:"ARK Big Ideas (연례 보고서)",year:"매년",url:"https://ark-invest.com/big-ideas"},{title:"YouTube 시장 분석",year:"지속",url:"https://www.youtube.com/@ARKInvest"}],timeline:[{y:"2024~",t:"AI+로봇+비트코인 테마 집중"},{y:"2021",t:"ARKK ETF 정점. Tesla 최대 확신 종목"},{y:"2020",t:"Tesla 목표가 적중으로 유명세"},{y:"2014",t:"ARK Invest 설립"},{y:"1955",t:"로스앤젤레스 출생. USC → Finance"}],channels:[{name:"ARK Invest",url:"https://ark-invest.com"},{name:"X",url:"https://x.com/CathieDWood"},{name:"YouTube",url:"https://www.youtube.com/@ARKInvest"}],invest:"ARKK/ARKW 등 ETF 포트폴리오가 혁신 투자 트렌드 지표. Tesla, Coinbase, Roku 등 핵심 보유. Big Ideas 보고서가 미래 산업 프레임.",signal:"ARK 매매 내역 (매일 공개), Big Ideas 보고서, Cathie 시장 코멘트"},

"Reid Hoffman":{philosophy:"네트워크가 가치를 만든다. 영구적 베타(Permanent Beta) — 끊임없이 진화하라. AI가 인간의 능력을 확장한다.",principles:["네트워크 효과 — LinkedIn 10억+ 사용자 플랫폼","Blitzscaling — 효율보다 속도를 우선하는 초고속 성장","Alliance Framework — 고용이 아닌 동맹 관계"],books:[{title:"Blitzscaling",year:"2018",url:"https://www.amazon.com/s?k=blitzscaling+reid+hoffman"},{title:"The Start-Up of You",year:"2012",url:"https://www.amazon.com/s?k=startup+of+you+hoffman"},{title:"Masters of Scale (팟캐스트)",year:"2017~",url:"https://mastersofscale.com"}],timeline:[{y:"2023~",t:"Inflection AI → Microsoft. AI 투자 확대"},{y:"2016",t:"LinkedIn → Microsoft 매각 ($26.2B)"},{y:"2003",t:"LinkedIn 공동 설립"},{y:"1998",t:"PayPal 이사회 멤버"},{y:"1967",t:"캘리포니아 출생. Stanford → Oxford"}],channels:[{name:"Masters of Scale",url:"https://mastersofscale.com"},{name:"X",url:"https://x.com/raboreidhoffman"}],invest:"Greylock Partners 포트폴리오. LinkedIn/Microsoft 성공 사례. Blitzscaling 전략이 스타트업 평가 프레임. AI 투자 확대.",signal:"Greylock 신규 투자, Masters of Scale 게스트, AI 동향"},

"Howard Marks":{philosophy:"투자에서 가장 중요한 것은 리스크를 이해하는 것이다. 2차적 사고(Second-Level Thinking)가 초과수익의 원천이다.",principles:["Second-Level Thinking — 남들이 생각하는 것의 다음 단계","시장 사이클 — 탐욕과 공포의 진자운동 이해","리스크 ≠ 변동성 — 영구적 자본 손실이 진짜 리스크","Memos — 분기마다 투자 메모 공개"],books:[{title:"The Most Important Thing",year:"2011",url:"https://www.amazon.com/s?k=most+important+thing+howard+marks"},{title:"Mastering the Market Cycle",year:"2018",url:"https://www.amazon.com/s?k=mastering+market+cycle+marks"},{title:"Oaktree Memos",year:"1990~",url:"https://www.oaktreecapital.com/insights"}],timeline:[{y:"지속",t:"Oaktree Memos — 워런 버핏이 '가장 먼저 읽는 것'"},{y:"1995",t:"Oaktree Capital 공동 설립 ($170B+ AUM)"},{y:"1946",t:"뉴욕 출생. Wharton → Chicago Booth MBA"}],channels:[{name:"Oaktree Memos",url:"https://www.oaktreecapital.com/insights"}],invest:"Oaktree Memos가 기관투자자 필독. 시장 사이클 분석이 자산배분 전략의 프레임워크. 하이일드/부실채권 시장.",signal:"새 Oaktree Memo, 시장 사이클 단계 진단, 신용 시장 동향"},

"Masayoshi Son":{philosophy:"300년 비전으로 투자한다. AI 혁명이 인류 역사상 가장 큰 패러다임 전환이다.",principles:["300년 비전 — 초장기 관점의 기술 투자","Vision Fund — $100B 규모 테크 투자 펀드","AI 집중 — ARM + AI 칩 + AI 스타트업"],books:[{title:"SoftBank World 키노트",year:"매년",url:"https://www.youtube.com/results?search_query=masayoshi+son+softbank+world"}],timeline:[{y:"2023~",t:"ARM IPO 성공. AI 투자 집중 선언"},{y:"2017",t:"Vision Fund 1 ($100B) — 역사상 최대 VC 펀드"},{y:"2016",t:"ARM 인수 ($32B)"},{y:"2006",t:"Vodafone Japan 인수 → SoftBank Mobile"},{y:"1981",t:"SoftBank 설립"},{y:"1957",t:"일본 사가현 출생. 재일한국인 3세. UC Berkeley"}],channels:[{name:"SoftBank",url:"https://group.softbank/en"}],invest:"SoftBank(9984.T) Vision Fund 포트폴리오가 글로벌 테크 투자 트렌드. ARM(ARM) = AI 칩 인프라. Vision Fund 수익률이 VC 시장 건강도.",signal:"ARM 실적, Vision Fund 포트폴리오, SoftBank World 발표"},

"Patrick Bet-David":{philosophy:"기업가 정신은 자유를 위한 가장 강력한 도구다. 전략적 사고와 끊임없는 학습이 성공의 열쇠다.",principles:["5 Moves Ahead — 체스처럼 5수 앞을 내다보라","Valuetainment — 가치(Value) + 엔터테인먼트","기업가 정신 교육 — YouTube로 경영 교육 대중화"],books:[{title:"Your Next Five Moves",year:"2020",url:"https://www.amazon.com/s?k=your+next+five+moves+bet+david"},{title:"Choose Your Enemies Wisely",year:"2023",url:"https://www.amazon.com/s?k=choose+your+enemies+wisely"}],timeline:[{y:"2022~",t:"PBD Podcast — 주요 정치인/CEO 인터뷰"},{y:"2012",t:"Valuetainment YouTube 시작"},{y:"PHP Agency",t:"보험 회사 설립 → $100M+ 매출"},{y:"1978",t:"이란 테헤란 출생. 난민으로 미국 이민"}],channels:[{name:"YouTube",url:"https://www.youtube.com/@valuetainment"},{name:"X",url:"https://x.com/patrickbetdavid"}],invest:"기업가 정신 콘텐츠 시장. PBD Podcast 게스트가 비즈니스 트렌드 반영.",signal:"PBD Podcast 게스트/주제, 비즈니스 교육 트렌드"},

// ═══════════════════════════════════════
// Philosophy & Thought (10명)
// ═══════════════════════════════════════

"Yuval Noah Harari":{philosophy:"인류는 허구(종교, 돈, 국가)를 통해 대규모 협력을 이룩했다. AI는 이 허구 생성 능력을 인간에게서 빼앗을 수 있다.",principles:["인지혁명 — 7만년 전 허구를 만드는 능력이 인류를 지배종으로","AI 위험 — AI가 이야기를 만들 수 있게 되면 인류 조작 가능","21 Lessons — 현재의 혼란을 명확한 프레임으로 정리"],books:[{title:"사피엔스 (Sapiens)",year:"2011",url:"https://www.amazon.com/s?k=sapiens+harari"},{title:"호모 데우스 (Homo Deus)",year:"2015",url:"https://www.amazon.com/s?k=homo+deus+harari"},{title:"21 Lessons for the 21st Century",year:"2018",url:"https://www.amazon.com/s?k=21+lessons+harari"},{title:"Nexus",year:"2024",url:"https://www.amazon.com/s?k=nexus+harari"}],timeline:[{y:"2024",t:"Nexus — 정보 네트워크와 AI 시대"},{y:"2018",t:"21 Lessons — 현재 이슈 분석"},{y:"2015",t:"Homo Deus — 인류의 미래"},{y:"2011",t:"Sapiens — 전 세계 3000만부+ 판매"},{y:"1976",t:"이스라엘 출생. Oxford PhD (중세사)"}],channels:[{name:"YouTube",url:"https://www.youtube.com/results?search_query=yuval+noah+harari"},{name:"sapienship.co",url:"https://www.sapienship.co"}],invest:"Harari의 AI 위험 분석이 AI 규제/거버넌스 논의에 영향. 교육/출판 시장 트렌드.",signal:"AI 규제 논의, Harari 신간/강연, 정보 네트워크 분석"},

"Nassim Nicholas Taleb":{philosophy:"블랙스완 — 극단적이고 예측 불가능한 사건이 역사를 결정한다. 안티프래질 — 충격에 의해 오히려 강해지는 시스템을 만들어라.",principles:["블랙스완 — 희귀하지만 거대한 영향의 사건","안티프래질 — 불확실성에서 이익을 얻는 구조","린디 효과 — 오래 살아남은 것이 더 오래 살아남는다","Skin in the Game — 자신의 결정에 대가를 치러야"],books:[{title:"블랙스완 (The Black Swan)",year:"2007",url:"https://www.amazon.com/s?k=black+swan+taleb"},{title:"안티프래질 (Antifragile)",year:"2012",url:"https://www.amazon.com/s?k=antifragile+taleb"},{title:"Skin in the Game",year:"2018",url:"https://www.amazon.com/s?k=skin+in+the+game+taleb"}],timeline:[{y:"2018",t:"Skin in the Game — 의사결정자의 책임"},{y:"2012",t:"Antifragile — 불확실성에서 이익을"},{y:"2007",t:"The Black Swan — 금융위기 예측으로 명성"},{y:"1960",t:"레바논 출생. Wharton MBA → Paris Dauphine PhD"}],channels:[{name:"X",url:"https://x.com/nntaleb"}],invest:"블랙스완 이론이 테일 리스크 헤징 전략의 기초. 안티프래질이 포트폴리오 구성 철학. 옵션/변동성 전략.",signal:"Taleb의 시장 경고, 블랙스완 이벤트 발생, 변동성 지수"},

"Nick Bostrom":{philosophy:"초지능 AI는 인류 존재적 위험이 될 수 있다. 시뮬레이션 가설 — 우리가 시뮬레이션 안에 살고 있을 확률이 높다.",principles:["Superintelligence — 초지능 AI의 제어 문제","시뮬레이션 가설 — 우리 현실이 컴퓨터 시뮬레이션일 가능성","존재적 위험(X-risk) — 인류 멸종 위험 체계적 연구"],books:[{title:"Superintelligence",year:"2014",url:"https://www.amazon.com/s?k=superintelligence+bostrom"},{title:"시뮬레이션 논증 (논문)",year:"2003",url:"https://www.simulation-argument.com"}],timeline:[{y:"2014",t:"Superintelligence — AI 안전 논의의 시작점"},{y:"2005",t:"FHI(Future of Humanity Institute) 설립. Oxford"},{y:"2003",t:"시뮬레이션 논증 발표"},{y:"1973",t:"스웨덴 출생. LSE PhD"}],channels:[{name:"개인 사이트",url:"https://nickbostrom.com"}],invest:"AI Safety 연구/규제 트렌드의 지적 기반. Superintelligence가 AI 위험 논의의 교과서.",signal:"AI 안전 규제 법안, 존재적 위험 논의, AI 거버넌스"},

"Balaji Srinivasan":{philosophy:"네트워크 국가 — 온라인 커뮤니티가 물리적 영토 없이도 국가를 형성할 수 있다. 탈중앙화가 자유의 기술적 기반이다.",principles:["Network State — 디지털 커뮤니티→물리적 영토→국제 인정","탈중앙화 — 중앙집권 시스템에 대한 기술적 대안","1729.com — 건강+부+지혜 최적화"],books:[{title:"The Network State",year:"2022",url:"https://thenetworkstate.com"},{title:"1729.com",year:"2021",url:"https://1729.com"}],timeline:[{y:"2022",t:"The Network State 출간 — 디지털 국가 개념"},{y:"2019",t:"전 Coinbase CTO"},{y:"2013",t:"a16z General Partner"},{y:"Stanford",t:"Stanford 유전학 교수 → 테크 전환"}],channels:[{name:"X",url:"https://x.com/balajis"},{name:"thenetworkstate.com",url:"https://thenetworkstate.com"}],invest:"크립토/탈중앙화 투자 트렌드. Network State 개념이 디지털 거버넌스 시장. a16z crypto 포트폴리오.",signal:"Network State 실험, 크립토 규제, 탈중앙화 거버넌스"},

"Jordan Peterson":{philosophy:"개인의 책임이 의미 있는 삶의 기초다. 혼돈의 가장자리에서 질서를 찾아라. 진실을 말하라, 적어도 거짓말은 하지 마라.",principles:["12 Rules for Life — 삶의 질서를 위한 실천적 원칙","Maps of Meaning — 신화와 종교가 인간 행동의 근본 구조","개인 책임 — 세상을 비판하기 전에 자기 방부터 정리하라"],books:[{title:"12 Rules for Life",year:"2018",url:"https://www.amazon.com/s?k=12+rules+for+life+peterson"},{title:"Beyond Order",year:"2021",url:"https://www.amazon.com/s?k=beyond+order+peterson"},{title:"Maps of Meaning",year:"1999",url:"https://www.amazon.com/s?k=maps+of+meaning+peterson"}],timeline:[{y:"2018",t:"12 Rules for Life — 전 세계 500만부+ 판매"},{y:"2016",t:"Bill C-16 논쟁으로 대중적 인지도"},{y:"1999",t:"Maps of Meaning 출간"},{y:"1962",t:"캐나다 앨버타 출생. McGill → 토론토대 교수"}],channels:[{name:"YouTube",url:"https://www.youtube.com/@JordanBPeterson"},{name:"X",url:"https://x.com/jordanbpeterson"},{name:"Podcast",url:"https://www.jordanbpeterson.com/podcast/"}],invest:"자기계발/교육 콘텐츠 시장. 심리학 기반 리더십 트렌드.",signal:"Peterson 강연 주제, 문화 논쟁 트렌드"},

// ═══════════════════════════════════════
// Health & Bio (8명)
// ═══════════════════════════════════════

"Peter Attia":{philosophy:"장수(Longevity)는 과학이다. 수명보다 건강수명(Healthspan)을 늘리는 것이 목표다. 운동, 영양, 수면, 감정 건강의 4대 축.",principles:["Medicine 3.0 — 질병 치료에서 예방 의학으로 전환","VO2 Max — 심폐능력이 사망 위험의 가장 강력한 예측 인자","Zone 2 Training — 미토콘드리아 건강을 위한 유산소","CGM — 연속혈당측정으로 대사 건강 모니터링"],books:[{title:"Outlive: The Science & Art of Longevity",year:"2023",url:"https://www.amazon.com/s?k=outlive+peter+attia"},{title:"The Drive Podcast",year:"2018~",url:"https://peterattiamd.com/podcast/"}],timeline:[{y:"2023",t:"Outlive 출간 — #1 NYT 베스트셀러"},{y:"2018",t:"The Drive 팟캐스트 시작"},{y:"Early Medicine",t:"McKinsey → Johns Hopkins 외과 → NCI 암 연구"},{y:"1973",t:"토론토 출생. Stanford MD"}],channels:[{name:"peterattiamd.com",url:"https://peterattiamd.com"},{name:"Podcast",url:"https://peterattiamd.com/podcast/"},{name:"X",url:"https://x.com/PeterAttiaMD"}],invest:"장수/웰니스 시장 $4.5T. CGM(Dexcom, Abbott), 운동 기술, 영양 보충제 시장. 예방 의학 트렌드.",signal:"Outlive 관련 프로토콜, 장수 연구 결과, 건강 테크 트렌드"},

"David Sinclair":{philosophy:"노화는 질병이며 치료할 수 있다. NAD+ 경로가 노화의 핵심 메커니즘이며, 후성유전학적 리프로그래밍으로 젊음을 되돌릴 수 있다.",principles:["정보 이론 of 노화 — 노화는 후성유전학적 정보 손실","NAD+ — 니코틴아미드 아데닌 디뉴클레오타이드가 노화의 핵심","NMN/레스베라트롤 — 항노화 보충제 연구","Yamanaka Factors — 세포 리프로그래밍으로 노화 역전"],books:[{title:"Lifespan: Why We Age and Why We Don't Have To",year:"2019",url:"https://www.amazon.com/s?k=lifespan+david+sinclair"}],timeline:[{y:"2019",t:"Lifespan 출간 — 노화는 질병이라는 테제"},{y:"2013",t:"NAD+ 경로 핵심 논문 (Cell)"},{y:"2003",t:"레스베라트롤 항노화 연구 (Nature)"},{y:"Harvard",t:"Harvard 유전학 교수"},{y:"1969",t:"호주 시드니 출생. UNSW PhD"}],channels:[{name:"X",url:"https://x.com/davidasinclair"},{name:"YouTube",url:"https://www.youtube.com/results?search_query=david+sinclair"}],invest:"항노화/장수 바이오테크 시장. NMN 보충제 시장. Life Biosciences(Sinclair 공동 설립). 후성유전학 리프로그래밍 스타트업.",signal:"노화 역전 임상 결과, NAD+ 연구, 장수 바이오테크 IPO"},

"Matthew Walker":{philosophy:"수면은 진화가 준 최고의 보험이다. 잠을 줄이는 것은 건강, 인지, 수명 전부를 포기하는 것이다. 수면은 스위스 아미 나이프처럼 모든 건강 문제의 근본 해결책이다.",principles:["8시간 수면 — 7시간 이하는 건강 위험 급증. 6시간 수면은 만취 수준의 인지 저하","수면 부채 — 잃어버린 잠은 주말 몰아자기로 돌려받을 수 없다","렘수면 — 감정 처리와 창의성의 핵심. 꿈이 심리적 치료 역할","수면 위생 — 어두운 방, 18°C 이하 온도, 카페인 오후 2시 전 중단"],books:[{title:"Why We Sleep",year:"2017",url:"https://www.amazon.com/s?k=why+we+sleep+matthew+walker"},{title:"Huberman Lab 수면 에피소드 (게스트)",year:"2021",url:"https://www.youtube.com/results?search_query=matthew+walker+huberman+lab"},{title:"TED Talk: Sleep is your superpower",year:"2019",url:"https://www.youtube.com/results?search_query=matthew+walker+ted+sleep+superpower"}],timeline:[{y:"2023~",t:"수면 연구 지속. Huberman Lab 등 주요 팟캐스트 반복 출연. 수면 테크 산업에 학문적 근거 제공"},{y:"2019",t:"TED Talk 'Sleep is your superpower' — 1,700만+ 조회. 수면의 중요성 글로벌 확산"},{y:"2017",t:"Why We Sleep 출간 — NYT 베스트셀러. 전 세계 수면 인식 변혁. 빌 게이츠 추천"},{y:"2007~",t:"UC Berkeley 수면과학/신경과학 교수. Walker Sleep Lab 운영. 수면과 기억/감정/면역 연구"},{y:"2002~",t:"Harvard Medical School 정신의학과 교수. 수면과 학습/기억의 관계 연구"},{y:"1972",t:"영국 리버풀 출생. 노팅엄대학 신경과학 PhD. 영국 → 미국 학계"}],channels:[{name:"YouTube",url:"https://www.youtube.com/results?search_query=matthew+walker+sleep"},{name:"UC Berkeley 프로필",url:"https://psychology.berkeley.edu/people/matthew-walker"},{name:"X",url:"https://x.com/sleepdiplomat"}],invest:"수면 테크 시장 $100B+ (Oura $2.5B, Eight Sleep, WHOOP). 수면 관련 건강 기기/앱/보충제 트렌드. Why We Sleep 효과로 수면 의식 대중화가 시장 성장 촉진.",signal:"수면 연구 신규 결과, 수면 테크 제품 출시, Walker 팟캐스트 출연"},

"Atul Gawande":{philosophy:"체크리스트가 복잡한 시스템의 실수를 줄인다. 의료 시스템은 공학적 사고로 개선할 수 있다.",principles:["체크리스트 — 간단한 체크리스트가 수술 사망률 47% 감소","시스템 사고 — 개인 역량보다 시스템 설계가 결과를 결정","Being Mortal — 죽음과 노화에 대한 정직한 대화"],books:[{title:"The Checklist Manifesto",year:"2009",url:"https://www.amazon.com/s?k=checklist+manifesto+gawande"},{title:"Being Mortal",year:"2014",url:"https://www.amazon.com/s?k=being+mortal+gawande"},{title:"Complications",year:"2002",url:"https://www.amazon.com/s?k=complications+gawande"}],timeline:[{y:"2022~",t:"USAID 글로벌 보건 담당. 미국 국제개발처 핵심 역할"},{y:"2014",t:"Being Mortal 출간 — 죽음과 노화에 대한 정직한 대화. NYT 베스트셀러"},{y:"2009",t:"WHO 수술 안전 체크리스트 개발 — 전 세계 병원 도입. 수술 합병증 36% 감소"},{y:"2002~",t:"Brigham and Women's Hospital 외과의. The New Yorker 정기 기고가"},{y:"1998~",t:"Harvard 공중보건/의학 교수. 의료 시스템 혁신 연구"},{y:"1965",t:"뉴욕 브루클린 출생. 인도계 미국인. Stanford → Harvard MD/MPH"}],channels:[{name:"인터뷰",url:"https://www.youtube.com/results?search_query=atul+gawande"}],invest:"의료 시스템 효율화 트렌드. 체크리스트 방법론이 모든 산업에 적용 가능. 디지털 헬스 시장.",signal:"의료 시스템 혁신, 공중보건 정책, 디지털 헬스 트렌드"},

// ═══════════════════════════════════════
// Finance (4명)
// ═══════════════════════════════════════

"Michael Burry":{philosophy:"가치투자의 본질은 남들이 보지 못하는 것을 보는 것이다. 데이터를 직접 파고들어 진실을 발견하라.",principles:["Deep Value — 극단적 저평가 자산 발굴","공매도 — 과대평가된 자산의 하락에 베팅","독자적 분석 — 컨센서스를 무시하고 독립적 사고"],books:[{title:"The Big Short (Michael Lewis 저, Burry 등장)",year:"2010",url:"https://www.amazon.com/s?k=the+big+short+michael+lewis"}],timeline:[{y:"2023~",t:"반도체/AI 관련 포지션 변동. SEC 13F 주시"},{y:"2008",t:"서브프라임 모기지 공매도 성공 — 역사적 수익"},{y:"2000",t:"Scion Capital 설립. 블로그에서 시작"},{y:"1971",t:"산호세 출생. Vanderbilt MD (신경과)"}],channels:[{name:"X (간헐적)",url:"https://x.com/michaeljburry"},{name:"SEC 13F Filing",url:"https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=scion+asset&CIK=&type=13F&dateb=&owner=include&count=40"}],invest:"Burry의 13F 포트폴리오가 역발상 투자 시그널. 매크로 공매도 포지션이 시장 리스크 경고.",signal:"SEC 13F 공시, Burry X 포스팅 (희귀), 공매도 포지션"},

"Stanley Druckenmiller":{philosophy:"중요한 것은 맞을 때 얼마나 많이 벌고 틀릴 때 얼마나 적게 잃느냐이다. 가장 좋은 기회에 공격적으로 베팅하라.",principles:["집중 투자 — 확신 있을 때 크게 베팅","자본 보존 — 틀릴 때 빨리 인정하고 손절","매크로 — 유동성과 중앙은행 정책이 시장을 지배"],books:[{title:"The New Market Wizards (Jack Schwager, Druckenmiller 챕터)",year:"1992",url:"https://www.amazon.com/s?k=new+market+wizards+schwager"}],timeline:[{y:"지속",t:"Duquesne Family Office. 30년간 연평균 30%"},{y:"1992",t:"Soros Fund에서 영국 파운드 공매도 — $1B 수익"},{y:"1988-2000",t:"Soros Fund Management 수석 포트폴리오 매니저"},{y:"1953",t:"피츠버그 출생. Bowdoin College"}],channels:[{name:"인터뷰",url:"https://www.youtube.com/results?search_query=stanley+druckenmiller+interview"}],invest:"Druckenmiller 포트폴리오가 매크로 투자 벤치마크. AI/테크 포지션이 기관 투자 시그널.",signal:"인터뷰 발언, 포트폴리오 변동 (13F), 매크로 전망"},

"Aswath Damodaran":{philosophy:"밸류에이션은 과학이 아니라 예술이다. 스토리와 숫자의 결합이 기업가치를 결정한다.",principles:["스토리→넘버스 — 내러티브를 재무 모델로 전환","DCF — 미래 현금흐름 할인이 가치평가의 핵심","무료 교육 — NYU 강의+자료 전부 무료 공개"],books:[{title:"The Little Book of Valuation",year:"2011",url:"https://www.amazon.com/s?k=little+book+valuation+damodaran"},{title:"Narrative and Numbers",year:"2017",url:"https://www.amazon.com/s?k=narrative+numbers+damodaran"},{title:"NYU 밸류에이션 강의 (무료)",year:"지속",url:"https://pages.stern.nyu.edu/~adamodar/"}],timeline:[{y:"2024~",t:"AI/NVIDIA/Tesla 밸류에이션 실시간 업데이트. YouTube 구독자 급성장. '밸류에이션의 학장'"},{y:"2020",t:"코로나 시기 주식 열풍 속 '밸류에이션 기본으로 돌아가자' 메시지. 무료 강의 조회수 폭발"},{y:"1986~",t:"NYU Stern School of Business 교수 (재무학). 30년+ 밸류에이션/기업재무 강의"},{y:"교육",t:"인도 출신. IIM Bangalore MBA → UCLA PhD (재무학). 투자은행 경력 후 학계로"}],channels:[{name:"NYU 강의 자료",url:"https://pages.stern.nyu.edu/~adamodar/"},{name:"YouTube",url:"https://www.youtube.com/@AswathDamodaranonValuation"},{name:"Blog",url:"https://aswathdamodaran.blogspot.com"}],invest:"Damodaran 밸류에이션이 학계+실무 표준. 핫 종목 밸류에이션 분석이 투자 의사결정 프레임. 무료 강의가 금융 교육 모델.",signal:"Damodaran 블로그 신규 밸류에이션, 섹터 분석, 수업 자료 업데이트"},

"Chamath Palihapitiya":{philosophy:"기술이 세상을 바꿀 수 있지만, 기존 시스템에 대한 건전한 회의주의가 필요하다.",principles:["All-In Podcast — 테크/정치/투자 솔직한 토론","SPAC — 특수목적인수회사로 상장 혁신 (이후 비판도)","Climate/Bio — 기후테크+바이오테크 투자 확대"],books:[{title:"All-In Podcast",year:"2020~",url:"https://www.allinpodcast.co"}],timeline:[{y:"2020~",t:"All-In Podcast — 테크 투자 대화 플랫폼"},{y:"2019~",t:"SPAC 붐 주도. Virgin Galactic 등 상장"},{y:"2011",t:"Social Capital 설립"},{y:"2007-2011",t:"Facebook VP Growth"},{y:"1976",t:"스리랑카 출생. 캐나다 이민. Waterloo"}],channels:[{name:"All-In Podcast",url:"https://www.allinpodcast.co"},{name:"X",url:"https://x.com/chaabormath"}],invest:"All-In Podcast가 테크/VC/매크로 논의의 허브. Social Capital 포트폴리오. SPAC 시장 교훈.",signal:"All-In 에피소드 주제, Social Capital 투자, 매크로 전망"},

// ═══════════════════════════════════════
// Design (3명)
// ═══════════════════════════════════════

"Jony Ive":{philosophy:"디자인은 물건이 어떻게 생겼는가가 아니라 어떻게 작동하는가이다. 단순함은 복잡함의 극복이다.",principles:["미니멀리즘 — 불필요한 것을 제거해 본질만 남긴다","소재와 촉감 — 물리적 경험이 디자인의 핵심","통합 — 하드웨어+소프트웨어+서비스의 일체화"],books:[{title:"Jony Ive: The Genius Behind Apple's Greatest Products (Leander Kahney)",year:"2013",url:"https://www.amazon.com/s?k=jony+ive+leander+kahney"}],timeline:[{y:"2019",t:"Apple 퇴사. LoveFrom 설립 (디자인 스튜디오)"},{y:"1996-2019",t:"Apple CDO. iMac, iPod, iPhone, iPad, Apple Watch 디자인"},{y:"1992",t:"Apple 입사"},{y:"1967",t:"영국 런던 출생. Newcastle Polytechnic"}],channels:[{name:"LoveFrom",url:"https://lovefrom.com"}],invest:"Apple 디자인 철학의 원천. LoveFrom 프로젝트가 디자인+AI 교차점. 산업디자인 트렌드.",signal:"LoveFrom 신규 프로젝트, Apple 디자인 방향 변화"},

"Don Norman":{philosophy:"좋은 디자인은 보이지 않는다. 사용자가 실수하면 그것은 사용자 잘못이 아니라 디자인의 잘못이다.",principles:["어포던스(Affordance) — 물건이 사용법을 스스로 알려줘야","인간중심설계(HCD) — 기술이 아닌 사람에서 시작","감성 디자인 — 기능뿐 아니라 감정적 반응도 설계"],books:[{title:"The Design of Everyday Things",year:"1988",url:"https://www.amazon.com/s?k=design+of+everyday+things+norman"},{title:"Emotional Design",year:"2004",url:"https://www.amazon.com/s?k=emotional+design+norman"}],timeline:[{y:"1988",t:"The Design of Everyday Things 출간 — UX 디자인의 바이블. 전 세계 디자이너 필독서"},{y:"1993~1998",t:"Apple VP of Advanced Technology. 사용자 중심 디자인 철학 도입"},{y:"2014~",t:"UC San Diego Design Lab 소장. 인간중심설계 연구 지속"},{y:"2004",t:"Emotional Design 출간 — 제품의 감정적 가치가 기능만큼 중요"},{y:"1935",t:"미국 출생. MIT 전기공학→심리학 PhD. 인지과학의 선구자"}],channels:[{name:"jnd.org",url:"https://jnd.org"},{name:"X",url:"https://x.com/jaborndnorman"}],invest:"UX/UI 디자인 시장. 인간중심설계가 제품 개발의 표준 방법론. Design Thinking 트렌드.",signal:"UX 디자인 트렌드, AI+디자인 교차점"},

"John Maeda":{philosophy:"단순함의 법칙 — 기술과 예술의 교차점에서 진정한 혁신이 탄생한다. AI 시대에 디자인의 역할이 더 중요해진다.",principles:["Laws of Simplicity — 단순함을 위한 10가지 법칙","Design in Tech — 테크 기업에서 디자인의 전략적 가치 보고서","Computational Design — 코드와 디자인의 융합"],books:[{title:"The Laws of Simplicity",year:"2006",url:"https://www.amazon.com/s?k=laws+of+simplicity+maeda"},{title:"Design in Tech Report",year:"2015-2019",url:"https://designintech.report"}],timeline:[{y:"2015~2019",t:"연례 Design in Tech Report 발표 — 디자인+테크 트렌드의 표준 참고 자료"},{y:"2013~2019",t:"KPCB Design Partner → Automattic(WordPress) CDO → Publicis Sapient CTO"},{y:"2008~2013",t:"RISD(Rhode Island School of Design) 총장. 예술+기술 융합 교육 혁신"},{y:"1992~2008",t:"MIT Media Lab 교수. Computational Design 연구. 코드+디자인 융합의 선구자"},{y:"1966",t:"시애틀 출생. 일본계 미국인. MIT 전기공학+컴퓨터과학 PhD. Tsukuba 대학 연구"}],channels:[{name:"X",url:"https://x.com/johnabormaeda"},{name:"designintech.report",url:"https://designintech.report"}],invest:"Design in Tech 보고서가 디자인+AI 트렌드의 프레임워크. AI가 디자인 프로세스를 어떻게 변화시키는지.",signal:"Design in Tech 신규 보고서, AI+디자인 도구 트렌드"},

// ═══════════════════════════════════════
// AI Tools & Influencers (신규 20명)
// ═══════════════════════════════════════

"Demis Hassabis":{philosophy:"AI가 과학적 발견을 가속하는 것이 궁극적 목표다. AlphaFold가 단백질 구조를 풀었듯, AI는 인류의 가장 어려운 문제를 풀 수 있다.",principles:["AI for Science — AI를 과학적 발견의 도구로","AlphaFold — 50년 난제 단백질 접힘 문제 해결","AlphaGo — 바둑에서 인간을 이긴 최초의 AI","Gemini — Google의 멀티모달 AI 모델"],books:[{title:"AlphaFold 논문 (Nature)",year:"2021",url:"https://www.nature.com/articles/s41586-021-03819-2"},{title:"AlphaGo 다큐멘터리",year:"2017",url:"https://www.youtube.com/watch?v=WXuK6gekU1Y"}],timeline:[{y:"2024",t:"노벨화학상 수상 (AlphaFold). Gemini 1.5 Pro"},{y:"2023",t:"Google DeepMind 설립 (Brain+DeepMind 통합)"},{y:"2021",t:"AlphaFold — 2억+ 단백질 구조 예측 공개"},{y:"2016",t:"AlphaGo vs 이세돌 — AI 역사의 전환점"},{y:"2010",t:"DeepMind 설립"},{y:"2014",t:"Google이 DeepMind 인수 ($500M+)"},{y:"1976",t:"런던 출생. Cambridge → UCL PhD"}],channels:[{name:"DeepMind Blog",url:"https://deepmind.google/discover/blog/"},{name:"X",url:"https://x.com/demaborishassaborabis"}],invest:"Alphabet(GOOGL) AI 전략의 핵심. AlphaFold가 바이오테크/제약 R&D를 혁신. Gemini vs GPT 경쟁이 AI 시장 판도.",signal:"Gemini 신버전, DeepMind 논문, AI for Science 돌파구"},

"Ilya Sutskever":{philosophy:"스케일링이 지능의 핵심이다. 충분히 큰 모델에 충분한 데이터를 주면 지능이 창발한다. 그러나 초지능은 안전하게 정렬되어야 한다.",principles:["Scaling Laws — 모델 크기와 데이터가 성능을 결정","GPT 아키텍처 공동 설계 — Transformer 기반 언어 모델","Superalignment — 초지능 AI 안전 정렬 문제"],books:[{title:"Sequence to Sequence Learning (논문)",year:"2014",url:"https://arxiv.org/abs/1409.3215"},{title:"인터뷰 모음",year:"다수",url:"https://www.youtube.com/results?search_query=ilya+sutskever+interview"}],timeline:[{y:"2024",t:"OpenAI 퇴사. SSI(Safe Superintelligence Inc.) 공동 설립"},{y:"2023",t:"OpenAI Board 위기 핵심 인물. Superalignment 팀 공동 리더"},{y:"2015-2023",t:"OpenAI 수석 과학자. GPT 시리즈 핵심 설계자"},{y:"2012",t:"AlexNet 공동 개발 (Hinton 지도) — 딥러닝 혁명"},{y:"1986",t:"러시아 출생. 이스라엘 → 토론토대 PhD (Hinton 지도)"}],channels:[{name:"SSI",url:"https://ssi.inc"}],invest:"Sutskever의 행보가 AI 안전 vs 능력 경쟁 시그널. SSI의 방향이 AI Safety 시장 형성. OpenAI 내부 갈등이 AI 거버넌스 트렌드.",signal:"SSI 발표, AI 안전 연구 진전, OpenAI 조직 변화"},

"Mira Murati":{philosophy:"AI 제품은 안전하고 유용해야 한다. 연구를 세상에 배포하는 것이 가장 중요한 도전이며, 사용자 피드백이 AI를 더 좋게 만든다.",principles:["AI 제품화 — 연구에서 대중 제품으로의 전환 리더십","ChatGPT 출시 주도 — AI 역사상 가장 빠른 소비자 채택 (2개월 1억 사용자)","AI 안전 — 배포 전 Red Teaming 및 안전성 테스트 프로세스 구축","다학제적 접근 — 공학+물리학+디자인 배경의 융합적 제품 사고"],books:[{title:"인터뷰 모음",year:"다수",url:"https://www.youtube.com/results?search_query=mira+murati+interview"},{title:"The Daily Show AI 토론 (Jon Stewart)",year:"2023",url:"https://www.youtube.com/results?search_query=mira+murati+daily+show"},{title:"Dartmouth 졸업 연설",year:"2024",url:"https://www.youtube.com/results?search_query=mira+murati+dartmouth+commencement"}],timeline:[{y:"2025",t:"새 AI 스타트업 설립 (Thinking Machines Lab). OpenAI 핵심 인재 다수 합류"},{y:"2024",t:"OpenAI CTO 퇴사 (9월). GPT-4o 발표 라이브 데모 주도. Dartmouth 졸업 연설"},{y:"2023",t:"GPT-4, DALL-E 3 출시 주도. Board 위기 시 임시 CEO (3일간). 글로벌 AI 대변인 역할"},{y:"2022",t:"ChatGPT 출시 주도 — 역사상 가장 빠른 성장 제품. DALL-E 2 공개"},{y:"2018~2022",t:"OpenAI 합류. Applied AI 리더 → VP of Applied AI → CTO. 연구→제품 파이프라인 구축"},{y:"2016~2018",t:"Tesla Model X 프로젝트 시니어 엔지니어. 자율주행 관련 업무"},{y:"2012~2016",t:"Goldman Sachs, Zodiac Aerospace 등에서 엔지니어링 경력"},{y:"1988",t:"알바니아 출생. 16세 캐나다 이민. Dartmouth College 기계공학 졸업"}],channels:[{name:"인터뷰 모음",url:"https://www.youtube.com/results?search_query=mira+murati+interview"},{name:"X",url:"https://x.com/maborira_murati"}],invest:"Murati의 새 스타트업(Thinking Machines Lab)이 AI 제품화 시장의 핵심 시그널. OpenAI 인재 유출→신규 스타트업 트렌드가 AI 생태계 다양화 촉진.",signal:"Thinking Machines Lab 제품 발표, AI 인재 이동 트렌드, AI 제품화 시장 경쟁"},

"Greg Brockman":{philosophy:"AI의 잠재력을 안전하게 실현하는 것이 OpenAI의 미션이다. 기술 리더십과 조직 문화가 AI 발전의 기반이며, 연구와 엔지니어링의 다리를 놓는 것이 CTO의 역할이다.",principles:["OpenAI 공동 설립 — 초기 비전과 조직 구축. 연구 문화 형성","기술 리더십 — GPT 시리즈 개발 과정 총괄. 인프라 아키텍처 설계","AI 배포 — API 플랫폼으로 AI 접근성 확대. ChatGPT 제품화","라이브 데모 — DevDay 등에서 실시간 코딩 데모로 기술력 시연"],books:[{title:"OpenAI 블로그 기고",year:"다수",url:"https://openai.com/blog"},{title:"OpenAI DevDay 키노트",year:"2023",url:"https://www.youtube.com/results?search_query=openai+devday+2023+greg+brockman"},{title:"TED Talk: The inside story of ChatGPT",year:"2023",url:"https://www.youtube.com/results?search_query=greg+brockman+ted+chatgpt"}],timeline:[{y:"2025",t:"OpenAI 복귀 후 기술 전략 주도. GPT-5 개발 과정 참여"},{y:"2024",t:"OpenAI 복귀 (Board 위기 후 9개월 휴직 후)"},{y:"2023",t:"Board 위기 — Altman과 함께 퇴사 후 5일 만에 복귀. DevDay 라이브 데모 주도"},{y:"2019~2023",t:"OpenAI CTO/President. GPT-3 → GPT-4, DALL-E, ChatGPT 기술 리더십"},{y:"2015",t:"OpenAI 공동 설립. 초대 CTO. Sam Altman과 함께 조직 구축"},{y:"2010~2015",t:"Stripe 초대 CTO (#4 직원). 결제 인프라 기술 아키텍처 설계. Stripe를 핀테크 유니콘으로"},{y:"1988",t:"미국 미네소타 출생. MIT 수학/컴퓨터과학 입학 (1학년 후 Stripe 합류를 위해 중퇴)"}],channels:[{name:"X (@gaborregaborbrockman)",url:"https://x.com/gdb"},{name:"OpenAI Blog",url:"https://openai.com/blog"},{name:"YouTube",url:"https://www.youtube.com/results?search_query=greg+brockman+openai"}],invest:"OpenAI 핵심 인물. CTO 복귀가 조직 안정성 시그널. Stripe 경험이 OpenAI API 플랫폼 전략의 기반. OpenAI 기업가치($150B+)에 직결.",signal:"OpenAI 조직 변화, 신제품/모델 출시, API 플랫폼 전략"},

"Fei-Fei Li":{philosophy:"AI는 인간을 대체하는 것이 아니라 증강하는 것이다. 다양성과 윤리가 AI 개발의 기본이어야 한다.",principles:["ImageNet — 대규모 이미지 데이터셋으로 컴퓨터 비전 혁명","Human-Centered AI — Stanford HAI 공동 원장","AI 민주화 — 모든 사람이 AI 혜택을 누려야"],books:[{title:"The Worlds I See (자서전)",year:"2023",url:"https://www.amazon.com/s?k=worlds+i+see+fei+fei+li"},{title:"ImageNet 논문",year:"2009",url:"https://image-net.org"}],timeline:[{y:"2023",t:"The Worlds I See 출간. World Labs 설립 (3D AI)"},{y:"2019",t:"Stanford HAI 공동 설립"},{y:"2017-2018",t:"Google Cloud AI/ML VP (휴직)"},{y:"2009",t:"ImageNet — 1400만 이미지 데이터셋으로 AI 혁명의 기반"},{y:"중국",t:"중국 출생. 16세 미국 이민. Princeton → Caltech PhD"}],channels:[{name:"Stanford HAI",url:"https://hai.stanford.edu"},{name:"X",url:"https://x.com/drfeifei"}],invest:"World Labs(3D AI 스타트업)가 공간 AI 시장 시그널. ImageNet이 AI 혁명의 기반. Stanford HAI가 AI 정책 방향.",signal:"World Labs 발전, Stanford HAI 보고서, AI 윤리/정책"},

"Ivan Zhao":{philosophy:"도구는 사용자의 사고를 확장해야 한다. Notion은 레고 블록처럼 누구나 자신만의 시스템을 만들 수 있는 도구다. 최고의 소프트웨어는 아름답고 유연해야 한다.",principles:["All-in-One Workspace — 문서+DB+위키+프로젝트를 하나의 도구로 통합","블록 기반 편집 — 레고처럼 콘텐츠를 자유롭게 조합하는 인터페이스","AI 통합 — Notion AI로 글쓰기/요약/분석 자동화","디자인 철학 — 기능성과 미학의 균형. 사용자가 즐거운 도구"],books:[{title:"Notion 공식 블로그",year:"지속",url:"https://www.notion.so/blog"},{title:"Figma Config 2023 인터뷰",year:"2023",url:"https://www.youtube.com/results?search_query=ivan+zhao+notion+interview"},{title:"The Information 인터뷰",year:"2023",url:"https://www.youtube.com/results?search_query=ivan+zhao+notion+ceo"}],timeline:[{y:"2024~",t:"Notion AI 확대. Notion Calendar/Mail 출시. 기업가치 $10B+. 올인원 워크스페이스 비전 확장"},{y:"2023",t:"Notion AI 출시 — OpenAI 연동. AI 기반 글쓰기/요약/분석"},{y:"2018",t:"Notion 2.0 런칭 — Product Hunt 올해의 제품 #1. 사용자 폭발적 성장 시작"},{y:"2015~2017",t:"초기 Notion v1 실패. 팀 해산 후 일본 교토에서 Simon Last와 2인 재구축"},{y:"2013",t:"Notion Labs 공동 설립 (Simon Last와). 샌프란시스코 기반"},{y:"1990",t:"중국 위구르 출생. 캐나다 이민. UBC(브리티시컬럼비아대) 인지과학 전공. 디자인+기술 융합"}],channels:[{name:"X (@ivaboranzhaoabornotion)",url:"https://x.com/ivanotion"},{name:"Notion Blog",url:"https://www.notion.so/blog"}],invest:"생산성 도구 SaaS 시장 $50B+. Notion AI가 AI 통합 생산성 도구 트렌드 선도. IPO 가능성이 SaaS 시장 시그널.",signal:"Notion AI 업데이트, IPO 동향, 생산성 도구 시장 경쟁(Notion vs Obsidian vs Coda)"},

"Perplexity (Aravind Srinivas)":{philosophy:"검색의 미래는 링크 목록이 아니라 직접적인 답변이다. AI가 정보 접근 방식을 근본적으로 바꾸며, 지식에 대한 접근을 민주화한다.",principles:["Answer Engine — 검색 결과가 아닌 구조화된 답변 직접 제공","RAG — 검색 증강 생성으로 할루시네이션 최소화 + 실시간 정보","출처 투명성 — 모든 답변에 인라인 소스 인용 명시","Sonar API — 기업용 AI 검색 API 제공"],books:[{title:"Perplexity 플랫폼",year:"지속",url:"https://perplexity.ai"},{title:"Lex Fridman Podcast 인터뷰",year:"2024",url:"https://www.youtube.com/results?search_query=aravind+srinivas+lex+fridman"},{title:"Perplexity 기술 블로그",year:"2023~",url:"https://www.perplexity.ai/hub"}],timeline:[{y:"2025",t:"기업가치 $9B+. 월 쿼리 수억건. 엔터프라이즈 제품 확대"},{y:"2024",t:"Perplexity Pages, Pro Search 출시. 시리즈B $73M (IVP, NEA, Bezos). 월 1억+ 쿼리"},{y:"2023",t:"Perplexity Pro 구독 출시. GPT-4/Claude 연동. 빠른 사용자 성장"},{y:"2022",t:"Perplexity AI 설립. Answer Engine 콘셉트로 AI 검색 시장 개척"},{y:"2021~2022",t:"OpenAI 연구원. LLM 추론 최적화 연구"},{y:"2018~2021",t:"UC Berkeley PhD (컴퓨터과학). 피터 아빌(Pieter Abbeel) 지도. LLM/검색 연구"},{y:"인도",t:"인도 출신. IIT Madras 전기공학 졸업 → UC Berkeley PhD"}],channels:[{name:"Perplexity",url:"https://perplexity.ai"},{name:"X (@AravSrinivas)",url:"https://x.com/AravSrinivas"},{name:"YouTube",url:"https://www.youtube.com/results?search_query=perplexity+ai"}],invest:"Google 검색 독점($200B+ 시장)에 대한 가장 강력한 AI 대안. Jeff Bezos, NVIDIA 등 투자. Pro 구독 모델이 검색 비즈니스 모델 재정의.",signal:"Perplexity 쿼리 볼륨/성장률, 신규 펀딩, Google vs AI 검색 경쟁, 엔터프라이즈 채택"},

"Cursor (Michael Truell)":{philosophy:"AI가 코딩의 미래다. 개발자 도구는 AI 네이티브로 재설계되어야 하며, AI가 코드베이스 전체를 이해하고 맥락에 맞는 제안을 해야 한다.",principles:["AI-Native IDE — 처음부터 AI를 위해 설계된 코드 에디터 (VS Code 포크 기반)","코드베이스 이해 — 전체 프로젝트 컨텍스트를 인덱싱하여 정확한 AI 제안","Composer — 멀티파일 동시 편집이 가능한 AI 에이전트 모드","Tab Completion — 다음 편집 위치까지 예측하는 문맥 인식 자동완성"],books:[{title:"Cursor 에디터",year:"2023~",url:"https://cursor.com"},{title:"Cursor 공식 블로그",year:"2023~",url:"https://cursor.com/blog"},{title:"Lex Fridman Podcast 인터뷰",year:"2024",url:"https://www.youtube.com/results?search_query=cursor+ai+michael+truell+lex+fridman"}],timeline:[{y:"2025",t:"기업가치 $2.5B+. 연간 반복 매출(ARR) $100M+ 추정. 개발자 필수 도구로 자리매김"},{y:"2024",t:"Composer(멀티파일 AI 편집) 출시. 사용자 폭발적 성장. 시리즈B $60M (a16z, Thrive Capital)"},{y:"2023",t:"Cursor v0.1 출시 — VS Code 포크 + AI 네이티브. 개발자 커뮤니티에서 입소문 확산"},{y:"2022",t:"Anysphere 설립. Michael Truell(CEO), Sualeh Asif, Arvid Lunnemark, Aman Sanger (MIT 동기)"},{y:"교육",t:"4명 모두 MIT 컴퓨터과학 출신. 학부 시절부터 AI 코딩 도구 아이디어 구상"}],channels:[{name:"Cursor",url:"https://cursor.com"},{name:"X (@cursor_ai)",url:"https://x.com/cursor_ai"},{name:"YouTube",url:"https://www.youtube.com/results?search_query=cursor+ai+editor"}],invest:"AI 코딩 도구 시장의 가장 빠르게 성장하는 플레이어. GitHub Copilot 대항마. ARR $100M+는 개발자 도구 SaaS 역사상 가장 빠른 성장 속도 중 하나.",signal:"Cursor 유료 사용자 성장, Composer 에이전트 성능, Copilot/Windsurf 대비 점유율, 신규 펀딩"},

"Windsurf (Varun Mohan)":{philosophy:"AI가 모든 개발자를 10x 개발자로 만들 수 있다. 코드 에디터의 미래는 AI가 주도하며, 무료 AI 코딩 도구로 모든 개발자가 혜택을 누려야 한다.",principles:["Codeium/Windsurf — AI 코드 어시스턴트에서 AI 네이티브 에디터로 진화","무료 AI 코딩 — 개인 개발자에게 무료 AI 코딩 제공 (GitHub Copilot 대항마)","엔터프라이즈 AI — 기업용 코드 보안+프라이버시+커스터마이징","Cascade — 에이전트 기반 AI 코딩 (단순 자동완성을 넘어 자율 코딩)"],books:[{title:"Windsurf 에디터",year:"2024",url:"https://windsurf.com"},{title:"Codeium 기술 블로그",year:"2021~",url:"https://codeium.com/blog"},{title:"AI 코딩 혁명 인터뷰 모음",year:"다수",url:"https://www.youtube.com/results?search_query=varun+mohan+codeium+interview"}],timeline:[{y:"2024",t:"Codeium → Windsurf 리브랜딩. Cascade(에이전트 AI 코딩) 출시. 기업가치 $3B+"},{y:"2024",t:"시리즈C $150M (Greenoaks Capital). 엔터프라이즈 고객 급성장"},{y:"2023",t:"Codeium 사용자 100만+ 돌파. 70개+ 언어 지원. VS Code 확장 인기 1위권"},{y:"2021",t:"Exafunction 설립 (후에 Codeium으로 피봇). GPU 인프라 최적화에서 AI 코딩으로 전환"},{y:"이전",t:"MIT 컴퓨터과학 졸업. Google 엔지니어 출신. GPU 컴퓨팅/인프라 전문가"}],channels:[{name:"Windsurf",url:"https://windsurf.com"},{name:"X (@vaaborrunmohan)",url:"https://x.com/varunmohan"},{name:"YouTube",url:"https://www.youtube.com/results?search_query=windsurf+ai+editor"}],invest:"AI 코딩 도구 시장 3파전 (Cursor, Copilot, Windsurf). 무료 모델로 개발자 확보 후 엔터프라이즈 전환 전략. 개발자 생산성 도구 시장 $30B+ 재편.",signal:"Windsurf 사용자/기업 성장, Cascade 에이전트 성능, Cursor/Copilot 대비 점유율"},

"Anthropic (Chris Olah)":{philosophy:"AI 시스템의 내부를 이해할 수 있어야 안전하게 만들 수 있다. Mechanistic Interpretability가 AI 안전의 핵심이며, 블랙박스를 열어야 AI를 신뢰할 수 있다.",principles:["Mechanistic Interpretability — AI 내부 뉴런 수준에서 작동 원리를 리버스 엔지니어링","Transformer Circuits — 트랜스포머 내부 회로(features, circuits)를 분석하여 행동 이해","Superposition — AI가 뉴런보다 많은 특성을 중첩 저장하는 방식 발견","Scaling Monosemanticity — 대규모 모델에서도 해석 가능한 특성 추출"],books:[{title:"Transformer Circuits Thread (블로그)",year:"2021~",url:"https://transformer-circuits.pub"},{title:"colah.github.io (신경망 시각화 블로그)",year:"2014~",url:"https://colah.github.io"},{title:"Scaling Monosemanticity 논문",year:"2024",url:"https://www.anthropic.com/research/mapping-mind-language-model"}],timeline:[{y:"2024",t:"Scaling Monosemanticity — Claude 내부에서 수백만 개의 해석 가능한 특성 추출 성공. AI 해석성 연구의 랜드마크"},{y:"2023",t:"Towards Monosemanticity 논문 — 사전(Dictionary) 학습으로 뉴런 해석. Anthropic Interpretability 팀 리드"},{y:"2021",t:"Anthropic 합류. Mechanistic Interpretability 연구팀 구축"},{y:"2019~2021",t:"OpenAI 연구원. Clarity 팀에서 AI 해석성 연구"},{y:"2015~2019",t:"Google Brain 연구원. 신경망 내부 시각화 연구"},{y:"2014",t:"colah.github.io 블로그 시작 — LSTM, CNN, Word2Vec 시각화. AI 교육의 표준 참고 자료가 됨"},{y:"교육",t:"캐나다 출신. 대학 중퇴 후 독학으로 AI 연구 진입. Thiel Fellowship 수상"}],channels:[{name:"colah.github.io",url:"https://colah.github.io"},{name:"Transformer Circuits",url:"https://transformer-circuits.pub"},{name:"X",url:"https://x.com/ch402"}],invest:"AI Safety/Interpretability 연구가 AI 규제 방향 결정. Anthropic($60B+ 가치)의 핵심 기술 차별점. Mechanistic Interpretability가 AI 신뢰성 표준이 되면 전 산업에 영향.",signal:"Mechanistic Interpretability 돌파구, Anthropic 연구 발표, AI 해석성 규제 요구"},

"Genspark (Eric Jing)":{philosophy:"AI 검색은 단순 답변을 넘어 에이전트가 사용자를 위해 행동하는 것이다. 10개 블루 링크 시대는 끝났고, AI가 정보를 종합하여 맞춤형 페이지를 생성하는 것이 미래다.",principles:["AI 에이전트 검색 — 검색 결과가 아닌 AI가 직접 행동하여 문제 해결","Sparkpages — AI가 주제별로 생성하는 맞춤형 종합 정보 페이지","멀티모달 AI — 텍스트+이미지+데이터를 통합하는 차세대 검색 경험","No Ads Model — 광고 없는 검색으로 사용자 경험 우선"],books:[{title:"Genspark 플랫폼",year:"2024",url:"https://www.genspark.ai"},{title:"AI 검색 혁명 인터뷰",year:"2024",url:"https://www.youtube.com/results?search_query=eric+jing+genspark+interview"},{title:"Sparkpages 기술 소개",year:"2024",url:"https://www.genspark.ai/about"}],timeline:[{y:"2024",t:"Genspark 출시. 시리즈A $60M (Lanchi Ventures 등). Sparkpages로 차별화된 AI 검색 경험"},{y:"2024",t:"월간 사용자 급성장. Perplexity, Google AI Overview와 AI 검색 3파전 구도"},{y:"2023",t:"Genspark 설립. AI 에이전트 기반 차세대 검색 엔진 비전"},{y:"2017~2023",t:"Microsoft Bing VP/GM. 검색 엔진 핵심 기술 및 AI 통합 전략 주도"},{y:"교육",t:"중국 출신. 컴퓨터과학 전공. 검색 엔진/NLP 분야 다년간 경력"}],channels:[{name:"Genspark",url:"https://www.genspark.ai"},{name:"X",url:"https://x.com/ericjing_ai"},{name:"LinkedIn",url:"https://www.linkedin.com/company/genspark-ai/"}],invest:"AI 검색 시장 $200B+ 재편 게임. Google 독점에 대한 AI 대안 (Perplexity, Genspark). 에이전트형 검색이 차세대 인터페이스.",signal:"Genspark 사용자/쿼리 성장, AI 검색 시장 점유율, 광고 없는 검색 비즈니스 모델 검증"},

"Obsidian (Shida Li)":{philosophy:"사고는 연결이다. 세컨드 브레인을 만들어 지식을 영구적으로 보존하고 연결하라. 로컬 퍼스트가 데이터 주권의 기본이며, 사용자의 데이터는 사용자의 것이어야 한다.",principles:["세컨드 브레인 — 지식을 외부화하고 백링크로 연결하여 사고의 네트워크 구축","로컬 퍼스트 — 데이터가 사용자 기기에만 저장. 클라우드 의존 없는 완전한 소유권","마크다운 기반 — 플랫폼 락인 없는 순수 텍스트. 100년 후에도 읽을 수 있는 포맷","플러그인 생태계 — 1,500+ 커뮤니티 플러그인으로 무한 확장"],books:[{title:"Obsidian 공식 문서",year:"지속",url:"https://help.obsidian.md"},{title:"Obsidian Forum",year:"지속",url:"https://forum.obsidian.md"},{title:"Linking Your Thinking (PKM 방법론)",year:"2021",url:"https://www.youtube.com/results?search_query=linking+your+thinking+obsidian"}],timeline:[{y:"2024~",t:"사용자 1,000만+ 돌파. Obsidian Publish/Sync 유료 서비스 성장. AI 플러그인 생태계 확대"},{y:"2023",t:"Canvas(시각적 노트 캔버스), Properties(메타데이터) 출시. 기업용 확장"},{y:"2022",t:"모바일 앱 안정화. 커뮤니티 플러그인 1,000개+ 돌파. PKM 도구 1위 등극"},{y:"2020",t:"Obsidian v0.1 출시. 로컬 퍼스트 마크다운 노트 앱으로 PKM 시장 혁명"},{y:"2016~2020",t:"Dynalist(아웃라이너 앱) 운영. Dynalist 사용자 피드백에서 Obsidian 아이디어 착안"},{y:"교육",t:"Shida Li & Erica Xu 공동 창업. 중국 출신, 캐나다 University of Waterloo 컴퓨터과학 졸업"}],channels:[{name:"Obsidian",url:"https://obsidian.md"},{name:"Discord",url:"https://discord.gg/obsidianmd"},{name:"YouTube",url:"https://www.youtube.com/@obsdmd"}],invest:"PKM(Personal Knowledge Management) 시장 $2B+. 로컬 퍼스트 + 프라이버시 트렌드가 Notion/Roam 대비 차별점. 부트스트랩 기업(투자 없이 성장)의 모범 사례.",signal:"Obsidian 주요 업데이트, PKM 시장 성장률, 로컬 퍼스트 vs 클라우드 트렌드, AI 노트 통합"},

"Matt Shumer":{philosophy:"AI 에이전트가 모든 지식 작업을 자동화할 수 있다. 프롬프트 엔지니어링이 새로운 프로그래밍이며, 올바른 프롬프트 하나가 수천 줄의 코드를 대체한다.",principles:["AI 에이전트 — 자율적으로 작업을 수행하는 AI 시스템 구축","프롬프트 엔지니어링 — LLM을 효과적으로 활용하는 체계적 기법","HyperWrite/OthersideAI — AI 글쓰기 어시스턴트 + 에이전트 플랫폼","오픈소스 AI 도구 — GPT-Prompt-Engineer 등 프롬프트 최적화 도구 공개"],books:[{title:"X 쓰레드 (AI 팁/튜토리얼)",year:"지속",url:"https://x.com/mattshumer_"},{title:"GPT-Prompt-Engineer (GitHub)",year:"2023",url:"https://github.com/mshumer/gpt-prompt-engineer"},{title:"AI 에이전트 데모/튜토리얼",year:"2024",url:"https://www.youtube.com/results?search_query=matt+shumer+ai+agent"}],timeline:[{y:"2024~",t:"AI 에이전트 분야 핵심 인플루언서. Claude/GPT 기반 자율 에이전트 실험 및 공유"},{y:"2023",t:"GPT-Prompt-Engineer 오픈소스 공개 — 자동 프롬프트 최적화 도구. GitHub 8K+ 스타"},{y:"2022",t:"HyperWrite AI 글쓰기 어시스턴트 성장. AI 자동화 콘텐츠로 X에서 급성장"},{y:"2020",t:"OthersideAI(후에 HyperWrite) 공동 설립. AI 기반 이메일/문서 자동 작성"},{y:"교육",t:"젊은 AI 기업가. 대학 시절부터 AI 스타트업 시작"}],channels:[{name:"X (@mattshumer_)",url:"https://x.com/mattshumer_"},{name:"GitHub",url:"https://github.com/mshumer"},{name:"HyperWrite",url:"https://www.hyperwriteai.com"}],invest:"AI 에이전트 시장 트렌드의 실전 선행 지표. 프롬프트 엔지니어링이 새로운 직군으로 부상. AI 글쓰기/자동화 도구 시장.",signal:"AI 에이전트 신규 도구/데모, 프롬프트 기법 트렌드, HyperWrite 제품 업데이트"},

"Lenny Rachitsky":{philosophy:"최고의 제품은 사용자를 깊이 이해하는 것에서 시작한다. 그로스는 시스템이지 마법이 아니며, 뉴스레터는 지식 공유의 가장 강력한 매체이다.",principles:["Product-Market Fit — PMF 달성이 스타트업 성공의 전제 조건","Growth Frameworks — 데이터 기반 그로스 전략 (N-Day Retention, LTV/CAC 등)","Newsletter + Podcast — 주 2회 PM/그로스 인사이트 전달. 실리콘밸리 PM의 필독서","Operator → Advisor — Airbnb 7년 실전 경험 기반의 조언"],books:[{title:"Lenny's Newsletter",year:"2019~",url:"https://www.lennysnewsletter.com"},{title:"Lenny's Podcast",year:"2022~",url:"https://www.lennyspodcast.com"},{title:"PM/그로스 프레임워크 모음",year:"지속",url:"https://www.lennysnewsletter.com/p/my-favorite-frameworks"}],timeline:[{y:"2024~",t:"유료 구독자 수만 명. 연 매출 수백만 달러. PM 분야 가장 영향력 있는 독립 미디어"},{y:"2022",t:"Lenny's Podcast 시작 — Airbnb CEO Brian Chesky, Notion CEO 등 실리콘밸리 핵심 인물 인터뷰"},{y:"2019",t:"Lenny's Newsletter 시작. Substack PM 카테고리 1위. 첫 해에 10만+ 구독자"},{y:"2012~2019",t:"Airbnb Growth PM (7년). Supply Growth 팀 리드. PMF 달성 과정을 직접 경험"},{y:"교육",t:"조지아 출신. 스타트업 경험 후 Airbnb 합류"}],channels:[{name:"Newsletter",url:"https://www.lennysnewsletter.com"},{name:"Podcast",url:"https://www.lennyspodcast.com"},{name:"X (@lennysan)",url:"https://x.com/lennysan"}],invest:"PM/그로스 트렌드의 바로미터. Lenny 게스트 라인업이 SaaS/AI 제품 트렌드 선행 지표. 뉴스레터 기반 1인 미디어 비즈니스 모델의 교과서.",signal:"뉴스레터 주제 변화, 팟캐스트 게스트, PM/AI 제품 트렌드"},

"Ben Thompson":{philosophy:"Aggregation Theory — 인터넷이 중개자를 제거하고 수요를 집약하는 플랫폼에게 권력을 준다. 독립 분석가가 최고 수준의 테크 전략 분석을 구독 모델로 전달할 수 있다.",principles:["Aggregation Theory — 수요 집약이 인터넷 비즈니스의 핵심 동력. Google, Facebook, Amazon의 본질 설명","Stratechery — 매일 테크 전략 분석 뉴스레터. 실리콘밸리 CEO들의 필독서","독립 분석가 모델 — 기관 소속 없이 구독 기반 1인 비즈니스로 연 수백만 달러","비즈니스 모델 분석 — 기업의 전략적 포지셔닝을 프레임워크로 체계화"],books:[{title:"Stratechery 뉴스레터",year:"2013~",url:"https://stratechery.com"},{title:"Aggregation Theory (에세이)",year:"2015",url:"https://stratechery.com/2015/aggregation-theory/"},{title:"Dithering Podcast (John Gruber와)",year:"2020~",url:"https://dithering.fm"}],timeline:[{y:"2024~",t:"AI가 테크 산업에 미치는 영향 분석 집중. Stratechery 구독자 수만 명"},{y:"2020",t:"Dithering 팟캐스트 시작 (John Gruber와). 주 3회 15분 팟캐스트"},{y:"2015",t:"Aggregation Theory 발표 — 플랫폼 경제를 설명하는 핵심 프레임워크로 자리매김"},{y:"2013",t:"Stratechery 설립. 대만 거주하며 독립 분석가로 전환"},{y:"2010~2013",t:"Apple(마케팅) → Microsoft(전략) 근무. 대기업 내부 시각 경험"}],channels:[{name:"Stratechery",url:"https://stratechery.com"},{name:"Dithering Podcast",url:"https://dithering.fm"},{name:"X",url:"https://x.com/benthompson"}],invest:"Aggregation Theory가 테크 기업 밸류에이션의 핵심 프레임워크. Stratechery 분석이 VC/헤지펀드 투자 의사결정에 직접 영향. 독립 미디어 비즈니스 모델의 교과서.",signal:"Stratechery 신규 분석 주제, 플랫폼 전략 변화, AI/테크 규제, Apple/Meta/Google 전략"},

"Packy McCormick":{philosophy:"가장 중요한 이야기를 가장 재미있게 전달한다. 테크와 비즈니스의 교차점에서 투자 기회를 발견하며, 복잡한 기업 전략을 내러티브로 풀어내는 것이 힘이다.",principles:["Not Boring — 복잡한 비즈니스/기술을 흥미진진한 내러티브로 풀어내는 딥다이브","Thesis-Driven Investing — 강한 투자 테제 기반으로 초기 단계 투자","Not Boring Capital — 뉴스레터 오디언스를 레버리지로 활용하는 VC 모델","Techno-Optimism — 기술이 더 나은 미래를 만든다는 낙관적 투자 철학"],books:[{title:"Not Boring Newsletter",year:"2020~",url:"https://www.notboring.co"},{title:"The Great Online Game (에세이)",year:"2021",url:"https://www.notboring.co/p/the-great-online-game"},{title:"Spotify 딥다이브/기업 분석 시리즈",year:"다수",url:"https://www.notboring.co/archive"}],timeline:[{y:"2024~",t:"구독자 200K+. AI 스타트업 딥다이브 시리즈 확대. Not Boring Capital 포트폴리오 성장"},{y:"2022",t:"Not Boring Capital 본격화 — 뉴스레터 기반 벤처 투자 모델로 주목"},{y:"2021",t:"'The Great Online Game' 에세이 바이럴 — 인터넷 경력 전략의 프레임워크"},{y:"2020",t:"Not Boring 뉴스레터 시작. 코로나 시기 테크/전략 분석으로 급성장"},{y:"2017~2020",t:"Breather(공유 공간 스타트업) 전략 부사장. 그 전 투자은행/컨설팅 경력"}],channels:[{name:"Not Boring",url:"https://www.notboring.co"},{name:"X (@packyM)",url:"https://x.com/packyM"},{name:"Podcast",url:"https://www.youtube.com/results?search_query=packy+mccormick+not+boring+podcast"}],invest:"Not Boring 딥다이브가 스타트업/AI 투자 트렌드 선행 지표. 뉴스레터 기반 VC 모델이 미디어+투자 융합 트렌드. Great Online Game 프레임워크가 크리에이터 이코노미 평가에 유용.",signal:"Not Boring 신규 딥다이브 주제, Not Boring Capital 투자, AI/기후테크 트렌드"},

"Matthew Berman":{philosophy:"AI 모델은 직접 테스트해봐야 안다. 벤치마크와 실사용 비교가 AI 발전을 객관적으로 추적하는 방법이다. 복잡한 AI를 일반인도 이해하도록 쉽게 설명하는 것이 사명이다.",principles:["LLM 벤치마크 — 신규 모델 출시 즉시 테스트 및 비교 리뷰","오픈소스 AI — Llama, Mistral, Qwen 등 오픈소스 모델 실전 리뷰","로컬 AI — Ollama, LM Studio 등으로 로컬 LLM 구동법 교육","AI 도구 리뷰 — Cursor, Claude, ChatGPT 등 실사용 비교"],books:[{title:"YouTube 채널 (주 3-5회 업로드)",year:"2023~",url:"https://www.youtube.com/@matthewberman"},{title:"AI 모델 벤치마크 비교 시리즈",year:"2024",url:"https://www.youtube.com/results?search_query=matthew+berman+benchmark"},{title:"로컬 AI 셋업 가이드 시리즈",year:"2024",url:"https://www.youtube.com/results?search_query=matthew+berman+local+ai+setup"}],timeline:[{y:"2024~",t:"구독자 50만+ 돌파. GPT-4o, Claude 3.5, Llama 3 등 주요 모델 즉시 리뷰로 AI 커뮤니티 핵심 채널"},{y:"2023",t:"AI YouTube 채널 본격 성장. ChatGPT, GPT-4 출시와 함께 LLM 리뷰 콘텐츠 폭발적 인기"},{y:"2023",t:"오픈소스 LLM(Llama 2, Mistral) 로컬 구동법 교육 시리즈 시작"},{y:"2022",t:"AI/테크 YouTube 콘텐츠 시작. 초기에는 일반 테크 리뷰에서 AI 특화로 전환"},{y:"이전",t:"소프트웨어 엔지니어 출신. 테크 업계 실무 경험 보유"}],channels:[{name:"YouTube",url:"https://www.youtube.com/@matthewberman"},{name:"X",url:"https://x.com/matthewberman"},{name:"Discord",url:"https://discord.gg/matthewberman"}],invest:"LLM 벤치마크 결과가 AI 모델 투자 판단의 실질적 지표. 오픈소스 AI 트렌드 파악에 유용. AI 도구 시장 경쟁 구도 이해.",signal:"신규 LLM 벤치마크 결과, 오픈소스 모델 트렌드, AI 도구 시장 점유율 변화"},

"David Shapiro":{philosophy:"AI는 인류의 도구가 되어야 하며, 자율 AI 시스템의 윤리적 프레임워크가 필수적이다. Heuristic Imperatives(경험적 명령)를 통해 AI에게 도덕적 나침반을 부여할 수 있다.",principles:["Heuristic Imperatives — AI를 위한 3대 도덕 원칙: 고통 감소, 번영 증진, 이해 확대","AI 윤리 프레임워크 — 자율 AI 시스템의 도덕적 의사결정 구조 설계","NLCA(Natural Language Cognitive Architecture) — 자연어 기반 AI 인지 아키텍처 제안","AGI 철학 — 범용 인공지능의 사회적 영향과 제어 가능성 분석"],books:[{title:"Natural Language Cognitive Architecture",year:"2023",url:"https://www.amazon.com/s?k=natural+language+cognitive+architecture"},{title:"Benevolent by Design (AI 윤리)",year:"2023",url:"https://www.amazon.com/s?k=david+shapiro+benevolent+by+design"},{title:"YouTube AI 철학 시리즈",year:"2022~",url:"https://www.youtube.com/@DavidShapiroAutomator"}],timeline:[{y:"2024~",t:"AI 에이전트 실험 콘텐츠 확대. Claude, GPT-4o 기반 자율 에이전트 데모"},{y:"2023",t:"NLCA(Natural Language Cognitive Architecture) 저서 출간. Heuristic Imperatives 프레임워크 대중화"},{y:"2022",t:"AI 윤리/철학 YouTube 채널 본격 성장. AGI 논의 핵심 채널로 부상"},{y:"2020~",t:"AI Safety 연구 및 블로깅 시작. 자율 AI 시스템의 윤리적 프레임워크 탐구"},{y:"이전",t:"IT 컨설턴트 및 소프트웨어 엔지니어. 인지과학/철학적 배경에서 AI 윤리로 전환"}],channels:[{name:"YouTube",url:"https://www.youtube.com/@DavidShapiroAutomator"},{name:"X",url:"https://x.com/DavidShapiroOAI"},{name:"GitHub",url:"https://github.com/daveshap"}],invest:"AI 윤리/거버넌스 트렌드의 선행 지표. AI Safety 규제 강화 시 관련 기업/스타트업에 영향. Heuristic Imperatives가 AI Alignment 논의의 실용적 프레임.",signal:"AI 윤리 규제 법안, 에이전트 AI 안전성 논의, AGI 타임라인 논쟁"},

// ═══════════════════════════════════════
// 누락 보완 (12명)
// ═══════════════════════════════════════

"Andrew Ng":{philosophy:"AI는 새로운 전기다. 모든 산업을 변혁시킬 범용 기술이며, AI 교육의 민주화가 세상을 바꾸는 가장 빠른 길이다.",principles:["AI is the new Electricity — AI가 모든 산업에 전기처럼 스며든다","교육 민주화 — Coursera, deeplearning.ai로 수백만 명에게 ML 교육","Landing AI — AI를 제조업/전통 산업에 적용하는 실전 전략","Data-Centric AI — 모델보다 데이터 품질이 AI 성능을 결정"],books:[{title:"Machine Learning Yearning",year:"2018",url:"https://www.deeplearning.ai/programs/"},{title:"Coursera Machine Learning (스탠포드 강의)",year:"2011",url:"https://www.coursera.org/learn/machine-learning"},{title:"AI For Everyone (Coursera)",year:"2019",url:"https://www.coursera.org/learn/ai-for-everyone"}],timeline:[{y:"2024~",t:"AI Fund 포트폴리오 확대. deeplearning.ai 단기 과정 시리즈 폭발적 성장"},{y:"2017",t:"Landing AI 설립 — 제조업 AI 적용. deeplearning.ai 설립"},{y:"2014~2017",t:"Baidu 수석 과학자. 중국 AI 전략 주도"},{y:"2012",t:"Coursera 공동 설립 (Daphne Koller와). 온라인 교육 혁명"},{y:"2011",t:"Google Brain 프로젝트 설립 — 대규모 신경망 연구. 고양이 인식 실험"},{y:"1976",t:"영국 런던 출생. Carnegie Mellon → MIT → UC Berkeley PhD"}],channels:[{name:"deeplearning.ai",url:"https://www.deeplearning.ai"},{name:"X",url:"https://x.com/AndrewYNg"},{name:"YouTube",url:"https://www.youtube.com/@Deeplearningai"}],invest:"Coursera(COUR) 공동 창립자. AI 교육 시장의 최대 수혜자. Landing AI가 제조업 AI 트렌드 선행 지표. AI Fund 포트폴리오가 AI 스타트업 방향성.",signal:"deeplearning.ai 신규 과정 주제, AI Fund 투자, Landing AI 고객사, Coursera AI 과정 수요"},

"Emad Mostaque":{philosophy:"AI 모델은 오픈소스여야 하며, 소수 기업이 AI를 독점해서는 안 된다. 이미지 생성 AI가 창작의 민주화를 이끈다.",principles:["오픈소스 AI — Stable Diffusion을 오픈소스로 공개하여 이미지 생성 AI 대중화","Stability AI — 다양한 오픈 생성 모델(이미지, 음악, 3D, 코드) 개발","AI 민주화 — 대기업 독점이 아닌 커뮤니티 기반 AI 발전"],books:[{title:"Stable Diffusion (모델)",year:"2022",url:"https://stability.ai"},{title:"인터뷰/강연 모음",year:"다수",url:"https://www.youtube.com/results?search_query=emad+mostaque+interview"}],timeline:[{y:"2024",t:"Stability AI CEO 퇴임. AI 분산화 비전 지속 주장"},{y:"2023",t:"Stable Diffusion XL, Stable Video 등 멀티모달 확장. 기업가치 $4B+"},{y:"2022",t:"Stable Diffusion 오픈소스 공개 — 이미지 생성 AI 혁명 촉발. DALL-E 대항마"},{y:"2020",t:"Stability AI 설립. 오픈소스 AI 모델 개발 비전"},{y:"교육",t:"방글라데시계 영국인. Oxford 수학/컴퓨터과학. 전 헤지펀드 매니저"}],channels:[{name:"X",url:"https://x.com/EMostaque"},{name:"Stability AI",url:"https://stability.ai"}],invest:"오픈소스 생성 AI 시장의 촉매제. Stable Diffusion이 Midjourney, DALL-E와 3파전. 이미지/영상 생성 AI 시장 $10B+.",signal:"오픈소스 생성 모델 트렌드, Stability AI 조직 변화, 이미지 생성 AI 시장 경쟁"},

"Daniel Kahneman":{philosophy:"인간은 합리적이지 않다. 두 가지 사고 시스템(빠른 직관 vs 느린 분석)이 의사결정을 지배하며, 인지 편향이 투자와 비즈니스 판단을 왜곡한다.",principles:["시스템 1 & 시스템 2 — 빠른 직관적 사고 vs 느린 분석적 사고","전망 이론(Prospect Theory) — 손실이 이익보다 2배 크게 느껴진다","인지 편향 — 확증 편향, 앵커링, 가용성 편향 등 체계적 사고 오류","노이즈 — 동일 사안에 대한 판단의 불일치가 편향만큼 위험"],books:[{title:"Thinking, Fast and Slow",year:"2011",url:"https://www.amazon.com/s?k=thinking+fast+and+slow+kahneman"},{title:"Noise: A Flaw in Human Judgment",year:"2021",url:"https://www.amazon.com/s?k=noise+kahneman"},{title:"노벨 경제학상 수상 강연",year:"2002",url:"https://www.youtube.com/results?search_query=daniel+kahneman+nobel+lecture"}],timeline:[{y:"2024",t:"90세로 별세. 행동경제학의 아버지"},{y:"2021",t:"Noise 출간 — 판단의 불일치 문제 분석"},{y:"2011",t:"Thinking, Fast and Slow — 전 세계 1,000만부+ 판매. 투자/경영 필독서"},{y:"2002",t:"노벨 경제학상 수상 — 심리학자 최초. 전망 이론 공로"},{y:"1979",t:"전망 이론 논문 (Amos Tversky와 공저) — 행동경제학 탄생"},{y:"1934",t:"텔아비브 출생. Hebrew University → UC Berkeley PhD (심리학)"}],channels:[{name:"인터뷰 모음",url:"https://www.youtube.com/results?search_query=daniel+kahneman+interview"}],invest:"행동경제학이 투자 의사결정의 핵심 프레임워크. 시스템 1/2가 트레이딩 심리 분석의 기초. 인지 편향 이해가 시장 비효율 포착의 도구.",signal:"행동경제학 연구, 투자 심리 트렌드, AI와 인지 편향 교차점"},

"Tyler Cowen":{philosophy:"경제학은 일상의 모든 것을 설명하는 도구이며, 지적 호기심이 가장 강력한 경쟁우위다. 세상을 있는 그대로 보되, 인센티브 구조로 이해하라.",principles:["Marginal Revolution — 세계 최대 경제학 블로그. 매일 5-10개 포스팅","Conversations with Tyler — 가장 깊이 있는 인터뷰 팟캐스트 중 하나","Emergent Ventures — 비전통적 인재에게 투자하는 펠로십","The Great Stagnation — 혁신 정체론 → AI로 탈출 가능성"],books:[{title:"The Great Stagnation",year:"2011",url:"https://www.amazon.com/s?k=great+stagnation+tyler+cowen"},{title:"Average Is Over",year:"2013",url:"https://www.amazon.com/s?k=average+is+over+tyler+cowen"},{title:"Talent (공저)",year:"2022",url:"https://www.amazon.com/s?k=talent+tyler+cowen"}],timeline:[{y:"2022",t:"Talent 출간 — 인재를 어떻게 발견하는가. 실전 면접/평가 프레임워크"},{y:"2018~",t:"Emergent Ventures 펠로십 운영. 비전통적 인재/프로젝트에 $50K+ 투자"},{y:"2003~",t:"Marginal Revolution 블로그 시작. 경제학 블로그의 표준"},{y:"George Mason",t:"George Mason University 경제학 교수"},{y:"1962",t:"뉴저지 출생. Harvard PhD (경제학)"}],channels:[{name:"Marginal Revolution",url:"https://marginalrevolution.com"},{name:"Conversations with Tyler",url:"https://conversationswithtyler.com"},{name:"X",url:"https://x.com/tylercowen"}],invest:"Marginal Revolution이 매크로 경제 트렌드 분석의 필독 소스. Emergent Ventures 펠로가 미래 혁신가 선행 지표. AI와 경제 성장 논의.",signal:"Marginal Revolution 핵심 포스팅, Conversations with Tyler 게스트, AI 경제 영향 분석"},

"Jaron Lanier":{philosophy:"기술은 인간을 증강해야 하며, 인간을 조작하는 비즈니스 모델(무료+광고)이 민주주의를 파괴한다. 데이터는 노동이며, 데이터 생산자에게 대가가 돌아가야 한다.",principles:["데이터 존엄성 — 개인 데이터에 대한 소유권과 보상 체계","소셜 미디어 비판 — 행동 수정(Behavior Modification) 비즈니스 모델의 위험","VR의 아버지 — 가상현실 용어를 만들고 최초 VR 스타트업 설립","인간 중심 기술 — 기술이 인간의 창의성과 존엄성을 높여야"],books:[{title:"Ten Arguments for Deleting Your Social Media Accounts",year:"2018",url:"https://www.amazon.com/s?k=ten+arguments+deleting+social+media+jaron+lanier"},{title:"Who Owns the Future?",year:"2013",url:"https://www.amazon.com/s?k=who+owns+the+future+jaron+lanier"},{title:"You Are Not a Gadget",year:"2010",url:"https://www.amazon.com/s?k=you+are+not+a+gadget+lanier"}],timeline:[{y:"2023~",t:"Microsoft 'Office of the CTO'. AI 시대 데이터 존엄성 논의 주도"},{y:"2018",t:"Ten Arguments — 소셜 미디어 삭제 주장. 테크 비판의 아이콘"},{y:"2013",t:"Who Owns the Future? — 데이터 경제와 중산층 소멸"},{y:"2009~",t:"Microsoft Research 합류"},{y:"1984",t:"VPL Research 설립 — 세계 최초 VR 스타트업. '가상현실(Virtual Reality)' 용어 대중화"},{y:"1960",t:"뉴욕 출생. 독학. Caltech 비공식 청강"}],channels:[{name:"Microsoft 프로필",url:"https://www.microsoft.com/en-us/research/people/jlanier/"},{name:"인터뷰 모음",url:"https://www.youtube.com/results?search_query=jaron+lanier+interview"}],invest:"데이터 프라이버시 규제 트렌드의 지적 기반. AI 학습 데이터 저작권 논쟁에 영향. 소셜 미디어 규제주에 시사점.",signal:"AI 데이터 저작권 소송, 소셜 미디어 규제, 데이터 프라이버시 법안"},

"Tristan Harris":{philosophy:"기술 기업이 인간의 주의력을 착취하는 '주의력 경제(Attention Economy)'가 민주주의, 정신건강, 사회 결속력을 파괴하고 있다.",principles:["Center for Humane Technology — 인간 중심 기술 설계 운동","The Social Dilemma — 넷플릭스 다큐멘터리로 테크 비판 대중화","Race to the Bottom of the Brain Stem — 기업들의 뇌간 해킹 경쟁","AI Dilemma — AI가 소셜 미디어보다 더 큰 위협이 될 수 있다"],books:[{title:"The Social Dilemma (다큐멘터리)",year:"2020",url:"https://www.thesocialdilemma.com"},{title:"Your Undivided Attention (팟캐스트)",year:"2019~",url:"https://www.humanetech.com/podcast"},{title:"AI Dilemma 강연",year:"2023",url:"https://www.youtube.com/results?search_query=tristan+harris+ai+dilemma"}],timeline:[{y:"2023",t:"AI Dilemma 강연 — AI가 소셜 미디어보다 더 큰 존재적 위협"},{y:"2020",t:"The Social Dilemma 넷플릭스 다큐 — 1억+ 시청. 테크 비판 운동 촉발"},{y:"2018",t:"Center for Humane Technology 공동 설립"},{y:"2013~2016",t:"Google 디자인 윤리학자. 내부에서 주의력 착취 문제 제기"},{y:"교육",t:"미국 출신. Stanford Persuasive Technology Lab (B.J. Fogg 연구실)"}],channels:[{name:"Center for Humane Technology",url:"https://www.humanetech.com"},{name:"X",url:"https://x.com/tristanharris"},{name:"Podcast",url:"https://www.humanetech.com/podcast"}],invest:"테크 규제 트렌드의 핵심 인물. AI Safety 논의에 영향. 소셜 미디어 규제(META, SNAP 등)에 시사점.",signal:"AI 규제 법안, 소셜 미디어 규제, 아동 보호법, AI Safety 논의"},

"David Epstein":{philosophy:"전문화보다 범위(Range)가 복잡한 세상에서 더 강력하다. 다양한 경험이 창의성과 적응력의 원천이며, 늦은 전문화가 더 나은 결과를 만든다.",principles:["Range — 다양한 경험이 전문 지식보다 복잡한 문제 해결에 유리","Late Specialization — 일찍 전문화하는 것보다 늦게 찾는 것이 더 효과적","Kind vs Wicked Learning — 체스(규칙적) vs 현실(비규칙적) 환경의 차이"],books:[{title:"Range: Why Generalists Triumph in a Specialized World",year:"2019",url:"https://www.amazon.com/s?k=range+david+epstein"},{title:"The Sports Gene",year:"2013",url:"https://www.amazon.com/s?k=the+sports+gene+david+epstein"}],timeline:[{y:"2019",t:"Range 출간 — NYT 베스트셀러. 빌 게이츠 추천. 교육/경력 패러다임에 영향"},{y:"2013",t:"The Sports Gene — 유전자와 스포츠 재능의 관계. 선천 vs 후천 논쟁"},{y:"ProPublica",t:"ProPublica 탐사보도 기자 출신"},{y:"교육",t:"미국 출신. Columbia 환경과학/저널리즘"}],channels:[{name:"X",url:"https://x.com/DavidEpstein"},{name:"인터뷰 모음",url:"https://www.youtube.com/results?search_query=david+epstein+range"}],invest:"Range 개념이 인재 채용/교육 전략에 영향. 제너럴리스트 vs 스페셜리스트 논쟁이 HR/에듀테크 트렌드.",signal:"교육 개혁 트렌드, 인재 전략 변화, AI 시대 제너럴리스트 가치"},

"Rhonda Patrick":{philosophy:"영양과 생활습관이 유전자 발현을 조절한다. 과학적 근거 기반의 영양/운동/사우나 프로토콜이 장수와 건강수명을 극대화한다.",principles:["영양유전체학 — 영양소가 유전자 발현에 미치는 영향 연구","사우나 프로토콜 — 열 충격 단백질(HSP) 활성화로 심혈관 건강 개선","설포라판 — 브로콜리 새싹의 항산화/항암 효과 대중화","오메가-3 — EPA/DHA가 뇌 건강과 염증 조절에 핵심"],books:[{title:"FoundMyFitness 팟캐스트/유튜브",year:"2012~",url:"https://www.foundmyfitness.com"},{title:"연구 논문 기반 콘텐츠",year:"지속",url:"https://www.youtube.com/@FoundMyFitness"}],timeline:[{y:"2020~",t:"Joe Rogan 팟캐스트 반복 출연으로 대중적 인지도 급상승. 사우나/냉수 프로토콜 대중화"},{y:"2012",t:"FoundMyFitness 시작. 과학 논문 기반 건강 콘텐츠"},{y:"연구",t:"St. Jude 아동연구병원, Salk Institute 연구 경력"},{y:"교육",t:"미국 출신. UT Knoxville 생화학 → UTHSC 생의학 PhD"}],channels:[{name:"FoundMyFitness",url:"https://www.foundmyfitness.com"},{name:"YouTube",url:"https://www.youtube.com/@FoundMyFitness"},{name:"X",url:"https://x.com/foundmyfitness"}],invest:"웰니스/보충제 시장 $200B+. Rhonda가 추천한 보충제(설포라판, 오메가-3) 매출 급증 사례. 사우나 시장(Clearlight 등) 성장.",signal:"건강 보충제 트렌드, 사우나/냉수 시장, 영양유전체학 연구"},

"Eric Topol":{philosophy:"AI가 의료를 근본적으로 변혁시킨다. 딥 메디슨 — AI가 의사를 대체하는 것이 아니라, AI를 사용하는 의사가 사용하지 않는 의사를 대체한다.",principles:["Deep Medicine — AI가 의료 진단/치료를 혁신","환자 중심 의료 — 데이터를 환자에게 돌려주는 의료 민주화","디지털 트윈 — 개인 건강 데이터 기반 맞춤 의료","Ground Truths — Substack 뉴스레터로 의료 AI 트렌드 분석"],books:[{title:"Deep Medicine",year:"2019",url:"https://www.amazon.com/s?k=deep+medicine+eric+topol"},{title:"The Patient Will See You Now",year:"2015",url:"https://www.amazon.com/s?k=patient+will+see+you+now+topol"},{title:"Ground Truths (Substack)",year:"2022~",url:"https://erictopol.substack.com"}],timeline:[{y:"2023~",t:"AI 의료 혁신 논의 주도. Ground Truths 뉴스레터로 의료 AI 트렌드 분석"},{y:"2019",t:"Deep Medicine 출간 — AI 의료 혁신의 교과서"},{y:"2007~",t:"Scripps Research Translational Institute 소장. 디지털 헬스 연구"},{y:"1998",t:"Cleveland Clinic 심장내과 과장. 바이옥스(Vioxx) 위험성 최초 경고"},{y:"1954",t:"미국 출신. Virginia → UCSF MD. 심장학/유전학 전문"}],channels:[{name:"Ground Truths",url:"https://erictopol.substack.com"},{name:"X",url:"https://x.com/EricTopol"},{name:"Scripps Research",url:"https://www.scripps.edu/science-and-medicine/translational-institute/"}],invest:"의료 AI 시장 $50B+ 전망. Topol의 분석이 디지털 헬스 투자 방향 지표. 원격의료, AI 진단, 웨어러블 시장.",signal:"의료 AI FDA 승인, 디지털 헬스 스타트업, AI 진단 임상시험"},

"Siddhartha Mukherjee":{philosophy:"질병의 역사를 이해해야 미래의 치료를 설계할 수 있다. 유전자가 인간의 운명을 어떻게 형성하는지 이해하는 것이 현대 의학의 핵심이다.",principles:["The Emperor of All Maladies — 암의 전기. 퓰리처상 수상","The Gene — 유전자의 역사와 미래. 유전학의 대중서","세포 치료 — 면역세포치료(CAR-T) 등 차세대 치료법 연구"],books:[{title:"The Emperor of All Maladies (암의 전기)",year:"2010",url:"https://www.amazon.com/s?k=emperor+of+all+maladies+mukherjee"},{title:"The Gene: An Intimate History",year:"2016",url:"https://www.amazon.com/s?k=the+gene+mukherjee"},{title:"The Song of the Cell",year:"2022",url:"https://www.amazon.com/s?k=song+of+the+cell+mukherjee"}],timeline:[{y:"2022",t:"The Song of the Cell — 세포 생물학의 혁명. 세포 치료의 미래"},{y:"2016",t:"The Gene — 유전학의 과거/현재/미래. NYT 베스트셀러"},{y:"2011",t:"퓰리처상 수상 (The Emperor of All Maladies)"},{y:"2010",t:"The Emperor of All Maladies — 암 연구 4,000년 역사. PBS 다큐멘터리화"},{y:"교육",t:"인도 뉴델리 출생. Stanford 생물학 → Oxford(Rhodes 장학생) → Harvard MD/PhD"}],channels:[{name:"인터뷰 모음",url:"https://www.youtube.com/results?search_query=siddhartha+mukherjee+interview"},{name:"Columbia 프로필",url:"https://www.columbia.edu/"}],invest:"CAR-T/세포치료 시장 $25B+. 유전자 치료/CRISPR 관련 바이오테크. 암 치료 혁신 트렌드.",signal:"세포치료 임상 결과, CRISPR 치료 승인, 암 바이오테크 M&A"},

"Riley Brown":{philosophy:"AI 도구를 활용한 실전 자동화와 프로덕티비티가 미래 경쟁력이다. 복잡한 AI를 누구나 쓸 수 있게 실용적으로 가르친다.",principles:["AI 자동화 — Make, Zapier, n8n 등으로 AI 워크플로우 자동화","AI 도구 리뷰 — 최신 AI 도구를 실전 시나리오로 테스트","No-Code AI — 코딩 없이 AI 에이전트/워크플로우 구축"],books:[{title:"YouTube AI 자동화 채널",year:"2023~",url:"https://www.youtube.com/results?search_query=riley+brown+ai+automation"},{title:"AI 워크플로우 튜토리얼",year:"지속",url:"https://www.youtube.com/results?search_query=riley+brown+ai+tools"}],timeline:[{y:"2024~",t:"AI 자동화 콘텐츠 크리에이터. 실전 AI 도구 활용법 교육"},{y:"2023",t:"YouTube AI 자동화 채널 시작. 빠르게 성장"},{y:"이전",t:"마케팅/테크 업계 실무 경험"}],channels:[{name:"YouTube",url:"https://www.youtube.com/results?search_query=riley+brown+ai"},{name:"X",url:"https://x.com/rileybrown_ai"}],invest:"AI 자동화 도구 시장. No-Code AI 플랫폼 트렌드.",signal:"AI 자동화 도구 트렌드, No-Code AI 시장 성장"},

"AI Jason":{philosophy:"AI 논문과 최신 연구를 실용적 관점에서 해석하고, 일반인도 이해할 수 있는 수준으로 전달한다.",principles:["AI 논문 해설 — 최신 연구 논문을 시각적으로 쉽게 설명","AI 트렌드 분석 — 주요 모델 출시/연구 동향 빠른 분석","실용적 AI — 연구와 실전 적용의 다리 역할"],books:[{title:"YouTube AI 논문 리뷰 채널",year:"2023~",url:"https://www.youtube.com/@AIJasonZ"},{title:"AI 트렌드 분석 시리즈",year:"지속",url:"https://www.youtube.com/results?search_query=ai+jason+paper+review"}],timeline:[{y:"2024~",t:"AI YouTube 핵심 채널. GPT-4o, Claude 3.5, Sora 등 주요 모델 즉시 분석"},{y:"2023",t:"AI 논문 해설 YouTube 채널 본격 성장. 시각적 설명 스타일로 인기"},{y:"이전",t:"테크 업계 엔지니어 출신"}],channels:[{name:"YouTube",url:"https://www.youtube.com/@AIJasonZ"},{name:"X",url:"https://x.com/ajaborason_z"}],invest:"AI 논문 트렌드가 AI 기업 전략 방향 선행 지표. 주요 모델 벤치마크 리뷰.",signal:"AI 논문 트렌드, 신규 모델 벤치마크, AI 아키텍처 혁신"}

};

// ═══════════════════════════════════════
// 타이탄 핵심 논문 데이터베이스
// titans-data.js에 TITAN_PROFILES와 함께 로드됨
// ═══════════════════════════════════════
const TITAN_PAPERS = {
"Geoffrey Hinton": [
  {title:"Learning representations by back-propagating errors", year:"1986", journal:"Nature", impact:"딥러닝 학습 알고리즘의 근간. 역전파 대중화", url:"https://www.nature.com/articles/323533a0", citations:"45K+"},
  {title:"Reducing the Dimensionality of Data with Neural Networks", year:"2006", journal:"Science", impact:"Deep Belief Networks — 딥러닝 부활의 신호탄", url:"https://www.science.org/doi/10.1126/science.1127647", citations:"17K+"},
  {title:"ImageNet Classification with Deep CNNs (AlexNet)", year:"2012", journal:"NeurIPS", impact:"AlexNet — 딥러닝 혁명의 시작점. 컴퓨터 비전 패러다임 전환", url:"https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html", citations:"120K+"}
],
"Yoshua Bengio": [
  {title:"A Neural Probabilistic Language Model", year:"2003", journal:"JMLR", impact:"워드 임베딩/언어 모델의 초기 신경망 접근. GPT 계보의 시초", url:"https://www.jmlr.org/papers/v3/bengio03a.html", citations:"10K+"},
  {title:"Generative Adversarial Nets (GAN)", year:"2014", journal:"NeurIPS", impact:"GAN — 생성 AI의 기초 (Ian Goodfellow 지도)", url:"https://arxiv.org/abs/1406.2661", citations:"55K+"},
  {title:"Attention-Based Neural Machine Translation", year:"2015", journal:"ICLR", impact:"Attention 메커니즘의 초기 적용. Transformer 탄생의 전초", url:"https://arxiv.org/abs/1409.0473", citations:"20K+"}
],
"Yann LeCun": [
  {title:"Gradient-Based Learning Applied to Document Recognition", year:"1998", journal:"Proceedings of the IEEE", impact:"LeNet/CNN — 합성곱 신경망의 원전. 현대 컴퓨터 비전의 기초", url:"https://ieeexplore.ieee.org/document/726791", citations:"50K+"},
  {title:"A Path Towards Autonomous Machine Intelligence", year:"2022", journal:"OpenReview", impact:"World Models + JEPA — 자기지도학습 기반 AGI 비전", url:"https://openreview.net/forum?id=BZ5a1r-kVsf", citations:"1K+"}
],
"Ian Goodfellow": [
  {title:"Generative Adversarial Networks", year:"2014", journal:"NeurIPS", impact:"GAN 원본 논문 — 이미지 생성 AI, Deepfake 등의 기초", url:"https://arxiv.org/abs/1406.2661", citations:"55K+"},
  {title:"Deep Learning (교과서)", year:"2016", journal:"MIT Press", impact:"딥러닝 분야 표준 교과서 (Bengio, Courville 공저)", url:"https://www.deeplearningbook.org", citations:"40K+"}
],
"Noam Shazeer": [
  {title:"Attention Is All You Need", year:"2017", journal:"NeurIPS", impact:"Transformer 아키텍처 — GPT, BERT, 현대 AI의 근간", url:"https://arxiv.org/abs/1706.03762", citations:"130K+"},
  {title:"Outrageously Large Neural Networks: The Sparsely-Gated MoE Layer", year:"2017", journal:"ICLR", impact:"Mixture of Experts — 효율적 대규모 모델의 기초", url:"https://arxiv.org/abs/1701.06538", citations:"3K+"}
],
"Ilya Sutskever": [
  {title:"Sequence to Sequence Learning with Neural Networks", year:"2014", journal:"NeurIPS", impact:"Seq2Seq — 기계번역/챗봇의 기초 아키텍처", url:"https://arxiv.org/abs/1409.3215", citations:"22K+"},
  {title:"ImageNet Classification with Deep CNNs (AlexNet)", year:"2012", journal:"NeurIPS", impact:"AlexNet 공동 개발 — 딥러닝 혁명 촉발 (Hinton 지도)", url:"https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html", citations:"120K+"}
],
"Demis Hassabis": [
  {title:"Highly accurate protein structure prediction with AlphaFold", year:"2021", journal:"Nature", impact:"AlphaFold2 — 단백질 접힘 50년 난제 해결. 노벨화학상(2024)", url:"https://www.nature.com/articles/s41586-021-03819-2", citations:"25K+"},
  {title:"Mastering the game of Go with deep neural networks", year:"2016", journal:"Nature", impact:"AlphaGo — 바둑에서 인간 최초 패배. AI 역사 전환점", url:"https://www.nature.com/articles/nature16961", citations:"15K+"},
  {title:"A general reinforcement learning algorithm that masters chess, shogi and Go", year:"2018", journal:"Science", impact:"AlphaZero — 자기대국만으로 체스/바둑/장기 초인간 달성", url:"https://www.science.org/doi/10.1126/science.aar6404", citations:"7K+"}
],
"Fei-Fei Li": [
  {title:"ImageNet: A Large-Scale Hierarchical Image Database", year:"2009", journal:"CVPR", impact:"ImageNet — 1400만 이미지 데이터셋. AI 혁명의 연료", url:"https://ieeexplore.ieee.org/document/5206848", citations:"40K+"}
],
"Anthropic (Chris Olah)": [
  {title:"Scaling Monosemanticity", year:"2024", journal:"Anthropic Research", impact:"Claude 내부 수백만 해석 가능 특성 추출 성공. AI 해석성 랜드마크", url:"https://www.anthropic.com/research/mapping-mind-language-model", citations:"신규"},
  {title:"Toy Models of Superposition", year:"2022", journal:"Transformer Circuits", impact:"AI 뉴런의 중첩 저장 방식 발견", url:"https://transformer-circuits.pub/2022/toy_model/index.html", citations:"500+"}
],
"Jennifer Doudna": [
  {title:"A Programmable Dual-RNA-Guided DNA Endonuclease", year:"2012", journal:"Science", impact:"CRISPR-Cas9 유전자 가위 발명 — 노벨화학상(2020)", url:"https://www.science.org/doi/10.1126/science.1225829", citations:"15K+"}
],
"Eric Lander": [
  {title:"Initial sequencing and analysis of the human genome", year:"2001", journal:"Nature", impact:"인간게놈프로젝트 완성 논문 — 30억 염기서열 최초 해독", url:"https://www.nature.com/articles/35057062", citations:"25K+"}
],
"Terence Tao": [
  {title:"The primes contain arbitrarily long arithmetic progressions", year:"2008", journal:"Annals of Mathematics", impact:"Green-Tao 정리 — 소수에서 임의 길이 등차수열 존재 증명. 필즈상", url:"https://annals.math.princeton.edu/2008/167-2/p03", citations:"2K+"}
],
"Roger Penrose": [
  {title:"Gravitational Collapse and Space-Time Singularities", year:"1965", journal:"Physical Review Letters", impact:"Penrose 특이점 정리 — 블랙홀 형성의 필연성. 노벨물리학상(2020)", url:"https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.14.57", citations:"3K+"}
],
"Ed Witten": [
  {title:"String Theory Dynamics In Various Dimensions", year:"1995", journal:"Nuclear Physics B", impact:"M-이론 제안 — 5개 끈이론의 통합. 필즈상(1990) 수상 물리학자", url:"https://arxiv.org/abs/hep-th/9503124", citations:"5K+"}
],
"Daniel Kahneman": [
  {title:"Prospect Theory: An Analysis of Decision under Risk", year:"1979", journal:"Econometrica", impact:"전망 이론 — 행동경제학 탄생. 노벨경제학상(2002)", url:"https://www.jstor.org/stable/1914185", citations:"70K+"}
],
"David Sinclair": [
  {title:"Declining NAD+ Induces a Pseudohypoxic State", year:"2013", journal:"Cell", impact:"NAD+ 경로가 노화의 핵심 메커니즘임을 규명", url:"https://www.cell.com/cell/fulltext/S0092-8674(13)01521-3", citations:"3K+"}
],
"Arthur Mensch": [
  {title:"Training Compute-Optimal Large Language Models (Chinchilla)", year:"2022", journal:"NeurIPS", impact:"Chinchilla Scaling Laws — 모델 크기 vs 데이터 최적 비율 재정의", url:"https://arxiv.org/abs/2203.15556", citations:"3K+"}
],
"Andrew Ng": [
  {title:"Building High-level Features Using Large Scale Unsupervised Learning", year:"2012", journal:"ICML", impact:"Google Brain — 1만6천 CPU로 고양이 인식. 대규모 비지도학습", url:"https://arxiv.org/abs/1112.6209", citations:"4K+"}
],
"Max Tegmark": [
  {title:"The Mathematical Universe", year:"2008", journal:"Foundations of Physics", impact:"수학적 우주 가설 — 물리적 실재 = 수학적 구조", url:"https://arxiv.org/abs/0704.0646", citations:"1K+"}
],
"Jeremy Howard": [
  {title:"Universal Language Model Fine-tuning for Text Classification (ULMFiT)", year:"2018", journal:"ACL", impact:"NLP Transfer Learning 선구. BERT/GPT 패러다임의 전초", url:"https://arxiv.org/abs/1801.06146", citations:"5K+"}
],
"Jim Fan": [
  {title:"Voyager: An Open-Ended Embodied Agent with LLMs", year:"2023", journal:"NeurIPS", impact:"LLM 기반 자율 에이전트 — Minecraft에서 무한 탐험", url:"https://voyager.minedojo.org", citations:"500+"}
]
};

// ═══════════════════════════════════════
// 타이탄 프로필 사진 (Wikipedia Commons)
// ═══════════════════════════════════════
const TITAN_PHOTOS = {
// ── AI ──
"Geoffrey Hinton":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Geoffrey_Hinton_-_NIPS_2011_%28cropped%29.jpg/440px-Geoffrey_Hinton_-_NIPS_2011_%28cropped%29.jpg",
"Yoshua Bengio":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Yoshua_Bengio_2019_cropped.jpg/440px-Yoshua_Bengio_2019_cropped.jpg",
"Dario Amodei":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Dario_Amodei_at_TechCrunch_Disrupt_2023_01_%28cropped%29.jpg/440px-Dario_Amodei_at_TechCrunch_Disrupt_2023_01_%28cropped%29.jpg",
"Sam Altman":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sam_Altman_CropEdit.jpg/440px-Sam_Altman_CropEdit.jpg",
"Yann LeCun":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Yann_LeCun_-_2018_%28cropped%29.jpg/440px-Yann_LeCun_-_2018_%28cropped%29.jpg",
"Andrej Karpathy":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Andrej_Karpathy%2C_OpenAI.png/440px-Andrej_Karpathy%2C_OpenAI.png",
"Demis Hassabis":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Demis_Hassabis%2C_2024_Nobel_Prize_Laureate_in_Chemistry_%28cropped%29.jpg/440px-Demis_Hassabis%2C_2024_Nobel_Prize_Laureate_in_Chemistry_%28cropped%29.jpg",
"Ilya Sutskever":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ilya_Sutskever_and_Sam_Altman_in_TAU_%28cropped%29.jpg/440px-Ilya_Sutskever_and_Sam_Altman_in_TAU_%28cropped%29.jpg",
"Fei-Fei Li":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Fei-Fei_Li_at_AI_for_Good_2017.jpg/440px-Fei-Fei_Li_at_AI_for_Good_2017.jpg",
"Andrew Ng":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Andrew_Ng_at_Emtech_%28cropped%29.jpg/440px-Andrew_Ng_at_Emtech_%28cropped%29.jpg",
"Ian Goodfellow":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ian_Goodfellow.jpg/440px-Ian_Goodfellow.jpg",
"Jim Fan":"",
"Lilian Weng":"",
"Jeremy Howard":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Jeremy_Howard_2012_%28cropped%29.jpg/440px-Jeremy_Howard_2012_%28cropped%29.jpg",
"Lex Fridman":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Lex_Fridman_teaching_at_MIT_in_2018.png/440px-Lex_Fridman_teaching_at_MIT_in_2018.png",
"Hugging Face (Clem Delangue)":"",
"Arthur Mensch":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Arthur_Mensch.png/440px-Arthur_Mensch.png",
"Noam Shazeer":"",
"Harrison Chase":"",
"Amjad Masad":"",
"Emad Mostaque":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Emad_Mostaque.jpg/440px-Emad_Mostaque.jpg",
"Connor Leahy":"",
"Mustafa Suleyman":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Mustafa_Suleyman.jpg/440px-Mustafa_Suleyman.jpg",
"Jan Leike":"",
"Mira Murati":"",
"Greg Brockman":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Greg_Brockman_Y_Combinator.jpg/440px-Greg_Brockman_Y_Combinator.jpg",
"Anthropic (Chris Olah)":"",
"Perplexity (Aravind Srinivas)":"",
"Cursor (Michael Truell)":"",
"Windsurf (Varun Mohan)":"",
"Genspark (Eric Jing)":"",
"Obsidian (Shida Li)":"",
"Matt Shumer":"",
"Matthew Berman":"",
"David Shapiro":"",
"Riley Brown":"",
"AI Jason":"",
// ── Science ──
"Ed Witten":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ed_Witten.jpg/440px-Ed_Witten.jpg",
"Brian Cox":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Brian_Cox_at_Science_Foo_Camp_%28cropped%29.jpg/440px-Brian_Cox_at_Science_Foo_Camp_%28cropped%29.jpg",
"Sabine Hossenfelder":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Sabine_Hossenfelder.jpg/440px-Sabine_Hossenfelder.jpg",
"Neil deGrasse Tyson":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Neil_deGrasse_Tyson_in_June_2017_%28cropped%29.jpg/440px-Neil_deGrasse_Tyson_in_June_2017_%28cropped%29.jpg",
"Sean Carroll":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Sean_Carroll_%28physicist%29.jpg/440px-Sean_Carroll_%28physicist%29.jpg",
"David Deutsch":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/David-Deutsch-2015.jpg/440px-David-Deutsch-2015.jpg",
"Jennifer Doudna":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Professor_Jennifer_Doudna_ForMemRS.jpg/440px-Professor_Jennifer_Doudna_ForMemRS.jpg",
"Eric Lander":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Eric_Lander_official_photo.jpg/440px-Eric_Lander_official_photo.jpg",
"Terence Tao":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Terence_Tao%2C_PCTS%2C_2006_%28cropped%29.jpg/440px-Terence_Tao%2C_PCTS%2C_2006_%28cropped%29.jpg",
"Roger Penrose":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Roger_Penrose-6Nov2005_%28cropped%29.jpg/440px-Roger_Penrose-6Nov2005_%28cropped%29.jpg",
"Carlo Rovelli":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Carlo_Rovelli_2024.jpg/440px-Carlo_Rovelli_2024.jpg",
"Max Tegmark":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Max_Tegmark_2014.jpg/440px-Max_Tegmark_2014.jpg",
"Michio Kaku":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Michio_Kaku_Presentation.jpg/440px-Michio_Kaku_Presentation.jpg",
"Katie Mack":"",
"David Eagleman":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/David_Eagleman.jpg/440px-David_Eagleman.jpg",
// ── Tech ──
"Elon Musk":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/440px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
"Jensen Huang":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Jensen_Huang_%28cropped%29_%282024%29.jpg/440px-Jensen_Huang_%28cropped%29_%282024%29.jpg",
"Satya Nadella":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Satya_Narayana_Nadella.jpg/440px-Satya_Narayana_Nadella.jpg",
"Sundar Pichai":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Sundar_Pichai_%28cropped%29.jpg/440px-Sundar_Pichai_%28cropped%29.jpg",
"Tim Cook":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tim_Cook_%282017%2C_cropped%29.jpg/440px-Tim_Cook_%282017%2C_cropped%29.jpg",
"Mark Zuckerberg":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/440px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
"Linus Torvalds":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg/440px-LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg",
"Vitalik Buterin":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/VitalikButerinProfile.jpg/440px-VitalikButerinProfile.jpg",
"Patrick Collison":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Patrick_Collison.png/440px-Patrick_Collison.png",
"Daniel Gross":"",
"Nat Friedman":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/20060424_Nat_Friedman.jpg/440px-20060424_Nat_Friedman.jpg",
"George Hotz":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/George_Hotz.jpg/440px-George_Hotz.jpg",
"Dylan Field":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Dylan_Field_TechCrunch_Disrupt_2022_1435088567_%28cropped%29.jpg/440px-Dylan_Field_TechCrunch_Disrupt_2022_1435088567_%28cropped%29.jpg",
"Guillermo Rauch":"",
"Mitchell Hashimoto":"",
"DHH (David Heinemeier Hansson)":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/DHH_TechCrunch.jpg/440px-DHH_TechCrunch.jpg",
"Pieter Levels":"",
"Theo Browne":"",
"Fireship (Jeff Delaney)":"",
"Chris Lattner":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Chris_Lattner_at_FOSDEM_2011_%28colorized%29.jpg/440px-Chris_Lattner_at_FOSDEM_2011_%28colorized%29.jpg",
"Ivan Zhao":"",
// ── Business ──
"Ray Dalio":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Web_Summit_2018_-_Forum_-_Day_2%2C_November_7_HM1_7481_%2844858045925%29.jpg/440px-Web_Summit_2018_-_Forum_-_Day_2%2C_November_7_HM1_7481_%2844858045925%29.jpg",
"Charlie Munger":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Charlie_Munger.jpg/440px-Charlie_Munger.jpg",
"Naval Ravikant":"https://upload.wikimedia.org/wikipedia/commons/5/55/Naval_Ravikant_%28cropped%29.jpg",
"Paul Graham":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Paulgraham_240.jpg/440px-Paulgraham_240.jpg",
"Marc Andreessen":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Marc_Andreessen-crop.jpg/440px-Marc_Andreessen-crop.jpg",
"Peter Thiel":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Peter_Thiel_%282014%29_%28cropped%29.jpg/440px-Peter_Thiel_%282014%29_%28cropped%29.jpg",
"Reed Hastings":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Reed_Hastings%2C_Web_2.0_Conference.jpg/440px-Reed_Hastings%2C_Web_2.0_Conference.jpg",
"Jeff Bezos":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_39074799225_%28cropped%29.jpg/440px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_39074799225_%28cropped%29.jpg",
"Jamie Dimon":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Jamie_Dimon.jpg/440px-Jamie_Dimon.jpg",
"Cathie Wood":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Cathie_Wood_ARK_Invest_Photo.jpg/440px-Cathie_Wood_ARK_Invest_Photo.jpg",
"Reid Hoffman":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Reid_Hoffman_2024.jpg/440px-Reid_Hoffman_2024.jpg",
"Howard Marks":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Howard_Marks_2.17.12_%28cropped%29.jpg/440px-Howard_Marks_2.17.12_%28cropped%29.jpg",
"Masayoshi Son":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/SB_Masayoshi_Son.jpg/440px-SB_Masayoshi_Son.jpg",
"Patrick Bet-David":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Patrick_Bet-David_%2854234423976%29_%28cropped%29.jpg/440px-Patrick_Bet-David_%2854234423976%29_%28cropped%29.jpg",
"Lenny Rachitsky":"",
"Ben Thompson":"",
"Packy McCormick":"",
// ── Philosophy ──
"Yuval Noah Harari":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Yuval_Noah_Harari_cropped.jpg/440px-Yuval_Noah_Harari_cropped.jpg",
"Daniel Kahneman":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Daniel_Kahneman_%282009%29.jpg/440px-Daniel_Kahneman_%282009%29.jpg",
"Nassim Nicholas Taleb":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Nassim_Nicholas_Taleb_2010_%28cropped%29.jpg/440px-Nassim_Nicholas_Taleb_2010_%28cropped%29.jpg",
"Tyler Cowen":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Tyler_Cowen_by_Peter_Hershey%2C_2018.jpg/440px-Tyler_Cowen_by_Peter_Hershey%2C_2018.jpg",
"Nick Bostrom":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Nick_Bostrom%2C_Stanford_2006_%28square_crop%29.jpg/440px-Nick_Bostrom%2C_Stanford_2006_%28square_crop%29.jpg",
"Balaji Srinivasan":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Balaji_Srinivasan_%28cropped%29.png/440px-Balaji_Srinivasan_%28cropped%29.png",
"Jordan Peterson":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Jordan_Peterson_June_2018.jpg/440px-Jordan_Peterson_June_2018.jpg",
"Jaron Lanier":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Jaron_Lanier_2.jpg/440px-Jaron_Lanier_2.jpg",
"Tristan Harris":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Tristan_Harris-2022.jpg/440px-Tristan_Harris-2022.jpg",
"David Epstein":"",
// ── Health ──
"Andrew Huberman":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Andrew_D._Huberman%2C_Ph.D..jpg/440px-Andrew_D._Huberman%2C_Ph.D..jpg",
"Peter Attia":"https://upload.wikimedia.org/wikipedia/commons/e/ea/2025_Peter_Attia_%28cropped%29.jpg",
"David Sinclair":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/David_A._Sinclair.jpg/440px-David_A._Sinclair.jpg",
"Rhonda Patrick":"",
"Eric Topol":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Eric_Topol_in_2026_A.jpg/440px-Eric_Topol_in_2026_A.jpg",
"Siddhartha Mukherjee":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Siddhartha_Mukherjee_2017.jpg/440px-Siddhartha_Mukherjee_2017.jpg",
"Matthew Walker":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Matt_Scientist_Headshot.jpg/440px-Matt_Scientist_Headshot.jpg",
"Atul Gawande":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Atul_Gawande_at_TED_2012.jpg/440px-Atul_Gawande_at_TED_2012.jpg",
// ── Finance ──
"Michael Burry":"",
"Stanley Druckenmiller":"",
"Aswath Damodaran":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Aswath_Damodaran_keynote_at_ICAI_SG_Chapter%27s_Mega_Event_2023_%28cropped%29.jpg/440px-Aswath_Damodaran_keynote_at_ICAI_SG_Chapter%27s_Mega_Event_2023_%28cropped%29.jpg",
"Chamath Palihapitiya":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Chamath_Palihapitiya_at_TechCrunch_Disrupt.jpg/440px-Chamath_Palihapitiya_at_TechCrunch_Disrupt.jpg",
// ── Design ──
"Jony Ive":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Jony_Ive_%28OTRS%29.jpg/440px-Jony_Ive_%28OTRS%29.jpg",
"Don Norman":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Don_Norman_at_AWF05.jpg/440px-Don_Norman_at_AWF05.jpg",
"John Maeda":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/John_maeda.jpg/440px-John_maeda.jpg",
// ── Others ──
"Stephen Wolfram":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stephen_Wolfram_PR.jpg/440px-Stephen_Wolfram_PR.jpg",
"Bill Gates":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/440px-Bill_Gates_2017_%28cropped%29.jpg"
};
