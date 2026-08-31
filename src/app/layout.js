import { Anton, Archivo, JetBrains_Mono, IBM_Plex_Mono, Space_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ibmPlex = IBM_Plex_Mono({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Anime Streetwear Australia — ZENJI",
  description:
    "Premium neo-tokyo anime streetwear. Limited drops, in stock now, selected pieces on sale. Australia-wide delivery.",
  authors: [{ name: "ZENJI", url: "https://zenji.shop" }],
  creator: "ZENJI",
  publisher: "ZENJI",
  openGraph: {
    title: "ZENJI — Anime Streetwear Australia | Limited Drops",
    description: "Limited anime streetwear from Australia. Japanese-inspired graphic tees. No restocks. Ever.",
    url: "https://zenji.shop",
    siteName: "ZENJI",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZENJI — Premium Anime Streetwear Australia",
    description: "Limited anime-inspired streetwear. No restocks. Ever.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-AU"
      className={`${anton.variable} ${archivo.variable} ${jetbrains.variable} ${ibmPlex.variable} ${spaceMono.variable} antialiased`}
    >
      <body className="font-body-md bg-black text-white">{children}</body>
    </html>
  );
}
