"use client";

import { useFilterStore } from "@/hooks/useFilterPrice";
import { motion } from "framer-motion";

const getDisplayName = (type: string): string => {
  const displayNames: Record<string, string> = {
    voucher: "Voucher",
    game: "Game",
    pln: "PLN",
    data: "Data Package",
    pulsa: "Pulsa",
    listrik: "Listrik",
  };

  return displayNames[type] || type.charAt(0).toUpperCase() + type.slice(1);
};

export function HeaderPrice() {
  const { setType, availableTypes, type } = useFilterStore();

  return (
    <div className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center space-y-6 w-full">
          <h1 className="text-4xl font-bold text-center text-[#1a4171]">
            Price List
          </h1>
          <p className="text-gray-600 text-center max-w-2xl">
            Cari harga terbaik yang kamu inginkan
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {availableTypes.map((typeOption) => (
              <button
                key={typeOption}
                onClick={() => setType(typeOption)}
                className={`
                  relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${
                    type === typeOption
                      ? "text-white"
                      : "text-gray-700 hover:text-[#1a4171]"
                  }
                `}>
                {type === typeOption && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#1a4171] rounded-full"
                    initial={false}
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">
                  {getDisplayName(typeOption)}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center mt-6">
            <div className="h-px w-16 bg-blue-200"></div>
            <span className="mx-4 text-sm text-blue-400">
              {getDisplayName(type)} Prices
            </span>
            <div className="h-px w-16 bg-blue-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
