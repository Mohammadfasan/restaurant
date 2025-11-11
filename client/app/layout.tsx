// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Playfair_Display, Poppins, Open_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { navConfig } from '@/config/navigation';
import './globals.css';
import Footer from '@/components/Footer';

// Configure Google Fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'FoodExpress - Delicious Food Delivery & Takeaway',
  description: 'Order your favorite food online for delivery or pickup. Fast delivery, great deals!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} ${openSans.variable} ${inter.variable}`}>
      <body className={`font-sans antialiased`}>
        <Navbar
          companyName={navConfig.companyName}
          navItems={navConfig.navItems}
          className="sticky top-0 z-40"
        />
        
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}