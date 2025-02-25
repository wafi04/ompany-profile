import Image from "next/image";

export function ThumbnailSection() {
  return (
    <section className="w-full py-12 bg-white" aria-labelledby="section-title">
      <div className="container mx-auto p-4 max-w-6xl space-y-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-full md:w-2/3 flex flex-col space-y-4">
            <h2
              id="section-title"
              className="text-[#1a4171] text-3xl md:text-4xl font-semibold text-center md:text-left">
              Lebih dari Sekadar Server Pulsa, Dinamis & Komunikatif!
            </h2>
            <p className="text-orange-500 text-xl text-center md:text-left">
              Dengan layanan solutif dan produk digital terbaru, kami hadir
              untuk mendukung perkembangan bisnis Anda.
            </p>
          </div>

          <div className="w-full md:w-1/3 mt-6 md:mt-0">
            <div className="relative aspect-square w-full max-w-md mx-auto md:mx-0 md:ml-auto overflow-hidden rounded-lg ">
              <Image
                src="/imagetopup.avif"
                alt="Ilustrasi kekhawatiran pemain retail"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
