// store/useFilterStore.ts
import { create } from "zustand";

export type ProductType = "voucher" | "game" | "pln" | "data" | "pulsa";

interface FilterState {
  type: ProductType;
  availableTypes: ProductType[];
  setType: (newType: ProductType) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  priceRange: {
    min: number;
    max: number;
  };
  setPriceRange: (min: number, max: number) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  // Initial state
  type: "voucher",
  availableTypes: ["voucher", "game", "pln", "data", "pulsa"],
  searchQuery: "",
  priceRange: {
    min: 0,
    max: 1000000,
  },

  // Actions
  setType: (newType) => set({ type: newType }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setPriceRange: (min, max) => set({ priceRange: { min, max } }),
}));
