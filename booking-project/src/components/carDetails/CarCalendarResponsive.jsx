import React from "react";
import { Calendar } from "react-multi-date-picker";
import Swal from 'sweetalert2';

function CarCalendarResponsive(props) {

  const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  const weekDays = ["D", "L", "M", "M", "J", "V", "S"]


  let nowDay = new Date().getDate()
  let nowMonth = new Date().getMonth()
  let nowYear = new Date().getFullYear();
  
  return (
  
     <Calendar
     values={props.days}
     onChange={props.handleChange}
      months={month}
      weekDays={weekDays}
      //disableMonthPicker
      format="DD MMM."
      disableYearPicker
      range
      numberOfMonths={1}
      selected={props.days}

      mapDays={({ date }) => {

        let dateDay = date.day;
        let dateMonth = date.month.index;
        let dateYear = date.year;

        if ((dateMonth<nowMonth && dateYear<=nowYear) || (dateDay < nowDay && dateMonth<=nowMonth && dateYear<=nowYear) || (dateYear<nowYear)) return {
          disabled: true,
          style: { color: "#ccc" },
          onClick: () => Swal.fire({
            icon: 'warning',
            title: 'No puedes realizar una reserva anterior al día de hoy',
            showConfirmButton: false,
            timer: 1700
          })
        }

      }}

      />
  )
}

export default CarCalendarResponsive;