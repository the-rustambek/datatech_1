import React from "react";
import "./Student.css";
import { Swiper, SwiperSlide } from "swiper/react";
import person from "../../assets/img/persons.png";
import star from '../../assets/img/star.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const Student = () => {
  return (
    <div className="student">
      <div className="container">
        <h2 className="student-name">O’quvchilarimiz fikri</h2>
        <p className="student-text">
          Bu yerda o‘quvchilarimizning <span>samimiy </span>
          <span>fikrlari</span> bilan tanishishingiz mumkin.
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="student-list">
              <img src={person} alt="" className="student-img" />
              <div className="student-item">
                <h3 className="student-subname">Muhammadfotih </h3>
                <p className="student-texts">
                  Qadriyatlarga asoslangan biznesni boshqarish bir oylik
                  kouching kursi men uchun judayam foydali kurs bo’ldi. Bu kurs
                  mentori Kozimxon To’rayevdan Alloh rozi bo’lsin!
                </p>
                <img src={star} alt="" className="student-logo" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="student-list">
              <img src={person} alt="" className="student-img" />
              <div className="student-item">
                <h3 className="student-subname">Muhammadfotih </h3>
                <p className="student-texts">
                  Qadriyatlarga asoslangan biznesni boshqarish bir oylik
                  kouching kursi men uchun judayam foydali kurs bo’ldi. Bu kurs
                  mentori Kozimxon To’rayevdan Alloh rozi bo’lsin!
                </p>
                <img src={star} alt="" className="student-logo" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="student-list">
              <img src={person} alt="" className="student-img" />
              <div className="student-item">
                <h3 className="student-subname">Muhammadfotih </h3>
                <p className="student-texts">
                  Qadriyatlarga asoslangan biznesni boshqarish bir oylik
                  kouching kursi men uchun judayam foydali kurs bo’ldi. Bu kurs
                  mentori Kozimxon To’rayevdan Alloh rozi bo’lsin!
                </p>
                <img src={star} alt="" className="student-logo" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="student-list">
              <img src={person} alt="" className="student-img" />
              <div className="student-item">
                <h3 className="student-subname">Muhammadfotih </h3>
                <p className="student-texts">
                  Qadriyatlarga asoslangan biznesni boshqarish bir oylik
                  kouching kursi men uchun judayam foydali kurs bo’ldi. Bu kurs
                  mentori Kozimxon To’rayevdan Alloh rozi bo’lsin!
                </p>
                <img src={star} alt="" className="student-logo" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="student-list">
              <img src={person} alt="" className="student-img" />
              <div className="student-item">
                <h3 className="student-subname">Muhammadfotih </h3>
                <p className="student-texts">
                  Qadriyatlarga asoslangan biznesni boshqarish bir oylik
                  kouching kursi men uchun judayam foydali kurs bo’ldi. Bu kurs
                  mentori Kozimxon To’rayevdan Alloh rozi bo’lsin!
                </p>
                <img src={star} alt="" className="student-logo" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Student;
