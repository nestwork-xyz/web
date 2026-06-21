import type { ComponentPropsWithoutRef } from "react";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

import { Logo } from "../shared/logo";
import { Container } from "./container";
import { Flex } from "./flex";

export const Header = ({
  className,
  ...props
}: Readonly<ComponentPropsWithoutRef<"header">>) => (
  <header
    className={cn(
      "h-18 w-full max-w-full flex items-center justify-center bg-background border-b border-border z-50",
      className
    )}
    {...props}
  >
    <Container>
      <Flex className="flex-1" align="center" justify="start">
        <Logo priority />

        <ThemeToggle className="ml-auto" />
      </Flex>
    </Container>
  </header>
);
