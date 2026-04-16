import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "aos/dist/aos.css";
import FloatingActionButtons from "./components/FloatingActionButtons";
import AOSInit from "./components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Digitrail - Digital Solutions",
  description: "Professional digital solutions and web development services",
  icons: {
    icon: "/logonewdecupe.png",
    shortcut: "/logonewdecupe.png",
    apple: "/logonewdecupe.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-100`}
      >
        <AOSInit />
        {children}
        <FloatingActionButtons />
      </body>
    </html>
  );
}
