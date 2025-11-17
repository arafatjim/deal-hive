import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";



export const metadata: Metadata = {
  title:{
    default: "DealHive",
    template: "%s | DealHive",
  },
  description: "Your one-stop shop for the best deals online!",
  icons: {
    icon: "./shopping-cart.png",
  },  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
