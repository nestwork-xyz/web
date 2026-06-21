import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  width?: number;
  priority?: boolean;
  className?: string;
}

const Logo = ({
  className,
  href = "/",
  width = 120,
  priority = false,
}: Readonly<LogoProps>) => (
  <Link href={href} className={className}>
    <Image
      className="dark:hidden transition-opacity duration-150 hover:opacity-80"
      src="/brand/svg/nestwork-primary.svg"
      alt="Nestwork logo"
      width={width}
      height={0}
      style={{ height: "auto" }}
      priority={priority}
    />

    <Image
      className="hidden dark:block transition-opacity duration-150 hover:opacity-80"
      src="/brand/svg/nestwork-blue-white.svg"
      alt="Nestwork logo"
      width={width}
      height={0}
      style={{ height: "auto" }}
      priority={priority}
    />
  </Link>
);

export { Logo };
