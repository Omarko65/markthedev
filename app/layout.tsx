import type { Metadata } from "next";
import "./index.css";
import Navbar from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import localfont from 'next/font/local'

const myFont = localfont({
  src: './fonts/Geist-VariableFont_wght.ttf'
})

export const metadata: Metadata = {
  title: "MarkTheDev",
  description: "A new home to showcase all I do, can do & will do",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={myFont.className}
    >
      <body className="min-h-screen  bg-primary">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
