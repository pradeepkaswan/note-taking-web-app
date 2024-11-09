import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center h-[41px] ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 ring-offset-neutral-500 justify-center whitespace-nowrap rounded-lg text-preset-4 transition-colors disabled:pointer-events-none disabled:opacity-50 disabled:bg-neutral-100 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-700",
        secondary:
          "bg-neutral-100 text-neutral-600 hover:text-neutral-950 hover:bg-white hover:border border-neutral-300",
        border: " border-neutral-300 text-neutral-950",
        danger:
          "bg-red-500 border border-transparent text-white hover:bg-red-700",
      },
      size: {
        default: "px-4 py-3",
        icon: "h-[42px] w-[42px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };