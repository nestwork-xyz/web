import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  defaultVariants: {
    size: "lg",
  },
  variants: {
    size: {
      lg: "max-w-7xl",
      md: "max-w-5xl",
      sm: "max-w-3xl",
      xl: "max-w-screen 2xl",
    },
  },
});

const Container = ({
  className,
  size,
  ...props
}: Readonly<
  HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof containerVariants>
>) => <div className={cn(containerVariants({ size }), className)} {...props} />;

export { containerVariants, Container };
