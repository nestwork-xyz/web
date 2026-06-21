import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { GitHub } from "@/components/shared/icons";
import { createMetadata } from "@/config/metadata";

export const metadata: Metadata = createMetadata({
  title: "Modern team workspace and project management platform",
});

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="grid place-items-center gap-4 max-w-lg text-center text-balance">
        <Image
          src="/illustrations/oc-thinking.svg"
          alt="Growing illustration"
          height={0}
          width={0}
          style={{ height: "auto", width: "275px" }}
          priority
          loading="eager"
          className="dark:invert"
        />
        <h1 className="text-3xl font-semibold text-foreground tracking-tight">
          Currently under construction.
        </h1>
        <p className="text-lg text-muted-foreground">
          To learn more about this project, tools used, and more, head over to
          the{" "}
          <Link
            href="https://github.com/nestwork-xyz/web#README"
            className="text-foreground underline underline-offset-8 hover:underline-offset-5 decoration-transparent dark:hover:decoration-white duration-150 transition-all hover:text-black dark:hover:text-white hover:decoration-black"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub repository
          </Link>
          .
        </p>

        <button className="h-12 flex items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-foreground/80 font-medium">
          <Link
            href="https://github.com/nestwork-xyz"
            target="_blank"
            rel="noreferrer noopener"
            className="gap-2 flex items-center text-base/relaxed"
          >
            <GitHub className="invert-1 dark:invert-0 size-4" />
            Follow progress on GitHub
          </Link>
        </button>
      </div>
    </div>
  );
}
