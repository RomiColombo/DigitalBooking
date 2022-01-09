import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForms";
import { Nav } from "../navbar/Nav";
import config from '../../config/index.js';

const Singup = () => {
  const history = useHistory();
  const buttonLogin = [
    {
      nameClass: "btn ml-2-d",
      url: "/auth/login",
      content: "Iniciar Sesión",
    },
  ];

  const [formValues, handleInputChange] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rol: {
      id: 1,
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      const requestModel = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      };
      let url = config.baseUrl + ':8080/users/';
      fetch(url, requestModel).then((response) =>
        response.json()
      );

      history.push("/auth/confirmation");
    } else {
      let error = document.querySelectorAll(".controlRequirements");

      error.forEach((e) => e.classList.add("error"));
    }
  };

  const [errorFor, setErrorFor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    passwordValid: "",
    passwordValid2: "",
  });
  /* ------------------------------ Validaciones ------------------------------ */

  const validateInputs = () => {
    let password2 = document.getElementById("password2").value;
    let { firstName, lastName, email, password } = formValues;
    let valido = false;
    // Validacion Email
    if (firstName === "" || firstName.length < 3) {
      setErrorFor({
        ...errorFor,
        firstName: "debe llenar el campo nombre",
      });
    } else if (lastName === "" || lastName.length < 3) {
      setErrorFor({
        ...errorFor,
        lastName: "debe llenar el campo apellido",
      });
    } else if (email === "") {
      setErrorFor({
        ...errorFor,
        email: "El email no puede quedar en blanco",
      });
    } else if (!isEmail(email)) {
      setErrorFor({
        ...errorFor,
        email: "Ingrese un email válido",
      });
    }
    // Validacion Contraseña
    else if (password === "") {
      setErrorFor({
        email: "",
        passwordValid: "La contraseña no debe quedar en blanco",
      });
    } else if (password.length < 6) {
      setErrorFor({
        ...errorFor,
        passwordValid: "La contraseña debe tener más de 6 de caracteres",
      });
    } else if (password2 < 6 || password2 != password) {
      setErrorFor({
        ...errorFor,
        passwordValid2:
          "La contraseña debe tener más de 6 de caracteres y ambas deben coincidir",
      });
    } else {
      valido = true;
    }
    return valido;
  };

  //usamosExpresionRegular
  const isEmail = (email) =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  return (
    <>
      <Nav buttonsNav={buttonLogin} />
      <div className="mainForm">
        <form action="POST" className="formUser formUserSingup" id="formUser">
          <h1 className="formTitle singupTitle">Crear Cuenta</h1>
          <div className="singup">
            <div className="containerName">
              <label htmlFor="firstName">
                <p>Nombre</p>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={handleInputChange}
                />
                <div className="controlRequirements">
                  <small>{errorFor.firstName}</small>
                </div>
              </label>
              <label htmlFor="lastName">
                <p>Apellido</p>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={handleInputChange}
                />
                <div className="controlRequirements">
                  <small>{errorFor.lastName}</small>
                </div>
              </label>
            </div>
            <label htmlFor="email">
              <p>Email</p>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleInputChange}
              />
              <div className="controlRequirements">
                <small>{errorFor.email}</small>
              </div>
            </label>
            <label htmlFor="password">
              <p>Contraseña</p>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleInputChange}
              />
              <div className="controlRequirements">
                <small>{errorFor.passwordValid}</small>
              </div>
            </label>
            <label htmlFor="password">
              <p>Confirmar Contraseña</p>
              <input type="password" name="password" id="password2" />
              <div className="controlRequirements">
                <small>{errorFor.passwordValid2}</small>
              </div>
            </label>
          </div>
          <div className="formFooter">
            <button
              type="submit"
              className="buttonForm buttonFormResponsive mb-1"
              onClick={handleLogin}
            >
              Crear Cuenta
            </button>
            <p>
              ¿Ya tenés una cuenta?
              <Link to="/auth/login" className="linkForm">
                {" "}
                Iniciar Sesión
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Singup;
