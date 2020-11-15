import React from "react";
const Welcome = (props) => {
  return (
    <div>
      <header>
        Hey !<h1>{props.name}</h1>
      </header>
      <h2>Welcome to Newton School.</h2>
    </div>
  );
};
export default Welcome;
