import React from "react";
import { BiExit } from "react-icons/bi";
import s from "./Card.module.css";

export default function Card({ max, min, name, img, onClose, main }) {
  // acá va tu código
  return (
    <div className={[s.container, main ? s.mainCard : ""].join(" ")}>
      <button className={s.btnClose} onClick={onClose}>
        <BiExit />
      </button>
      <h3 className={s.name}>{name}</h3>
      <section className={s.grid}>
        <div>
          <h5 className={s.label}>Min</h5>
          <span className={s.value}>{min}</span>
        </div>
        <div>
          <h5 className={s.label}>Max</h5>
          <span className={s.value}>{max}</span>
        </div>
        <img
          className={s.img}
          src={`http://openweathermap.org/img/wn/${img}@${main ? 4 : 2}x.png`}
          alt=""
        />
      </section>
    </div>
  );
}
