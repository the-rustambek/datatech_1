import React from "react";
import "./Section.css";
import section from "../../assets/img/section.png";
import check from "../../assets/img/check.png";

const Section = () => {
  return (
    <div className="section">
      <div className="container">
        <img src={section} alt="" className="section-img" />
        <div className="section-list">
          <h2 className="section-name">Dars o’tish metodi</h2>
          <span className="section-span">
            <img src={check} alt="" className="section-icon" />
            <p className="section-subname">Online va offline</p>
          </span>
          <span className="section-span">
            <img src={check} alt="" className="section-icon" />
            <p className="section-subname">1 oylik kurs</p>
          </span>
          <span className="section-span">
            <img src={check} alt="" className="section-icon" />
            <p className="section-subname">Tushlik va coffe break</p>
          </span>
          <span className="section-span">
            <img src={check} alt="" className="section-icon" />
            <p className="section-subname">
              Darslarning videolari 1 oy davomida ko‘rish imkoniyati
            </p>
          </span>
          <span className="section-span">
            <img src={check} alt="" className="section-icon" />
            <p className="section-subname">“Biznesda baraka omillari” kitobi</p>
          </span>
          <p className="section-subname">
            Konsalting va xodimlar uchun trening <br /> hizmatlariga 50% gacha
            chegirmalar
          </p>
          <button className="section-btn">Kursga yozilish →</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
