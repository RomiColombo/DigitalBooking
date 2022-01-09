import React from "react";

import "../../styles/componentStyles/carDescription.css";

const CarDescription = (props) => {
  return (
    <section className="carDescription">
      <h2> {props.productName}</h2>
      <p>{props.description}</p>
    </section>
  );
};

export default CarDescription;
