"use client";
import { useRouter } from "next/navigation";
import { URL_TELEGRAM } from "@/constants";
import dynamic from "next/dynamic";
// Dynamically import components
const TextPrimary = dynamic(() =>
  import("../ui/textPrimary").then((mod) => mod.TextPrimary)
);
const Button = dynamic(() => import("../ui/button").then((mod) => mod.Button));
const Image = dynamic(() => import("next/image"));

export function Banner() {
  const { push } = useRouter();
  return (
    <section className="min-h-[80vh] md:min-h-screen w-full flex justify-center items-center bg-[#0d2240] relative overflow-hidden py-24 ">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 md:gap-16 lg:gap-20 z-10">
        <div className="w-full md:w-1/2 text-center md:text-left md:mt-12 lg:mt-16">
          <div className="space-y-1 sm:space-y-3 text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-orange-500">
            <h2 className="leading-tight">
              <span>Lebih </span>
              <span className="pr-2">Dari Sekedar</span>
              <TextPrimary before="bg-white">Server Pulsa,</TextPrimary>
              <TextPrimary before="bg-white">Dinamis</TextPrimary>
              <TextPrimary before="bg-white">& Komunikatif.</TextPrimary>{" "}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
            Dengan layanan solutif dan produk digital terbaru, kami hadir untuk
            mendukung perkembangan bisnis Anda.
          </p>
          <Button
            onClick={() => push(URL_TELEGRAM as string)}
            className="bg-secondary w-full sm:w-auto sm:px-8 h-10 text-black hover:text-orange-500 text-base hover:bg-[#1a4171] font-medium transition-all duration-300 transform hover:-translate-y-1">
            View More
          </Button>
        </div>

        <div className="w-full md:w-5/12 lg:w-1/2 mt-10 md:mt-0 relative">
          <div className="relative w-full h-64 sm:h-80 md:h-96  lg:aspect-[4/5]">
            <Image
              fill
              className="object-cover rounded-2xl shadow-2xl"
              src="/image5.avif"
              alt="Image Discount"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/30 rounded-full blur-xl"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/30 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
}
