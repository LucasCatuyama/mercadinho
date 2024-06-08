import React from 'react';

const CardWithImage = ({ product, onAddToCart, errorMessage, successMessage }) => {
  const price = Number(product.price);

  return (
    <div className="flex flex-col items-start gap-3 h-auto p-4 bg-card-bg-beige border-2 rounded-2xl border-dark-green text-text-green">
      <img src={product.imageUrl} alt={product.name} className="w-full h-fit" />
      <h1 className="text-xl font-bold leading-7">{product.name}</h1>
      <p className="text-lg font-semibold">${price.toFixed(2)}</p>
      <p className="flex-grow">{product.description}</p>
      <button onClick={() => onAddToCart(product)} className="w-full px-3 py-4 bg-dark-green rounded-lg text-center text-base font-bold text-white mt-auto">
        Add
      </button>
      {errorMessage && <p className="w-full text-red-500 text-xs italic-normal text-center">{errorMessage}</p>}
      {successMessage && <p className="w-full text-dark-green text-xl/normal text-center italic">{successMessage}</p>}
    </div>
  );
};

export default CardWithImage;
