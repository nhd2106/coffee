import React from "react";
import groupBy from "lodash/groupBy";

import Card from '../components/card';


import { getAllProducts, getProductTypes } from "./api/index";

const Menu = ({ products, types }) => {
  return (
    <div className="text-2xl text-white font-bold w-full h-full md:pl-80 bg-gray-700">
      <div
        style={{
          backgroundImage:
            "url(https://www.tungcoffee.com//menu-title.jpeg)",
          height: 480,
          backgroundPosition: "center 0px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div
          style={{
            transform: "translate(-50%, -50%)",
          }}
          className="absolute top-1/2 left-1/2 text-white opacity-1 text-4xl "
        >
          Tùng Coffee Menu
        </div>
      </div>
      {products ? (
        <>
          {Object.entries(products).map(([type, productByTypes]) => {
            const typeName = types?.find(({ id }) => id === type).name;
            return (
              <div key={type}>
                <div className="flex flex-col items-center py-10 justify-center text-center">
                  <img
                    src="title-above.webp"
                    width="217px"
                    alt="tung-coffee"
                  />
                  <div className="lg:w-1/2 py-10">
                    <h2>{typeName}</h2>
                    <p className="text-sm"></p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center">
                  {
                    productByTypes.map((item, idx) => {
                      return <Card key={idx} {...item} />
                    })
                  }
                </div>
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export async function getStaticProps() {
  const products = groupBy(await getAllProducts(), "type.id");
  const types = await getProductTypes();
  return {
    props: {
      products,
      types,
    },
  };
}

export default Menu;
