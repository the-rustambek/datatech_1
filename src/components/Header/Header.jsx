import React from "react";
import "./Header.css";
import player from '../../assets/img/play.png'
import kozim from '../../assets/img/kozim.png'
import text from '../../assets/img/text.png'


const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-left">
          <h2 className="header-name">
            Qadriyatlarga asoslangan biznesni boshqarish bir oylik <span>kouching </span>
            dasturi
          </h2>
          <div className="header-top">
              <button className="header-btn">Kursga yozilish →</button>
              <button className="header-player">
                  <img src={player} alt="" className="header-img" />
                  Kurs haqida video
              </button>
          </div>
        </div>
        <div className="header-right">
            <img src={kozim} alt="" className="header-pic" />
            <img src={text} alt="" className="header-logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
