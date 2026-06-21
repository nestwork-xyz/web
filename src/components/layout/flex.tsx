import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const flexVariants = cva("flex", {
  defaultVariants: {
    align: "start",
    direction: "row",
    gap: "md",
    justify: "start",
    wrap: false,
  },
  variants: {
    align: {
      baseline: "items-baseline",
      center: "items-center",
      end: "items-end",
      start: "items-start",
      stretch: "items-stretch",
    },
    direction: {
      column: "flex-col",
      "column-reverse": "flex-col-reverse",
      row: "flex-row",
      "row-reverse": "flex-row-reverse",
    },
    gap: {
      lg: "gap-6",
      md: "gap-4",
      none: "gap-0",
      sm: "gap-2",
      xl: "gap-8",
      xs: "gap-1",
    },
    justify: {
      around: "justify-around",
      between: "justify-between",
      center: "justify-center",
      end: "justify-end",
      evenly: "justify-evenly",
      start: "justify-start",
    },
    wrap: {
      false: "flex-nowrap",
      true: "flex-wrap",
    },
  },
});

const Flex = ({
  className,
  direction,
  align,
  justify,
  gap,
  wrap,
  ...props
}: Readonly<
  HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof flexVariants>
>) => (
  <div
    className={cn(
      flexVariants({ align, direction, gap, justify, wrap }),
      className
    )}
    {...props}
  />
);

export { flexVariants, Flex };
