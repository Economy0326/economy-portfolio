window.siteContent = {
    navigation: {
        logo: "Kyungjae Jung",
        logoAccent: "_",
        links: [
            { label: "Projects", href: "#projects" },
            { label: "Decisions", href: "#awards" },
            { label: "Tech", href: "#tech" },
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
            "<strong>소프트웨어 엔지니어 정경재</strong><br>복잡한 상태와 정책을 사용자에게는 단순한 흐름으로, 시스템에서는 검증 가능한 구조로 연결합니다.",
        achievements: []
    },

    projects: [
        {
            title: "Financial Helper",
            description:
                "개인 프로젝트, 확인된 사실과 검토된 공식 근거를 바탕으로 금융 피해 상황의 다음 행동을 단계적으로 안내하는 금융소비자 보호 서비스",
            url: "https://github.com/Economy0326/financial-helper-frontend",
            backgroundImage: "./imgs/projects/financial-helper-cover.gif",
            backgroundColor: "#0f766e",
            extraClasses: ["project--hero"]
        },
        {
            title: "SecondHand Auction",
            description:
                "팀 프로젝트, 경매 상태와 기능 특성에 따라 거래 정책과 서버 데이터 갱신 방식을 구분한 중고거래 서비스",
            url: "https://github.com/Economy0326/secondhand-frontend",
            backgroundImage: "./imgs/projects/secondhand-cover.gif",
            backgroundColor: "#0f172a",
            extraClasses: ["project--compact"]
        },
        {
            title: "PopFitUp",
            description:
                "팀 프로젝트, URL 기반 검색 상태와 Naver Maps를 연결하고 불완전한 실데이터에서도 탐색 흐름을 유지한 팝업스토어 탐색 서비스",
            url: "https://github.com/Economy0326/popfitup-frontend",
            backgroundImage: "./imgs/projects/popfitup-cover.gif",
            backgroundColor: "#2563eb",
            extraClasses: ["project--compact"]
        },
        {
            title: "Shopping Mall",
            description:
                "개인 프로젝트, 옵션과 재고를 서버 정책으로 검증하며 주문부터 취소, 반품, 환불까지 Frontend와 Backend로 연결한 쇼핑몰",
            url: "https://github.com/Economy0326/shopping-frontend",
            backgroundImage: "./imgs/projects/shopping-cover.gif",
            backgroundColor: "#ef4444",
            extraClasses: ["project--compact"]
        }
    ],

    awards: {
        title: "Decisions",
        items: [
            {
                project: "Financial Helper",
                label: "고령층을 위한 단계형 키오스크 UX",
                detail:
                    "50~70대 사용자가 한 화면에서 하나의 판단에 집중하도록 상담 단계를 나누고, 큰 선택 영역과 명확한 다음 행동 중심으로 화면을 구성했습니다.",
                tags: ["Kiosk UX", "Accessibility"]
            },
            {
                project: "Financial Helper",
                label: "금융 행동의 책임을 Backend에 고정",
                detail:
                    "확인된 사실과 승인된 Procedure/FAP가 행동과 순서를 결정하고, AI는 검증된 결과를 설명하는 역할만 담당하도록 분리했습니다.",
                tags: ["Procedure", "Grounded AI"]
            },
            {
                project: "Financial Helper",
                label: "공식 근거를 Hybrid Retrieval로 결합",
                detail:
                    "KURE-v2 의미 검색과 PostgreSQL keyword 검색을 RRF로 결합하고, 조건과 예외 근거까지 함께 사용하도록 구성했습니다.",
                tags: ["KURE-v2", "RRF"]
            },
            {
                project: "SecondHand Auction",
                label: "거래 영향도에 따라 갱신 방식 분리",
                detail:
                    "찜은 TanStack Query의 Optimistic Update를 적용하고, 입찰은 실제 거래 상태가 중요해 서버 확정 후 관련 데이터를 다시 조회했습니다.",
                tags: ["TanStack Query", "Optimistic Update"]
            },
            {
                project: "PopFitUp",
                label: "불완전한 데이터에서도 탐색 유지",
                detail:
                    "크롤링 데이터의 누락된 이미지와 설명은 fallback으로 보완하고, 좌표가 없는 데이터는 카드에는 유지하되 지도 Marker에서는 제외했습니다.",
                tags: ["Fallback", "Naver Maps"]
            },
            {
                project: "Shopping Mall",
                label: "옵션과 재고의 최종 판단을 Backend에 고정",
                detail:
                    "Frontend는 사용자가 선택한 optionValues만 전달하고, Backend가 실제 variant와 재고를 검증하며 취소와 환불 상태에 따라 재고 복구 시점을 결정했습니다.",
                tags: ["Inventory", "Backend Policy"]
            }
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
                label: "AI & Retrieval",
                items:
                    "OpenAI API / Structured Output / KURE-v2 / Hybrid Retrieval / RRF"
            },
            {
                label: "Test & Tools",
                items:
                    "JUnit / Vitest / Testing Library / Swagger / Git / GitHub"
            }
        ]
    }
};