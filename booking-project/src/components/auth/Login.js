import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav } from "../navbar/Nav";
import { useForm } from "../../hooks/useForms";

import { getAccessToken } from "../../service/user";

const Login = () => {
  const history = useHistory();

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const buttonSingup = [
    {
      url: "/auth/register",
      content: "Crear Cuenta",
    },
  ];

  // esto es lo que se activa cuando presionas iniciar sesion
  const handleLogin = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      if (getAccessToken(formValues) !== false) {
        let sufix = window.sessionStorage.getItem("sufix");
        history.push(sufix ? sufix : "/");
        window.sessionStorage.clear();
      }
    } else {
      let error = document.querySelectorAll(".controlRequirements");

      error.forEach((e) => e.classList.add("error"));
      // class  "error" para desplegar errores
    }
  };

  const [errorFor, setErrorFor] = useState({
    email: "",
    passwordValid: "",
  });
  /* ------------------------------ Validaciones ------------------------------ */

  const validateInputs = () => {
    let { email, password } = formValues;
    let valido = false;
    // Validacion Email
    if (email === "") {
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
      <Nav buttonsNav={buttonSingup} />
      <div className="mainForm">
        {window.sessionStorage.getItem("sufix") !== null && (
          <div className="controlRequirements error errorReservation">
            <div className="errorMessage">
              <i className="fas fa-exclamation-circle"></i>
              <small>Para realizar una reserva necesitas estar logueado</small>
            </div>
          </div>
        )}
        <form action="POST" className="formUser" id="formUser">
          <h1 className="formTitle">Iniciar Sesión</h1>
          <div className="login">
            <label htmlFor="email">
              <p>Correo Electrónico</p>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleInputChange}
            />
            <div className="controlRequirements">
              <small>{errorFor.email}</small>
            </div>
            <label htmlFor="password">
              <p>Contraseña</p>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleInputChange}
            />
            <div className="controlRequirements">
              <small>{errorFor.passwordValid}</small>
            </div>
          </div>
          <div className="formFooter">
            <button
              type="submit"
              className="buttonForm mb-1"
              onClick={handleLogin}
            >
              Iniciar Sesión
            </button>
            <p>
              ¿No tenés una cuenta?
              <Link to="/auth/register" className="linkForm">
                Registrate
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
