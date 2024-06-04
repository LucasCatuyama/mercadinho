import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Componente que exibe um único produto
const CardWithImage = ({ product, incrementCount }) => {
  return (
    <div className="flex flex-col items-start gap-3 w-[283px] h-auto p-4 bg-card-bg-beige border-2 rounded-2xl border-dark-green text-text-green">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <h1 className="text-xl font-bold leading-7">{product.name}</h1>
      <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
      <p className="flex-grow">{product.description}</p>
      <button onClick={incrementCount} className="w-full px-3 py-4 bg-dark-green rounded-lg text-center text-base font-bold text-white mt-auto">
        Add
      </button>
    </div>
  );
};

export default CardWithImage;
