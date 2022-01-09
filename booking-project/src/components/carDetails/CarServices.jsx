import React from "react";

import "../../styles/componentStyles/carServices.css";
import producto from "../../assets/producto.json";

const CarServices = ({features}) => {
  

  return (
    <section className="carServices">
      <div className="carServicesTittle">
        <h2>¿Qué ofrece este auto?</h2>
        <div className="line"></div>
      </div>
      <div className="carServicesIcons">
        {features.map(feature => {
          return (
            <p key={feature.id}>
              <i className={feature.icon}></i>
              {feature.name}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default CarServices;
