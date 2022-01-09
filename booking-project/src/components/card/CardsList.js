import React from 'react';
import Card from "./Card";

const CardsList = ({products, handleClick}) => {

return (
    <div className="containerCardList">
        <div className="containerCardListHeader">        
            <h2 className="recomendations">Recomendaciones</h2>
            <button className="btnClear" onClick={handleClick}>Limpiar filtros</button>
            <button className="btnClearResponsive"><i className="fas fa-broom"></i></button>
        </div>
        <div className="cardsContainer">
            {Object.keys(products).map((item) =>
                <Card
                    id={products[item].id}
                    key={products[item].name}
                    category={products[item].category.title}
                    title={products[item].name}
                    location={products[item].cities.name}
                    description={products[item].description}
                    images={products[item].images.length ? products[item].images[0].url : ""}
                    features={products[item].features}
                />
            )}
        </div>
    </div>
);
};

export default CardsList;