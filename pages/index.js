import Carousel from "../components/carousel";
import { NextSeo } from "next-seo";

import { getFeatureProducts, getProducts } from "./api/index";

function Home({ products }) {
  return (
    <>
      <NextSeo title="Trang chủ" />
      
      <div className="text-base font-bold w-full h-full md:pl-80">
          <Carousel />
          <div className="bg-gray-700 text-white pb-20">
            <div className="flex flex-col items-center py-10 justify-center text-center">
              <img
                src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-above.png"
                width="217px"
                alt="tung-coffee"
              />
              <div className="lg:w-1/2 py-10">
                <h2 className="text-2xl">ABOUT ROBUSTA</h2>
                <p className="py-4">
                Cà phê Robusta hay còn được gọi là cà phê vối với vị đắng đặc trưng.
                Loại cà phê này được phát hiện đầu tiên vào những năm 1800 tại Congo- Bỉ.
                Sau đó, dần dần giống cà phê này phát triển và được đưa vào các nước Đông Nam Á trong khoảng năm 1900.
                Cho đến hiện nay, Cà phê Robusta đã trở thành loại cây quan trọng thứ hai,
                chiếm khoảng 39% các sản phẩm cà phê được sử dụng và được đánh giá là loại được xuất khẩu cao nhất tại Việt Nam.
                Cà phê Robusta hay còn có tên là cà phê vối hay Coffea Canephora.
                Đây là loại cà phê có hàm lượng caffein chiếm từ 3% đến 4% ở hạt, cao hơn nhiều so với loại cà phê Arabica (cà phê chè) chỉ chiếm từ 1% đến 2%.
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
            <div>
              <div className="text-center">
                <h2 className="text-2xl">Bảng giá</h2>
                <p>
                  Dưới đây là Menu một số thức uống nổi bật của quán. Để xem đầy đủ các món, mời bạn vào danh mục Menu của Tùng Coffe nhé!.
                </p>
              </div>
              <div>
                <div className="grid md:grid-cols-12">
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
                <div></div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export async function getStaticProps() {
  const products = (await getFeatureProducts())?.productsCollection?.items;
  return {
    props: {
      products,
    },
  };
}

export default Home;
