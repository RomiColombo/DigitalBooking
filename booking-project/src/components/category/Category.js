import React from "react";

export const Category = ({ handleChange, categories }) => {

  return (
    <div className="category">
      <h2 className="title-category"> Buscar por categoria</h2>
      <div className="bottom-category">
        {categories.map((item) => (
           <div className="category-card" key={item.id} onClick={() => handleChange(item.title)} >
            <div
              className="logo"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></div>
            <div className="container-description">
              <h3 className="titulo-categoria">{item.title}</h3>
              <p className="descripcion-categoria">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};