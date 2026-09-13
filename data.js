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
        subtitle:
            "안녕하세요, <strong>쉽게 이해하고 믿고 이용할 수 있는 서비스</strong>를 만들기 위해 필요한 기술을 연결해 구현하는 개발자 정경재입니다.",
        achievements: []
    },

    projects: [
        {
            title: "Financial Helper",
            description:
                "개인 프로젝트 · 금융 문제를 단계별로 정리하고 다음 행동까지 이어질 수 있도록 상담 상태, AI 분석, 긴급대응 흐름을 연결한 서비스",
            url: "https://github.com/Economy0326/financial-helper-frontend",
            backgroundImage: "./imgs/projects/financial-helper-cover.gif",
            backgroundColor: "#0f766e",
            extraClasses: ["project--hero"]
        },
        {
            title: "SecondHand Auction",
            description:
                "팀 프로젝트 · 일반 거래와 경매 상태를 나누고, 서버 상태 동기화와 입찰 정책을 화면 흐름에 반영한 중고거래 서비스",
            url: "https://github.com/Economy0326/secondhand-frontend",
            backgroundImage: "./imgs/projects/secondhand-cover.gif",
            backgroundColor: "#0f172a",
            extraClasses: ["project--compact"]
        },
        {
            title: "PopFitUp",
            description:
                "팀 프로젝트 · 지도와 목록을 연결하고 검색 상태 유지, 크롤링 데이터 누락과 API 연동 문제를 처리한 팝업스토어 탐색 서비스",
            url: "https://github.com/Economy0326/popfitup-frontend",
            backgroundImage: "./imgs/projects/popfitup-cover.gif",
            backgroundColor: "#2563eb",
            extraClasses: ["project--compact"]
        },
        {
            title: "Shopping Mall",
            description:
                "개인 프로젝트 · 회원과 비회원 주문부터 관리자 주문·반품 처리까지 이어지는 쇼핑 서비스 흐름을 끝까지 연결한 프로젝트",
            url: "https://github.com/Economy0326/shopping-frontend",
            backgroundImage: "./imgs/projects/shopping-cover.gif",
            backgroundColor: "#ef4444",
            extraClasses: ["project--compact"]
        }
    ],

    about: {
        title: "About",
        paragraphs: [
            "복잡한 기능도 사용자가 어렵지 않게 이해하고 이용할 수 있는 UI/UX를 중요하게 생각합니다.",

            "정상적인 흐름뿐 아니라 실제 사용 중 자주 생길 수 있는 예외적인 상황까지 고려해, 사용자가 믿고 계속 이용할 수 있도록 구현하려고 합니다.",

            "정확성이 중요한 정보는 그대로 보여주기보다, 서비스 안에서 검증할 수 있는 기준을 두고 확인한 뒤 전달하는 방식을 중요하게 생각합니다."
        ]
    },

    tech: {
        title: "Tech",
        categories: [
            {
                label: "Frontend",
                items:
                    "TypeScript / JavaScript / React / Next.js / TanStack Query / Zustand"
            },
            {
                label: "Backend & Data",
                items:
                    "Java / Spring Boot / Spring Security / PostgreSQL / REST API"
            },
            {
                label: "AI",
                items:
                    "OpenAI API / Structured Output / AI Result Validation"
            },
            {
                label: "Test & Tools",
                items:
                    "JUnit / Vitest / Testing Library / Swagger / Git / GitHub / Vercel"
            }
        ]
    },

    awards: {
        title: "Decisions",
        items: [
            {
                label: "Why Server-managed State?",
                detail:
                    "AI 분석에는 시간이 걸리고 사용자가 그동안 다른 화면으로 이동하거나 브라우저를 닫을 수 있다고 생각했습니다. 그래서 Financial Helper에서는 상담 단계와 분석 상태를 서버에서 관리하고, Frontend는 TanStack Query로 현재 상태를 다시 조회해 새로고침이나 재접속 후에도 상담을 이어갈 수 있도록 구성했습니다.",
                tags: ["Async", "Polling", "Recovery"]
            },
            {
                label: "Why Manage Official Data?",
                detail:
                    "금융 상담에서는 AI가 답을 만드는 것보다 안내에 사용되는 정보가 정확한지 확인할 수 있어야 한다고 생각했습니다. 그래서 Financial Helper에서는 공식 자료를 정해진 기준으로 수집하고, 원문과 정리된 내용을 함께 보존하며 변경된 문서를 버전으로 관리할 수 있는 기반을 구현했습니다.",
                tags: ["Validation", "Versioning", "Data Integrity"]
            },
            {
                label: "Why Different Update Strategies?",
                detail:
                    "SecondHand에서는 모든 요청을 같은 방식으로 빠르게 보여주는 게 맞지 않다고 생각했습니다. 찜은 실패해도 이전 상태로 되돌릴 수 있어 Optimistic Update를 적용했지만, 입찰은 현재가와 다른 사용자의 입찰에 영향을 받을 수 있어 화면에서 먼저 반영하지 않고 성공 후 서버 데이터를 다시 조회하도록 했습니다.",
                tags: ["Optimistic Update", "Mutation", "Sync"]
            },
            {
                label: "Why Consider Non-ideal Cases?",
                detail:
                    "실제 서비스에서는 데이터가 항상 완전하거나 모든 사용자가 로그인한 상태만 있는 것은 아니라고 봤습니다. 그래서 PopFitUp에서는 크롤링 데이터의 이미지나 좌표가 누락된 경우를 따로 처리했고, Shopping에서는 비회원도 주문을 조회하고 주문 이후 흐름을 이어갈 수 있도록 구성했습니다.",
                tags: ["Fallback", "Guest Flow", "Exception"]
            }
        ]
    }
};