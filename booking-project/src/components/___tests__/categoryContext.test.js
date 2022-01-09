import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import CategoryContext from "../context/CategoryContext";

test('render content',()=>{
    const component = render(<useCategory/>)
    console.log(component);
})



