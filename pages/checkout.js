import Header from "../components/Header";
import UserCart from "../components/UserCart";
import ProductFeedCard from "../components/ProductFeedCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectItems, selectTotal } from "../app/reducers/basketReducer";
const Checkout = ({ userCart }) => {
  const products = useSelector(selectItems);
  const total = useSelector(selectTotal);
  return (
    <div>
      <Header />
      <main className="lg:flex max-w-screen-2xl m-auto">
        <section className="mt-4">
          <img
            src="https://links.papareact.com/ikj"
            className="md:col-span-full"
            alt=""
          />
          <div className="bg-white px-3 py-4">
            <h1 className="text-2xl font-bold border-b pb-3">
              Shopping Basket
            </h1>
            {products?.map((product,i) => (
          
                <ProductFeedCard key={i} isCheckout  product={product} />
            ))}
           <div className="text-center bg-white p-4 shadow-lg">
           <div>
                {total>0?'Total : '+total:'Cart is empty'}
            </div>
            <div>
                {products.length>0?'Product length : '+products.length:''}
            </div>
           </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Checkout;
