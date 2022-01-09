import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';


import '@testing-library/jest-dom/extend-expect';
import Card from '../card/Card';
import CardsList from '../card/CardsList';
import Login from '../auth/Login';

describe('card rendered', () => {
    test('searching de legendary sedan modesto', () => {

            const card = render(
                    <App/>
                )    
            expect(card.getByText("Sedan Modesto")).toBeInTheDocument();    
    })
    

})
