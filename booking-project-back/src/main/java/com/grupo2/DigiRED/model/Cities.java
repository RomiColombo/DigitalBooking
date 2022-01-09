package com.grupo2.DigiRED.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table
@Getter @Setter
public class Cities {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String countryName;

    @Column(columnDefinition = "TEXT")
    private String map;

    public Cities(){}

    public Cities(Long id, String name, String countryName, String map) {
        this.id = id;
        this.name = name;
        this.countryName = countryName;
        this.map = map;
    }

    public Cities(String name, String countryName, String map) {
        this.name = name;
        this.countryName = countryName;
        this.map = map;
    }

    @Override
    public String toString() {
        return "Cities{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", countryName='" + countryName + '\'' +
                '}';
    }
}
