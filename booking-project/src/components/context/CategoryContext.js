import React, { createContext, useContext, useState } from "react";

export const CategoryContext = createContext();
export const CategoryUpdateContext = createContext();

export function useCategory() {
    return useContext(CategoryContext);
}

export function useCategoryUpdate() {
    return useContext(CategoryUpdateContext);
}

export function CategoryProvider({ children }) {

    const [selectedCategory, setSelectedCategory] = useState({
        id: 0,
        title: [],
    });

    function handleChange(itemName) {
        
        setSelectedCategory(() => ({ title: itemName }));
        
    }

    return (
        <CategoryContext.Provider value={selectedCategory}>
            <CategoryUpdateContext.Provider value={handleChange}>
                {children}
            </CategoryUpdateContext.Provider>
        </CategoryContext.Provider>
    )

}
