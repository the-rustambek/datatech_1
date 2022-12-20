import React from "react";
import "./Aside.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import Iframe from "react-iframe";

const Aside = () => {
  return (
    <div className="aside">
      <div className="container">
        <h2 className="aside-name">Treningdan lavhalar</h2>
        <p className="aside-text">
          Bu yerda <span>Kozimxon Turayev</span> bilan bo’lgan{" "}
          <span>treningdan</span> lavhalarni ko’rishingiz mumkin
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Zra33_gCgxQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Zra33_gCgxQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Zra33_gCgxQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Zra33_gCgxQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Zra33_gCgxQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Zra33_gCgxQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Aside;
