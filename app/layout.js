import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BlueSpring Cleaning - Reliable Cleaning Services in Denver, CO',
  description: 'Professional residential cleaning services in Denver, CO. 100% satisfaction guarantee, fully-vetted crew, upfront pricing. Book your free quote today!',
  keywords: 'cleaning services, Denver cleaning, residential cleaning, house cleaning, maid service, Colorado',
  openGraph: {
    title: 'BlueSpring Cleaning - Reliable Cleaning Services in Denver, CO',
    description: 'Professional residential cleaning services in Denver, CO. 100% satisfaction guarantee, fully-vetted crew, upfront pricing.',
    url: 'https://bluespringcleaning.com',
    siteName: 'BlueSpring Cleaning',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlueSpring Cleaning - Reliable Cleaning Services in Denver, CO',
    description: 'Professional residential cleaning services in Denver, CO. 100% satisfaction guarantee, fully-vetted crew, upfront pricing.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-ink`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
