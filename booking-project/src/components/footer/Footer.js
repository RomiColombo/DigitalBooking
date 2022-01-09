import React from 'react'
import { SocialMediaGroup } from '../socialMedia/SocialMediaGroup'

export const Footer = () => {

    return (
        <footer className = "footer">
            <p className = "ml-5">
            <i className="fas fa-copyright"></i> {(new Date().getFullYear())} DigiRent 
            {/* <span className="footerSlogan"> | No dejes para mañana el viaje que puedes hacer hoy</span> */}
            </p>
            <div>
            <SocialMediaGroup/>
            </div>
        </footer>
    )
}