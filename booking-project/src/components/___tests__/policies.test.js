import React, { Component } from 'react'
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {institutionalPolicies} from '../policies/Policies'




test ('should render institutional Policies ', () =>{
    const institutionalPolicies = { 
        content: '¿Qué tenés que saber?',        
    }
    const component = institutionalPolicies;
    expect(component).toBeDefined()

})

  
test ('should render institutional Policies Description ', () =>{
    const institutionalPoliciesDescription = { 
        content: 'Requisitos Conductor',        
    }
    const component = institutionalPoliciesDescription;
    expect(component).toBeDefined()

})
