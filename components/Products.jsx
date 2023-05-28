import React from "react";
import Link from "next/link";

import { cn } from "@/utils/index";

const Products = (props) => {
  const { products } = props;
  return (
    <div>
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 md:py-24">
          <div className="flex w-full flex-wrap md:mb-20">
            <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
              <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
                Product List - MyShop
              </h1>
              <div className="h-1 w-20 rounded bg-indigo-500"></div>
            </div>
          </div>

          <div className="-m-4 flex flex-wrap">
            {products.map((product) => (
              <div key={product.id} className="p-4 md:w-1/2 xl:w-1/4">
                <div className="rounded-lg bg-gray-100 p-6">
                  <img
                    className="mx-auto mb-6 h-96 rounded "
                    src={`http://localhost:1337${product?.attributes?.image?.data?.attributes?.url}`}
                    alt="content"
                  />
                  <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                    {product.attributes.category}
                  </h3>
                  <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                    {product?.attributes?.title}
                  </h2>
                  <button
                    className={cn(
                      "ml-1 h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none",
                      `bg-${product.attributes.color}-800`
                    )}
                  ></button>
                  <p className="text-base leading-relaxed">
                    {product?.attributes?.productDescription.slice(0, 100)}
                  </p>
                  <div className="hidden bg-blue-800 bg-green-800 bg-red-800"></div>
                  <Link href={`/product/${product.attributes?.slug}`}>
                    <button className="my-2 rounded border-0 bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 focus:outline-none">
                      But Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
