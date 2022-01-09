package com.grupo2.DigiRED.model;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class FeaturesDTO {

    private String name;
    private String icon;

    public FeaturesDTO(String name, String icon) {
        this.name = name;
        this.icon = icon;
    }

    @Override
    public String toString() {
        return "FeaturesDTO{" +
                "name='" + name + '\'' +
                ", icon='" + icon + '\'' +
                '}';
    }
}
