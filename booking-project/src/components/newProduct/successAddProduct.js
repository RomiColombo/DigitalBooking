import React from "react";
import { useHistory } from "react-router";
import success from "../../assets/addsuccess.png"
import { Nav } from "../navbar/Nav"

function SuccessAddProduct() {

    let history = useHistory();

    const comeBack = (event) => {
        event.preventDefault();
        history.replace('/')
    }

    return (
        <>
            <Nav />
            <main className="mainSuccessfulAdd">
                <div className="successfulAdd">
                    <img src={success} alt="checksuccess" />
                    <div>
                        <p>Se agregó exitosamente el producto</p>
                    </div>
                    <button onClick={comeBack} type="submit" className="btnSuccessfulAdd">Volver</button>
                </div>
            </main>
        </>

    )

}

export default SuccessAddProduct;