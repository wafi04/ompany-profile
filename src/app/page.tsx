import { Banner } from "@/components/layouts/Banner";
import { ContactMe } from "@/components/layouts/Contactme";
import { PriceList } from "@/components/layouts/priceList";
import ThumbnailTrusting from "@/components/layouts/Thubmnail-trusting";
import { ThumbnailSection } from "@/components/layouts/Thumbnail";

export default function Home() {
  return (
    <main className="p-0 space-y-10">
      <Banner />
      <ThumbnailSection />
      <PriceList />
      <ThumbnailTrusting />
      <ContactMe />
    </main>
  );
}
