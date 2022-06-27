import React from "react";
import Card from "./Card";
import s from "./Cards.module.css";

export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={s.container}>
      {cities?.map((c) => (
        <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        />
      ))}
    </div>
  );
}
