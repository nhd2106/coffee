import 'tailwindcss/tailwind.css'
import 'react-awesome-slider/dist/styles.css';
import '../styles.scss';
import Router from "next/router";
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';



function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    setIsLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setIsLoading(false);
  });
  useEffect(() => {
    { isLoading ? Notiflix?.Loading?.pulse() : Notiflix?.Loading?.remove(789)  }
  }, [isLoading])
  return <>
    <Component {...pageProps} />
  </>
}

export default MyApp
