package com.grupo2.DigiRED.model;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ProductsDTO {

    private String name;
    private String description;
    private Cities cities;
    private Category category;

    public ProductsDTO(String name, String description, Cities cities, Category category) {
        this.name = name;
        this.description = description;
        this.cities = cities;
        this.category = category;
    }

    @Override
    public String toString() {
        return "ProductsDTO{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", cities=" + cities +
                ", category=" + category +
                '}';
    }
}
