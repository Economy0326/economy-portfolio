window.siteContent = {
    navigation: {
        logo: "Kyungjae Jung",
        logoAccent: "_",
        links: [
            { label: "Projects", href: "#projects" },
            { label: "About", href: "#about" },
            { label: "Tech", href: "#Tech" },
            { label: "Work", href: "#awards" },
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
        subtitle: "안녕하세요, <strong>사용자가 헷갈리지 않는 화면을 만드는</strong> 프론트엔드 개발자 정경재입니다.",
        achievements: [
            {
                label: "SecondHand Auction",
                href: "https://github.com/Economy0326/secondhand-frontend",
                suffix: "일반 거래와 경매 거래를 나누고, 서버 상태 동기화와 반복 클릭 방지 흐름을 다뤘습니다."
            },
            {
                label: "PopFitUp",
                href: "https://github.com/Economy0326/popfitup-frontend",
                suffix: "지도 기반 팝업스토어 탐색, URL query, fallback UI를 연결했습니다."
            },
            {
                label: "Shopping Mall",
                href: "https://github.com/Economy0326/shopping-frontend",
                suffix: "주문, 반품, 관리자 화면의 API 연동 흐름을 구현했습니다."
            }
        ]
    },

    projects: [
        {
            title: "SecondHand Auction",
            description: "팀 프로젝트 · 일반 거래와 경매 거래를 분기하고, 서버 상태 동기화와 UI 상태 분리를 다룬 중고거래 화면",
            url: "https://github.com/Economy0326/secondhand-frontend",
            backgroundImage: "./imgs/projects/secondhand-cover.gif",
            backgroundColor: "#0f172a",
            extraClasses: ["project--wide"]
        },
        {
            title: "PopFitUp",
            description: "팀 프로젝트 · 크롤링된 팝업스토어 데이터를 지도와 리스트로 탐색하는 UI 구현",
            url: "https://github.com/Economy0326/popfitup-frontend",
            backgroundImage: "./imgs/projects/popfitup-cover.gif",
            backgroundColor: "#2563eb",
            extraClasses: ["project--wide"]
        },
        {
            title: "Shopping Mall",
            description: "개인 프로젝트 · 회원/비회원 주문, 반품, 관리자 주문 처리 화면의 API 연동 흐름 구현",
            url: "https://github.com/Economy0326/shopping-frontend",
            backgroundImage: "./imgs/projects/shopping-cover.gif",
            backgroundColor: "#ef4444",
            extraClasses: ["project--main"]
        },
        {
            title: "Shopping API",
            description: "쇼핑몰 화면 흐름에 맞춰 인증, 주문, 반품, 관리자 API 구조를 정리한 NestJS 서버",
            url: "https://github.com/Economy0326/shopping-backend",
            backgroundImage: "./imgs/projects/shopping-backend-architecture.png",
            backgroundColor: "#111827",
            extraClasses: ["project--side", "project--contain"]
        }
    ],

    about: {
        title: "About",
        paragraphs: [
            "저는 사용자가 지금 무엇을 할 수 있고, 왜 할 수 없는지 자연스럽게 알 수 있는 화면을 만들고 싶습니다.",
            "비회원 주문, 지도 기반 탐색, 경매 입찰처럼 조건과 예외가 많은 기능을 구현하면서, 좋은 UI는 예쁜 화면보다 상태와 흐름을 이해하기 쉽게 보여주는 데서 나온다고 느꼈습니다.",
            "그래서 컴포넌트를 만들기 전에 Swagger로 요청/응답 구조를 먼저 확인하고, 화면에 필요한 데이터와 상태별 예외 상황을 정리한 뒤 구현하려고 합니다.",
            "앞으로도 사용자가 헷갈리지 않고, 불필요하게 기다리거나 같은 행동을 반복하지 않아도 되는 웹을 만드는 프론트엔드 개발자가 되려고 합니다."
        ]
    },

    tech: {
        title: "Tech",
        categories: [
            {
                label: "Core",
                items: "TypeScript / React / Next.js / React Hooks / Component Design"
            },
            {
                label: "Frontend",
                items: "REST API / Swagger / Auth Flow / Error Handling / Search Filter / Pagination / Map UI"
            },
            {
                label: "State & Quality",
                items: "TanStack Query / Zustand / Pending UI / Vitest / Testing Library"
            },
            {
                label: "Tools",
                items: "Git / GitHub / Git Flow / VS Code / Chrome DevTools / Vercel"
            }
        ]
    },

    awards: {
        title: "Work",
        items: [
            {
                label: "SecondHand Auction",
                detail: "일반 판매와 경매 판매가 함께 노출되는 중고거래 화면에서 상품 상태와 경매 상태를 분리했습니다. 서버와 맞아야 하는 데이터는 TanStack Query로 동기화하고, 헤더와 탭 같은 UI 상태는 Zustand로 분리했습니다.",
                tags: ["TanStack Query", "Zustand", "Auction Policy", "Pending UI"]
            },
            {
                label: "PopFitUp",
                detail: "크롤링 데이터의 빈 값과 지도 SDK 로딩 상태를 고려해 팝업스토어 카드와 지도 마커가 안정적으로 연결되도록 구현했습니다. 검색 조건은 URL query로 유지하고, 좌표나 이미지가 없는 데이터는 fallback UI로 처리했습니다.",
                tags: ["Map UX", "Fallback UI", "URL Query"]
            },
            {
                label: "Shopping Mall",
                detail: "회원/비회원 주문과 관리자 주문 처리 화면을 구현했습니다. 주문번호와 휴대폰 번호를 기준으로 비회원 주문 조회, 취소, 반품 요청까지 이어지도록 화면 흐름을 정리했습니다.",
                tags: ["Guest Order", "Admin Flow", "Order Flow"]
            },
            {
                label: "Collaboration",
                detail: "팀 프로젝트를 진행하며 API 명세와 화면 정책을 먼저 고정해야 구현 과정의 혼선을 줄일 수 있다는 점을 경험했습니다. Swagger를 기준으로 요청/응답을 맞추고, 상태별 예외를 먼저 정리한 뒤 구현했습니다.",
                tags: ["Swagger", "Git Flow", "Policy First"]
            }
        ]
    }
};