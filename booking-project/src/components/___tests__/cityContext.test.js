import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import CityContext from "../context/CityContext";

test('render content',()=>{
    const component = render(<useCity/>)
    console.log(component);
})




