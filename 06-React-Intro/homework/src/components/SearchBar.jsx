import React from "react";

/* export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div>
      <input type="search" placeholder="Ciudad..." />
      <button onClick={onSearch}>Agregar</button>
    </div>
  );
} */

//Con clase
class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input type="search" placeholder="Ciudad..." />
        <button onClick={this.props.onSearch}>Agregar</button>
      </div>
    );
  }
}

export default SearchBar;
