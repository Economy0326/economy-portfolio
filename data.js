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
            "안녕하세요, <strong>사용자 흐름과 서비스 정책</strong>을 먼저 정리하고, Frontend를 중심으로 <strong>Backend와 AI까지 연결해 서비스를 구현하는</strong> 개발자 정경재입니다.",
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
            "사용자가 지금 어떤 상태에 있고, 다음에 무엇을 해야 하는지가 화면에서 자연스럽게 이어지도록 만드는 걸 중요하게 생각합니다.",

            "기능을 바로 만들기보다 사용자 흐름과 상태 변화, 예외 조건을 먼저 정리하고 Frontend와 Backend가 같은 기준으로 움직이도록 맞추려고 합니다.",

            "프로젝트마다 필요한 범위는 다르지만, 각 기능을 하나의 흐름으로 연결하고 끝까지 동작하는 서비스로 완성하는 데 집중하고 있습니다."
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
        title: "Highlights",
        items: [
            {
                label: "User Flow & State",
                detail:
                    "사용자가 어느 단계에 있는지를 화면에서 따로 판단하지 않고 서버의 상태를 기준으로 이어가도록 구성했습니다. 금융 도우미에서는 currentStep을 기준으로 화면을 이동하고, 다시 접속해도 진행 중이던 상담을 이어갈 수 있도록 했습니다.",
                tags: ["User Flow", "State", "Recovery"]
            },
            {
                label: "Policy Before UI",
                detail:
                    "기능을 구현하기 전에 가능한 조건과 상태 변화를 먼저 정리하려고 합니다. SecondHand에서는 경매 상태별 입찰·수정·취소 조건을 먼저 정리했고, Shopping에서는 반복되는 수정 이후 주문부터 배송·취소·반품까지의 상태 흐름을 다시 정리했습니다.",
                tags: ["Policy", "State Flow", "Exception"]
            },
            {
                label: "Frontend ↔ Backend",
                detail:
                    "Frontend와 Backend의 요청·응답과 상태 기준을 맞추면서 기능을 연결합니다. PopFitUp에서는 Backend와 API 구조를 다시 맞추며 기존 Frontend 코드를 수정했고, Shopping에서는 주문부터 반품까지 전체 흐름을 연결했습니다.",
                tags: ["API Contract", "Integration", "Collaboration"]
            },
            {
                label: "AI in Service Flow",
                detail:
                    "AI 응답을 바로 화면이나 서비스 상태에 사용하지 않고 Backend에서 검증한 뒤 반영했습니다. 금융 도우미에서는 Structured Output을 검증하고 저장한 뒤 다음 상담 단계로 이어지도록 구성했습니다.",
                tags: ["OpenAI", "Validation", "Structured Output"]
            }
        ]
    }
};