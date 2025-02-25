import { TextPrimary } from "../ui/textPrimary";
import { Button } from "../ui/button";
import Image from "next/image";

export function Banner() {
  return (
    <section className="h-[calc(100vh-100px)] w-full flex justify-center items-center bg-[#0d2240] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="w-full max-w-screen-lg mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        <div className="md:w-1/2">
          <div className="space-y-3 text-3xl  font-bold mb-6">
            {/* First line: "Jualan Murah, Untung," */}
            <h2 className="leading-tight">
              <span className="text-white">Jualan </span>
              <TextPrimary>Murah,</TextPrimary>
              <TextPrimary> Untung,</TextPrimary>
            </h2>

            {/* Second line: "Pelayanan Ramah, dan" */}
            <h2 className="leading-tight">
              <TextPrimary>Pelayanan Ramah,</TextPrimary>{" "}
              <span className="text-white">dan</span>
            </h2>

            {/* Third line: "Transaksi Aman" */}
            <h2 className="leading-tight">
              <TextPrimary>Transaksi Aman</TextPrimary>
            </h2>
          </div>

          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Temukan pengalaman berbelanja yang menyenangkan dengan harga
            terbaik, layanan pelanggan bersahabat, dan keamanan transaksi
            terjamin.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="hover:bg-secondary hover:text-white p-4 text-base hover:bg-[#1a4171]  font-medium transition-all duration-300 transform hover:-translate-y-1">
              Mulai Belanja
            </Button>
            <Button
              variant="outline"
              className="p-4 text-base font-medium  text-white  hover:text-black bg-[#1a4171]  hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
              Pelajari Lebih Lanjut
            </Button>
          </div>

          <div className="flex items-center mt-12 space-x-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-[#0d2240]  border-2 border-primary flex items-center justify-center overflow-hidden shadow-lg">
                  <span className="text-sm font-bold text-primary">U{i}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-white">
              <span className="font-bold text-primary bg-[#1a4171] px-2 py-1 rounded-md">
                1,200+
              </span>{" "}
              <span className="ml-1">pelanggan puas bulan ini</span>
            </p>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <div className="relative z-10 w-full aspect-square max-w-md mx-auto rounded-2xl shadow-2xl overflow-hidden">
            <Image
              fill
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              src={"/image1.png"}
              alt="Image Discount"
            />

            {/* Floating elements */}
            {/* <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-white   font-bold">Koleksi Terbaru</h3>
                  <p className="text-gray-300 text-sm">Terbatas</p>
                </div>
                <Button className="bg-secondary hover:bg-black text-white text-sm px-3 py-1">
                  Lihat
                </Button>
              </div>
            </div> */}
          </div>

          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/30 rounded-full blur-xl"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/30 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
}
