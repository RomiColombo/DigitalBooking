import React from "react";
import { useHistory } from "react-router";
import noReservations from "../../assets/drive.png"
import { Nav } from "../navbar/Nav"

function NoReservations() {

    return (
        <>
            <main className="mainNoReservation">
                <div className="successfulBooking">
                    <img src={noReservations} alt="checksuccess" className="imgNoReservation" />
                    <div>
                        <span>Todavía no tienes reservas</span>
                    </div>
                </div>
            </main>
        </>
    )
}

export default NoReservations;