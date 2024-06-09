import React from 'react';
import Header from './header';
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
