import React from "react";

import volver from "../../assets/volver.png";

import "../../styles/componentStyles/location.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";


function CarLocation(props) {

  return (
    <section className="header">
      <section className="description">
        <div className="descriptionTittle">
          <p>{props.categoryTitle}</p>
          <h1>{props.productName}</h1>
        </div>
        <div onClick={()=> window.history.back()} className="previousPage">
        <i className="fas fa-chevron-left backBtn"></i>
        </div>
      </section>
      <section className="locationContainer">
        <div className="carLocation">
          <div>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} className="location__icon" />{props.cityName}, {props.countryName}</p>
          {/* <p className="distance">A 900km del centro</p> */}
          </div>
        </div>
        <div className="punctuationContainer">
          <div className="punctuationLeft">
            <p>Muy Bueno</p>
            <div className="carsPunctuation">
              <i className="fas fa-car-side activeCar"></i>
              <i className="fas fa-car-side activeCar"></i>
              <i className="fas fa-car-side activeCar"></i>
              {/* <i className="fas fa-car-side activeCar"></i> */}
              <i className="fas fa-car-side unactiveCar"></i>
            </div>
          </div>
          <p className="punctuationRight">8</p>
        </div>
      </section>
    </section>
  );
};

export default CarLocation;
