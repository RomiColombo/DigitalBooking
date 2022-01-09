import React from "react";
import Add from "../../assets/agregar.png"

function CarAtributesAdmin(){

    return(
        <section className="atributesAdmin">
        <h3>Agregar atributos</h3>
        <section className="newAtribute">
            <div className="newAtributeContainer">
                <div>
                    <label>Nombre</label>
                    <input placeholder="Atributo" type="text" />
                </div>
                <div>
                    <label>Ícono</label>
                    <input type="text" placeholder="Clase" />
                </div>
            </div>                   
            <button className="btnAddCarAdmin"><img src={Add} alt="agregar" /></button>
        </section>
        <section className="atributeAdd">
            <div className="atributeAddContainer">
                <div>
                    <label>Nombre</label>
                    <input placeholder="Atributo" type="text" />
                </div>
                <div>
                    <label>Ícono</label>
                    <input type="text" placeholder="Clase" />
                </div>                        
            </div>                    
            <button className="delete-btn">
                <span className="icon">
                    <span className="tapa"></span>
                    <span className="can"></span>
                    <span className="trash"></span>
                </span>
            </button>
        </section>
    </section>
    )
}

export default CarAtributesAdmin;