# admin-dashboard

**배포(Production)**

- Vercel: https://admin-dashboard-wy.vercel.app

## 설치 & 개발

- pnpm 설치: `https://pnpm.io/ko/installation`
- Vite + React + TypeScript + SWC: `https://ko.vite.dev/guide/`
- React Query: 서버 상태 `https://tanstack.com/query/latest/docs/framework/react/installation`
- Zustand: 전역(세션/테마)
- React Router: 라우팅
- shadcn/ui `https://ui.shadcn.com/docs/installation/vite`

```
>npm install -g pnpm@latest-10

$pnpm install

>pnpm i tailwindcss @tailwindcss/vite 

pnpm i @tanstack/react-query zustand react-router-dom
pnpm add -D @tanstack/eslint-plugin-query

pnpm dlx shadcn@latest init

pnpm dlx shadcn@latest add button calendar checkbox select dropdown-menu input avatar separator



```
## 📌 Dashboard Page (대시보드)

* 관리자가 현재 서비스 현황을 한눈에 확인할 수 있는 페이지
* 주요 KPI(핵심 지표)를 카드 형태로 보여주고, 최근 활동 데이터를 간단히 제공

* **KPI 카드 3개** : 총 매출, 신규 가입자 수, 활성 사용자 수
* **트렌드 표시** : 지난 7일 대비 증감률 같은 간단한 지표
* **최근 사용자 섹션** : 최근 가입한 사용자 목록 5개
* **링크 버튼** : 전체 사용자 목록 페이지(`/users`)로 이동

## 📌 Users Page (사용자 관리)

* 서비스 사용자(회원) 정보를 조회, 검색, 관리할 수 있는 페이지입니다.
* B2B 관리자 대시보드에서 가장 핵심적인 “데이터 관리” 기능을 담당합니다.

* **상단 툴바** : 검색 인풋(이름/이메일 검색), 상태 필터 버튼(활성/비활성)
* **“유저 추가” 버튼** : 다이얼로그(팝업)로 신규 사용자 등록 폼 표시
* **사용자 테이블**

  * 컬럼: 이름, 이메일, 상태(Active/Inactive), 가입일, 액션(수정/삭제)
  * 행마다 편집/삭제 버튼 배치
* **Empty State** : 데이터가 없을 때 안내 메시지 + “유저 추가” 버튼 강조





# 🚧 Issue 

1. 경로 Alias 설정 이슈 해결
ES Modules(ESM)(`"type": "module"`) 환경에서는 `__dirname`이 지원되지 않아서  
Vite config에서 alias 경로 설정이 깨지는 문제가 있었습니다.  
```diff
- "@": path.resolve(__dirname, "./src")

+ "@": fileURLToPath(new URL("./src", import.meta.url))
```

2. router 설정 중 에러
라우터 설정을 routes.ts 파일에서 작성하면서 <Shell /> 같은 JSX를 사용했는데,
erasableSyntaxOnly라는 오류가 발생했다.
✅ 해결
.ts 확장자는 순수 타입스크립트만 지원 → JSX 문법 불가
JSX(<Component />)를 쓰려면 반드시 .tsx 확장자 사용해야 함
routes.ts → routes.tsx로 변경 후 정상 작동 확인
✨ 정리
공식 문서 예제는 Component: Root 같이 JSX 없는 방식이라 .ts 확장자도 가능했지만,
이번 프로젝트처럼 element: <Shell />을 쓰면 반드시 .tsx로 만들어야 한다.

