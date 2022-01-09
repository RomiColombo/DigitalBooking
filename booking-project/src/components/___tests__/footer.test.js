import React, { Component } from 'react'
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Footer, footer,SocialMediaGroup} from '../footer/Footer';



test ('renders content', () =>{
    const footer = { 
        content: 'DigiRent',
        
    }
    const component = render (<Footer footer ={footer}/>)
    expect(component.container).toHaveTextContent(footer.content)
    expect(footer).toBeDefined()
})

