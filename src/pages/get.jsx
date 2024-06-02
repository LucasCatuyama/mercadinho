import * as React from "react";
import { Link, navigate } from "gatsby";

const NotFoundPage = () => {
  const returnToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-card-bg-beige">
      <p className="text-9xl text-[#C05A21]">404</p>
      <p className="text-2xl text-[#C05A21]">Page under constraction</p>
      <button className="bg-[#C05A21] text-card-bg-beige px-4 py-3 rounded-xl text-xl mt-6" onClick={returnToHome}>Return to home</button>
    </div>
  )
}

export default NotFoundPage

export const Head = () => <title>404 Not found</title>
