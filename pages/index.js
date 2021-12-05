import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "../components/sidebar";
import Carousel from "../components/carousel";

export default function Home() {
  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar />
      <div className="text-2xl font-bold w-full h-full md:pl-80">
        <Carousel />
        <div className="bg-gray-700 text-white pb-20">
          <div className="flex flex-col items-center py-10 justify-center text-center">
            <img
              src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-above.png"
              width="217px"
              alt="tung-coffee"
            />
            <div className="lg:w-1/2 py-10">
              <h2>ABOUT ROBUSTA</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur doloremque rem eveniet at, odio explicabo adipisci,
                libero deleniti corrupti fugiat dolorem eius exercitationem
                consequuntur earum, molestiae maiores architecto? Veritatis,
                sequi!
              </p>
            </div>
          </div>
          <div className="grid-cols-3 p-5 space-y-2  lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
            <div className="w-full rounded hover:bg-gray-400  transition duration-200 ease-in">
              <img
                src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-img-6.jpg"
                alt="image1"
              />
            </div>
            <div className="w-full col-span-2 row-span-2 rounded">
              <img
                src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-img-7.jpg"
                alt="image2"
              />
            </div>
            <div className="w-full rounded">
              <img
                src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-img-8.jpg"
                alt="image3"
              />
            </div>
            <div className="w-full rounded">
              <img
                src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-img-6.jpg"
                alt="image4"
              />
            </div>
            <div className="w-full rounded">
              <img
                src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-img-8.jpg"
                alt="image5"
              />
            </div>
            <div className="w-full rounded">
              <img
                src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-img-8.jpg"
                alt="image6"
              />
            </div>
          </div>
          <div className="">
            <div className="text-center">
              <h2>Bảng giá</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
            <div>
              <div className='grid md:grid-cols-12'>
                <ul className="list-none md:col-span-6 sm:col-span-12">
                {
                    [1, 2, 3, 4, 5, 6].map((i) => (
                      <li key={i}>
                    <div className="grid grid-cols-12 text-sm p-5">
                      <div className="col-span-2 flex justify-center">
                        <img
                          src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png"
                          alt="cf"
                        />
                      </div>
                      <div className="col-span-10 self-center">
                        <div className="flex items-center">
                          <div>CAFE LATTE</div>
                          <div
                            style={{
                              height: "3px",
                              borderBottom: "1px dashed #939393",
                              display: "table-cell",
                              width: "98%",
                              zIndex: 1,
                              position: "relative",
                              bottom: "9px",
                            }}
                          />
                          <p>$3.45</p>
                        </div>
                        <div>Fresh Brewed coffee and steamed milk</div>
                      </div>
                    </div>
                  </li>
                    ))
                  }
                </ul>
                <ul className="list-none md:col-span-6 sm:col-span-12">
                  {
                    [1, 2, 3, 4, 5, 6].map((i) => (
                      <li key={i}>
                    <div className="grid grid-cols-12 text-sm p-5">
                      <div className="col-span-2 flex justify-center">
                        <img
                          src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png"
                          alt="cf"
                        />
                      </div>
                      <div className="col-span-10 self-center">
                        <div className="flex items-center">
                          <div>CAFE LATTE</div>
                          <div
                            style={{
                              height: "3px",
                              borderBottom: "1px dashed #939393",
                              display: "table-cell",
                              width: "98%",
                              zIndex: 1,
                              position: "relative",
                              bottom: "9px",
                            }}
                          />
                          <p>$3.45</p>
                        </div>
                        <div>Fresh Brewed coffee and steamed milk</div>
                      </div>
                    </div>
                  </li>
                    ))
                  }
                </ul>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
