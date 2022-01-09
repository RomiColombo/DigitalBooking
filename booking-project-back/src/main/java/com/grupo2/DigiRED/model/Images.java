package com.grupo2.DigiRED.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table
@Getter @Setter
public class Images {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String url;

    public Images() {}

    public Images(Long id, String title, String url) {
        this.id = id;
        this.title = title;
        this.url = url;
    }

    public Images(String title, String url) {
        this.title = title;
        this.url = url;
    }

    @Override
    public String toString() {
        return "Images{" +
                ", title='" + title + '\'' +
                ", url='" + url + '\'' +
                '}';
    }
}
