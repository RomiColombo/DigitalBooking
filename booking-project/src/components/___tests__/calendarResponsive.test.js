import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Calendar from "../search/Calendar";
import CalendarResponsive from "../search/CalendarResponsive";

test('render content',()=>{
    const component = render(<CalendarResponsive/>)
    console.log(component);
})



