import React from 'react'

import '../../styles/componentStyles/pickupPoint.css'

const CarPickupPoint = (props) => {

    return (

        <section className="carPickupPoint">
            <div className="pickupPointTittle">
                <h2>¿Dónde lo podes recoger?</h2>
                <div className="line"></div>
            </div>
            <div className="pickupPointMap">
                <p>{props.cityName}, {props.countryName}</p>
                <iframe
                    src={props.cityMap}
                    // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4699.8331016547145!2d-58.53682032518983!3d-34.815032101784126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd0f4e2dea557%3A0xf19b6f81d441cc3b!2sAeropuerto%20Internacional%20Ezeiza!5e0!3m2!1ses-419!2sar!4v1636048013516!5m2!1ses-419!2sar" 
                    width="100%"
                    height="400"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    loading="lazy" 
                    className="map"
                />
            </div>
        </section>
    )
}

export default CarPickupPoint;