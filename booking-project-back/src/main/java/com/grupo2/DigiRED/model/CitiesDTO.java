package com.grupo2.DigiRED.model;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CitiesDTO {

    private String name;
    private String countryName;

    public CitiesDTO(String name, String countryName) {
        this.name = name;
        this.countryName = countryName;
    }

    @Override
    public String toString() {
        return "CitiesDTO{" +
                "name='" + name + '\'' +
                ", countryName='" + countryName + '\'' +
                '}';
    }
}
