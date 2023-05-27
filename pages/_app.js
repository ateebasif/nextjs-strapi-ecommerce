import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [reloadKey, setReloadKey] = useState(1);

  useEffect(() => {
    console.log("I am useeffect from app.js");
  }, []);

  const addToCart = (item, qty, price) => {
    console.log("Add to cart");
    let newCart = cart;
    for (let index = 0; index < qty; index++) {
      newCart.push([item, price]);
    }
    console.log("Add to cart", newCart);
    setCart(newCart);
    setReloadKey(Math.random());
  };

  const removeFromCart = (item, qty) => {
    let newCart = cart;
    let index = newCart.indexOf(item);
    newCart.splice(index);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar key={reloadKey} cart={cart} />
      <main className="container mx-auto">
        <Component
          cart={cart}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
          clearCart={clearCart}
          {...pageProps}
        />
      </main>
    </>
  );
}
