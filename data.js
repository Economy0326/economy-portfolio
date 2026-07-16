window.siteContent = {
    navigation: {
        logo: "Kyungjae Jung",
        logoAccent: "_",
        links: [
            { label: "Projects", href: "#projects" },
            { label: "About", href: "#about" },
            { label: "Tech", href: "#tech" },
            { label: "Highlights", href: "#awards" },
            {
                iconClass: "fab fa-github",
                href: "https://github.com/Economy0326",
                external: true,
                noUnderline: true
            }
        ]
    },

    hero: {
        intro: null,
        subtitle: "안녕하세요, <strong>사용자 흐름과 예외 상황을 함께 고려하며 화면을 만드는</strong> 프론트엔드 개발자 정경재입니다.",
        achievements: []
    },

    projects: [
        {
            title: "SecondHand Auction",
            description: "팀 프로젝트 · 일반 거래와 경매 거래의 상태를 분리하고, 입찰 가능 여부와 상품 수정 제한을 화면 흐름에 반영한 중고거래 서비스",
            url: "https://github.com/Economy0326/secondhand-frontend",
            backgroundImage: "./imgs/projects/secondhand-cover.gif",
            backgroundColor: "#0f172a",
            extraClasses: ["project--wide"]
        },
        {
            title: "PopFitUp",
            description: "팀 프로젝트 · 지도와 목록을 연결하고, 검색 조건 유지와 크롤링 데이터 누락을 처리한 팝업스토어 탐색 서비스",
            url: "https://github.com/Economy0326/popfitup-frontend",
            backgroundImage: "./imgs/projects/popfitup-cover.gif",
            backgroundColor: "#2563eb",
            extraClasses: ["project--wide"]
        },
        {
            title: "Shopping Mall",
            description: "개인 프로젝트 · 회원과 비회원 주문, 관리자의 입금 확인, 배송, 반품 처리 흐름을 구현한 쇼핑몰",
            url: "https://github.com/Economy0326/shopping-frontend",
            backgroundImage: "./imgs/projects/shopping-cover.gif",
            backgroundColor: "#ef4444",
            extraClasses: ["project--main"]
        },
        {
            title: "Shopping API",
            description: "Shopping Mall 연계 · 프론트엔드 연동에 필요한 인증, 주문, 반품, 관리자 처리 흐름을 구성한 NestJS API",
            url: "https://github.com/Economy0326/shopping-backend",
            backgroundImage: "./imgs/projects/shopping-backend-architecture.png",
            backgroundColor: "#111827",
            extraClasses: ["project--side", "project--contain"]
        }
    ],

    about: {
        title: "About",
        paragraphs: [
            "사용자가 현재 상황을 이해하고 다음 행동을 이어갈 수 있는 화면을 만들려고 합니다. 기능이 정상적으로 동작하는 경우뿐 아니라 요청 중이거나 실패했을 때, 권한이 없거나 데이터가 비어 있을 때의 흐름도 함께 고려합니다.",

            "화면부터 바로 만들기보다는 주요 정책과 데이터 흐름을 먼저 정리합니다. Swagger로 요청과 응답을 확인하고, 화면에 필요한 데이터와 각 상황에 맞는 상태 변화를 정리한 뒤 구현합니다.",

            "React의 상태 변화가 화면에 반영되는 시점과 Effect의 실행 순서를 확인하며 코드를 작성합니다. 서버에서 받아오는 데이터와 화면 안에서 바뀌는 상태를 구분하고, 각각 필요한 시점에 갱신되도록 구성합니다."
        ]
    },

    tech: {
        title: "Tech",
        categories: [
            {
                label: "Core",
                items: "TypeScript / JavaScript / React / Next.js / React Hooks"
            },
            {
                label: "State & Data",
                items: "TanStack Query / Zustand / REST API / Swagger"
            },
            {
                label: "UI Flow",
                items: "Pending UI / Fallback UI / Search Filter / Pagination / Naver Maps SDK"
            },
            {
                label: "Test & Tools",
                items: "Vitest / Testing Library / Git / GitHub / Chrome DevTools / Vercel"
            }
        ]
    },

    awards: {
        title: "Highlights",
        items: [
            {
                label: "SecondHand Auction",
                detail: "일반 거래와 경매 거래의 상태를 구분했습니다. 찜 여부와 찜 수, 내 입찰 목록처럼 서버와 동기화해야 하는 데이터는 TanStack Query로 관리하고, 화면 내부 UI 상태는 Zustand로 분리했습니다. 입찰 가능 여부, 요청 중 중복 제출 방지, 이미지 수정 제한을 화면에 반영하고 관련 정책 로직을 테스트했습니다.",
                tags: ["TanStack Query", "Zustand", "Auction Policy", "Pending UI"]
            },
            {
                label: "PopFitUp",
                detail: "네이버 지도 SDK로 지도 마커와 카드 스크롤을 연결했습니다. 지역, 날짜, 카테고리 조건을 URL query로 관리해 새로고침과 URL 공유 후에도 탐색 상태를 유지했습니다. 이미지, 카테고리, 설명 누락은 fallback UI로 처리하고, 좌표가 없는 데이터는 지도 마커에서 제외했습니다.",
                tags: ["Naver Maps SDK", "Fallback UI", "URL Query"]
            },
            {
                label: "Shopping Mall",
                detail: "회원과 비회원의 주문 접근 방식을 나누고, 비회원은 주문번호와 휴대폰 번호로 주문을 조회하고 이후 절차를 이어갈 수 있도록 구성했습니다. 무통장입금과 우체국 직접 발송을 기준으로 주문, 입금 확인, 배송, 취소, 반품의 처리 흐름을 구현했습니다.",
                tags: ["Guest Order", "Admin Flow", "Order Flow"]
            },
            {
                label: "Collaboration",
                detail: "팀 프로젝트에서 API 명세와 화면 정책을 먼저 공유하고, Swagger로 요청과 응답 구조를 맞췄습니다. 상태별 화면 흐름과 예외 처리 기준을 함께 확인하며 구현 기준을 맞췄습니다.",
                tags: ["Swagger", "API Contract", "Policy First"]
            }
        ]
    }
};