import React from "react";
import { BiCustomize, BiMapAlt } from "react-icons/bi";
import s from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div className={s.container}>
      <BiMapAlt className={s.icon} />
      <input className={s.input} type="search" placeholder="Ciudad..." />
      <button className={s.submit} type="submit" onClick={onSearch}>
        <BiCustomize />
      </button>
    </div>
  );
}
