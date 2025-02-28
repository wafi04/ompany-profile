import { URL_TELEGRAM } from "@/constants";
import Image from "next/image";
import React from "react";

interface TelegramButtonProps {
  message?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
  useDeepLink?: boolean;
}

export function TelegramButton({
  label = "Chat with us",
  size = "md",
  showLabel = true,
  className = "",
}: TelegramButtonProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-1 space-x-1",
    md: "text-sm px-3 py-2 space-x-2",
    lg: "text-base px-4 py-3 space-x-3",
  };

  // Icon size based on button size
  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <a
      href={URL_TELEGRAM}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label="Contact via Telegram">
      <button
        className={`flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
          showLabel
            ? sizeClasses[size]
            : `p-${size === "sm" ? "2" : size === "md" ? "3" : "4"}`
        } ${!showLabel ? "aspect-square" : ""}`}>
        <div className="relative flex items-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
            alt="Telegram Logo"
            width={iconSize[size]}
            height={iconSize[size]}
            className={showLabel ? "" : ""}
          />
          {showLabel && <span className="ml-2">{label}</span>}
        </div>
      </button>
    </a>
  );
}
