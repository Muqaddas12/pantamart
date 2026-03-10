import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Pantamart : Your Security Partner",
  description:
    "Pantamart provides advanced security products including CCTV systems, biometric access control, smart door locks, alarm systems, and networking equipment for homes and businesses.",
  keywords: [
    "Pantamart",
    "Security Systems",
    "CCTV Cameras",
    "Biometric Devices",
    "Smart Door Locks",
    "Access Control",
    "Surveillance",
    "Networking Equipment",
    "Smart Home Security"
  ],
  authors: [{ name: "Pantamart" }],
  creator: "Pantamart",
  openGraph: {
    title: "Pantamart Security",
    description:
      "Advanced security, surveillance and smart automation products for homes and businesses.",
    siteName: "Pantamart",
    type: "website",
  },
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
