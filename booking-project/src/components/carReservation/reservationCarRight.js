import React from "react";
import { useHistory, useParams } from "react-router";
import config from '../../config/index.js';

import Swal from "sweetalert2";

function ReservationCarRight({
  carName,
  carDescription,
  carCity,
  carImage,
  days,
  hour,
}) {
  let history = useHistory();
  let { id: idProd } = useParams();

  const dateToString = (date) => {
    return `${date.year}-${date.month.number < 10 ? "0" : ""}${date.month.number}-${date.day < 10 ? "0" : ""}${date.day}`;
  };

  const handleReservation = (e) => {
    e.preventDefault();

    // let {name,lastName,email,fechaInicio,fechaFin} = formValues;

    let fechaInicio = dateToString(days[0]);
    let fechaFin = dateToString(days[1]);
    let hora = `${hour.length < 2 ? "0" : ""}${hour}:00:00`;

    let token = window.localStorage.getItem("token");
    let idUser = window.localStorage.getItem("idUser");

    let cuerpo = {
      reservationHour: hora,
      startDate: fechaInicio,
      endDate: fechaFin,
      product: {
        id: parseInt(idProd),
      },
      user: {
        id: parseInt(idUser),
      },
    };

    const requestModel = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(cuerpo),
    };

    const urllocal = config.baseUrl + ':8080';
    if (hour)
      fetch(`${urllocal}/reservations`, requestModel).then((response) => {
        if (!response.ok) {
          Swal.fire({
            icon: "error",
            title:
              "Lamentablemente no se ha podido reservar el producto. Por favor intente más tarde",
            showConfirmButton: true,
            timer: 3000,
          });
        } else {
          response.json();
          history.replace(`/products/${idProd}/success`);
        }
      });
  };

  return (
    <section className="reservationCarRight">
      <div className="reservationDetail">
        <h3> Detalle de la reserva </h3>
        <img
          src={carImage ? carImage.url : ""}
          alt={carName}
          className="reservationDetailImg"
        />
      </div>
      <div className="reservationResponsive">
        <div className="reservationDetailInfo">
          <p className="reservationCarTipe"> {carDescription} </p>
          <h2> {carName} </h2>
          <div className="carsPunctuation">
            <i className="fas fa-car-side activeCar icoCarsPunctuation"> </i>
            <i className="fas fa-car-side activeCar icoCarsPunctuation"> </i>
            <i className="fas fa-car-side activeCar icoCarsPunctuation"> </i>
            <i className="fas fa-car-side activeCar icoCarsPunctuation"> </i>
            <i className="fas fa-car-side unactiveCar icoCarsPunctuation"> </i>
          </div>
          <p className="reservationDetailLocation">
            <i className="fas fa-map-marker-alt reservationLocationIco"> </i>
            {carCity}
          </p>
        </div>
        <div className="pickupDate">
          <div className="formLine"> </div>
          <div className="pickupDateInput">
            <label> Fecha retiro </label>
            <input
              type="text"
              disabled
              value={
                days.length > 0
                  ? `${days[0].day}/${days[0].month.number}/${days[0].year}`
                  : "dd/mm/aaaa"
              }
            />
          </div>
          <div className="formLine"> </div>
          <div className="pickupDateInput">
            <label> Fecha devolución </label>
            <input
              type="text"
              disabled
              value={
                days.length > 1
                  ? `${days[1].day}/${days[1].month.number}/${days[1].year}`
                  : "dd/mm/aaaa"
              }
            />
          </div>
          <div className="formLine"> </div>
          <div className="formReservationFooter">
            <p>No te olvides de verificar la fecha y hora seleccionada</p>
            <button
              onClick={handleReservation}
              type="submit"
              className="confirmReservationButton"
            >
              Confirmar reserva
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ReservationCarRight;
