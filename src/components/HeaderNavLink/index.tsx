import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { useRouter } from "next/router";

type HeaderNavLinkProps = {
  href: string;
  icon: LucideIcon;
  label: string;
};

export const HeaderNavLink = (props: HeaderNavLinkProps) => {
  const { href, label } = props;
  const { asPath } = useRouter();

  const isActive = asPath === href;

  if (isActive) {
    return (
      <Link
        href={href}
        className="flex gap-2 px-4 text-zinc-200 hover:text-zinc-100 transition-all"
      >
        <props.icon size={20} />
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-4 text-zinc-500 hover:text-zinc-200 transition-all"
    >
      <props.icon size={20} />
      {label}
    </Link>
  );
};
