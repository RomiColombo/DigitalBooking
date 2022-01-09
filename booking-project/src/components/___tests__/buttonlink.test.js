import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Link } from 'react-router-dom'
import { ButtonLink } from "../button/ButtonLink";
import { render } from 'react-dom';



test("Should re direct you to another url", () =>{
    const ButtonLink = {
        content: "text",       
    }
    const component = render(<ButtonLink button = {ButtonLink}/>)
    expect(ButtonLink).toBeDefined()
    expect(component.container).toHaveTextContent(ButtonLink.content)
})
  
