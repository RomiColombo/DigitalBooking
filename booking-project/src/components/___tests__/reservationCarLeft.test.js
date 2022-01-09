import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ReservationCarLeft from '../carReservation/reservationCarLeft';

test('render content',()=>{
    const component = render(<ReservationCarLeft/>)
    console.log(component);
})

