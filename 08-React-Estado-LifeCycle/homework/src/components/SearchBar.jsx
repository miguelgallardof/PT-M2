import React from "react";
import { BiCustomize, BiMapAlt } from "react-icons/bi";
import s from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <form
      className={s.container}
      onSubmit={(e) => {
        e.preventDefault();
        const input = document.getElementById("inputCity");
        onSearch(input.value);
        input.value = "";
      }}
    >
      <BiMapAlt className={s.icon} />
      <input
        id="inputCity"
        className={s.input}
        type="text"
        placeholder="Ciudad..."
      />
      <button className={s.submit} type="submit" onClick={onSearch}>
        <BiCustomize />
      </button>
    </form>
  );
}
