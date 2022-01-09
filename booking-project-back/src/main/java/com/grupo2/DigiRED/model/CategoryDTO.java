package com.grupo2.DigiRED.model;


import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CategoryDTO {

    private String title;
    private String description;
    private String image;

    public CategoryDTO( String title, String description, String image) {

        this.title = title;
        this.description = description;
        this.image = image;
    }

    @Override
    public String toString() {
        return "CategoryDTO{" +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", image='" + image + '\'' +
                '}';
    }
}
