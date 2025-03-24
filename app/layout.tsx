import ScrollToTop from "@/components/Helper/ScrollToTop";
import Footer from "@/components/Home/Footer/Footer";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import ResponsiveNav from "../components/Home/Navbar/ResponsiveNav";
import "./globals.css";
const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Poojith's Portfolio",
  description: "Poojith's Academic, experience and much more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ResponsiveNav />
        {/* <Home /> */}
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
