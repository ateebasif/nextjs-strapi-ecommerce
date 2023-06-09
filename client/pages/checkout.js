import React, { useEffect, useState } from "react";

import { createOrder } from "@/apiServices/index";

const Checkout = (props) => {
  const { cart } = props;
  const [subtotal, setSubtotal] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    let myTotal = 0;
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      myTotal = myTotal + cart[index][1];
    }
    setSubtotal(myTotal);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    let orderId = "OID" + Math.floor(1000000 * Math.random());
    //  let url = `${process.env.NEXT_PUBLIC_STRAPI_URL} + "/api/orders/pretransaction`;
    // let url = `http://localhost:1337/api/orders/pretransaction`;
    // const rawResponse = await fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     orderid: orderId,
    //     amount: subtotal,
    //     ...form,
    //     cart: cart,
    //   }),
    // });
    // const content = await rawResponse.json();

    const data = {
      orderid: orderId,
      amount: subtotal,
      ...form,
      cart: cart,
    };

    try {
      const res = await createOrder(data);
      console.log("create order res", res);

      // ! need to make a request here to update the order in db that will redirce the user and update order info
      // ctx.redirect("http://localhost:1337/api/orders/posttransaction");
    } catch (error) {
      console.log("create order axios error", error);
    }
  };

  return (
    <div>
      <section className="body-font relative text-black">
        <div className="container mx-auto min-h-screen px-5 py-24">
          <div className="mb-12 flex w-full flex-col">
            <h1 className="title-font mb-4 text-2xl font-medium text-black sm:text-3xl">
              Checkout
            </h1>
            <h2 className="text-2xl font-medium">Cart</h2>
            <div className="cart">
              {cart.length
                ? `Your cart details are as follows:`
                : `Your cart is empty!`}
            </div>
            <ul className="list-decimal px-8">
              {cart.map((item, index) => {
                return (
                  <li key={item[0] + index}>
                    Product {item[0]} with a price of ${item[1]}
                  </li>
                );
              })}
            </ul>
            <div className="font-bold">Subtotal: {subtotal}</div>
          </div>
          <div className=" ">
            <div className="-m-2 flex flex-wrap">
              <div className="w-1/2  p-2 ">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    onChange={handleChange}
                    value={form?.name}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2  ">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    onChange={handleChange}
                    value={form?.email}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2  ">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Phone
                  </label>
                  <input
                    onChange={handleChange}
                    value={form?.phone}
                    type="phone"
                    id="phone"
                    name="phone"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    htmlFor="address"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Address
                  </label>
                  <textarea
                    onChange={handleChange}
                    value={form?.address}
                    id="address"
                    name="address"
                    className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  ></textarea>
                </div>
              </div>
              <div className="w-full p-2">
                <button
                  onClick={submit}
                  className="flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
