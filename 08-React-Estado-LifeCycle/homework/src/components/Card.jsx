import React from "react";
import { BiExit } from "react-icons/bi";
import s from "./Card.module.css";

export default function Card({
  max,
  min,
  name,
  img,
  wind,
  humidity,
  temp,
  weather,
  onClose,
  main,
}) {
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
          <span className={s.value}>{min}º</span>
        </div>
        <div>
          <h5 className={s.label}>Max</h5>
          <span className={s.value}>{max}º</span>
        </div>
        <div>
          <h5 className={s.label}>Humedad</h5>
          <span className={s.value}>{humidity}º</span>
        </div>
        <div>
          <h5 className={s.label}>Temperatura</h5>
          <span className={s.value}>{temp}º</span>
        </div>
        <div>
          <h5 className={s.label}>Viento</h5>
          <span className={s.value}>{wind} km/h</span>
        </div>

        <div>
          <h5 className={s.label}>Clima</h5>
          <span className={s.value}>{weather}</span>
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
