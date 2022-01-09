import React from 'react';

function CardReservation({category, name, cityName, cityCountry,image,id, setIdDelete, endDate, startDate}) {

    return (
        <div className="tripDetails">
            <div className="tripDetailsContent">
                <div className="tripCardBody">
                    <div className="tripHeader">
                        <p className="carCategoryTrip">{category}</p>
                        <p className="carTittleTrip">{name}</p>
                    </div>
                    <div className="tripDatePlace">
                        <p>Desde: {startDate}<br />Hasta: {endDate}</p>
                        <p>{cityName}, {cityCountry}</p>
                    </div>
                </div>
                {/* <hr />
                <div className="cancelReservationContainer">
                    <button className="btnCancelReservation" onClick={()=>setIdDelete(id)}><i className="fas fa-ban"></i>Cancelar Reserva</button>
                </div> */}
            </div>
            <div className='containerImgProfileUser'>
            <img src={image}
                alt={name} className='imgCarProfile' />
                
            </div>
            
        </div>
    )
}

export default CardReservation;