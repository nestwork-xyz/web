import type { ReactNode } from "react";

import { Header } from "@/components/layout/header";
import { Stack } from "@/components/layout/stack";

export default function MarketingLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Stack gap="none" className="flex-1">
      <Header />

      <main className="flex-1 flex">{children}</main>
    </Stack>
  );
}
