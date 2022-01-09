import { useHistory } from "react-router";
import React from "react";

function HeaderProfile() {
    let history = useHistory();

    return (
        <section className="headerProfile">
            <h1>Mi Perfil</h1>
            <a onClick={() => history.push('/')} className="previousPageProfile"><i className="fas fa-chevron-left backBtn"></i></a>
        </section>
    )
}

export default HeaderProfile;