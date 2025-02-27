"use client";

import { useState } from "react";
import { IframeComponents } from "@/components/ui/iframe-components";
import { TableSkeleton } from "@/components/ui/table-skeleton";
import {
  URL_LIST_FF,
  URL_LIST_ML,
  URL_LIST_PLN,
  URL_LIST_VOUCHER,
} from "@/constants";
import { useFilterStore } from "@/hooks/useFilterPrice";
import { JSX } from "react";

export function PriceList(): JSX.Element {
  const { type } = useFilterStore();
  const [loadingStates, setLoadingStates] = useState<Record<number, boolean>>(
    {}
  );

  const typeToUrlMap = {
    game: [URL_LIST_ML, URL_LIST_FF],
    pln: [URL_LIST_PLN],
    voucher: [URL_LIST_VOUCHER],
    data: [""],
    pulsa: [""],
    listrik: [""],
  };

  const urls = typeToUrlMap[type as keyof typeof typeToUrlMap] || [];

  const handleLoad = (index: number) => {
    setLoadingStates((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  const handleError = (index: number) => {
    setLoadingStates((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  if (urls.length === 0 || urls[0] === "") {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        No price list available for this category
      </div>
    );
  }

  return (
    <div className="min-h-screen container mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {urls.map((url, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden">
            {loadingStates[index] !== false && (
              <div className="p-4">
                <TableSkeleton />
              </div>
            )}
            <IframeComponents
              data={url ?? ""}
              onLoad={() => handleLoad(index)}
              onError={() => handleError(index)}
              className={`w-full h-full min-h-[500px] ${
                loadingStates[index] === false ? "block" : "hidden"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
