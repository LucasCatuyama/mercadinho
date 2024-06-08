import React, { useState } from "react";
import Layout from "../layout/layout";
import axios from 'axios';

const Adm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const [productId, setProductId] = useState('');

  async function addProduct(product) {
    try {
      await axios.post("http://localhost:3000/products", product);
      alert("Product successfully added!");

      setName('');
      setPrice('');
      setDescription('');
      setImageUrl('');
      setError('');
    } catch (err) {
      setError('An error occurred while adding the product. Try it again.');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      name,
      price,
      description,
      imageUrl,
    };

    await addProduct(newProduct);
  }


  async function removeProduct (id) {
    try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        alert('Product successfully removed!');
        setProductId('');
        setError('');
    } catch (err) {
        setError('An error occurred while removing the product. Try it again.');
    }
  }

  async function handleRemove(e) {
    e.preventDefault();
    await removeProduct(productId);
  }

  return (
    <Layout>
      <div className="flex flex-row justify-center items-start gap-10 w-full h-screen">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[250px] h-auto p-6 bg-card-bg-beige border-2 border-dark-green rounded-2xl">
          <p className="text-2xl font-bold text-center text-dark-green">
            Add product
          </p>
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-1 bg-card-bg-beige border-2 border-dark-green rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price: </label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full pl-1 bg-card-bg-beige border-2 border-dark-green rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full pl-1 bg-card-bg-beige border-2 border-dark-green rounded"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="imageUrl">Image source: </label>
            <input
              type="text"
              name="image"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full pl-1 bg-card-bg-beige border-2 border-dark-green rounded"
              required
            />
          </div>
          <button type="submit" className="w-full h-auto px-3 py-2 bg-dark-green text-white text-xl font-bold rounded-lg">
            Add product
          </button>
        </form>

        <form onSubmit={handleRemove} className="flex flex-col gap-2 w-[250px] h-auto p-6 bg-card-bg-beige border-2 border-button-brown rounded-2xl">
          <p className="text-2xl font-bold text-center text-button-brown">
            Remove product
          </p>
          {error && <p className="text-red-500">{error}</p>}
          <label htmlFor="id">ID: </label>
          <input
            type="text"
            name='id'
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="w-full pl-1 bg-card-bg-beige border-2 border-button-brown rounded focus:border-2 focus:bo"
          />
          <button className="w-full h-auto px-3 py-2 bg-button-brown text-white text-xl font-bold rounded-lg">
            Remover product
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Adm;
