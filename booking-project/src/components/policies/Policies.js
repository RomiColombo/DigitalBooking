import React from 'react'

import '../../styles/componentStyles/policies.css';

const Policies = () => {
    return (

    <section className="institutionalPolicies">
        <div className="institutionalPoliciesTittle">
            <h2>¿Qué tenés que saber?</h2>
            <div className="line"></div>
        </div>
        <div className="institutionalPoliciesDescription">
            <div>
                <h3>Requisitos Conductor</h3>
                <p>En el momento de tomar el auto, deberá presentar la siguiente documentación:</p>
                <ul>
                    <li>DNI o Pasaporte</li>
                    <li>Licencia de conducir válida para el tiempo de alquiler</li>
                    <li>Tarjeta de crédito</li>
                </ul>
            </div>
            <div>
                <h3>A cargo del cliente</h3>
                <ul>
                    <li>Combustible</li>
                    <li>Excedentes – Cargos adicionales</li>
                    <li>Peajes</li>
                    <li>Infracciones de tránsito y su gestión</li>
                    <li>Otros cargos operativos</li>
                    <li>Costos y/ Pérdidas</li>
                </ul>
            </div>
            <div>
                <h3>Política de Cancelación</h3>
                <p>El cliente podrá, en todos los casos, cancelar la operación sin costo dentro de los 10 días
                    corridos de haber sido efectuada.</p>
            </div>

        </div>
    </section>
    )
}

export default Policies;
