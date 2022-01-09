import { useHistory } from "react-router";
import React from "react";

function HeaderReservationPage ({ carName, carDescription }){

    let history = useHistory();

    return(
        <section className="header">
        <section className="description">
            <div className="descriptionTittle">
                <p>{ carDescription }</p> 
                <h1>{ carName }</h1>
            </div>
            <a onClick = {() => history.push('/')} className="previousPage"><i className="fas fa-chevron-left backBtn"></i></a>
        </section>
    </section>
    )
}

export default HeaderReservationPage;