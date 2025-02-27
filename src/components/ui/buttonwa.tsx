import Image from "next/image";
import React from "react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

export function WhatsAppButton({
  phoneNumber,
  message = "",
  label = "Chat with us",
  size = "md",
  showLabel = true,
  className = "",
}: WhatsAppButtonProps) {
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");

  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}${
    message ? `?text=${encodedMessage}` : ""
  }`;

  const sizeClasses = {
    sm: "text-xs px-2 py-1 space-x-1",
    md: "text-sm px-3 py-2 space-x-2",
    lg: "text-base px-4 py-3 space-x-3",
  };

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label="Contact via WhatsApp">
      <button
        className={`flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
          showLabel
            ? sizeClasses[size]
            : `p-${size === "sm" ? "2" : size === "md" ? "3" : "4"}`
        } ${!showLabel ? "aspect-square" : ""}`}>
        <div className="relative flex items-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Logo"
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
