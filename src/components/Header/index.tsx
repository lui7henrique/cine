import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex border-b border-zinc-900 pb-4">
      <Link href="/">
        <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-700">
          Cine
        </h1>
      </Link>

      {/* <div>
        <nav className="flex gap-2 divide-x divide-zinc-900">
          <HeaderNavLink href="/movies" icon={Clapperboard} label="Movies" />
          <HeaderNavLink href="/tv" icon={Tv} label="TV" />
        </nav>
      </div> */}
    </header>
  );
};
