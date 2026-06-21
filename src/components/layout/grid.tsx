import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const gridVariants = cva("grid", {
  defaultVariants: {
    cols: 1,
    gap: "md",
  },
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
    },
    gap: {
      lg: "gap-6",
      md: "gap-4",
      none: "gap-0",
      sm: "gap-2",
      xl: "gap-8",
      xs: "gap-1",
    },
  },
});

const Grid = ({
  className,
  ...props
}: Readonly<
  HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof gridVariants>
>) => <div className={cn(gridVariants({ cols, gap }), className)} {...props} />;

export { gridVariants, Grid };
