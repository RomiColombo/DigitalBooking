import React from "react";

import { ButtonLink } from "../button/ButtonLink";

const Card = ({ id, category, title, location, description, images, features }) => {

  return (
    <>
      <div className="card">
        <div className="card-logo">
          <i className="fas fa-heart favorite"></i>
          <img src={images} alt={title} className="carModel" />
        </div>
        <div className="card-content">
          <div>
            <h4 className="carCategory">{category}</h4>
            <h2 className="carTittle">{title}</h2>
          </div>
          <p className="location">{location}</p>
          <div className="carAditionals">
            {features.map(feature => {
              return (               
                <div key={feature.id} className="aditionals"><i className={feature.icon} aditionals></i></div>
              );
            })}
          </div>

          <p className="carDescriptionShort">
            {description}
          </p>
          <ButtonLink
            key={title}
            nameClass="buttonShowMore buttonFormResponsive mb-1"
            text="Ver Más"
            url={`/products/` + id}
          />
        </div>
      </div>
    </>
  );
};

export default Card;