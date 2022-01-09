import React from "react";
import { useHistory } from "react-router";
import success from "../../assets/checksuccess.png"
import { Nav } from "../navbar/Nav"

function SuccessReservation() {
    let history = useHistory();

    const comeBack = (event) => {
        event.preventDefault();
        history.replace('/')
    }

    return (
        <>
            <Nav />
            <main className="mainSuccessfulBooking">
                <div className="successfulBooking">
                    <img src={success} alt="checksuccess" />
                    <div>
                        <span>¡Muchas Gracias!</span>
                        <p>Su reserva se realizó con éxito</p>
                    </div>
                    <button onClick = { comeBack } type="submit" className="btnSuccessfulBooking">ok</button>
                </div>
            </main>
        </>
    )
}

export default SuccessReservation;