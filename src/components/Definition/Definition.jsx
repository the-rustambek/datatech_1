import React from "react";
import "./Definition.css";
import succes from "../../assets/img/succes.png";
import atmen from "../../assets/img/atmen.png";

const Definition = () => {
  return (
    <div className="definition">
      <div className="container">
        <h2 className="definition-name">Ta’riflar</h2>
        <div className="definition-page">
          <div className="definition-list">
            <h3 className="definition-subname">
              Korporativniy paket <br />
              (+3 qatnashuvchilar uchun)
            </h3>
            <span className="definition-span">
              <img src={succes} alt="" className="definition-icon" />
              <p className="definition-text">1 oylik kurs</p>
            </span>
            <span className="definition-span">
              <img src={succes} alt="" className="definition-icon" />
              <p className="definition-text">Tushlik va coffe break.</p>
            </span>
            <span className="definition-span">
              <img src={succes} alt="" className="definition-icon" />
              <p style={{ width: 180 }} className="definition-text">
                Konsalting va xodimlar uchun trening hizmatlariga 50% gacha
                chegirmalar
              </p>
            </span>
            <span className="definition-span">
              <img src={atmen} alt="" className="definition-icon" />
              <p className="definition-text texts">
                Biznesda baraka omillari” kitobi
              </p>
            </span>
            <span className="definition-span">
              <img src={atmen} alt="" className="definition-icon" />
              <p className="definition-text text">
                Konsalting va xodimlar uchun trening hizmatlariga 50% gacha
                chegirmalar
              </p>
            </span>

            <button className="definition-btn">Sotib olish</button>
          </div>
          <div className="definition-list">
            <h3 className="definition-subname">Standart paket</h3>
            <span className="definition-span">
              <img src={succes} alt="" className="definition-icon" />
              <p className="definition-text">1 oylik kurs</p>
            </span>
            <span className="definition-span">
              <img src={succes} alt="" className="definition-icon" />
              <p className="definition-text">Tushlik va coffe break.</p>
            </span>
            <span className="definition-span">
              <img src={succes} alt="" className="definition-icon" />
              <p style={{ width: 180 }} className="definition-text">
                Konsalting va xodimlar uchun trening hizmatlariga 50% gacha
                chegirmalar
              </p>
            </span>
            <span className="definition-span">
              <img src={atmen} alt="" className="definition-icon" />
              <p className="definition-text texts">
                Biznesda baraka omillari” kitobi
              </p>
            </span>
            <span className="definition-span">
              <img src={atmen} alt="" className="definition-icon" />
              <p className="definition-text text">
                Konsalting va xodimlar uchun trening hizmatlariga 50% gacha
                chegirmalar
              </p>
            </span>

            <button className="definition-btn">Sotib olish</button>
          </div>
          <div className="definition-list">
            <h3 className="definition-subname">Premium paket</h3>
            <span className="definition-span">
              <img src={succes} alt="" className="definition-icon" />
              <p className="definition-text">1 oylik kurs</p>
            </span>
            <span className="definition-span">
              <img src={succes} alt="" className="definition-icon" />
              <p className="definition-text">Tushlik va coffe break.</p>
            </span>
            <span className="definition-span">
              <img src={succes} alt="" className="definition-icon" />
              <p style={{ width: 180 }} className="definition-text">
                Konsalting va xodimlar uchun trening hizmatlariga 50% gacha
                chegirmalar
              </p>
            </span>
            <span className="definition-span">
              <img src={atmen} alt="" className="definition-icon" />
              <p className="definition-text texts">
                Biznesda baraka omillari” kitobi
              </p>
            </span>
            <span className="definition-span">
              <img src={atmen} alt="" className="definition-icon" />
              <p className="definition-text text">
                Konsalting va xodimlar uchun trening hizmatlariga 50% gacha
                chegirmalar
              </p>
            </span>

            <button className="definition-btn">Sotib olish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Definition;
