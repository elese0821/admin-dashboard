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

## 경로 Alias 설정 이슈 해결

ES Modules(ESM)(`"type": "module"`) 환경에서는 `__dirname`이 지원되지 않아서  
Vite config에서 alias 경로 설정이 깨지는 문제가 있었습니다.  

```diff
- "@": path.resolve(__dirname, "./src")

+ "@": fileURLToPath(new URL("./src", import.meta.url))
```

