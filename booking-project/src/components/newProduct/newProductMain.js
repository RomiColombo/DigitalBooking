import React from "react";
import CarInfoAdmin from "./carAdminInfo";
import CarAtributesAdmin from "./carAtributesAdmin";
import PoliciesAdmin from "./policiesAdmin";
import ImagesAdmin from "./imagesAdmin";

function NewProductMain() {

    return (
        <section className="mainAdmin">
            <h2>Crear Auto</h2>
            <form action="POST" className="formAdmin">
                <CarInfoAdmin />
                <CarAtributesAdmin />
                <PoliciesAdmin />
                <ImagesAdmin />
                <div className="btnContainer">
                    <button className="sendFormAdmin">Crear</button>
                </div>
            </form>
        </section>
    )
}

export default NewProductMain;