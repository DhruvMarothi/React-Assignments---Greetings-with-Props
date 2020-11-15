import React from "react";
const Welcome = (props) => {
  return (
    <div>
      <header>
        <h1>Hey!{props.name}</h1>
      </header>
      <h2>Welcome to Newton School.</h2>
    </div>
  );
};
export default Welcome;
