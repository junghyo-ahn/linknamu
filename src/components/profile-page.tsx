const links = [
  { title: "인스타그램", url: "https://www.instagram.com/" },
  { title: "블로그", url: "https://blog.naver.com/" },
  { title: "유튜브", url: "https://www.youtube.com/" },
];
export function ProfilePage() {
  return (
    <main className="mx-auto my-4 w-[calc(100%-2rem)] max-w-lg rounded-3xl border-2 border-neutral-800 px-5 py-12 sm:my-8 sm:px-8">
      <div role="img" aria-label="프로필 사진 준비 중" className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-2 border-neutral-800 bg-neutral-50 text-sm text-neutral-500">프로필 사진</div>
      <h1 className="mt-10 text-center text-xl font-semibold">임자임당</h1>
      <p className="mt-5 text-center leading-7 break-words">직접 경험해서 유익한 정보를 알려주는 리빙·건강 인플루언서</p>
      <nav aria-label="프로필 링크" className="mt-10 space-y-4">
        {links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center rounded-2xl border-2 border-neutral-800 px-5 font-medium transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-4">{link.title}<span className="sr-only"> (새 탭에서 열림)</span></a>)}
      </nav>
      <p className="mt-8 text-center text-xs text-neutral-500">예시 프로필 · 클릭 집계 연동 전</p>
    </main>
  );
}
