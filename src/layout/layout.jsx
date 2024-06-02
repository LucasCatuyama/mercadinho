import React, { useState } from "react";
import Header from "../layout/header";
import Main from "../layout/main";
import Footer from "../layout/footer";

const Layout = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-bg-beige">
      <Header count={count} incrementCount={incrementCount} />
      <Main incrementCount={incrementCount} />
      <Footer />
    </div>
  );
};

export default Layout;
