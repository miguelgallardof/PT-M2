import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
/* import SearchBar from "./components/SearchBar.jsx"; */

const apiKey = process.env.REACT_APP_APIKEY;
// const apiKey = "90f7c2bedf587c897dc3c57796bae807";

function App() {
  const [cities, setCities] = useState([]);
  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const city = {
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
            humidity: recurso.main.humidity,
          };
          console.log(recurso);
          const exist = cities.find((c) => c.id === city.id);
          if (!exist) {
            setCities((oldCities) => [...oldCities, city]);
          } else {
            alert("Ciudad ya registrada");
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onClose(id) {
    setCities((previousState) =>
      previousState.filter((city) => city.id !== id)
    );
  }
  return (
    <div className="app">
      <header className="header">
        <Nav onSearch={onSearch} />
        {/* <SearchBar onSearch={onSearch} /> */}
      </header>

      <main className="main">
        <section className="mainCity">
          {cities.length ? (
            <Card
              max={cities[cities.length - 1].max}
              min={cities[cities.length - 1].min}
              name={cities[cities.length - 1].name}
              img={cities[cities.length - 1].img}
              wind={cities[cities.length - 1].wind}
              temp={cities[cities.length - 1].temp}
              humidity={cities[cities.length - 1].humidity}
              weather={cities[cities.length - 1].weather}
              main={true}
            />
          ) : (
            <span className="span">No hay ciudades</span>
          )}
        </section>
        <section className="mainCities">
          <Cards cities={cities} onClose={onClose} />
        </section>
      </main>
    </div>
  );
}

export default App;
