import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const stackVariants = cva("flex flex-col", {
  defaultVariants: {
    gap: "md",
  },
  variants: {
    gap: {
      "2xl": "gap-12",
      lg: "gap-6",
      md: "gap-4",
      none: "gap-0",
      sm: "gap-2",
      xl: "gap-8",
      xs: "gap-1",
    },
  },
});

const Stack = ({
  className,
  cols,
  gap,
  ...props
}: Readonly<
  HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof stackVariants>
>) => (
  <div className={cn(stackVariants({ cols, gap }), className)} {...props} />
);

export { stackVariants, Stack };
