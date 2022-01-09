import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import Login from '../auth/Login';


describe ("email tests", () => {
    const component = render(<Login/>);
 

    test('correct email', () => {
        expect("email@algo.com").toEqual(expect.stringMatching(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i));
    });

    test('El email no puede quedar en blanco', () => { 
        expect(" ").toEqual(expect.not.stringMatching(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i));
    });

})