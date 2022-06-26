import React from "react";
import s from "./Card.module.css";

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div className={s.container}>
      <button className={s.btnClose} onClick={onClose}>
        x
      </button>
      <h3 className={s.header}>{name}</h3>
      <div className={s.grid}>
        <div>
          <h5 className={s.label}>Min</h5>
          <span className={s.value}>{min}</span>
        </div>
        <div>
          <h5 className={s.label}>Max</h5>
          <span className={s.value}>{max}</span>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      </div>
    </div>
  );
}
