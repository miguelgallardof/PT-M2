import React from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";

const apiKey = process.env.REACT_APP_APIKEY;

function App() {
  const [cities, setCities] = React.useState([]);

  function onSearch(ciudad) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
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
          };

          const exist = cities.find((c) => c.id === city.id);
          if (!exist) {
            setCities((oldCities) => {
              return [...oldCities, city];
            });
          } else {
            alert("Ciudad ya registrada");
          }
        } /* else {
          alert("Ciudad no encontrada");
        } */
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  return (
    <div className="app">
      <header className="header">
        <SearchBar onSearch={(ciudad) => onSearch(ciudad)} />
      </header>
      <main className="main">
        <section className="mainCity">
          {cities.length ? (
            <Card
              max={cities[cities.length - 1].max}
              min={cities[cities.length - 1].min}
              name={cities[cities.length - 1].name}
              img={cities[cities.length - 1].img}
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
