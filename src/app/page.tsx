import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  description: "Currently under active development — check back soon.",
  title: "Work Flows Here",
};

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center self-stretch bg-zinc-50 font-sans dark:bg-background">
      <div className="h-18 flex items-center justify-center absolute top-0 inset-x-0 w-full max-w-full">
        <div className="container self-stretch px-4 flex items-center justify-start">
          <Link href="/">
            <Image
              alt="Nestwork logo"
              height={0}
              src="/brand/logos/svg/nestwork-primary.svg"
              style={{ height: "auto", width: "120px" }}
              width={0}
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 px-4 text-center sm:items-start sm:text-left">
        <h1 className="max-w-md text-xl font-semibold tracking-tight text-foreground">
          🚧 Currently under active development 🚧
        </h1>
        <p className="max-w-lg text-lg/8 text-balance text-zinc-600">
          To learn more about this project, tools used, and more, head over to
          the{" "}
          <a
            className="font-medium text-zinc-900 underline decoration-transparent decoration-[1.5px] underline-offset-8 transition-all duration-150 hover:decoration-zinc-900 hover:underline-offset-5 dark:text-primary dark:hover:decoration-primary"
            href="https://github.com/nestwork-xyz/web#README"
            rel="noreferrer noopener"
            target="_blank"
          >
            GitHub repository
          </a>
        </p>

        <div className="flex w-full flex-col items-center gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full max-w-max items-center justify-center gap-2 rounded-full border border-border bg-zinc-900 px-5 text-background transition-colors hover:bg-zinc-800  dark:bg-foreground dark:text-background dark:hover:bg-[#ccc]"
            href="https://github.com/nestwork-xyz/web#README"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt="GitHub logomark"
              className="invert"
              height={0}
              src="/github.svg"
              style={{ height: "16px", width: "16px" }}
              width={0}
            />
            Follow progress on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
