import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../layout/layout";
import CartCard from "../components/CartCard";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart({ totalQuantity }) {
  const [cart, setCart] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [error, setError] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_CART_API_URL || "http://localhost:3000/cart")
      .then((response) => {
        setCart(response.data);
        calculateTotals(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products within the cart!", error);
        setError("There was an error fetching the cart. Please try again later.");
      });
  }, []);

  const calculateTotals = (items) => {
    const newSubtotal = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const newTotal = newSubtotal;
    setSubtotal(newSubtotal);
    setTotal(newTotal);
  };

  const handlePaymentMethodClick = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleRemoveFromCart = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_CART_API_URL || "http://localhost:3000"}/cart/${id}`);
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
      calculateTotals(updatedCart); // Recalculate totals after removing an item
      toast.success("Product removed!");
      setError("");
    } catch (error) {
      console.error("An error occurred while removing the product:", error);
      setError("An error occurred while removing the product. Try it again.");
      toast.error("An error occurred while removing the product. Try it again.");
    }
  };

  const purchasedSuccessfully = async () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty.");
    } else {
      toast.success("Purchase successful!");
      setTimeout(async () => {
        try {
          await axios.delete(process.env.REACT_APP_CART_API_URL || "http://localhost:3000/cart");
          setCart([]);
          setSubtotal(0);
          setTotal(0);
          setError("");
        } catch (error) {
          toast.error("An error occurred while emptying the cart. Please try again.");
          console.error("There was an error emptying the cart:", error);
        }
      }, 6000); 
    }
  };

  return (
    <Layout totalQuantity={totalQuantity}>
      <div className="flex flex-row justify-around pt-16 pb-11 text-text-green">
        <ToastContainer />
        {error && <p className="text-red-500">{error}</p>}
        <div className="p-10 bg-card-bg-beige border-2 border-dark-green rounded-[20px]">
          <h1 className="pb-2 text-4xl/[50.4px] font-bold border-b border-dark-green">
            Complete the purchase
          </h1>
          <div className="flex flex-row gap-[86px] py-4 border-b border-dark-green">
            <div>
              <h2 className="text-xl/[28px] font-bold">Delivery address</h2>
            </div>
            <div className="text-base/[22.4px]">
              <p>FULL NAME</p>
              <p>STREET, NUMBER</p>
              <p>APARTMENT</p>
              <p>NEIGHBORHOOD</p>
              <p>CITY - STATE</p>
              <p>ZIP CODE</p>
            </div>
          </div>
          <div className="flex flex-row gap-14 py-4 border-b border-dark-green">
            <h2 className="text-xl/[28px] font-bold">Payment method</h2>
            <div className="flex flex-row gap-4">
              <button
                className={`w-[140px] py-3 px-4 text-center rounded-xl text-white text-base/[22.4px] font-bold ${
                  selectedPaymentMethod === "Credit Card" ? "bg-orange-700 ring-2 ring-orange-400" : "bg-button-brown"
                } hover:bg-orange-700 focus:outline-none`}
                onClick={() => handlePaymentMethodClick("Credit Card")}
              >
                Credit Card
              </button>
              <button
                className={`w-[165px] py-3 px-4 text-center rounded-xl text-white text-base/[22.4px] font-bold ${
                  selectedPaymentMethod === "PayPal" ? "bg-orange-700 ring-2 ring-orange-400" : "bg-button-brown"
                } hover:bg-orange-700 focus:outline-none`}
                onClick={() => handlePaymentMethodClick("PayPal")}
              >
                PayPal
              </button>
              <button
                className={`w-[112px] py-3 px-4 text-center rounded-xl text-white text-base/[22.4px] font-bold ${
                  selectedPaymentMethod === "Apple Pay" ? "bg-orange-700 ring-2 ring-orange-400" : "bg-button-brown"
                } hover:bg-orange-700 focus:outline-none`}
                onClick={() => handlePaymentMethodClick("Apple Pay")}
              >
                Apple Pay
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-between gap-14 py-4 border-b border-dark-green">
            <h2 className="text-xl/[28px] font-bold">Review items</h2>
            <p>Price</p>
          </div>

          <div className="">
            {cart.map((item) => (
              <CartCard key={item.id} cart={item} handleRemoveFromCart={handleRemoveFromCart} />
            ))}
          </div>

          <div className="flex flex-row justify-end text-xl/[28px]">
            <p>Subtotal: </p>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 h-fit p-9 bg-card-bg-beige border-2 border-dark-green rounded-[20px] text-text-green">
          <p className="text-2xl">
            Order total: <span className="font-bold">${total.toFixed(2)}</span>
          </p>
          <button
            onClick={purchasedSuccessfully}
            className="w-[235px] h-auto px-3 py-4 bg-dark-green rounded-lg text-center text-base/[22.4px] text-white font-bold hover:bg-green-900 focus:outline-none"
          >
            Complete order
          </button>
        </div>
      </div>
    </Layout>
  );
}
