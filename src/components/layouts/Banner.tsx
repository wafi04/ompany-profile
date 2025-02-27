import { TextPrimary } from "../ui/textPrimary";
import { Button } from "../ui/button";
import Image from "next/image";

export function Banner() {
  return (
    <section className="h-full md:mt-0 py-20 md:py-10  md:h-screen w-full flex justify-center items-center bg-[#0d2240] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="w-full max-w-screen-lg mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        <div className="md:w-1/2">
          <div className="space-y-3 text-4xl  font-bold mb-6 text-orange-500">
            <h2 className="leading-tight">
              <span className="">Lebih </span>
              <span>Dari Sekedar</span>
              <TextPrimary before="bg-white">Server Pulsa,</TextPrimary>
              <TextPrimary before="bg-white">Dinamis</TextPrimary>
              <TextPrimary before="bg-white">& Komunikatif.</TextPrimary>{" "}
            </h2>
          </div>
          <p className="text-sm text-gray-300 mb-8 max-w-lg">
            Dengan layanan solutif dan produk digital terbaru, kami hadir untuk
            mendukung perkembangan bisnis Anda.
          </p>
          <Button className="bg-secondary w-full h-10 text-black hover:text-orange-500 text-base hover:bg-[#1a4171]  font-medium transition-all duration-300 transform hover:-translate-y-1">
            New Order
          </Button>
        </div>

        <div className="md:w-1/2 ">
          <div className="  w-full  max-w-md mx-auto  ">
            <Image
              width={400}
              height={300}
              className="object-cover rounded-2xl shadow-2xl"
              src={"/image1.png"}
              alt="Image Discount"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/30 rounded-full blur-xl"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/30 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
}
