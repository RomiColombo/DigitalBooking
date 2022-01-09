import React from "react";
import { Link, useHistory } from "react-router-dom";

export const UserProfile = () => {

  const closeSession = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  const avatar = window.localStorage.getItem("avatar");
  const nombre = window.localStorage.getItem("firstName");
  const apellido = window.localStorage.getItem("lastName");
  const id = window.localStorage.getItem("idUser")
  
  return (
    <>
      <div className="userLog__container">
        <Link to ={'/users/'+id}>
        <div className="userLog__avatar">{avatar}</div>
        </Link>
        <div className=" ml-2 userLog__info_log">
          <i
            className="userLog__logOut fas fa-times ml-2 mt-5 pointer "
            onClick={closeSession}
          ></i>
          <p>Hola,</p>
          <p className="userLog_name">{nombre} {apellido}</p>
        </div>
      </div>

      <div className="userLog_Logout_responsive">
        <p>
          ¿deseas <span onClick={closeSession}>cerrar sesión</span>?
        </p>
      </div>
    </>
  );
};
