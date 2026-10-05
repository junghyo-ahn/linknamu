# 링크나무

Next.js 16 · App Router · TypeScript · Tailwind CSS 4 기반 프로젝트입니다.
프로젝트 루트는 현재 `link-tree` 폴더입니다.

## 실행

```sh
npm install
npm run dev
```

http://localhost:3000 에서 확인합니다.

## 검증

```sh
npm run test
npm run lint
npm run typecheck
npm run build
```

## 현재 범위

와이어프레임을 참고한 예시 프로필과 외부 링크 화면까지 구성했습니다.
사진과 링크는 예시이며 MongoDB 연결, 클릭 집계, 실제 배포는 아직 구현하지 않았습니다.
실제 기능 요구사항은 PRD.md, 개발 규칙은 AGENTS.md를 참고하세요.

## 환경 변수

MongoDB 연동 시 `.env.example`을 참고하여 `.env.local`을 생성합니다.
실제 접속 정보는 커밋하지 않습니다. Vercel 배포 시 환경 변수는 배포 프로젝트 설정에서 등록합니다.
