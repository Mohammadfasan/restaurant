// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { navConfig } from '@/config/navigation';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en">
      <body className={inter.className}>
        <Navbar
          companyName={navConfig.companyName}
          navItems={navConfig.navItems}
          className="sticky top-0 z-40"
        />
        <main>{children}</main>
      </body>
    </html>
  );
}