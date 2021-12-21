
import Router from "next/router";
import Head from "next/head";
import Notiflix from "notiflix";
import { useEffect, useState } from "react";
import { DefaultSeo } from "next-seo";
import { useRouter } from 'next/router';

import "tailwindcss/tailwind.css";
import "react-awesome-slider/dist/styles.css";
import "../styles.scss";
import SEO from "../next-seo.config";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Snowfall from 'react-snowfall';



function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const [is_visible, setIs_visible] = useState(false);

  const { asPath } = useRouter();

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIs_visible(true);
    } else {
      setIs_visible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  Router.events.on("routeChangeStart", () => {
    setIsLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setIsLoading(false);
  });
  useEffect(() => {
    {
      isLoading ? Notiflix?.Loading?.pulse() : Notiflix?.Loading?.remove(789);
    }
    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    });
  }, [isLoading]);
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
          <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v10.0" nonce="ywbB34Xn"></script>
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js"></script>
        </Head>
      <div className="relative min-h-screen md:flex">
        <Sidebar />

        <Snowfall style={{ zIndex: 19 }} snowflakeCount={500} />
        <Component {...pageProps} />
        {is_visible ? (
          <button
            style={{
              position: "fixed",
              bottom: "14%",
              right: "1rem",
              boxShadow: "none",
              outline: "none",
              borderRadius: "50% 50%",
              height: "2.5rem",
              width: "2.5rem",
              minWidth: "unset",
              zIndex: 10,
            }}
            type="button"
            onClick={scrollToTop}
            class="py-2 px-4 flex justify-center items-center  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.67 64"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M19.57.78.78,19.5a2.67,2.67,0,0,0,3.77,3.78L18.67,9.21V61.33a2.67,2.67,0,1,0,5.33,0V9L38.11,23.27a2.67,2.67,0,1,0,3.78-3.76L23.35.79a2.67,2.67,0,0,0-3.78,0Z"/></g></g></svg>
          </button>
        ) : null}
      </div>
      { asPath!== '/contact' && <Footer/> }
    </>
  );
}

export default MyApp;
