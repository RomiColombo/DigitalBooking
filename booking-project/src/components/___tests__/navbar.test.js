import React, { Component } from 'react'
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Nav} from '../navbar/Nav' 

test ('slogan', () =>{
    const nav__slogan ={ 
        content: 'No dejes para mañana el viaje que puedes hacer hoy',

    }
    const component = render (<Nav nav ={nav__slogan}/>)
    expect(component).toBeDefined()
    expect(component.container).toHaveTextContent(nav__slogan.content)


})




test('handles click correctly', () => {
    render(<ButtonLink />)
  
    userEvent.click(screen.getByText('entrar'))
    expect(screen.getByLabelText('entrar')).toBeChecked()
  })
  