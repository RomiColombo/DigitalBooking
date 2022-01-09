import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import Swal from 'sweetalert2';


function CalendarResponsive() {

    const [values, setValues] = useState()

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const weekDays = ["D", "L", "M", "M", "J", "V", "S"]

    let nowDay = new Date().getDate()
    let nowMonth = new Date().getMonth()
    let nowYear = new Date().getFullYear();

    return (
    <DatePicker
        values={values}
        onChange={setValues}
        months={months}
        weekDays={weekDays}
        format="DD MMM."
        disableYearPicker range numberOfMonths={1}
        selected={values}
        placeholder=" Seleccioná la fecha de tu reserva"

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

export default CalendarResponsive;