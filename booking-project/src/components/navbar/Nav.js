import React from "react";
import { Link } from "react-router-dom";
import { ButtonLink } from "../button/ButtonLink";
import { SocialMediaGroup } from "../socialMedia/SocialMediaGroup";
import { UserProfile } from "../userProfile/UserProfile";
import logo from "../../assets/digirent-svg.svg";

export const Nav = ({ buttonsNav }) => {
  const handleShow = () => {
    let navBtn = document.getElementById("nav");
    navBtn.classList.toggle("navHide");
  };

  return (
    <nav className="nav__nav-bar">
      <div className=" nav__nav-down">
        <Link to="/" className="link">
          <img className="nav__logo" src={logo} alt="Logo digirent" />
        </Link>
        <div className="nav__slogan ml-2">
          <p>No dejes para mañana el viaje que puedes hacer hoy</p>
        </div>
      </div>
      <div className="nav__toogle-nav pointer">
        <i className="fas fa-bars mr-2" onClick={handleShow}></i>
      </div>

      <div id="nav" className="nav__btn-group">
        <div className="nav__toogle-nav nav__closeContainer ">
          <i
            className="nav__close fas fa-times ml-2 mt-5 pointer"
            onClick={handleShow}
          ></i>
          {window.localStorage.getItem("token") && <span className="mb-1 mr-1">Menú</span>}
        </div>

        <div className="nav__group mr-5">
          {window.localStorage.getItem("token") ? (
            <UserProfile />
          ) : (buttonsNav ?
            (buttonsNav.map(({ content, url, nameClass }) => {
              return (
                <ButtonLink
                  key={content}
                  nameClass={nameClass}
                  text={content}
                  url={url}
                />
              );
            })) :
            (<></>)
          )}
        </div>
        <div className="nav__social-media">
          <SocialMediaGroup className="nav__socialMedia_group" />
        </div>
      </div>
    </nav>
  );
};
