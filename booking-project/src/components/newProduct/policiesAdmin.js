import React from "react";

function PoliciesAdmin() {

    return (
        <section className="adminPolicies">
            <h3>Políticas de la empresa</h3>
            <div className="policiesAdminContainer">
                <div>
                    <h4>Requisitos Conductor</h4>
                    <label for="driverRequirementsAdmin">Descripción</label>
                    <textarea placeholder="Escribir aquí" className="textArea"></textarea>
                    {/* <p>En el momento de tomar el auto, deberá presentar la siguiente documentación:</p>
                    <ul>
                        <li>DNI o Pasaporte</li>
                        <li>Licencia de conducir válida para el tiempo de alquiler</li>
                        <li>Tarjeta de crédito</li>
                    </ul> */}
                </div>
                <div>
                    <h4>A cargo del cliente</h4>
                    <label for="customerChargesAdmin">Descripción</label>
                    <textarea placeholder="Escribir aquí" className="textArea"></textarea>
                    {/* <ul>
                        <li>Combustible</li>
                        <li>Excedentes – Cargos adicionales</li>
                        <li>Peajes</li>
                        <li>Infracciones de tránsito y su gestión</li>
                        <li>Otros cargos operativos</li>
                        <li>Costos y/ Pérdidas</li>
                    </ul> */}
                </div>
                <div>
                    <h4>Política de Cancelación</h4>
                    <label for="cancellationPolicyAdmin">Descripción</label>
                    <textarea placeholder="Escribir aquí" className="textArea"></textarea>
                     {/* <p>El cliente podrá, en todos los casos, cancelar la operación sin costo dentro de los 10 días
                        corridos de haber sido efectuada.</p>  */}
                </div>
            </div>
        </section>
    )
}

export default PoliciesAdmin;