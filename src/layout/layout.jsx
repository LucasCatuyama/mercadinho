import React from 'react';
import Header from './header'; // Ensure the Header component is correctly imported
import Footer from './footer';

export default function Layout({ children, totalQuantity }) {
  return (
    <div className="bg-bg-beige">
      <Header totalQuantity={totalQuantity} />
      {children}
      <Footer />
    </div>
  );
}
