import React from "react";
import Card from "./Card.jsx";
import s from "./Cards.module.css";

/* export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  if (cities) {
    return (
      <div className={s.container}>
        {cities.map((c) => (
          <Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={onClose}
            id={c.id}
          />
        ))}
      </div>
    );
  } else {
    return <div>Sin ciudades</div>;
  }
} */

export default function Cards({ cities, onClose }) {
  return (
    <div className={s.container}>
      {cities?.map((c) => (
        <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          humidity={c.humidity}
          temp={c.temp}
          wind={c.wind}
          weather={c.weather}
          onClose={() => onClose(c.id)}
        />
      ))}
    </div>
  );
}
