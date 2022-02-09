import Link from "next/link";

const Footer = (bg) => {
  return (
    <footer className="bg-black text-white w-full pb-8 text-2xl font-bold h-full md:pl-80">
        <div
        className="h-96"
        style={{
            backgroundImage: 'url(https://www.tungcoffee.com/bottom-img.jpeg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}></div>
        <div className="p-2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.953191221605!2d106.6227251152375!3d10.81489419229541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b6ad1daff1d%3A0xdd8388f13e973c0a!2sT%C3%99NG%20COFFEE!5e0!3m2!1sen!2s!4v1639318232515!5m2!1sen!2s" width="100%" height="400"  allowfullscreen="" loading="lazy"></iframe>
        </div>
      <div className="max-w-screen-xl mx-auto px-4 pt-8 md:flex md:justify-between items-center">
        <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between  flex-grow px-1">
          {[
            { title: "Trang chủ", slug: "/" },
            { title: "Về Chúng tôi", slug: "/about" },
            { title: "Menu", slug: "/menu" },
            { title: "Liên hệ", slug: "/contact" },
          ].map(({ title, slug }) => (
            <li className="my-2" key={slug}>
              <Link href={slug}>
                <a className="text-white hover:text-gray-200 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div>

        <div className="fb-page flex justify-center"
                data-href="https://www.facebook.com/tungcoffee4"
                data-width="350"
                data-hide-cover="false"
                data-show-facepile="true"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
