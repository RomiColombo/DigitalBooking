import React from "react";
import { Nav } from "../navbar/Nav";
import Loading from "../loading/Loading";
import HeaderNewProduct from "./newProductHeader";
import MainNewProduct from "./newProductMain";

function NewProduct (){

    return(
        <>
        <Nav />
        <HeaderNewProduct />
        <MainNewProduct />       
        </>

    )
}

export default NewProduct;