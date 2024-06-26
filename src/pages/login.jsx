import React, { useState } from "react";
import LeafImage from "../images/folha.png";
import { Link, navigate } from "gatsby";
import MercadinhoLogoVerde from "../images/mercadinho-logo-verde.png";
import Email from "../images/email.png";
import Key from "../images/key.png";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function admLogin(e) {
    e.preventDefault();
    if (login === "adm@adm.com" && password === "123") {
      navigate("/adm");
    } else {
      setError("Incorrect username or password");
    }
  }

  return (
    <div
      className="w-screen h-screen flex justify-center items-center bg-dark-green relative"
      style={{
        backgroundImage: `url(${LeafImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-dark-green opacity-50"></div>
      <div className="relative z-10">
        <form
          onSubmit={admLogin}
          className="flex flex-col justify-center items-center gap-20 w-[466px] h-auto py-10  bg-card-bg-beige rounded-[20px]"
        >
          <div>
            <Link to="/">
              <img src={MercadinhoLogoVerde} alt="Logo of Mercadinho" />
            </Link>
            <p className="mt-4 text-2xl/[33.6px] text-dark-green text-center">
              Login
            </p>
          </div>

          <div className="flex flex-col gap-y-11 w-full px-12 ">
            <div className="flex flex-row justify-between pb-2 border-b-2 border-dark-green">
              <label className="text-2xl/[33.6px] font-bold text-dark-green">
                Email
              </label>
              <input
                type="email"
                required
                className="bg-transparent outline-none border-0"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <img src={Email} alt="" />
            </div>

            <div className="flex flex-row justify-between pb-2 border-b-2 border-dark-green">
              <label className="text-2xl/[33.6px] font-bold text-dark-green ">
                Password
              </label>
              <input
                type="password"
                required
                className="bg-transparent outline-none border-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img src={Key} alt="" />
            </div>

            <p className="text-base/[22.4px] text-dark-green text-right mt-[-30px]">
              Forgot your password?{" "}
              <span className="underline">
                <Link to="/404">Click here</Link>
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button className="w-[290px] h-[63px] px-4 py-3 bg-dark-green text-white text-2xl font-bold rounded-lg">
              Login
            </button>
            <p>Ou</p>
            <Link
              to="/cadastro"
              className="w-[290px] h-[63px] px-4 py-3 bg-card-bg-beige text-dark-green text-2xl text-center font-bold border-[3px] border-dark-green rounded-lg"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
