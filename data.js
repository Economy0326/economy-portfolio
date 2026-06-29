window.siteContent = {
    navigation: {
        logo: "Kyungjae Jung",
        logoAccent: "_",
        links: [
            { label: "Projects", href: "#projects" },
            { label: "About", href: "#about" },
            { label: "Tech", href: "#Tech" },
            { label: "Built", href: "#awards" },
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
        subtitle: "안녕하세요, 복잡한 흐름을 이해하기 쉬운 화면으로 풀어내는 <strong>프론트엔드 개발자 정경재</strong>입니다.",
        achievements: [
            {
                label: "React",
                href: "https://github.com/Economy0326/shopping-frontend",
                suffix: "로 쇼핑몰 주문 흐름을 구현하고"
            },
            {
                label: "Next.js",
                href: "https://github.com/Economy0326/secondhand-frontend",
                suffix: "로 경매형 중고거래 UI를 구현하며"
            },
            {
                label: "API 연동 흐름",
                href: "https://github.com/Economy0326/shopping-frontend",
                suffix: "을 기준으로 주문/반품 화면 정책을 정리했습니다."
            }
        ]
    },

    projects: [
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
            description: "개인 프로젝트 · 회원/비회원 주문과 관리자 주문 처리 흐름 구현",
            url: "https://github.com/Economy0326/shopping-frontend",
            backgroundImage: "./imgs/projects/shopping-cover.gif",
            backgroundColor: "#ef4444",
            extraClasses: ["project--main"]
        },
        {
            title: "Shopping API",
            description: "쇼핑몰 화면 흐름에 맞춰 인증, 주문, 반품 API 구조를 정리하고 연동",
            url: "https://github.com/Economy0326/shopping-backend",
            backgroundImage: "./imgs/projects/shopping-backend-architecture.png",
            backgroundColor: "#111827",
            extraClasses: ["project--side", "project--contain"]
        },
        {
            title: "SecondHand Auction",
            description: "팀 프로젝트 · 일반 판매와 경매 판매가 함께 있는 중고거래 UI 구현",
            url: "https://github.com/Economy0326/secondhand-frontend",
            backgroundImage: "./imgs/projects/secondhand-cover.gif",
            backgroundColor: "#0f172a",
            extraClasses: ["project--wide"]
        }
    ],

    about: {
        title: "About",
        paragraphs: [
            "처음에는 화면을 완성하는 것에 집중했지만, 프로젝트를 진행할수록 화면보다 먼저 정리해야 하는 것이 있다는 걸 알게 됐습니다.",
            "비회원 주문처럼 사용자를 식별하기 어려운 흐름, 크롤링 데이터처럼 값이 일정하지 않은 데이터, 경매처럼 시간에 따라 가능한 행동이 달라지는 화면을 다루면서 UI는 결국 정책과 예외를 어떻게 보여줄지의 문제라고 느꼈습니다.",
            "그래서 최근에는 컴포넌트를 만들기 전에 필요한 응답 필드와 상태별 예외 상황을 먼저 정리하고 구현하려고 합니다. 사용자가 지금 무엇을 할 수 있고, 왜 할 수 없는지 화면에서 자연스럽게 알 수 있는 UI를 만드는 것이 목표입니다."
        ]
    },

    tech: {
        title: "Tech",
        categories: [
            {
                label: "Strong",
                items: "TypeScript / React / Next.js / React Hooks / Component Design / Responsive UI"
            },
            {
                label: "Frontend Experience",
                items: "REST API / Swagger / Auth Flow / Error Handling / Mock Data / Pending UI / Search Filter / Pagination / Map UI"
            },
            {
                label: "Tools",
                items: "Git / GitHub / Git Flow / VS Code / Chrome DevTools / Vercel / Render / Docker basic"
            }
        ]
    },

    awards: {
        title: "Work",
        items: [
            {
                label: "Shopping Mall",
                detail: "회원/비회원 주문과 관리자 주문 처리 화면을 구현했습니다. 외부 PG와 택배 연동까지 확장하기보다, 무통장입금과 직접배송 방식으로 주문 흐름을 먼저 완성하는 방향으로 범위를 정했습니다.",
                tags: ["Guest Order", "Admin Flow", "Payment / Delivery"]
            },
            {
                label: "PopFitUp",
                detail: "크롤링 데이터의 빈 값과 지도 SDK 로딩 상태를 고려해, 팝업스토어 카드와 지도 마커가 안정적으로 연결되도록 구현했습니다.",
                tags: ["Map UX", "Fallback UI", "URL Query"]
            },
            {
                label: "SecondHand Auction",
                detail: "일반 판매와 경매 판매가 함께 노출되는 상황에서, 경매 상태에 따라 버튼과 가격 정보가 다르게 보이도록 화면 정책을 정리했습니다.",
                tags: ["Auction Policy", "Pending UI", "Sync"]
            },
            {
                label: "Collaboration",
                detail: "팀 프로젝트를 진행하며 API 명세와 화면 정책을 먼저 고정해야 구현 과정의 혼선을 줄일 수 있다는 점을 경험했습니다.",
                tags: ["Swagger", "Git Flow", "Policy First"]
            }
        ]
    }
};