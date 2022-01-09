package com.grupo2.DigiRED.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table
@Getter @Setter
public class Features {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String icon;


    public Features() {
    }

    public Features(Long id, String name, String icon) {
        this.id = id;
        this.name = name;
        this.icon = icon;
    }

    public Features(String name, String icon) {
        this.name = name;
        this.icon = icon;
    }

    @Override
    public String toString() {
        return "Features{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", url='" + icon + '\'' +
                '}';
    }
}
