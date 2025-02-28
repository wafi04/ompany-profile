import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/next-provider";
import Header from "@/components/layouts/navbar";
import { ReactQueryProvider } from "@/components/provider/react-query-provider";
import { WhatsAppButton } from "@/components/ui/buttonwa";
import { TelegramButton } from "@/components/ui/buttonTele";
import { Footer } from "@/components/layouts/footer";
import { Toaster } from "sonner";
import { IMAGE_LOGO, WA_TELP } from "@/constants";

const geistSans = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    absolute: "Universe H2H",
    default: "Universe H2H",
    template: " %s  | Universe H2H ",
  },
  description:
    "Dengan layanan solutif dan produk digital terbaru, kami hadir untuk mendukung perkembangan bisnis Anda. Universe H2H hadir memberikan solusi untuk masyarakat bisa melakukan transaksi digital seperti topup game,membeli voucher ,dan masih banayak lagi.",
  icons: {
    icon: `${IMAGE_LOGO}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ReactQueryProvider>
        <body className={`${geistSans.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <Header />
            {children}
            <Toaster />
            <Footer />
            <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center space-y-2">
              <WhatsAppButton phoneNumber={`62${WA_TELP}`} />
              <TelegramButton />
            </div>
          </ThemeProvider>
        </body>
      </ReactQueryProvider>
    </html>
  );
}
