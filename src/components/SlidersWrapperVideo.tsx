import { Swiper } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import React from "react";
import useSwiper from "../hooks/useSwiper";

SwiperCore.use([Navigation, Pagination]);

const SlidersWrapper = ({ children }: { children: React.ReactNode }) => {
  const { prevEl, nextEl, paginationRef, setPrevEl, setNextEl } = useSwiper();
  return (
    <>
      <div className="swiper-wrapper js-collection-assets">
        <Swiper
          loop
          centeredSlides
          scrollbar={{ draggable: true }}
          slidesPerView="auto"
          spaceBetween={0}
          touchStartForcePreventDefault
          navigation={{ prevEl: prevEl, nextEl: nextEl }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
        >
          {children}
        </Swiper>
      </div>
      <div
        className="swiper-controls"
        style={{
          paddingTop: "-20px",
        }}
      >
        <div ref={(node) => setPrevEl(node)} className="swiper-button-prev" style={{
            alignSelf: "end",
          }}>
          <span className="swiper-arrow"></span>
        </div>
        <div ref={paginationRef} className="swiper-pagination"></div>
        <div ref={(node) => setNextEl(node)} className="swiper-button-next" style={{
            alignSelf: "end",
          }}>
          <span className="swiper-arrow"></span>
        </div>
      </div>
    </>
  );
};

export default SlidersWrapper;
