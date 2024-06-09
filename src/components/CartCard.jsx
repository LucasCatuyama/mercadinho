import React from "react";

const CartCard = ({ cart }) => {
  const price = Number(cart.price);
  const quantity = Number(cart.quantity);

  return (
    <div className="flex flex-row justify-between py-4 border-b border-dark-green"> 
      <div>
        <img src={cart.imageUrl} alt={cart.name} className="w-[235px]"/>
      </div>
      <div className="flex flex-col gap-4 max-w-[250px]">
        <h3 className="text-xl/[28px] font-bold ">{cart.name}</h3>
        <p>{cart.description}</p>
        <div className="flex flex-row gap-20">
          <p>Qtd: {cart.quantity}</p>
          <button className="w-[112px] h-6 text-base/[22.4px] text-center text-[#004D3D] border border-[#004D3D] rounded-lg">
            Remover
          </button>
        </div>
      </div>
      <div>
        <p className="text-xl/[28px] font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartCard;
