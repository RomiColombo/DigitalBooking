import React from "react";
import CarLocation from "./CarLocation";
import CarServices from "./CarServices";
import CarPhotos from "./CarPhotos";
import CarDescription from "./CarDescription";
import CarReservation from "./CarReservation";
import CarPickupPoint from "./CarPickupPoint";
import Policies from "../policies/Policies";

import { Nav } from "../navbar/Nav";

import { useParams } from "react-router-dom";

import "../../styles/componentStyles/carDetails.css";

import Loading from "../loading/Loading";
import useProduct from "../../hooks/useProduct";


function CarDetails() {
  let { id } = useParams();
  const buttons_nav = [
    {
      nameClass: "btn nav__btn-register",
      url: "/auth/register",
      content: "Crear Cuenta",
    },
    {
      nameClass: "btn ml-2-d",
      url: "/auth/login",
      content: "Iniciar Sesion",
    },
  ];


  let car = useProduct(id);

  return (
    <>
      <Nav buttonsNav={buttons_nav} />
      {car ? (
        <>
          <CarLocation
            categoryTitle={car.category.title}
            productName={car.name}
            cityName={car.cities.name}
            countryName={car.cities.countryName}
          />
          <CarPhotos images={car.images} />
          <CarDescription productName={car.name} description={car.description} />
          <CarServices features={car.features} />
          <CarPickupPoint cityName={car.cities.name} countryName={car.cities.countryName} cityMap={car.cities.map}/>
          <CarReservation idproduct = { car.id } />
          <Policies />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default CarDetails;