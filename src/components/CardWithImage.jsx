import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Componente que exibe um único produto
const CardWithImage = ({ product }) => {
  return (
    <div className="flex flex-col items-start gap-3 w-[283px] h-auto p-4 bg-card-bg-beige border-2 rounded-2xl border-dark-green text-text-green">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <h1 className="text-xl font-bold leading-7">{product.name}</h1>
      <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button className="w-full px-3 py-4 bg-dark-green rounded-lg text-center text-base font-bold text-white">
        Add
      </button>
    </div>
  );
};

// Componente que exibe a lista de produtos
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => {
        console.log(response.data); // Adicionado para depurar os dados recebidos
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div className="grid justify-items-center gap-4 gap-y-[56px] grid-cols-4">
      {products.map(product => (
        <CardWithImage key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
