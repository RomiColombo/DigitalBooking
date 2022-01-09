import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect

} from 'react-router-dom'
import { Footer } from '../footer/Footer'
import { HomeScreen } from '../Home/HomeScreen'
import { AuthRouter } from './AuthRouter'
import CarDetails from '../carDetails/CarDetails'
import CarReservationPage from '../carReservation/carReservationPage'
import SuccessReservation from '../carReservation/successReservation'
import ProfilePage from '../profilePage/profilePage'

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    <Route exact path='/products/:id' component={CarDetails} />
                    <Route exact path='/products/:id/reserve' component={CarReservationPage} />
                    <Route exact path='/products/:id/success' component={SuccessReservation} />
                    <Route exact path='/users/:id' component={ProfilePage} />
                    <Route path='/auth' component={AuthRouter} />
                    <Redirect to='/' />
                </Switch>
            </Router>
            <Footer />
        </>
    )
}
