import React from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import data, { Cairns } from "./data.js";

function App() {
  return (
    <div className="App">
      <header>
        <SearchBar onSearch={(ciudad) => alert(ciudad)} />
      </header>
      <main>
        <section>
          <Card
            max={Cairns.main.temp_max}
            min={Cairns.main.temp_min}
            name={Cairns.name}
            img={Cairns.weather[0].icon}
            onClose={() => alert(Cairns.name)}
          />
        </section>
        <section>
          <Cards cities={data} />
        </section>
      </main>
    </div>
  );
}

export default App;
