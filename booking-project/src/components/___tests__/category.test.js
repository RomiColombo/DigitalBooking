import React, { Component } from 'react'
import { render, screen, cleanup } from '@testing-library/react';
import { Category } from '../category/Category'


describe('Proof of component Category', () => {
    test("Category component contains header title", () => {
       const encabezado = render( <Category/> );
       expect(encabezado.getByText('Buscar por categoria')).toBeInTheDocument();
    })
    


}    

)
