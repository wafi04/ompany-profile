import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function ThumbnailSection() {
  return (
    <section className="w-full py-16 md:py-24" aria-labelledby="section-title">
      <div className="max-w-4xl mx-auto">
        {/* Card with subtle shadow */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col items-center">
          {/* Decorative element */}
          <div className="w-20 h-1 bg-orange-500 mb-8 rounded-full"></div>

          {/* Main content */}
          <div className="space-y-6 mb-8 text-center">
            <h2
              id="section-title"
              className="text-[#1a4171] text-2xl md:text-3xl font-bold leading-tight ">
              BISNIS DIGITAL LEBIH MUDAH & MENGUNTUNGKAN
            </h2>

            <p className="text-orange-500 text-base leading-relaxed">
              <strong className="font-bold text-lg block mb-3">
                New Universe H2H - Solusi Tepat untuk Bisnis Pulsa Anda
              </strong>
              Nikmati kemudahan transaksi top-up game, voucher, dan pulsa dengan
              sistem yang cepat, aman, dan terpercaya. Khusus untuk Distributor
              tingkat 3 dan Merchant di seluruh Indonesia.
            </p>
          </div>

          {/* Improved CTA button */}
          <Link href={"/aboutme"}>
            <Button className="bg-[#1a4171] hover:bg-[#0f2a4d] text-white px-8 py-6 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 group">
              Pelajari Lebih Lanjut
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
