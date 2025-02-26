"use client";
import { JSX } from "react";

export function IframeComponents({
  data,
  onLoad,
  onError,
}: {
  data: string;
  onLoad: () => void;
  onError: () => void;
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
      title="Price List"
    />
  );
}
