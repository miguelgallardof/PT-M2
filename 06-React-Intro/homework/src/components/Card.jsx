import React from "react";

/* export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div>
      <button onClick={onClose}>x</button>
      <h3>{name}</h3>
      <h5>Min</h5>
      <div>{min}</div>
      <h5>Max</h5>
      <div>{max}</div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
    </div>
  );
} */

// Con clase
class Card extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClose}>x</button>
        <h3>{this.props.name}</h3>
        <h5>Min</h5>
        <div>{this.props.min}</div>
        <h5>Max</h5>
        <div>{this.props.max}</div>
        <img
          src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`}
          alt=""
        />
      </div>
    );
  }
}

export default Card;
