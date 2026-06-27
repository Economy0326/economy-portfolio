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
        intro: {
            text: "안녕하세요,",
            link: {
                label: "정경재입니다.",
                href: "https://github.com/Economy0326"
            }
        },
        subtitle: "사용자 흐름과 상태 변화를 고민하는 프론트엔드 개발자",
        achievements: [
            {
                label: "React",
                href: "https://github.com/Economy0326/shopping-frontend",
                suffix: " 기반 웹 서비스 구현"
            },
            {
                label: "Next.js",
                href: "https://github.com/Economy0326/secondhand-frontend",
                suffix: " 기반 중고거래 UI 개발"
            },
            {
                label: "API Flow",
                href: "https://github.com/Economy0326/shopping-backend",
                suffix: " 를 이해한 프론트엔드 연동"
            }
        ]
    },

    projects: [
        {
            title: "PopFitUp",
            description: "팀 프로젝트 · 팝업스토어 데이터를 지도와 리스트로 탐색하는 프론트엔드 구현",
            url: "https://github.com/Economy0326/popfitup-frontend",
            backgroundImage: "./imgs/projects/popfitup-cover.gif",
            backgroundColor: "#2563eb",
            extraClasses: ["project--wide"]
        },
        {
            title: "Shopping Mall",
            description: "개인 프로젝트 · 상품 탐색, 장바구니, 회원·비회원 주문, 관리자 화면 구현",
            url: "https://github.com/Economy0326/shopping-frontend",
            backgroundImage: "./imgs/projects/shopping-cover.gif",
            backgroundColor: "#ef4444",
            extraClasses: ["project--main"]
        },
        {
            title: "Shopping API",
            description: "쇼핑몰 프론트엔드 흐름에 필요한 인증, 주문, 반품 API 구조 이해 및 연동",
            url: "https://github.com/Economy0326/shopping-backend",
            backgroundImage: "./imgs/projects/shopping-backend-architecture.png",
            backgroundColor: "#111827",
            extraClasses: ["project--side", "project--contain"]
        },
        {
            title: "SecondHand Auction",
            description: "팀 프로젝트 · 일반 거래와 경매 거래를 함께 다루는 중고거래 플랫폼 UI 구현",
            url: "https://github.com/Economy0326/secondhand-frontend",
            backgroundImage: "./imgs/projects/secondhand-cover.gif",
            backgroundColor: "#0f172a",
            extraClasses: ["project--wide"]
        }
    ],

    about: {
        title: "About",
        paragraphs: [
            "저는 서울과학기술대학교 컴퓨터공학과를 학점 3.8의 성적으로 수료했으며, 현재 프론트엔드 개발자로 성장하기 위해 개인 프로젝트와 팀 프로젝트를 정리하고 있습니다.",
            "프로젝트를 진행하면서 단순히 화면을 만드는 것보다, 사용자가 서비스를 탐색하고 선택하고 완료하는 흐름을 자연스럽게 만드는 데 관심을 두고 있습니다.",
            "쇼핑몰 프로젝트에서는 장바구니, 회원·비회원 주문, 관리자 화면을 구현했고, 팝업스토어 프로젝트에서는 크롤링 데이터의 불규칙한 형태를 화면에서 안정적으로 보여주기 위한 예외 처리와 지도 기반 UX를 고민했습니다.",
            "최근 중고거래 프로젝트에서는 Swagger 기반 API 명세를 기준으로 화면에 필요한 데이터를 먼저 정리하고, 거래 상태에 따른 수정·취소 정책과 pending 처리, 데이터 동기화 흐름을 고려하며 개발했습니다."
        ]
    },

    tech: {
        title: "Tech",
        categories: [
            {
                label: "Strong",
                items: "HTML5 / CSS3 / JavaScript / TypeScript / React / Next.js / Vite / React Hooks / Component Design / Responsive Web"
            },
            {
                label: "Knowledgeable",
                items: "REST API / Swagger / Request & Response / Auth Flow / Error Handling / Mock Data / Pending UI / Search Filter / Pagination / Modal / Form Validation / Map UI"
            },
            {
                label: "ETC",
                items: "Git / GitHub / Git Flow / VS Code / Chrome DevTools / Vercel / Render / Node.js / Docker / NestJS / Prisma / PostgreSQL"
            }
        ]
    },

    awards: {
        title: "Built",
        items: [
            {
                label: "Shopping Mall",
                detail: "개인 프로젝트로 진행했습니다. 사용자 쇼핑 흐름뿐 아니라 관리자 주문·상품·반품 관리와 비회원 주문 흐름을 구현하며 커머스 서비스의 화면 구조를 경험했습니다."
            },
            {
                label: "PopFitUp",
                detail: "팀 프로젝트에서 프론트엔드를 담당했습니다. 네이버 지도 SDK를 활용해 지도와 팝업 리스트를 연결하고, 불규칙한 크롤링 데이터에 대응하기 위한 화면 예외 처리를 구현했습니다."
            },
            {
                label: "SecondHand Auction",
                detail: "팀 프로젝트에서 프론트엔드를 담당했습니다. Swagger 기반 API 명세를 기준으로 일반 거래와 경매 거래의 화면 정책을 나누고, pending 상태와 데이터 동기화 흐름을 고려했습니다."
            },
            {
                label: "Collaboration",
                detail: "팀 프로젝트를 진행하며 API 명세, Git Flow, 역할 분담, 정책 고정의 중요성을 경험했습니다. 현재는 중고거래 프로젝트의 API 연동과 경매 상태 동기화 정책을 보완하고 있습니다."
            }
        ]
    }
};