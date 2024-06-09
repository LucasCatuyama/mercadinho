import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../layout/layout";
import CartCard from "../components/CartCard";

export default function Cart({ totalQuantity }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cart")
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the products within the cart!",
          error
        );
      });
  });

  return (
    <Layout totalQuantity={totalQuantity}>

      <div className="flex flex-row justify-around pt-16 pb-11 text-text-green">
        <div className="p-10 bg-card-bg-beige border-2 border-dark-green rounded-[20px]">
          <h1 className="pb-2 text-4xl/[50.4px] font-bold border-b  border-dark-green">
            Finalizar a compra
          </h1>
          <div className="flex flex-row gap-[86px] py-4 border-b border-dark-green">
            <div>
              <h2 className="text-xl/[28px] font-bold ">Endereço de entrega</h2>
            </div>
            <div className="text-base/[22.4px]">
              <p>NOME COMPLETO</p>
              <p>LOGRADOURO, NÚMERO</p>
              <p>COMPLEMENTO</p>
              <p>BAIRRO</p>
              <p>CIDADE - ESTADO</p>
              <p>CEP</p>
            </div>
          </div>
          <div className="flex flex-row gap-14 py-4 border-b border-dark-green">
            <h2 className="text-xl/[28px] font-bold ">Método de pagamento</h2>
            <div className="flex flex-row gap-4">
              <button className="w-[140px] py-3 px-4 text-center rounded-xl bg-button-brown text-white text-base/[22.4px] font-bold">
                PIX
              </button>
              <button className="w-[165px] py-3 px-4 text-center rounded-xl bg-button-brown text-white text-base/[22.4px] font-bold">
                Cartão de crédito
              </button>
              <button className="w-[112px] py-3 px-4 text-center rounded-xl bg-button-brown text-white text-base/[22.4px] font-bold">
                Boleto
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-between gap-14 py-4 border-b border-dark-green">
            <h2 className="text-xl/[28px] font-bold ">Revisar itens</h2>
            <p>Preço</p>
          </div>

          <div className="">
            {cart.map((item) => (
                <CartCard 
                key={item.id}
                cart={item}
                />
            ))}
          </div>

          <div className="flex flex-row justify-end text-xl/[28px]">
            <p>Subtotal: </p>
            <span className="font-bold">R$00,00</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 h-fit p-9 bg-card-bg-beige border-2 border-dark-green rounded-[20px] text-text-green">
          <p className="text-2xl">
            Total do pedido: <span className="font-bold">R$00,00</span>
          </p>
          <button className="w-[235px] h-auto px-3 py-4 bg-dark-green rounded-lg text-center text-base/[22.4px] text-white font-bold">
            Finalizar pedido
          </button>
        </div>
      </div>
    </Layout>
  );
}
