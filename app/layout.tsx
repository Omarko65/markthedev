import type { Metadata } from "next";
import "./index.css";
import Navbar from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";


export const metadata: Metadata = {
  title: "MarkTheDev",
  description: "A new home to showcase all I do, can do & will do",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <link
        rel="preload"
        href="../assets/fonts/Geist-VariableFont_wght.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous" />
      <body className="min-h-screen  bg-primary">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
