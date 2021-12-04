import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Sidebar from '../Components/Sidebar'
import Carousel from '../Components/Carousel'

export default function Home() {
  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar />
      <div className="text-2xl font-bold w-full h-full md:pl-80">
        <Carousel />
        <div className="bg-gray-800">
        <div className="grid-cols-3 p-10 space-y-2  lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
              <div className="w-full rounded">
                <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-img-6.jpg" alt="image" />
              </div>
              <div className="w-full col-span-2 row-span-2 rounded">
                <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-img-7.jpg" alt="image" />
              </div>
              <div className="w-full rounded">
                <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-img-8.jpg" alt="image" />
              </div>
              <div className="w-full rounded">
                <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-img-6.jpg" alt="image" />
              </div>
              <div className="w-full rounded">
                <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-img-8.jpg" alt="image" />
              </div>
              <div className="w-full rounded">
                <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-img-8.jpg" alt="image" />
              </div>
            </div>
        <div>Bảng giá</div>
        </div>
      </div>
    </div>
  );
}
