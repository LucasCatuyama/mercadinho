import React from "react";
import { Link } from "gatsby";
import mercadinhoLogoVerde from "../images/mercadinho-logo-verde.png";
import cartIcon from "../images/cart.png";
import userIcon from "../images/user.png";

const Header = () => {
  return (
    <div className="flex flex-row justify-items-center items-center gap-6 px-20 py-12">
      <Link to="/">
        <img src={mercadinhoLogoVerde} alt="Green logo of Mercadinho" />
      </Link>
      <form action="get" role="search">
        <input
          id="search"
          type="search"
          name="search"
          placeholder="Search..."
          className="w-[714px] h-[42px] p-3 bg-card-bg-beige border-2 rounded-[20px] border-dark-green focus:outline-none focus:ring-1 focus:ring-dark-green custom-placeholder"
        />
      </form>
      <p className="text-[32px]/[44.8px] text-center text-[#004D3D] font-bold">
        0
      </p>
      <Link to="/">
        <img src={cartIcon} alt="Green cart icon." />
      </Link>
      <Link to="/login">
        <img src={userIcon} alt="Green user icon" />
      </Link>
    </div>
  );
};

export default Header;
