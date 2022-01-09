import React from "react";
import Calendar from "./Calendar";
import CalendarResponsive from "./CalendarResponsive";

const Search = ({handleChange, cities, onSubmit}) => {
  return (
    <div className="containerSearch">
      <h1 className="tittleSearch">Busca ofertas en Autos</h1>
      <form action="POST" className="formSearch" onSubmit={onSubmit}>
      <select htmlFor="place" className="valueSearch"  placeholder="¿A donde vamos?"
        onChange={handleChange} 
        >
          <option default hidden>Seleccioná una ciudad</option>          
          {Object.keys(cities).map((item, i) => (
            
            <option key={i} value={cities[item].name} className="optionLocation">
             {cities[item].name}
          </option>
        ))}
      </select>
      <label htmlFor="date" className="valueSearch calendarDesktop">
        <Calendar placeholder="Seleccione una fecha" />
      </label>
      <label htmlFor="date" className="valueSearch calendarResponsive">
        <CalendarResponsive />
      </label>
      <button type="submit" className="buttonFormSearch" >
        Buscar
      </button>
    </form>
  </div>
);
};

export default Search;