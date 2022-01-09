import React from "react";
import { useHistory } from "react-router";
import { Nav } from "../navbar/Nav"
import mailCar from '../../assets/checkMail.png'

function ConfirmationMail() {
    
    let history = useHistory();

    const comeBack = (event) => {
        event.preventDefault();
        history.replace('/')
    }

    return (
        <>
            <Nav />
            <main className="mainCheckMail">
                <div className="checkMail">
                    <img src={mailCar} alt="checksuccess" />
                    <div>
                        <h3>Estás a un paso de formar parte de la comunidad de <span>DIGIRENT</span></h3>
                        <p>Revisá tu mail para confirmar tu cuenta</p>
                    </div>
                    <button onClick = { comeBack } type="submit" className="btnCheckMail">Ok</button>
                </div>
            </main>
        </>
    )
}

export default ConfirmationMail;