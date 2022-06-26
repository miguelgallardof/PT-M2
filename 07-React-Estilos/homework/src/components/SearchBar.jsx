import React from "react";
import s from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div className={s.container}>
      <input className={s.input} type="search" placeholder="Ciudad..." />
      <button className={s.btnSearch} onClick={onSearch}>
        Agregar
      </button>
    </div>
  );
}
