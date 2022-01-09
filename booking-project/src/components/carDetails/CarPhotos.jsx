import React, { useState } from "react";
import Swal from "sweetalert2";
import { useHistory, useParams } from "react-router";
import like from "../../assets/like.png";
import share from "../../assets/share.png";

import "../../styles/componentStyles/carPhotos.css";

import Carrousel from "./Carrousel";
const CarPhotos = ({ images }) => {

  const [carouselDisplay, setCarouselDisplay] = useState(false);
   let { id } = useParams();

  let digiProduct = "http://digirent.link/products/"+id;

  let linkdin = `https://www.linkedin.com/shareArticle?mini=true&url=${digiProduct}`

  let pinterest = `https://pinterest.com/pin/create/button/?url=${digiProduct}&media=&description=`

  let twitter = `https://twitter.com/intent/tweet?url=${digiProduct}&text=`

  let facebook = `https://www.facebook.com/sharer/sharer.php?u=${digiProduct}`
  const copy = async () =>{
      await navigator.clipboard.writeText(digiProduct);
  }

  const handleShare = () =>{
    Swal.fire({
      title:"Compartir",
      html:`
      <div class = "share-social">
      <a target = "_blank" href = ${facebook} ><i class="fab fa-facebook-square"></i></a>
      <a target = "_blank" href = ${twitter} ><i class="fab fa-twitter"></i></a>
      <a target = "_blank" href = ${linkdin} ><i class="fab fa-linkedin-in"></i></a>
      <a target = "_blank" href = ${pinterest} ><i class="fab fa-pinterest"></i></a>
      </div>
      <div>
      <input class = "rmdp-input inputshare " disabled value = ${digiProduct} ></input>
      <button class ="buttonFormSearch mb-5" onclick=${copy()}>Copy Link</button>
      </div>
      `,
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false
    })
  }

  return (
    <>
      <Carrousel imgs={images} />

      <section className="carInformation">
        <div className="reactions">
          <img className = "share" src={share} alt="compartir" onClick = {handleShare} />
          <img src={like} alt="me gusta" />
        </div>
        <section className="particularPhotos">
          <div className="mainPhoto">
            <img src={images.length ? images[0].url : ""} alt="KIA Stinger" />
          </div>
          <div className="particularPhotosRight">
            {images.slice(1, 5).map((imagen) => {
              return (
                <>
                  <img src={imagen.url} alt="KIA Stinger" />
                </>
              );
            })}
            <a
              className="pointer"
              onClick={() => {
                setCarouselDisplay(!carouselDisplay);
              }}
            >
              Ver Más
            </a>
          </div>
        </section>
      </section>
      {carouselDisplay && (
        <section className="photoGalery">
          <div className="carrouselPhotos">
            <div className="carrusel-Container">
              <div
                className="cerrar"
                onClick={() => {
                  setCarouselDisplay(!carouselDisplay);
                }}
              >
                <i className="fa-solid fa-x"></i>
              </div>
              <Carrousel imgs={images} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CarPhotos;
