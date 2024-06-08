import React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import mercadinhoLogoVerde from "../images/mercadinho-logo-verde.png";
import cartIcon from "../images/cart.png";
import userIcon from "../images/user.png";

export default function Header() {
    
  const currentUrl = useLocation();

  function alreadyLogged() {
    const admUrl = "/adm";
    if (currentUrl.pathname === admUrl) {
      alert("You are already logged in");
    }
  }

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
        <p className="text-[32px]/[44.8px] text-center text-[#004D3D] font-bold">
          Número
        </p>
        <Link to="/404">
          <img src={cartIcon} alt="Green cart icon." />
        </Link>
        <Link onClick={alreadyLogged} to="/login">
          <img src={userIcon} alt="Green user icon" />
        </Link>
      </div>
    </div>
  );
}
