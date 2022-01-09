import React, { useState, useEffect } from "react";
import { Nav } from "../navbar/Nav";
import HeaderProfile from "./headerProfile";
import MyReservations from "./myReservations"

import { getReservation as getReservations } from "../../service/reservations";
import { deleteReservation as deleteReservations } from "../../service/reservations"

function ProfilePage() {

    const [reservations, setReservations] = useState([]);
    const [idDelete, setIdDelete] = useState(null)



    useEffect(() => {
        getReservations().then((items) => {
            setReservations(items);
        })
    }, []);


    useEffect(() => {
        if(idDelete!=null){
            deleteReservations(idDelete)
        }

    }, [idDelete]);


    return (
        <>
            <Nav />
            <HeaderProfile />
            <MyReservations reservations={reservations} setIdDelete={(idReservation) => setIdDelete(idReservation)} />
        </>
    )

}


export default ProfilePage;