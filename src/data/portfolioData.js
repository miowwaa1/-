export const portfolioData = {
  personal: {
    name: "정민서",
    engName: "Jeong Minseo",
    jobTitle: "사무직 (경영지원 · 총무 · 일반사무)",
    birth: "2007년 11월 20일",
    email: "minseo.jeong.official@gmail.com",
    phone: "010-1234-5678",
    location: "대한민국 서울특별시",
    headline: "정확한 데이터 관리와 체계적인 문서 구조화로 조직의 신뢰를 더하는 사무 인재",
    introduction: `안녕하세요! 꼼꼼한 관찰력과 책임감으로 업무 프로세스를 개선하는 사무직 지원자 정민서입니다.
방대한 데이터를 엑셀로 신속·정확하게 가공하고, 핵심을 한눈에 파악할 수 있는 파워포인트 보고서와 일러스트레이터 시각 자료를 제작하는 데 강점이 있습니다.
반복되는 업무를 표준화하고 사내 구성원과의 원활한 소통을 통해 팀의 업무 생산성을 높이는 든든한 조력자가 되겠습니다.`,
  },
  certificates: [
    {
      id: "cert-1",
      name: "정보처리기사",
      issuer: "한국산업인력공단",
      date: "2026.06 취득",
      description: "소프트웨어 공학, 데이터베이스 설계 및 기초 SQL 데이터 핸들링 역량 보유",
      tag: "국가기술자격",
      color: "emerald",
    },
    {
      id: "cert-2",
      name: "GTQ (그래픽기술자격 1급)",
      issuer: "한국생산성본부",
      date: "2025.11 취득",
      description: "포토샵 및 일러스트레이터를 활용한 홍보물 시각 디자인 및 디지털 그래픽 편집 실무",
      tag: "국가공인자격",
      color: "purple",
    },
  ],
  skills: [
    {
      name: "Microsoft Excel",
      koreanName: "엑셀",
      level: 95,
      levelLabel: "고급 (실무 능숙)",
      description: "VLOOKUP/XLOOKUP, INDEX-MATCH, 피벗 테이블, 복합 조건부 서식, 수식 오류 검증, 대용량 데이터 전처리 및 통계 차트 대시보드 제작",
      tags: ["데이터 전처리", "피벗 테이블", "함수 자동화", "통계 분석"],
      icon: "file-spreadsheet",
    },
    {
      name: "Microsoft PowerPoint",
      koreanName: "파워포인트",
      level: 92,
      levelLabel: "고급 (실무 능숙)",
      description: "가독성 높은 슬라이드 마스터 설계, 비즈니스 제안서 및 주간 업무 보고서 템플릿 표준화, 인포그래픽 다이어그램 시각화",
      tags: ["슬라이드 마스터", "비즈니스 기획서", "인포그래픽", "보고서 템플릿"],
      icon: "presentation",
    },
    {
      name: "Adobe Illustrator",
      koreanName: "일러스트레이터",
      level: 88,
      levelLabel: "중상급 (실무 활용)",
      description: "벡터 기반 사내 홍보 포스터, 현수막, 사내 안내 리플렛, SNS 카드뉴스, CI/BI 브랜드 로고 리터칭 및 인쇄용 판형 제작",
      tags: ["벡터 그래픽", "홍보물 제작", "리플렛/포스터", "인쇄 편집"],
      icon: "palette",
    },
  ],
  projects: [
    {
      id: 1,
      title: "매출 및 재고 데이터 통합 분석 대시보드 구축",
      subtitle: "엑셀 피벗 테이블과 동적 함수를 활용한 실시간 업무 효율화",
      period: "2026.01 - 2026.02 (2개월)",
      tool: "Microsoft Excel",
      tools: ["Excel", "XLOOKUP", "Pivot Table", "대시보드 차트"],
      imageFileName: "project1.png",
      placeholderImage: "/images/projects/project1.svg",
      summary: "기존 수기 작성 방식으로 인해 발생하던 재고 집계 오류율을 개선하고, 주간 매출 추이를 한눈에 모니터링할 수 있는 자동 집계 엑셀 템플릿을 개발하였습니다.",
      metrics: [
        { label: "업무 소요 시간", value: "65% 단축" },
        { label: "집계 데이터 오류", value: "0건 달성" },
        { label: "월간 리포트", value: "자동화 완료" }
      ],
      details: {
        background: "매월 5,000건 이상의 거래처 발주 및 출고 데이터를 수기로 취합하면서 누락 및 수식 오류로 인한 재고 불일치 문제가 반복되었습니다.",
        role: "데이터 정규화, XLOOKUP 기반 참조 테이블 구조 설계, 슬라이서 기반 피벗 차트 대시보드 구축",
        process: [
          "원시 데이터(Raw Data)의 중복값 제거 및 날짜/코드 표준화",
          "자동 계산 수식 템플릿 제작 및 오류 방지 데이터 유효성 검사 적용",
          "품목별/기간별 판매량과 안전재고 잔여량을 시각화하는 동적 피벗 차트 구성",
          "실무자를 위한 사용법 매뉴얼 1부 배포"
        ],
        achievement: "기존 4시간 이상 소요되던 주간 정산 보고 업무를 1시간 30분으로 65% 단축하였으며, 재고 실사 불일치율을 0%로 줄였습니다."
      }
    },
    {
      id: 2,
      title: "전사 주간 업무 보고 및 기획서 표준 템플릿 개발",
      subtitle: "조직 아이덴티티를 반영한 가독성 중심의 PPT 슬라이드 표준화",
      period: "2026.03 (1개월)",
      tool: "Microsoft PowerPoint",
      tools: ["PowerPoint", "Slide Master", "Infographics", "Typography"],
      imageFileName: "project2.png",
      placeholderImage: "/images/projects/project2.svg",
      summary: "부서마다 상이했던 보고서 양식을 통일하고, 직관적인 인포그래픽 레이아웃을 도입하여 경영진 대상 보고의 전달력과 문서 작성 생산성을 높였습니다.",
      metrics: [
        { label: "보고서 작성 속도", value: "40% 향상" },
        { label: "표준 레이아웃", value: "15종 제공" },
        { label: "사내 만족도", value: "96점 획득" }
      ],
      details: {
        background: "각 부서별로 제각각 사용하던 비표준 폰트와 난잡한 색상으로 인해 문서 통일성이 저해되고, 신규 보고서 작성 시 서식 수정에 과도한 시간이 낭비되었습니다.",
        role: "기업 CI 컬러 가이드라인 수립, 슬라이드 마스터 15종 및 다이어그램 컴포넌트 30종 제작",
        process: [
          "조직 브랜드 컬러(신뢰감을 주는 네이비/블루) 및 시스템 폰트 규격화",
          "표지, 목차, 본문(비교, 타임라인, 통계, 로드맵) 마스터 슬라이드 설계",
          "텍스트 중심 슬라이드를 핵심 키워드 중심의 인포그래픽으로 시각화",
          "임직원 가이드 배포 및 피드백을 반영한 버전 업데이트"
        ],
        achievement: "전사 공통 서식으로 채택되어 문서 작성 시간을 평균 40% 단축시켰으며, 사내 문서 품질 만족도 조사에서 96점을 기록했습니다."
      }
    },
    {
      id: 3,
      title: "사내 문화 행사 홍보 리플렛 및 비주얼 그래픽 디자인",
      subtitle: "GTQ 1급 역량을 발휘한 고품질 인쇄 홍보물 기획 및 제작",
      period: "2025.10 - 2025.11 (2개월)",
      tool: "Adobe Illustrator",
      tools: ["Illustrator", "Photoshop", "GTQ 1급", "인쇄 제작 감리"],
      imageFileName: "project3.png",
      placeholderImage: "/images/projects/project3.svg",
      summary: "사내 임직원 워크숍 및 연말 행사를 위한 3단 접이식 리플렛, X배너, 웹 공지용 카드뉴스를 벡터 그래픽으로 일괄 기획·디자인하였습니다.",
      metrics: [
        { label: "행사 참여율", value: "88% 달성" },
        { label: "인쇄물 판형", value: "오차 0건" },
        { label: "제작 비용", value: "외주대비 70% 절감" }
      ],
      details: {
        background: "외부 외주 디자인 업체에 의존하던 사내 행사 홍보물 제작을 자체 인력으로 내재화하여 예산을 절감하고 긴급 일정에 유연하게 대응하고자 하였습니다.",
        role: "행사 비주얼 아이덴티티(VI) 콘셉트 기획, 벡터 일러스트레이션 드로잉, 인쇄 규격(CMYK, 여백 재단선) 검수",
        process: [
          "행사 취지에 맞춘 일러스트 키비주얼 및 컬러 팔레트 기획",
          "A4 3단 리플렛, 현수막(500x90cm), 스탠드 배너 규격별 템플릿 작업",
          "사내 인트라넷 게시용 모바일 최적화 카드뉴스 6컷 제작",
          "인쇄소 출력 사양(CMYK, 해상도 300dpi, 아웃라인 폰트) 최종 감리"
        ],
        achievement: "외주 비용을 전액 절감하면서도 임직원 행사 참여율 88%를 이끌어냈으며, 인쇄 오류 없이 안정적으로 납품을 완료했습니다."
      }
    },
    {
      id: 4,
      title: "총무 비품 및 사내 IT 자산 전산 관리 체계 수립",
      subtitle: "정보처리기사 지식을 결합한 정합도 99.8%의 자산 데이터베이스 구축",
      period: "2026.04 - 2026.05 (2개월)",
      tool: "ERP & Database",
      tools: ["Excel DB", "ERP 연동", "자산 라벨링", "정보처리기사"],
      imageFileName: "project4.png",
      placeholderImage: "/images/projects/project4.svg",
      summary: "전사 사무용 PC, 모니터, 공용 비품 1,400여 점의 고유 식별 코드를 체계화하고 실사 프로세스를 정립하여 분실 및 유휴 장비 손실을 사전에 차단했습니다.",
      metrics: [
        { label: "관리 자산 수", value: "1,420건" },
        { label: "데이터 일치율", value: "99.8%" },
        { label: "불용 자산 절감", value: "연 400만원" }
      ],
      details: {
        background: "부서 이동 및 신규 입사자 증가로 사내 IT 기기와 가구의 위치 및 사용 현황이 불명확해져 추가 구매 예산이 불필요하게 낭비되는 문제가 있었습니다.",
        role: "자산 분류 체계(대/중/소) 설계, 전수 실사 조사 실시, 바코드 식별 라벨 부착 및 전산 대장 갱신",
        process: [
          "자산 고유번호 부여 규칙(구입연도-품목코드-일련번호) 표준화",
          "부서별 현물 전수 조사 및 실사용자 확인",
          "노후 장비 및 유휴 기기를 선별하여 재배치 또는 폐기 절차 진행",
          "자산 반출입 관리 대장 표준 서식 및 승인 프로세스 수립"
        ],
        achievement: "자산 정합도를 99.8%까지 끌어올렸으며, 잠자고 있던 유휴 PC 및 모니터 25대를 재활용하여 신규 구매 비용을 크게 절감했습니다."
      }
    },
    {
      id: 5,
      title: "고객 문의 응대 표준 매뉴얼 제작 및 사내 아카이빙",
      subtitle: "반복 민원 유형 분석을 통한 원스톱 응대 가이드 및 클라우드 문서화",
      period: "2026.06 - 2026.07 (2개월)",
      tool: "Documentation & Cloud",
      tools: ["문서 아카이빙", "VOC 분석", "FAQ 매뉴얼", "온보딩 가이드"],
      imageFileName: "project5.png",
      placeholderImage: "/images/projects/project5.svg",
      summary: "자주 인입되는 고객 문의와 사내 총무 요청 사항을 10개 핵심 카테고리로 분류하고 표준 스크립트와 처리 절차를 문서화하여 응대 품질을 균일화했습니다.",
      metrics: [
        { label: "문의 처리 속도", value: "3배 단축" },
        { label: "온보딩 기간", value: "50% 단축" },
        { label: "표준 시나리오", value: "50건 정립" }
      ],
      details: {
        background: "담당자별로 응대 방식이 달라 처리 결과에 편차가 발생하고, 신규 사원 입사 시 인수인계에 많은 시간이 소요되는 비효율이 있었습니다.",
        role: "과거 6개월간의 문의 내역 분석, 빈도 높은 질의응답 시나리오 50선 작성, 클라우드 검색형 문서 아카이브 구축",
        process: [
          "유형별(행정 서류, 비품 신청, 시설 보수, 제휴 문의 등) 인입 빈도 통계 분석",
          "상황별 표준 대응 스크립트 및 유관 부서 연락망 일원화",
          "키워드 검색이 용이한 디지털 문서(FAQ & 가이드북) 형태로 아카이빙",
          "월별 신규 유형 업데이트 운영 프로세스 마련"
        ],
        achievement: "평균 응대 소요 시간을 기존 45분에서 15분 이내로 대폭 단축시켰으며, 신규 담당자의 업무 숙달 기간을 2주에서 1주로 단축시켰습니다."
      }
    }
  ],
  hobbies: [
    {
      id: "hobby-1",
      title: "문서 아카이빙 & 생산성 정리",
      category: "자기관리 & 생산성",
      icon: "folder-archive",
      description: "노션과 디지털 노트를 활용하여 관심 분야의 자료, 읽은 책의 핵심 문구, 일상의 할 일들을 체계적으로 라벨링하고 정리하는 것을 즐깁니다. 깔끔한 정리 습관은 업무 공간과 파일 관리를 빈틈없이 유지하는 원동력입니다.",
      badges: ["노션 아카이브", "체계적 분류", "정리정돈"]
    },
    {
      id: "hobby-2",
      title: "디지털 사진 촬영 및 보정",
      category: "시각적 감각",
      icon: "camera",
      description: "주말마다 거리의 건축물과 계절의 색감을 카메라에 담고, 라이트룸과 포토샵으로 톤을 다듬는 취미를 가지고 있습니다. 디테일한 색감과 수평·수직을 맞추는 집중력은 시각 자료의 완성도를 높이는 데 도움이 됩니다.",
      badges: ["구도 감각", "색감 보정", "GTQ 실무 연계"]
    },
    {
      id: "hobby-3",
      title: "러닝 & 가벼운 조깅",
      category: "체력 & 루틴",
      icon: "footprints",
      description: "퇴근 후나 주말 아침 공원을 달리며 하루의 생각을 정리하고 맑은 에너지를 충전합니다. 꾸준한 유산소 운동은 지치지 않는 집중력과 성실한 근태 관리의 든든한 밑바탕이 됩니다.",
      badges: ["성실한 루틴", "체력 증진", "스트레스 해소"]
    },
    {
      id: "hobby-4",
      title: "비즈니스 도서 & 매거진 탐독",
      category: "자기계발",
      icon: "book-open",
      description: "업무 효율화 팁, 사무 자동화 사례, 조직 커뮤니케이션에 관한 경제·경영 도서와 트렌드 기사를 읽으며 새로운 지식을 꾸준히 습득합니다. 작은 노하우도 실무에 직접 적용해보는 능동성을 지향합니다.",
      badges: ["트렌드 리서치", "자기계발", "인사이트 습득"]
    }
  ],
  sitemap: [
    {
      name: "Intro (인트로)",
      hash: "#intro",
      desc: "3D 인터랙티브 그래픽 & 비주얼 타이틀"
    },
    {
      name: "Profile (프로필)",
      hash: "#profile",
      desc: "인적 사항, 상세 자기소개, 보유 자격증, 핵심 스킬"
    },
    {
      name: "Project (프로젝트)",
      hash: "#project",
      desc: "사무직 실무 역량을 입증하는 5개 프로젝트 배너 및 상세 모달"
    },
    {
      name: "Hobby (취미)",
      hash: "#hobby",
      desc: "성실한 자기관리와 감각을 보여주는 4가지 취미"
    },
    {
      name: "Sitemap & Resume (사이트맵 & 이력서)",
      hash: "#sitemap",
      desc: "이력서 PDF 다운로드, 사이트 맵, 문의 및 연락처"
    }
  ]
};
