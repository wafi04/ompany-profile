import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TextPrimary({
  children,
  className,
  before,
  after,
}: {
  children: ReactNode;
  className?: string;
  before?: string;
  after?: string;
}) {
  return (
    <span
      className={cn(
        "text-white font-bold text-4xl relative inline-block group mr-2 hover:text-orange-500",
        className
      )}>
      {children}
      <span
        className={cn(
          "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-100 transition-transform duration-300 ease-out",
          before
        )}></span>
      <span
        className={cn(
          "absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out",
          after
        )}></span>
    </span>
  );
}
