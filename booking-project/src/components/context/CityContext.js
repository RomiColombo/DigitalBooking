import React, { createContext, useContext, useState } from "react";

export const CityContext = createContext();
export const CityUpdateContext = createContext();

export function useCity() {
    return useContext(CityContext);
}

export function useCityUpdate() {
    return useContext(CityUpdateContext);
}
export function CityProvider({ children }) {

    const [selectedCity, setSelectedCity] = useState({
        id: 0,
        name: "",
    });

    function handleChange(event) {
        setSelectedCity(() => ({ name: event.target.value }));
    }

    return (
        <CityContext.Provider value={selectedCity}>
            <CityUpdateContext.Provider value={handleChange}>
                {children}
            </CityUpdateContext.Provider>
        </CityContext.Provider>
    )

}
