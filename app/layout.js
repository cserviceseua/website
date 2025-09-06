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
  title: 'C & R Cleaning - Serviços de Limpeza Profissional',
  description: 'Serviços de limpeza residencial e comercial de alto padrão. Equipe qualificada, produtos de qualidade e satisfação 100% garantida. Solicite seu orçamento hoje!',
  keywords: 'limpeza profissional, limpeza residencial, limpeza comercial, faxina, serviços de limpeza, limpeza de escritório, serviços de diarista',
  openGraph: {
    title: 'C & R Cleaning - Serviços de Limpeza Profissional',
    description: 'Serviços de limpeza residencial e comercial de alto padrão. Equipe qualificada e satisfação 100% garantida.',
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
    title: 'C & R Cleaning - Serviços de Limpeza Profissional',
    description: 'Serviços de limpeza residencial e comercial de alto padrão. Equipe qualificada e satisfação 100% garantida.',
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
        
        {/* Scripts para comportamentos avançados de interação */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Script para animações de entrada baseadas em intersecção
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