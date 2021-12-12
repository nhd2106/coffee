import React from 'react';
import { getProducts } from './api/index'

const Contact = ({ products }) => {
    return (
        <div className="text-2xl font-bold w-full h-full md:pl-80">
            <div style={{
                backgroundImage: 'url(https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/menu-title.jpg)',
                height: 480,
                backgroundPosition: 'center 0px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative'
            }}>
                <div style={{
                    transform: 'translate(-50%, -50%)'
                }} className="absolute top-1/2 left-1/2 text-white opacity-1 text-4xl ">
                Tùng Coffee Menu
                </div>
            </div>
            <div className="flex flex-col items-center py-10 justify-center text-center">
              <img
                src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-above.png"
                width="217px"
                alt="tung-coffee"
              />
              <div className="lg:w-1/2 py-10">
                <h2>Các món 1</h2>
                <p className="text-sm">
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-12" >
            <ul className="list-none md:col-span-6 sm:col-span-12">
                    {[0, 1, 2, 3, 4, 5].map((i) => {
                      const { name, avatar, description, price } = products[i];
                      return (
                        <li key={i}>
                          <div className="grid grid-cols-12 text-sm p-5">
                            <div className="col-span-2 flex justify-center h-12 w-12 sm:h-20 sm:w-20">
                              <img
                                src={avatar.url}
                                alt="cf"
                                className="rounded-circle"
                              />
                            </div>
                            <div className="col-span-10 self-center">
                              <div className="flex items-center">
                                <div>{name}</div>
                                <div
                                  style={{
                                    height: "3px",
                                    borderBottom: "1px dashed #939393",
                                    display: "table-cell",
                                    width: "90%",
                                    zIndex: 1,
                                    position: "relative",
                                    bottom: "9px",
                                    transform: "translate(0%, 400%)",
                                  }}
                                />
                                <p>
                                  {price.toLocaleString()}đ
                                </p>
                              </div>
                              <div>{description}</div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <ul className="list-none md:col-span-6 sm:col-span-12">
                    {[6, 7, 8, 9, 10, 11].map((i) => {
                      const { name, avatar, price, description } = products[i];
                      return (
                        <li key={i}>
                          <div className="grid grid-cols-12 text-sm p-5">
                            <div className="col-span-2 flex justify-center h-12 w-12 sm:h-20 sm:w-20">
                              <img
                                src={avatar.url}
                                alt="cf"
                                className="rounded-circle"
                              />
                            </div>
                            <div className="col-span-10 self-center">
                              <div className="flex items-center">
                                <div>{name}</div>
                                <div
                                  style={{
                                    height: "3px",
                                    borderBottom: "1px dashed #939393",
                                    display: "table-cell",
                                    width: "90%",
                                    zIndex: 1,
                                    position: "relative",
                                    bottom: "9px",
                                    transform: "translate(0%, 400%)",
                                  }}
                                />
                                <p>{price.toLocaleString()}đ</p>
                              </div>
                              <div>{description}</div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
            </div>
            <div className="flex flex-col items-center py-10 justify-center text-center">
              <img
                src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-above.png"
                width="217px"
                alt="tung-coffee"
              />
              <div className="lg:w-1/2 py-10">
                <h2>Các món 2</h2>
                <p className="text-sm">
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-12" >
            <ul className="list-none md:col-span-6 sm:col-span-12">
                    {[0, 1, 2, 3, 4, 5].map((i) => {
                      const { name, avatar, description, price } = products[i];
                      return (
                        <li key={i}>
                          <div className="grid grid-cols-12 text-sm p-5">
                            <div className="col-span-2 flex justify-center h-12 w-12 sm:h-20 sm:w-20">
                              <img
                                src={avatar.url}
                                alt="cf"
                                className="rounded-circle"
                              />
                            </div>
                            <div className="col-span-10 self-center">
                              <div className="flex items-center">
                                <div>{name}</div>
                                <div
                                  style={{
                                    height: "3px",
                                    borderBottom: "1px dashed #939393",
                                    display: "table-cell",
                                    width: "90%",
                                    zIndex: 1,
                                    position: "relative",
                                    bottom: "9px",
                                    transform: "translate(0%, 400%)",
                                  }}
                                />
                                <p>
                                  {price.toLocaleString()}đ
                                </p>
                              </div>
                              <div>{description}</div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <ul className="list-none md:col-span-6 sm:col-span-12">
                    {[6, 7, 8, 9, 10, 11].map((i) => {
                      const { name, avatar, price, description } = products[i];
                      return (
                        <li key={i}>
                          <div className="grid grid-cols-12 text-sm p-5">
                            <div className="col-span-2 flex justify-center h-12 w-12 sm:h-20 sm:w-20">
                              <img
                                src={avatar.url}
                                alt="cf"
                                className="rounded-circle"
                              />
                            </div>
                            <div className="col-span-10 self-center">
                              <div className="flex items-center">
                                <div>{name}</div>
                                <div
                                  style={{
                                    height: "3px",
                                    borderBottom: "1px dashed #939393",
                                    display: "table-cell",
                                    width: "90%",
                                    zIndex: 1,
                                    position: "relative",
                                    bottom: "9px",
                                    transform: "translate(0%, 400%)",
                                  }}
                                />
                                <p>{price.toLocaleString()}đ</p>
                              </div>
                              <div>{description}</div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const products = (await getProducts())?.productsCollection?.items;
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        products,
      },
    };
  }

export default Contact;
