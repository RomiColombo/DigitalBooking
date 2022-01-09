import React from "react";
import { useCity, useCityUpdate } from "../context/CityContext";


function CarInfoAdmin() {

    const handleChange = useCityUpdate();

    return (
        <section className="carAdminInfo">
            <section className="carAdminDetails">
                <div>
                    <label for="carName">Nombre del auto</label>
                    <input placeholder="Nombre del Auto" type="text" />
                </div>
                <div>
                    <label for="carCity">Categoría</label>
                    <select>
                        <option value="seleccionar Categoría" default hidden>Categoría</option>
                        <option>Auto de Ciudad</option>
                        <option>SUV</option>
                        <option>Todoterreno</option>
                        <option>Deportivo</option>
                    </select>
                </div>
                <div>
                    <label for="carName">Dirección</label>
                    <input placeholder="Punto de Retiro" type="text" />
                </div>
                <div>
                    <label for="carType">Ciudad</label>
                    <select onChange={handleChange}>
                        <option value="seleccionar Categoría" default hidden>Categoría</option>
                        {Object.keys(city).map((item, i) => (
                            <option key={i} value={city[item].name} className="optionLocation">
                                {city[item].name}
                            </option>
                        ))}
                    </select>
                </div>
            </section>
            <div>
                <label for="descriptionAdmin">Descripción</label>
                <textarea placeholder="Escribir aquí" className="textArea"></textarea>
            </div>
        </section>
    )
}

export default CarInfoAdmin;