import Slider from "react-slick";
import "../../assets/styles/home.css";
import { IoSearch } from "react-icons/io5";
import { RiMenuSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

//   <a href="https://ibb.co/Rk1mpFtZ"><img src="https://i.ibb.co/bMxZg0Yq/slide1.jpg" alt="slide1" border="0"></a>
// <a href="https://ibb.co/hJyM4x10"><img src="https://i.ibb.co/ycXRZmB2/slide2.jpg" alt="slide2" border="0"></a>
// <a href="https://ibb.co/84P1Qb0Y"><img src="https://i.ibb.co/BKT0YGtn/slide3.jpg" alt="slide3" border="0"></a>
  const slides = [
    {
      title: "Epic Gaming Deals",
      desc: "Discover unbeatable offers on gaming gear, consoles, accessories, and more. Level up your gaming setup with exclusive discounts!",
      url: "",
      className: "bg-[url('https://i.ibb.co/bMxZg0Yq/slide1.jpg')]",
    },
    {
      title: "Latest Game Releases",
      desc: "Get your hands on the hottest new game titles! Pre-order and receive special bonuses like in-game items or exclusive content.",
      url: "",
      className: "bg-[url('https://i.ibb.co/ycXRZmB2/slide2.jpg')]",
    },
    {
      title: "Gaming Accessories",
      desc: "From controllers to headsets, find the best gaming accessories to enhance your experience. Shop now for free shipping on select items!",
      url: "",
      className: "bg-[url('https://i.ibb.co/BKT0YGtn/slide3.jpg')]",
    },
  ];

  return (
    <main className="bg-[var(--color-bg)] overflow-hidden">
      <div className="mx-auto w-full">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`flex justify-center relative items-center min-h-[700px] lg:h-[90vh] text-[var(--color-text)] shadow-lg bg-cover bg-center ${slide.className}`}
            >
              <div className="main-slider-content absolute w-full h-full bg-gray-900/60 flex justify-center items-center">
                {/* <div className={`text-center p-6 md:p-12 lg:p-16`}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl text-white mb-6 leading-relaxed">
                    {slide.desc}
                  </p>
                  <Link
                    to={slide.url}
                    className="mt-4 text-lg bg-[var(--color-accent)] text-[var(--color-white)] py-3 px-6 rounded hover:bg-[var(--color-accent-alt)] transition duration-300"
                  >
                    Shop Now
                  </Link>
                </div> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
}
