import { Banner } from "@/components/layouts/Banner";
import { ContactMe } from "@/components/layouts/Contactme";
import { Footer } from "@/components/layouts/footer";
import { PriceList } from "@/components/layouts/priceList";
import ThumbnailTrusting from "@/components/layouts/Thubmnail-trusting";
import { ThumbnailSection } from "@/components/layouts/Thumbnail";

export default function Home() {
  return (
    <main className="p-0 ">
      <Banner />
      <ThumbnailSection />
      <PriceList />
      <ThumbnailTrusting />
      <ContactMe />
      <Footer />
    </main>
  );
}
