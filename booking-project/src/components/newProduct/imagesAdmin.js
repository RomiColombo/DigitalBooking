import React from "react";
import Add from "../../assets/agregar.png"

function ImagesAdmin() {

    return (
        <section className="addImagesAdmin">
            <h3>Cargar imágenes</h3>
            <div>
                <input placeholder="Insertar https://" type="text" />
                <button className="btnAddCarImg"><img src={Add} alt="agregar"/></button>
            </div>
        </section>
    )
}

export default ImagesAdmin;