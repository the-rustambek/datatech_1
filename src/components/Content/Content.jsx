import React from "react";
import "./Content.css";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import img4 from "../../assets/img/img4.png";

const Content = () => {
  return (
    <div className="content">
      <div className="container">
        <h2 className="content-name">Kursimiz kimlar uchun?</h2>
        <p className="content-text">
          Quyida keltirilgan sabablarni o‘zingizda ko‘rsangiz, bilingki, kurs
          aynan <span>siz uchun!</span>
        </p>
        <div className="content-page">
          <div className="content-list">
            <div className="content-item">
              <span className="content-span">
                <img src={img1} alt="" className="content-img" />
              </span>
              <h4 className="content-subname">Biznes egasi bo’lganlar uchun</h4>
            </div>
            <p className="content-texts">
              Islomiy qadriyatlarga asoslangan holda biznesini boshqarmoqchi
              bo’lgan biznes egalari
            </p>
          </div>
          <div className="content-list">
            <div className="content-item">
              <span className="content-span">
                <img src={img2} alt="" className="content-img" />
              </span>
              <h4 className="content-subname">Savdoni oshimoqchi bo’lganlar uchun</h4>
            </div>
            <p className="content-texts">
            Servis tizimini rivojlantirish orqali savdoni oshirmoqchi bo’lgan tadbirkorlar
            </p>
          </div>
          <div className="content-list">
            <div className="content-item">
              <span className="content-span">
                <img src={img4} alt="" className="content-img" />
              </span>
              <h4 className="content-subname">Bo’lajak Tadbirkorlar uchun</h4>
            </div>
            <p className="content-texts">
            Sherikchilikda ish yuritayotgan tadbirkorlar
            </p>
          </div>
          <div className="content-list">
            <div className="content-item">
              <span className="content-span">
                <img src={img3} alt="" className="content-img" />
              </span>
              <h4 className="content-subname">Sotuvda muammosi borlar uchun</h4>
            </div>
            <p className="content-texts">
            Sotuv bilan muammolarga duch kelayotgan barcha yosh tadbirkorlar uchun
            </p>
          </div>
          <div className="content-list">
            <div className="content-item">
              <span className="content-span">
                <img src={img1} alt="" className="content-img" />
              </span>
              <h4 className="content-subname">O‘rta va yuqori biznesmenlar uchun</h4>
            </div>
            <p className="content-texts">
            O‘rta va yuqori biznes bilan shug‘ullanadigan biznes egalari uchun
            </p>
          </div>
          <div className="content-list">
            <div className="content-item">
              <span className="content-span">
                <img src={img2} alt="" className="content-img" />
              </span>
              <h4 className="content-subname">Biznesi rivojlantirmoqchilar </h4>
            </div>
            <p className="content-texts">
            O’zi hozirda biznes yuritayotgan va biznesini rivojlantirmoqchi bo’lganlar uchun bu kurs foydali.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
