import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="dir-rtl">
      
      
      <main>
        {children}
      </main>
    </div>
  );
}