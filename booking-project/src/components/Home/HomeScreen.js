import React, { useState, useEffect } from "react";
import { Category } from "../category/Category";
import { Nav } from "../navbar/Nav";
import Search from "../search/Search";
import Cardslist from "../card/CardsList";

import { getCity as getCities } from "../../service/city";
import { getCategory as getCategories } from "../../service/category";

import { getProduct as getProducts } from "../../service/product";
import Loading from "../loading/Loading";

export const HomeScreen = () => {
  const buttons_nav = [
    {
      nameClass: "btn nav__btn-register",
      url: "/auth/register",
      content: "Crear Cuenta",
    },
    {
      nameClass: "btn ml-2-d",
      url: "/auth/login",
      content: "Iniciar Sesion",
    },
  ];

  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");

  function handleClickCategory(category) {
    setCategory(category);
  }

  function handleClear() {
    setCity("");
    setCategory("");
  }

  function onSubmit(e) {
    e.preventDefault();
    setCity(e.target.elements[0].value);
    e.target.reset();
  }

  useEffect(() => {
    getCities().then((items) => {
      setCities(items);
    });

    getCategories().then((items) => {
      setCategories(items);
    });

    getProducts().then((items) => {
      setProducts(items);
    });
  }, []);

  useEffect(() => {
    getProducts(
      city.length ? city : category.length ? category : "",
      city.length && category.length ? category : ""
    ).then((items) => {
      setProducts(items);
    });
  }, [city, category]);

  return (
    <>
      <Nav buttonsNav={buttons_nav} />
      {products.length && categories.length && cities.length ? (
        <>
          <Search cities={cities} onSubmit={onSubmit}/>
          <Category
            handleChange={handleClickCategory}
            categories={categories}
          />
          <Cardslist products={products} handleClick={handleClear} />
        </>
      ) : (
        <Loading />
      )}
      {/* <main className = "main__container">
       </main> */}
    </>
  );
};
