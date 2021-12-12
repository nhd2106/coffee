import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import OuterDetect from '../outerDetect.js'

const SideBar = () => {
    const [mobilesidebar, setMobileSiderbar] = useState('-translate-x-full');
    return (
       <>
         <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        <Link href="/">
          <a className="block p-4 font-bold">Tùng Coffee</a>
        </Link>
        <OuterDetect func={() => setMobileSiderbar('-translate-x-full')}>
        <button onClick={() => setMobileSiderbar((prev) => prev==='' ? '-translate-x-full' : '')} className="p-4 focus:outline-none  focus:bg-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        </OuterDetect>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/header-vertical.jpg)",
        }}
        className={`w-80 space-y-6 py-7 px-4 absolute z-20  inset-y-0 left-0 transform md:fixed top-0 md:translate-x-0 transition duration-200 ease-in-out ${mobilesidebar}`}
      >
        {/* logo */}
        <Link href="/">
          <a className="px-4 flex items-center space-x-2">
            <Image src="/coffee.svg" width={50} height={50} color="white" />
            <span className="text-2xl font-extrabold">Tùng Coffee</span>
          </a>
        </Link>
        {/* nave */}
        <nav>
          <Link href="/">
          <a className="block py-2.5 px-4 hover:bg-red-300 duration-200 rounded">
            Trang chủ
          </a>
          </Link>
          <Link href="/menu">
          <a className="block py-2.5 px-4 hover:bg-red-300 duration-200 rounded">
            Menu
          </a> 
          </Link>
          <Link href="/blog">
          <a className="block py-2.5 px-4 hover:bg-red-300 duration-200 rounded">
            Blog
          </a>
          </Link>
          <Link href="/contact">
          <a className="block py-2.5 px-4 hover:bg-red-300 duration-200 rounded">
            Liên hệ
          </a>
          </Link>
          <a  href="https://www.facebook.com/tungcoffee4" target="_blank" className="flex py-2.5 px-4 ">
              <Image src="/facebook.svg" width={20} height={20}/>
              <span className="mx-2">Fanpage</span>
            </a>
        </nav>
        {/* <div className="absolute top-0 bg-gray-400 opacity-40" style={{ width: '100vw', height:'100vh'}}></div> */}
      </div>
       </>
    )
}

export default SideBar
