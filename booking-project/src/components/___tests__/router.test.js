import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';

import { HomeScreen } from '../Home/HomeScreen';
import App from '../../App';
import { AppRouter } from '../routers/AppRouter';
import { AuthRouter } from '../routers/AuthRouter';
import  Singup  from '../auth/Singup';
import Login from '../auth/Login';
import CarDetails from '../carDetails/CarDetails';


jest.mock('../Home/HomeScreen');
jest.mock('../auth/Singup');
jest.mock('../auth/Login');
jest.mock('../carDetails/CarDetails');

describe('Should render HomeScreen and routers', () => {
   
    test('should render Home', () => {
        HomeScreen.mockImplementation( () => <div>Home Page mock</div>)
        render(
          <MemoryRouter>
            <AppRouter/>
          </MemoryRouter>
        );
        expect (screen.getByText("Home Page mock")).toBeInTheDocument();
    });

    test('should render Home contain Hola', () => {
        HomeScreen.mockImplementation( () => <div>Hola</div>)
        render(
          <MemoryRouter>
            <App/>
          </MemoryRouter>
        );
        expect (screen.getByText("Hola")).toBeInTheDocument();
    });
    
    test('should render Register', () => {
       Singup.mockImplementation( () => <div>Register</div>)
      render(
        <MemoryRouter initialEntries={['/auth/register']}>
          <AuthRouter/>
        </MemoryRouter>
      );
      expect (screen.getByText("Register")).toBeInTheDocument();
  });

    test('should render Login', () => {
       
       Login.mockImplementation( () => <div>Login</div>)
      render(
        <MemoryRouter initialEntries={['/auth/login']}>
          <AuthRouter/>
        </MemoryRouter>
      );
      expect (screen.getByText("Login")).toBeInTheDocument();
  });

    test('should render Login crazy text', () => {
       
       Login.mockImplementation( () => <div>Crazy</div>)
      render(
        <MemoryRouter initialEntries={['/auth/login']}>
          <AuthRouter/>
        </MemoryRouter>
      );
      expect (screen.getByText("Crazy")).toBeInTheDocument();
  });

    test('should render cars Details', () => {
       
      CarDetails.mockImplementation( () => <div>Cars</div>)
      render(
        <MemoryRouter initialEntries={['/products/5']}>
          <AppRouter/>
        </MemoryRouter>
      );
      expect (screen.getByText("Cars")).toBeInTheDocument();
  });
 
})
