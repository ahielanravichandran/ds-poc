import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cva, type VariantProps } from "class-variance-authority";
import "./styles.css";
import { cn } from "./utils";

const sliderVariants = cva(
  "relative flex w-full touch-none select-none items-center",
  {
    variants: {
      variant: {
        default: "bg-white",
        filled: "bg-gray-100",
      },
      size: {
        sm: "h-4",
        md: "h-5",
        lg: "h-6",
      },
      color: {
        blue: "text-blue-500",
        red: "text-red-500",
        green: "text-green-500",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      color: "blue",
    },
  }
);

export interface SliderProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
      "color" | "variant" | "size"
    >,
    VariantProps<typeof sliderVariants> {
  className?: string;
  showLabels?: boolean;
  formatLabel?: (value: number) => string;
}

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      defaultValue,
      max = 100,
      step = 1,
      className,
      variant,
      size,
      color,
      ...props
    },
    ref
  ) => (
    <SliderPrimitive.Root
      ref={ref}
      defaultValue={defaultValue}
      max={max}
      step={step}
      className={cn(sliderVariants({ variant, size, color, className }))}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow rounded-full bg-gray-200">
        <SliderPrimitive.Range className="absolute h-full rounded-full bg-blue-500" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-blue-500 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
  )
);

Slider.displayName = "Slider";
