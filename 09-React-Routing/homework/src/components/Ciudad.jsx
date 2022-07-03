import React from "react";

const apiKey = "90f7c2bedf587c897dc3c57796bae807";

function Ciudad({ match }) {
  const id = match.params.id;
  const [city, setCity] = React.useState(undefined);

  React.useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCity(ciudad);
        } else {
          setCity(null);
        }
      });
  }, [id]);

  return city === undefined ? (
    <div>Cargando...</div>
  ) : city === null ? (
    //alert("Ciudad no encontrada")
    <div>Ciudad no encontrada</div>
  ) : (
    <div className="App">
      <div className="ciudad">
        <div className="container">
          <h2>{city.name}</h2>
          <div className="info">
            <div>Temperatura: {city.temp} ºC</div>
            <div>Clima: {city.weather}</div>
            <div>Viento: {city.wind} km/h</div>
            <div>Cantidad de nubes: {city.clouds}</div>
            <div>Latitud: {city.latitud}º</div>
            <div>Longitud: {city.longitud}º</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ciudad;

/* import React from "react";

function Ciudad({ city }) {
  return (
    <div className="ciudad">
      <div className="container">
        <h2>{city.name}</h2>
        <div className="info">
          <div>Temperatura: {city.temp} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>
      </div>
    </div>
  );
}

export default Ciudad; */

/* import React from "react";
import { useParams } from "react-router-dom";

export default function Ciudad({ city, onFilter }) {
  const params = useParams(); // match == > {params: {ciudadId: 1252025}}
  console.log(params);
  if (params.ciudadId) onFilter(params.ciudadId);
  return city ? (
    <div className="ciudad">
      <div className="container">
        <h2>{city.name}</h2>
        <div className="info">
          <div>Temperatura: {city.temp} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>
      </div>
    </div>
  ) : null;
} */
