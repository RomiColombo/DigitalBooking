import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import '../../styles/componentStyles/carReservation.css';
import CalendarResponsive from '../carDetails/CarCalendarResponsive';
import Calendar from './carCalendar';

const CarReservation = ({idproduct}) => {

    const history = useHistory();
    
    const reDirect = (eventSubmit) =>{
        eventSubmit.preventDefault();
        if(window.localStorage.getItem("token")){
            history.replace(`/products/${idproduct}/reserve`)
        }else{
            history.push('/auth/login')
            window.sessionStorage.setItem("sufix", `/products/${idproduct}/reserve`);
        }
    }

    return (
        <div className="availableDates">
            <div className="availableDatesTittle">
                <h2>Fechas Disponibles</h2>
            </div>
            <form  className="availableDatesForm">

                <div className="calendarDesktop">
                    <Calendar />
                </div>

                <div className="calendarResponsive">
                    <CalendarResponsive />
                </div>

                <div className="formAvailableFooter">
                    <label className="reservation">
                        <p>Estás a un paso de comenzar tu aventura</p>
                    </label>
                    <button onClick = { reDirect } type =  "submit" className="availableDatesButton">Iniciar Viaje</button>
                </div>
            </form>
        </div>
    )
}

export default CarReservation;