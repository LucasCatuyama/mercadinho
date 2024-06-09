import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CardWithImage from "../components/CardWithImage";
import Layout from "../layout/layout";

export const Head = () => <title>Mercadinho</title>;

export default function IndexPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState({});
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });

    axios
      .get("http://localhost:3000/cart")
      .then((response) => {
        setCart(response.data);
        calculateTotalQuantity(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the cart items!", error);
      });
  }, []);

  useEffect(() => {
    calculateTotalQuantity(cart);
  }, [cart]);

  const calculateTotalQuantity = (cartItems) => {
    const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(total);
  };

  async function handleAddToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);

      try {
        await axios.put(`http://localhost:3000/cart/${existingProduct.id}`, {
          ...existingProduct,
          quantity: existingProduct.quantity + 1
        });
        setErrors((prevErrors) => ({ ...prevErrors, [product.id]: '' }));
        setSuccess((prevSuccess) => ({ ...prevSuccess, [product.id]: 'Product added!' }));
        setTimeout(() => {
          setSuccess((prevSuccess) => ({ ...prevSuccess, [product.id]: '' }));
        }, 500);
      } catch (err) {
        setErrors((prevErrors) => ({ ...prevErrors, [product.id]: 'An error occurred while updating the item quantity. Try again.' }));
        setTimeout(() => {
          setErrors((prevErrors) => ({ ...prevErrors, [product.id]: '' }));
        }, 1500);
      }
    } else {
      const newCartItem = {
        id: product.id,
        quantity: 1,
        ...product
      };

      try {
        await axios.post('http://localhost:3000/cart', newCartItem);
        setCart([...cart, newCartItem]);
        setErrors((prevErrors) => ({ ...prevErrors, [product.id]: '' }));
        setSuccess((prevSuccess) => ({ ...prevSuccess, [product.id]: 'Product added!' }));
        setTimeout(() => {
          setSuccess((prevSuccess) => ({ ...prevSuccess, [product.id]: '' }));
        }, 500);
      } catch (err) {
        setErrors((prevErrors) => ({ ...prevErrors, [product.id]: 'An error occurred while adding the item to the cart. Try again.' }));
        setTimeout(() => {
          setErrors((prevErrors) => ({ ...prevErrors, [product.id]: '' }));
        }, 1500);
      }
    }
  }

  return (
    <Layout totalQuantity={totalQuantity}>
      <div className="grid justify-items-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-20">
        {products.map((product) => (
          <CardWithImage
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            errorMessage={errors[product.id]}
            successMessage={success[product.id]}
          />
        ))}
      </div>
    </Layout>
  );
}
