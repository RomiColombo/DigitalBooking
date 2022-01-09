import React, { useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import HeaderReservationPage from "./header";
import ReservationCarMain from "./reservationCarMain";
import Policies from "../policies/Policies";
import { Nav } from "../navbar/Nav";
import Loading from "../loading/Loading";

import useProduct from "../../hooks/useProduct";

function CarReservationPage() {
  let { id } = useParams();
  if (!window.localStorage.getItem("token")) {
    let history = useHistory();
    history.replace(`/products/${id}`);
  }

  let car = useProduct(id);

  return (
    <>
      <Nav />
      {car !== null ? (
        <>
          <HeaderReservationPage
            carName={car.name}
            carDescription={car.category.title}
          />
          <ReservationCarMain
            carName={car.name}
            carDescription={car.category.title}
            carCity={car.cities.name}
            carImage={car.images[0]}
          />
          <Policies />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default CarReservationPage;
