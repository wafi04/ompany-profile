import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function ThumbnailSection() {
  return (
    <section className="w-full py-24" aria-labelledby="section-title">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Card with subtle shadow */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col items-center text-center">
          {/* Decorative element */}
          <div className="w-20 h-1 bg-orange-500 mb-8 rounded-full"></div>

          {/* Main content */}
          <div className="space-y-6 mb-8">
            <h2
              id="section-title"
              className="text-[#1a4171] text-2xl md:text-3xl font-bold leading-tight">
              New Universe H2H adalah Distributor pulsa elektrik yang befokus
              mensupply produk-produk kepada Distributor pulsa tk 3 / Merchant
              Se-Indonesia
            </h2>

            <p className="text-orange-500 text-lg md:text-xl font-medium">
              Dengan layanan solutif dan produk digital terbaru, kami hadir
              untuk mendukung perkembangan bisnis Anda.
            </p>
          </div>

          {/* Improved CTA button */}
          <Button className="bg-[#1a4171] hover:bg-[#0f2a4d] text-white px-8 py-6 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 group">
            Pelajari Lebih Lanjut
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}
