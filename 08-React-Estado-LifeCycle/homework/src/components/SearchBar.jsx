import React, { useState } from "react";
import { BiCustomize, BiMapAlt } from "react-icons/bi";
import s from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [city, setCity] = useState("");
  function handleInputChange(e) {
    setCity(e.target.value);
  }
  return (
    <form
      className={s.container}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <BiMapAlt className={s.icon} />
      <input
        id="inputCity"
        className={s.input}
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={handleInputChange}
      />
      <button autofocus className={s.submit} type="submit">
        <BiCustomize />
      </button>
    </form>
  );
}
