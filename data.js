window.siteContent = {
    navigation: {
        logo: "Kyungjae Jung",
        logoAccent: "_",
        links: [
            { label: "Projects", href: "#projects" },
            { label: "About", href: "#about" },
            { label: "Tech", href: "#tech" },
            { label: "Decisions", href: "#awards" },
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
            "안녕하세요, <strong>쉽게 이해하고 안심하고 이용할 수 있는 서비스</strong>를 만들기 위해 필요한 기술을 연결해 구현하는 개발자 정경재입니다.",
        achievements: []
    },

    projects: [
        {
            title: "Financial Helper",
            description:
                "개인 프로젝트 · 디지털 금융 이용이 익숙하지 않은 사용자를 위해 단계형 상담 UX와 AI 분석을 연결하고, 재접속 후에도 상담 흐름이 이어지도록 설계한 금융 도우미",
            url: "https://github.com/Economy0326/financial-helper-frontend",
            backgroundImage: "./imgs/projects/financial-helper-cover.gif",
            backgroundColor: "#0f766e",
            extraClasses: ["project--hero"]
        },
        {
            title: "SecondHand Auction",
            description:
                "팀 프로젝트 · 찜과 입찰의 성격에 따라 서로 다른 상태 업데이트 방식을 적용하고, 서버 상태와 화면 상태를 구분해 관리한 중고거래 서비스",
            url: "https://github.com/Economy0326/secondhand-frontend",
            backgroundImage: "./imgs/projects/secondhand-cover.gif",
            backgroundColor: "#0f172a",
            extraClasses: ["project--compact"]
        },
        {
            title: "PopFitUp",
            description:
                "팀 프로젝트 · 지도와 목록을 연결하고, 데이터가 일부 누락되거나 검색 조건이 바뀌어도 탐색 흐름이 유지되도록 구성한 팝업스토어 탐색 서비스",
            url: "https://github.com/Economy0326/popfitup-frontend",
            backgroundImage: "./imgs/projects/popfitup-cover.gif",
            backgroundColor: "#2563eb",
            extraClasses: ["project--compact"]
        },
        {
            title: "Shopping Mall",
            description:
                "개인 프로젝트 · 화면 구현에 그치지 않고 주문부터 취소·반품까지 이어지는 전체 서비스 흐름을 직접 연결해 완성한 쇼핑 서비스",
            url: "https://github.com/Economy0326/shopping-frontend",
            backgroundImage: "./imgs/projects/shopping-cover.gif",
            backgroundColor: "#ef4444",
            extraClasses: ["project--compact"]
        }
    ],

    about: {
        title: "About",
        paragraphs: [
            "사용자가 복잡한 기능을 어렵게 느끼지 않고, 쉽게 이해하며 믿고 이용할 수 있는 서비스를 만들고 싶습니다.",

            "잘 동작하는 정상적인 흐름만 보는 것보다 실제 사용 중 충분히 생길 수 있는 예외 상황까지 함께 생각하며 구현합니다.",

            "보안이 필요한 정보는 불필요하게 남기지 않고, 정확성이 중요한 정보는 확인할 수 있는 근거와 기준을 두고 전달하는 방식을 중요하게 생각합니다."
        ]
    },

    tech: {
        title: "Tech",
        categories: [
            {
                label: "Frontend",
                items:
                    "Next.js / TypeScript / JavaScript / React / TanStack Query / Zustand"
            },
            {
                label: "Backend & Data",
                items:
                    "Java / Spring Boot / Spring Security / PostgreSQL / REST API"
            },
            {
                label: "AI",
                items:
                    "OpenAI API / Structured Output / Response Validation"
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
                    "AI 분석을 기다리는 동안 사용자가 화면을 벗어날 수 있다는 점을 고려해, 상담 단계와 분석 상태를 서버에 두었습니다. 다시 들어왔을 때 현재 상태를 조회해 상담을 이어갈 수 있도록 구성했습니다.",
                tags: ["Server State", "Recovery", "Async"]
            },
            {
                label: "Why Manage Official Data?",
                detail:
                    "금융 상담에서는 답변 내용만큼 근거를 확인할 수 있는지가 중요하다고 봤습니다. 공식 출처의 원문을 보존하고, 내용이 바뀌었는지 확인할 수 있도록 변경 이력과 문서 버전을 관리했습니다.",
                tags: ["Validation", "Versioning", "Data Integrity"]
            },
            {
                label: "Why Minimize Sensitive Data?",
                detail:
                    "금융 상담에는 민감한 내용이 포함될 수 있어 상담 원문을 브라우저에 남기지 않았습니다. 세션과 상담 접근 권한도 Backend에서 확인해 필요한 범위 안에서만 상담에 접근하도록 구성했습니다.",
                tags: ["Security", "Session", "Privacy"]
            },
            {
                label: "Why Different Update Strategies?",
                detail:
                    "SecondHand에서는 찜과 입찰을 같은 방식으로 처리하지 않았습니다. 찜은 빠른 반응이 중요해 먼저 화면에 반영하고, 현재가와 다른 사용자의 입찰에 영향을 받는 입찰은 서버 결과를 확인한 뒤 화면을 갱신했습니다.",
                tags: ["Optimistic Update", "Mutation", "Sync"]
            },
            {
                label: "Why Handle Missing Data?",
                detail:
                    "PopFitUp에서 사용하는 크롤링 데이터는 이미지나 좌표가 비어 있는 경우가 있었습니다. 일부 정보가 없어도 사용자가 탐색을 계속할 수 있도록 fallback UI를 두고, 지도에서 사용할 수 없는 데이터는 별도로 처리했습니다.",
                tags: ["Fallback", "Data", "UX"]
            },
            {
                label: "Why Support the Full Order Flow?",
                detail:
                    "Shopping은 상품 화면만 만드는 데서 끝내지 않고 실제 주문이 끝나는 과정까지 연결했습니다. 회원과 비회원 주문을 모두 처리하고, 주문 이후의 취소·반품과 재고 복구까지 하나의 흐름으로 이어지도록 구성했습니다.",
                tags: ["Order Flow", "Guest", "End-to-End"]
            }
        ]
    }
};