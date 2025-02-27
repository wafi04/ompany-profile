import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/next-provider";
import Header from "@/components/layouts/navbar";
import { ReactQueryProvider } from "@/components/provider/react-query-provider";
import { WhatsAppButton } from "@/components/ui/buttonwa";
import { TelegramButton } from "@/components/ui/buttonTele";

const geistSans = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UniverseH2H",
  description: "UniverseH2H",
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
            <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center space-y-2">
              <WhatsAppButton
                phoneNumber="6282226197047"
                message="Halo, saya ingin bertanya tentang produk Anda."
              />
              <TelegramButton username="sincotans" />
            </div>
          </ThemeProvider>
        </body>
      </ReactQueryProvider>
    </html>
  );
}
