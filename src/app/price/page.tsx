import { HeaderPrice } from "@/features/pages/price/header";
import { PriceList } from "@/features/pages/price/price";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Price",
  description:
    "Universe H2H adalah platform terlengkap untuk voucher game, topup kredit, gift card, dan mata uang digital. Temukan penawaran terbaik untuk Mobile Legends, PUBG, Free Fire, Steam, dan banyak lagi. Proses cepat, transaksi aman, dan layanan pelanggan 24/7. Tingkatkan pengalaman gaming Anda secara instan!",
};

export default function PricePage() {
  return (
    <main className="py-20">
      <HeaderPrice />
      <PriceList />
    </main>
  );
}
