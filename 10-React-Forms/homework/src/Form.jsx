import React from "react";

export function validate(input) {
  let error = {};
  if (!input.username) {
    error.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    error.username = "Username is invalid";
  }
  if (!input.password) {
    error.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    error.password = "Password is invalid";
  }
  return error;
}

export default function Form() {
  const [input, setData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});

  function handleOnChange(e) {
    const { name, value } = e.target;
    const newData = {
      ...input, // copy the current data
      [name]: value,
    };
    setData(newData);
    setErrors(validate(newData));
  }

  function handleSubmit() {
    // POST al servidor --> body = estado input
  }

  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          className={errors.username ? "danger" : ""}
          autoComplete="off"
          type="text"
          name="username"
          value={input.username}
          onChange={handleOnChange}
        />
        {errors.username && <p className="danger">{errors.username}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          className={errors.password ? "danger" : ""}
          type="password"
          name="password"
          value={input.password}
          onChange={handleOnChange}
        />
        {errors.password && <p className="danger">{errors.password}</p>}
      </div>
      {/* {!errors.username && !errors.password ? <button onClick={handleSubmit}>Enviar</button> : ""} */}
      {!errors.username && !errors.password && (
        <button onClick={handleSubmit}>Enviar</button>
      )}
      {/* <button
        disable={errors.username || errors.password ? true : false}
        onClick={handleSubmit}
      > 
        Enviar
      </button>*/}
    </form>
  );
}
