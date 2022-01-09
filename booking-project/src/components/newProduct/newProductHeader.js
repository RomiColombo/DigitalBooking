import React from "react";
import Back from "../../assets/volver.png";

function HeaderNewProduct() {

    return (
        <section className="headerAdmin">
            <h1>Administración</h1>
            <a href="#" className="previousPage"><img src={Back} alt="volver" /></a>
        </section>
    )

}

export default HeaderNewProduct;