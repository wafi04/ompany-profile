import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/next-provider";
import Header from "@/components/layouts/navbar";
import { ReactQueryProvider } from "@/components/provider/react-query-provider";

const geistSans = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vazzuniverse",
  description: "Vazzuniverse",
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
          </ThemeProvider>
        </body>
      </ReactQueryProvider>
    </html>
  );
}
