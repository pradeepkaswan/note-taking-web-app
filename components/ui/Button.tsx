import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "inline-flex border items-center h-[41px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500  ring-offset-neutral-500 justify-center whitespace-nowrap rounded-lg text-preset-4 transition-colors disabled:pointer-events-none disabled:text-neutral-300 disabled:bg-neutral-100 ",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 border-transparent text-white hover:bg-blue-700",
        secondary:
          "bg-neutral-100 focus-visible:border-neutral-950 text-neutral-600 hover:text-neutral-950 hover:bg-transparent border-0 hover:outline hover:outline-neutral-300",
        border:
          " border-neutral-300 focus-visible:border-neutral-950 hover:bg-neutral-50 text-neutral-950 dark:border-neutral-600",
        danger:
          "bg-red-500 border border-transparent text-white hover:bg-red-700",
      },
      size: {
        default: "px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
