import type { Metadata } from "next";
import { Roboto, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import {cn} from "@/lib/utils"
import GrainEfffect from "@/components/visualEffects/grain-effect";
import Cursor from "@/components/cursor/cursor";

const MainFont = Roboto({subsets: ["latin"],  weight: ["400", "700"]});
const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald"});
const PixelFont = localFont({
  src:"../public/assets/fonts/pixel-font-7.ttf",
  variable:"--font-pixel",
});

//Metadata
export const metadata: Metadata = {
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Krasimir Tsanev' }],
  title: "Tsaneff",
  description: "Krasimir Tsanev official portfolio",
  keywords: ['Next.js', 'React', 'JavaScript'],
  creator: 'Krasimir Tsanev',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={cn(
          MainFont.className, 
          OswaldFont.variable, 
          PixelFont.variable
        )}
      >
        <GrainEfffect/>
        <Cursor color="#fff"/>
        {children}
      </body>
    </html>
  );
}
