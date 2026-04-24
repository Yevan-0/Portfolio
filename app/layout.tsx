import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Loader from "./components/loader";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata = {
  title: "Portfolio | Yevan",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={poppins.className}
    >
      <body className="min-h-full flex flex-col">
        <Loader />
        {children}
        </body>
    </html>
  );
}
