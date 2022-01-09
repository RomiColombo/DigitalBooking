import React from 'react'
import {
    Switch,
    Route,
    Redirect

} from 'react-router-dom'
import Login from '../auth/Login'
import Singup from '../auth/Singup'
import ConfirmationMail from '../auth/confirmationMail'

export const AuthRouter = () => {
    return (
        <>
          <Switch>
                <Route exact path ='/auth/login' component = { Login }/>
                <Route path ='/auth/register' component = { Singup }/>
                <Route exact path = '/auth/confirmation' component = { ConfirmationMail } />
                <Redirect to = '/auth/register' />
          </Switch>  
        </>
    )
}
