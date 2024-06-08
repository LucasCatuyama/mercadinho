import React from "react";
import { Link } from "gatsby";
import mercadinhoLogoVerde from "../images/mercadinho-logo-verde.png";
import cartIcon from "../images/cart.png";
import userIcon from "../images/user.png";

export default function Header({ totalQuantity }) {
  return (
    <div className="flex flex-row justify-between items-center gap-6 px-20 py-12">
      <Link to="/">
        <img src={mercadinhoLogoVerde} alt="Green logo of Mercadinho" />
      </Link>
      <form role="search">
        <input
          id="search"
          type="search"
          name="search"
          placeholder="Search..."
          aria-label="Search through site content"
          className="w-[700px] max-[1500px]:w-[500px] max-[1200px]:w-[300px] h-[42px] p-3 bg-card-bg-beige border-2 rounded-[20px] border-dark-green focus:outline-none focus:ring-1 focus:ring-dark-green custom-placeholder"
        />
      </form>

      <div className="flex flex-row gap-10">
        <p className="text-[32px]/[44.8px] text-center text-text-green font-bold">
          {totalQuantity}
        </p>
        <Link to="/cart">
          <img src={cartIcon} alt="Green cart icon." />
        </Link>
        <Link to="/login">
          <img src={userIcon} alt="Green user icon" />
        </Link>
      </div>
    </div>
  );
}
