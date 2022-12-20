import React from "react";
import "./Footer.css";
import footers from "../../assets/img/footer.png";
import check from "../../assets/img/check.png";
import logo from '../../assets/img/logo.png'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <img src={footers} alt="" className="footer-img" />
          <div className="footer-list">
            <h3 className="footer-name">Kozimxon To’rayev kim?</h3>
            <p className="footer-text">
              <img src={check} alt="" className="footer-logo" />
              Kozimxon Turaev xalkaro tajribaga ega biznes trener va konsultant
              boʼlib, АQSh, Yaponiya va Yevropada taʼlim olgan.
            </p>
            <p className="footer-text">
              <img src={check} alt="" className="footer-logo" />
              Procter & Gamble distribyutorlik kompaniyasida HR Menedjer
              lavozimida ishlagan.
            </p>
            <p className="footer-text">
              <img src={check} alt="" className="footer-logo" />
              2012 – 2018 yillarda Saudiya Arabistonida joylashgan Islom
              Taraqqiyot Bankida avval HR bo‘limida, so‘ngra Investisiya
              bo‘limida faoliyat olib borgan.
            </p>
            <p className="footer-text">
              <img src={check} alt="" className="footer-logo" />
              Xozirda IsBF kompaniyasining asoschilaridan biri va ko‘plab
              kompaniyalar, banklar va tadbirkorlarga Islom Moliyasi, HR va
              Biznesda Baraka Omillari mavzularida trening va konsalting
              hizmatlarini ko‘rsatib kelmoqda.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
            <img src={logo} alt="" className="footer-icon" />
            <div className="footer-title">
                <h4>A'loqa</h4>
                <p>Email: kozimxonturaev8@gmail.com</p>
            </div>
            <div className="footer-title">
                <h4>Ijtimoiy tarmoqlar</h4>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
