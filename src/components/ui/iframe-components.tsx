"use client";
import { cn } from "@/lib/utils";
import { JSX } from "react";

export function IframeComponents({
  data,
  onLoad,
  onError,
  className,
}: {
  data: string;
  onLoad?: () => void;
  onError?: () => void;
  className?: string;
}): JSX.Element {
  return (
    <iframe
      style={{
        height: "100%",
        width: "100%",
        border: "none",
      }}
      src={data}
      onLoad={onLoad}
      onError={onError}
      className={cn("", className)}
      title="Price List"
    />
  );
}
