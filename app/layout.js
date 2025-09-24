import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Metadata } from "next";

// Carrega a fonte Inter com todos os pesos necessários
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'C & R Cleaning - Professional Cleaning Services',
  description: 'High-standard residential and commercial cleaning services. Qualified team, quality products, and 100% satisfaction guaranteed. Request your quote today!',
  keywords: 'professional cleaning, residential cleaning, commercial cleaning, deep cleaning, cleaning services, office cleaning, housekeeper services',
  openGraph: {
    title: 'C & R Cleaning - Professional Cleaning Services',
    description: 'High-standard residential and commercial cleaning services. Qualified team and 100% satisfaction guaranteed.',
    siteName: 'C & R Cleaning Services',
    type: 'website',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'C & R Cleaning Services Banner',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'C & R Cleaning - Professional Cleaning Services',
    description: 'High-standard residential and commercial cleaning services. Qualified team and 100% satisfaction guaranteed.',
    images: ['/banner.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#0F4C81',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-background text-main overflow-x-hidden min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
  {/* Scripts for advanced interaction behaviors */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Script for entry animations based on intersection
              document.addEventListener('DOMContentLoaded', () => {
                if ('IntersectionObserver' in window) {
                  const appearOptions = {
                    threshold: 0.1,
                    rootMargin: '0px 0px -100px 0px'
                  };
                  
                  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
                    entries.forEach(entry => {
                      if (!entry.isIntersecting) return;
                      entry.target.classList.add('appear');
                      appearOnScroll.unobserve(entry.target);
                    });
                  }, appearOptions);
                  
                  const hiddenElements = document.querySelectorAll('.fade-in-element');
                  hiddenElements.forEach(el => {
                    appearOnScroll.observe(el);
                  });
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
