package com.grupo2.DigiRED.model;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ImagesDTO {

    private String title;
    private String url;

    public ImagesDTO(String title, String url) {
        this.title = title;
        this.url = url;
    }

    @Override
    public String toString() {
        return "ImagesDTO{" +
                "title='" + title + '\'' +
                ", url='" + url + '\'' +
                '}';
    }
}
