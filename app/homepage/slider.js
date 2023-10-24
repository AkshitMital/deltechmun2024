"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
//import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";
const cards = [
  {
    img: "/img/heroCrousel/Conference.jpg",
    title: "DELTECH MUN 2024",
  },
  {
    img: "/img/heroCrousel/polaroid.jpg",
    title: "Model United nations conference",
  },
];

const Slider = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center flex-col mb-16">
        <div className="max-w-[100%] ">
          {/* Swiper container */}
          <Swiper
            modules={[FreeMode, Navigation, Pagination, Autoplay]}
            loop={true}
            // pagination={{ clickable: true }}
            grabCursor={true}
            autoplay={{
              delay: 5000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
            }}
            freeMode={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            
          >
            {cards.map((card, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center  ">
                    <div
                      className="flex flex-col justify-center items-center  relative text-white bg-white transform transition-all duration-150
    hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] h-screen w-full overflow-hidden cursor-pointer"
                    >
                      <Image
                        className="blur-sm bg-black fixed "
                        fill
                        priority={true}
                        src={card.img}
                        alt="sponsor"
                      />

                      <div className="relative flex flex-col gap-3 w-full h-full bg-blue-800/40 items-center justify-center">
                        <h1 className=" text-center font-serif  text-white md:text-7xl text-4xl font-bold uppercase pt-8">
                          {card?.title}
                        </h1>
                        {card?.title == "DELTECH MUN 2024" ? (
                          <Link
                            href="https://app.deltechmun.in/"
                            className="pt-10"
                          >
                            <span class="relative">
                              <div className=" border font-merriweather tracking-wider text-md w-fit px-[60px] py-[15px] rounded-xl text-[#FFF] text-[18px] font-semibold mb-2 transition-all duration-500 bg-gradient-to-tl from-[#1341EC] via-[#5CA0F2] to-[#142e8a] bg-size-200 bg-pos-100 hover:bg-pos-0">
                                Register
                              </div>
                            </span>
                          </Link>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="swiper-button-next m-5 hidden w-0 overflow-hidden  p-8 rounded-full "></div>

          <div className="swiper-button-prev m-5 hidden   p-8 rounded-full"></div>
        </div>
      </div>
      {/* <div className="swiper-pagination pt-20"></div> */}
    </div>
  );
};

export default Slider;
