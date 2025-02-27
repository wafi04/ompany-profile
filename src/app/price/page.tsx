import { HeaderPrice } from "@/features/pages/price/header";
import { PriceList } from "@/features/pages/price/price";

export default function PricePage() {
  return (
    <main className="py-16">
      <HeaderPrice />
      <PriceList />
    </main>
  );
}
