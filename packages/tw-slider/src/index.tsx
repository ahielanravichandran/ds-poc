import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import "./styles.css";

export interface SliderProps {
  defaultValue?: number[];
  max?: number;
  step?: number;
  value?: number[];
  onValueChange?: (value: number[]) => void;
}

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ defaultValue, max = 100, step = 1, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    defaultValue={defaultValue}
    max={max}
    step={step}
    className="relative flex w-full touch-none select-none items-center"
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow rounded-full bg-gray-200">
      <SliderPrimitive.Range className="absolute h-full rounded-full bg-blue-500" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-blue-500 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));

Slider.displayName = "Slider";
