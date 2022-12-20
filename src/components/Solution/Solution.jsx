import React from "react";
import "./Solution.css";
import natija1 from "../../assets/img/natija1.png";
import natija2 from "../../assets/img/natija2.png";
import natija3 from "../../assets/img/person.png";

const Solution = () => {
  return (
    <div className="solution">
      <div className="container">
        <h2 className="solution-name">Muammolarga yechim</h2>
        <p className="solution-text">
          Kurs quyidagi <span>muammolarga</span> yechim topishda sizga{" "}
          <span>amaliy yordam</span> berishi mumkin.
        </p>
        <div className="solution-page">
          <div className="solution-list">
            <img src={natija1} alt="" className="solution-img" />
            <h3 className="solution-subname">Biznesda krizis</h3>
            <p className="solution-subtext">
              Biznesingiz bir joyda to‘xtab qolgani, rivojlanmayotgani sizni
              xavotirga solayaptimi?
            </p>
          </div>
          <div className="solution-list">
            <img src={natija2} alt="" className="solution-img" />
            <h3 className="solution-subname">Tartibsiz hayot </h3>
            <p className="solution-subtext">
            Hayotingizni tizimlashtiraolmayapsizmi, vaqtingizdan unumli foydalanolmayapsizmi
            </p>
          </div>
          <div className="solution-list">
            <img src={natija3} alt="" className="solution-img" />
            <h3 className="solution-subname">Munosabat</h3>
            <p className="solution-subtext">
            Biznesda (hamkor va xodimlar), oilada munosabatlarda muammoga duch kelayapsizmi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
