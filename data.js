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
        subtitle: "안녕하세요, <strong>사용자 흐름과 예외 상황을 함께 고려하며 화면을 만드는</strong> 프론트엔드 개발자 정경재입니다.",
        achievements: []
    },

    projects: [
        {
            title: "SecondHand Auction",
            description: "팀 프로젝트 · 일반 판매/경매 판매, 입찰 가능 여부, 찜/입찰 상태를 분기한 중고거래 UI",
            url: "https://github.com/Economy0326/secondhand-frontend",
            backgroundImage: "./imgs/projects/secondhand-cover.gif",
            backgroundColor: "#0f172a",
            extraClasses: ["project--wide"]
        },
        {
            title: "PopFitUp",
            description: "팀 프로젝트 · 크롤링된 팝업스토어 데이터를 지도, 리스트, URL query로 탐색하는 UI",
            url: "https://github.com/Economy0326/popfitup-frontend",
            backgroundImage: "./imgs/projects/popfitup-cover.gif",
            backgroundColor: "#2563eb",
            extraClasses: ["project--wide"]
        },
        {
            title: "Shopping Mall",
            description: "개인 프로젝트 · 비회원 주문 조회와 관리자 주문/반품 처리를 중심으로 구성한 쇼핑몰 화면",
            url: "https://github.com/Economy0326/shopping-frontend",
            backgroundImage: "./imgs/projects/shopping-cover.gif",
            backgroundColor: "#ef4444",
            extraClasses: ["project--main"]
        },
        {
            title: "Shopping API",
            description: "개인 프로젝트 · 인증, 주문, 반품, 관리자 API 흐름을 정리한 NestJS 서버",
            url: "https://github.com/Economy0326/shopping-backend",
            backgroundImage: "./imgs/projects/shopping-backend-architecture.png",
            backgroundColor: "#111827",
            extraClasses: ["project--side", "project--contain"]
        }
    ],

    about: {
        title: "About",
        paragraphs: [
            "프로젝트를 진행하면서 단순히 기능을 구현하는 것보다, 사용자가 어떤 상황에서 불편함을 느낄 수 있는지 먼저 생각하는 일이 중요하다고 느꼈습니다.",
            "비회원 주문, 지도 기반 탐색, 경매 입찰처럼 조건이 많은 기능을 만들면서 로딩, 실패, 권한, 입력 제한 같은 상황을 화면에서 어떻게 안내할지 고민했습니다.",
            "코드를 작성할 때는 React Hook의 실행 순서와 상태 변경이 어떤 렌더링 흐름으로 이어지는지 따라가며 구현하려고 합니다. 또한 Swagger나 화면 명세를 먼저 확인하고, 필요한 데이터와 예외 상황을 정리한 뒤 화면을 만듭니다."
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
                label: "Frontend",
                items: "REST API / Swagger / Auth Flow / Search Filter / Pagination / Naver Maps SDK"
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
                detail: "일반 판매와 경매 판매가 함께 노출되는 화면에서 상품 상태와 경매 상태를 분리했습니다. 서버 데이터는 TanStack Query로 동기화하고, 헤더와 탭 같은 UI 상태는 Zustand로 분리했습니다.",
                tags: ["TanStack Query", "Zustand", "Auction Policy", "Pending UI"]
            },
            {
                label: "PopFitUp",
                detail: "네이버 지도 SDK를 사용해 팝업스토어 목록, 스크롤 위치, 지도 마커가 함께 움직이는 탐색 흐름을 구현했습니다. 크롤링 데이터의 빈 값과 좌표 누락은 fallback UI로 처리하며, 첫 명세 고정의 필요성을 경험했습니다.",
                tags: ["Naver Maps SDK", "Fallback UI", "URL Query"]
            },
            {
                label: "Shopping Mall",
                detail: "쇼핑몰 프로젝트에서는 상품 목록보다 비회원 주문과 관리자 처리 흐름에 더 집중했습니다. 무통장입금과 직접 배송 기준으로 주문, 취소, 반품, 입금 확인, 배송 처리 흐름을 구현했습니다.",
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