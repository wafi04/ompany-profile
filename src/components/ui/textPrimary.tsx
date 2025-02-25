import { cn } from "@/lib/utils";
import { ReactNode } from "react";

// Improved TextPrimary component with better animation and spacing
export function TextPrimary({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-primary font-bold text-4xl relative inline-block group mr-2",
        className
      )}>
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-100 transition-transform duration-300 ease-out"></span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </span>
  );
}
