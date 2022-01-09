import React from "react";
import CardReservation from './cardReservation';
import NoReservations from './sinReservas'

function MyReservations({ reservations , setIdDelete }) {
    console.log(reservations);

    return (
        <section className="userTrips">
            <h2>Reservas</h2>
            <section className="tripsContainer">
                
                
                {reservations.length? (Object.keys(reservations).map((item) =>
                    <CardReservation
                        key={reservations[item].id}
                        id={reservations[item].id}
                        category={reservations[item].product.category.title}
                        name={reservations[item].product.name}
                        cityName={reservations[item].product.cities.name}
                        cityCountry={reservations[item].product.cities.countryName}
                        image={reservations[item].product.images[0].url}
                        endDate={reservations[item].endDate}
                        startDate={reservations[item].endDate}
                        setIdDelete={(idReservation)=>setIdDelete(idReservation)}
                    />
                    
                )):
                <NoReservations />
            }
            </section>
        </section>

    )

}

export default MyReservations;