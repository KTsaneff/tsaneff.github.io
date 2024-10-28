import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  generator: 'Next.js',
  referrer:'origin-when-cross-origin',
  authors:[{name: 'Krasimir Tsanev'}],
  title: "Tsaneff",
  description: "Krasimir Tsanev ofiicial portfolio",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
