import { Code, Github } from "lucide-react";
import Link from "next/link";
import Tooltip from "../Tooltip";

export const Header = () => {
  return (
    <header className="flex border-b border-zinc-900 pb-4 justify-between items-start">
      <Tooltip content="Movies and TV series recommendations in one click!">
        <Link href="/">
          <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-700">
            Cine
          </h1>
        </Link>
      </Tooltip>

      <div>
        <nav className="flex gap-2 divide-x divide-zinc-900">
          <Tooltip content="Source code">
            <div className="bg-zinc-900 p-2 rounded-md">
              <a href="https://github.com/lui7henrique/cine" target="_blank">
                <Code size={16} />
              </a>
            </div>
          </Tooltip>

          <Tooltip content="Author Github">
            <div className="bg-zinc-900 p-2 rounded-md">
              <a href="https://github.com/lui7henrique" target="_blank">
                <Github size={16} />
              </a>
            </div>
          </Tooltip>
        </nav>
      </div>
    </header>
  );
};
