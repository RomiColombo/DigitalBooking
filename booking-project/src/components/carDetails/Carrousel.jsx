import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Thumbs]);

const Carrousel = ({ imgs }) => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="carCarrusel">
      <Swiper
        spaceBetween={10}
        navigation={true}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",

        }}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        {Object.keys(imgs).map((imagen) => {
          return (
            <SwiperSlide
              // className = "swiperSlide"
              key={imgs[imagen].id}
            >
              <img
                src={imgs[imagen].url}
                style={{ listStyle: "none" }}
                alt="KIA Stinger"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        {imgs.map((imagen) => {
          return (
            <SwiperSlide key={imagen.id}>
              <img
                src={imagen.url}
                style={{ listStyle: "none" }}
                alt="KIA Stinger"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  )
}

export default Carrousel;