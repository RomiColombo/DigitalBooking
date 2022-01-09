import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import CarDetails from '../carDetails/CarDetails';

test('render content',()=>{
    const component = render(<useProduct/>)
    console.log(component);
})



