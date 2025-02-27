"use client";
import { URL_LIST_FF, URL_LIST_ML, URL_LIST_VOUCHER } from "@/constants";
import { useState } from "react";
import { IframeComponents } from "../ui/iframe-components";

export function PriceList() {
  const [loadingStates, setLoadingStates] = useState({
    ml: true,
    ff: true,
    voucher: true,
  });

  const handleIframeLoad = (key: keyof typeof loadingStates) => {
    setLoadingStates((prev) => ({ ...prev, [key]: false }));
  };

  const handleIframeError = (key: keyof typeof loadingStates) => {
    setLoadingStates((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center">
      <div className="text-center font-semibold mb-4">
        <h1 className="text-3xl font-semibold border-b-4 text-primary w-fit hover:border-orange-300">
          Harga List
        </h1>
      </div>

      {/* Loading indicator */}
      {Object.values(loadingStates).some((isLoading) => isLoading) && (
        <div className="text-center p-6 mt-4">
          <p className="text-gray-600">Loading price data...</p>
        </div>
      )}

      <div className="w-full  grid grid-cols-1 md:grid-cols-3 gap-4 px-10 md:h-[80vh]  h-screen">
        <IframeComponents
          key="voucher"
          data={URL_LIST_VOUCHER as string}
          onLoad={() => handleIframeLoad("voucher")}
          onError={() => handleIframeError("voucher")}
        />
        <IframeComponents
          key="ml"
          data={URL_LIST_ML as string}
          onLoad={() => handleIframeLoad("ml")}
          onError={() => handleIframeError("ml")}
        />
        <IframeComponents
          key="ff"
          data={URL_LIST_FF as string}
          onLoad={() => handleIframeLoad("ff")}
          onError={() => handleIframeError("ff")}
        />
      </div>
    </section>
  );
}
