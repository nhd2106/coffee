import React from 'react'

const Card = ({
    name,
    price,
    url,
    avatar,
    description
}) => {
    return (
      <>
        <div className="flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-red-400 rounded-lg max-w-xs shadow-lg hidden sm:block">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
          >
            <rect
              x="159.52"
              y={175}
              width={152}
              height={152}
              rx={8}
              transform="rotate(-45 159.52 175)"
              fill="#f3c06b"
            ></rect>
            <rect
              y="107.48"
              width={152}
              height={152}
              rx={8}
              transform="rotate(-45 0 107.48)"
              fill="#f3c06b"
            ></rect>
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
            <picture
              style={{
                width: 200,
                height: 300,
              }}
            >
              {/* <source
              srcSet="https://www.tailwind-kit.com/images/object/5.webp"
            />
            <source srcSet="https://www.tailwind-kit.com/images/object/5.webp" /> */}
              <img
                className="relative w-full h-full"
                src={avatar?.url ?? ""}
                alt="shopping item"
                style={{
                  objectFit: "cover",
                }}
              />
            </picture>
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            {/* <span className="block opacity-75 -mb-1">Indoor</span> */}
            <div className="flex flex-col justify-end	">
              <span className="block font-semibold text-sm self-end md:text-xl">
                {name || ""}
              </span>
              <span className="bg-white rounded-full text-yellow-500 text-xs font-bold px-3 py-2 leading-none flex justify-end">
                {price.toLocaleString()} đ
              </span>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="flex bg-red-400 text-white mx-2 my-2 dark:bg-gray-800 rounded-lg shadow sm:hidden">
          <div className="flex-none w-24 md:w-48  relative">
            <img
             src={avatar?.url ?? ""}
              alt={name}
              className="absolute rounded-lg inset-0 w-full h-full object-cover"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap text-base">
              <h2 className="flex-auto font-semibold dark:text-gray-50">
                {name  || ""}
              </h2>
              <div className="font-semibold text-white dark:text-gray-300">
              {price.toLocaleString()} đ
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb dark:text-gray-300">
              <a
                href="#"
                className="ml-auto hidden md:block text-sdark:text-gray-300 underline"
              >
                Size Guide
              </a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300 invisible">
              Free shipping on all continental US orders.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {description}
            </p>
          </form>
        </div>
      </>
    );
}

export default Card
