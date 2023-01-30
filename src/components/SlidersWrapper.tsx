import { Swiper } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import React from "react";

SwiperCore.use([Autoplay]);

const SlidersWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="swiper-wrapper">
        <Swiper
          loop
          centeredSlides
          slidesPerView="auto"
          spaceBetween={0}
          updateOnImagesReady
          preloadImages
          touchStartForcePreventDefault
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {children}
        </Swiper>
      </div>
    </>
  );
};

export default SlidersWrapper;
