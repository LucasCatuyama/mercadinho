import React from "react";
import MercadinhoLogoVerde from "../images/mercadinho-logo-verde.png";
import Email from "../images/email.png";
import Key from "../images/key.png";

const LoginCard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20 w-[466px] h-auto py-14 bg-card-bg-beige rounded-[20px]">
      <div>
        <img src={MercadinhoLogoVerde} alt="Logo of Mercadinho" />
        <p className="mt-4 text-2xl/[33.6px] text-dark-green text-center">
          Login
        </p>
      </div>

      <div className="flex flex-col gap-y-11 w-full px-12 ">
        <div className="flex flex-row justify-between pb-2 border-b-2 border-dark-green">
          <label className="text-2xl/[33.6px] font-bold text-dark-green">
            Email
          </label>
          <input type="email" required className="bg-transparent outline-none border-0"/>
          <img src={Email} alt="" />
        </div>


        <div className="flex flex-row justify-between pb-2 border-b-2 border-dark-green">
          <label className="text-2xl/[33.6px] font-bold text-dark-green ">
            Senha
          </label>
          <input type="text" required className="bg-transparent outline-none border-0"/>
          <img src={Key} alt="" />
        </div>

        <p className="text-base/[22.4px] text-dark-green text-right mt-[-30px]">
          Esqueceu a senha? <span className="underline">Clique aqui</span>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <button className="w-[290px] h-[63px] px-4 py-3 bg-dark-green text-white text-2xl font-bold rounded-lg">
          Entrar
        </button>
        <p>Ou</p>
        <button className="w-[290px] h-[63px] px-4 py-3 bg-card-bg-beige text-dark-green text-2xl font-bold border-[3px] border-dark-green rounded-lg">
          Criar cadastro
        </button>
      </div>
    </div>
  );
};

export default LoginCard;
