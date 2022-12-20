import React from "react";
import "./Accordion.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

const Accordions = () => {
  return (
    <div className="accordions">
      <div className="container">
        <h2 className="accordion-name">Kurs ichidagi modullar</h2>
        <p className="accordion-text">
          Kouching kursida jami <span>6ta modul</span> mavjud, har{" "}
          <span>eng zarur</span> va <span>foydali</span>
          bo‘lgan mavzularni qamrab olgan!
        </p>
        <div className="accordion-list">
          <Accordion>
            <AccordionItem style={{width:550}}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span className="accordion-span">01</span>
                  <h4 className="accordion-subname">HR tizimini yaratish</h4>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="accordion-texts">
                  • Kompaniyaning missiyasi, qadriyatlari va <br />maqsadlari;
                  <h5>
                    • HR rejalash (Kompaniyaga kerak bo’ladigan xodimlar sonini
                    aniqlash);
                  </h5>
                  <h5>
                    • Ishga olishda samarali usullar (Intervyu, testlar, keys
                    savollap va boshqalar);
                  </h5>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem style={{width:550}}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span className="accordion-span">02</span>
                  <h4 className="accordion-subname">HR tizimini yaratish</h4>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="accordion-texts">
                  • Kompaniyaning missiyasi, qadriyatlari va <br />maqsadlari;
                  <h5>
                    • HR rejalash (Kompaniyaga kerak bo’ladigan xodimlar sonini
                    aniqlash);
                  </h5>
                  <h5>
                    • Ishga olishda samarali usullar (Intervyu, testlar, keys
                    savollap va boshqalar);
                  </h5>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem style={{width:550}}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span className="accordion-span">03</span>
                  <h4 className="accordion-subname">HR tizimini yaratish</h4>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="accordion-texts">
                  • Kompaniyaning missiyasi, qadriyatlari va <br />maqsadlari;
                  <h5>
                    • HR rejalash (Kompaniyaga kerak bo’ladigan xodimlar sonini
                    aniqlash);
                  </h5>
                  <h5>
                    • Ishga olishda samarali usullar (Intervyu, testlar, keys
                    savollap va boshqalar);
                  </h5>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem style={{width:550}}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span className="accordion-span">04</span>
                  <h4 className="accordion-subname">HR tizimini yaratish</h4>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="accordion-texts">
                  • Kompaniyaning missiyasi, qadriyatlari va <br />maqsadlari;
                  <h5>
                    • HR rejalash (Kompaniyaga kerak bo’ladigan xodimlar sonini
                    aniqlash);
                  </h5>
                  <h5>
                    • Ishga olishda samarali usullar (Intervyu, testlar, keys
                    savollap va boshqalar);
                  </h5>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem style={{width:550}}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span className="accordion-span">05</span>
                  <h4 className="accordion-subname">HR tizimini yaratish</h4>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="accordion-texts">
                  • Kompaniyaning missiyasi, qadriyatlari va <br />maqsadlari;
                  <h5>
                    • HR rejalash (Kompaniyaga kerak bo’ladigan xodimlar sonini
                    aniqlash);
                  </h5>
                  <h5>
                    • Ishga olishda samarali usullar (Intervyu, testlar, keys
                    savollap va boshqalar);
                  </h5>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem style={{width:550}}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span className="accordion-span">06</span>
                  <h4 className="accordion-subname">HR tizimini yaratish</h4>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="accordion-texts">
                  • Kompaniyaning missiyasi, qadriyatlari va <br />maqsadlari;
                  <h5>
                    • HR rejalash (Kompaniyaga kerak bo’ladigan xodimlar sonini
                    aniqlash);
                  </h5>
                  <h5>
                    • Ishga olishda samarali usullar (Intervyu, testlar, keys
                    savollap va boshqalar);
                  </h5>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Accordions;
