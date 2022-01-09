import React, {useEffect, useState} from "react";
import CalendarResponsive from '../carDetails/CarCalendarResponsive';
import Calendar from '../carDetails/carCalendar';
import "../../styles/componentStyles/calendar.css"

import { getUserInfo } from "../../service/user";

function ReservationCarLeft({ carCity, handleDays, days,  handleHour  }) {

    const time = [...Array(24).keys()]

    const [user, setUser] = useState({})

    useEffect(async() => {
        const usr = await getUserInfo(window.localStorage.getItem("username"));
        if(usr) setUser(usr);
    }, [])


  const formatedHour = (times) => {
    // restarle 12 cuaando llega a 12, y cambiar a por p
    const nTimes = times > 12 ? times - 12 : times;
    const hour = nTimes <= 9 ? "0" + nTimes : nTimes;
    const fHour = `${hour}:00 ${times <= 12 ? "A" : "P"}M`;
    return fHour;
  };

    return (
        <>
            <section className="reservationCarLeft">
                <div className="reservartionCarPerson">
                    <label >
                        <p>Nombre</p>
                        <input type="text" value={user ? user.firstName : "Nombre"} disabled />
                    </label>
                    <label >
                        <p>Apellido</p>
                        <input type="text" value={user ? user.lastName : "Apellido"} disabled />
                    </label>

                    <label >
                        <p>Email</p>
                        <input type="email" value={user ? user.email : "mail@mail.com"} disabled />
                    </label>

                    <label >
                        <p>Ciudad</p>
                        <input type="text" placeholder="Ingrese la ciudad" require value={carCity} />
                    </label>
                </div>
                <div className="reservationCarDate">
                    <h3>Seleccioná tu fecha de reserva</h3>
                    <div className="calendarDesktop calendarDesktopReservation">
                        <Calendar handleChange={handleDays} days={days} />
                    </div>

                    <div className="calendarResponsive calendarResponsiveReservation">
                        <CalendarResponsive handleChange={handleDays} days={days} />
                    </div>

                </div>
                <div className="reservationCarTime">
                    <h3>Tu horario de retiro</h3>
                    <div>
                        <p className="reservationCarTimeInfo"><i className="far fa-check-circle"></i>
                        El auto estará disponible media hora antes del horario pactado</p>
                        <p className="requiredText">Campo obligatorio</p>
                        <p className="reservationCarTimeSelect">Indicá el horario estimado para retirarlo</p>

                        <select onChange={handleHour}>
                            <option value="seleccionar hora" default hidden>Seleccionar hora</option>
                            {time.map(times => {
                                return(<option key={times} value={times}>{formatedHour(times)}</option>)
                            })}

                        </select>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReservationCarLeft;