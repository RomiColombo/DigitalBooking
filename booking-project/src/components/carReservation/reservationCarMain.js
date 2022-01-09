import React, { useState } from "react";
import ReservationCarLeft from "./reservationCarLeft";
import ReservationCarRight from "./reservationCarRight";

function ReservationCarMain({ carName, carDescription, carCity, carImage }) {
  const [days, setDays] = useState([]);
  const [hour, setHour] = useState("");

  function handleDays(array) {
    setDays(array);
  }

  function handleHour(e) {
    setHour(e.target.value);
  }

  return (
    <main className="reservationCarMain">
      <h3 className="reservationCarTitle"> Completá tus datos </h3>
      <form action="POST" className="reservationCar">
        <ReservationCarLeft
          carCity={carCity}
          handleDays={handleDays}
          days={days}
          handleHour={handleHour}
          hour={hour}
        />
        <ReservationCarRight
          carName={carName}
          carDescription={carDescription}
          carCity={carCity}
          carImage={carImage}
          days={days}
          hour={hour}
        />
      </form>
    </main>
  );
}

export default ReservationCarMain;
