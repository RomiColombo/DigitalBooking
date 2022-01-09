package com.grupo2.DigiRED.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
@Getter @Setter
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @ManyToMany
    @JoinTable(name = "products_features",
            joinColumns = @JoinColumn(name = "products_id"),
            inverseJoinColumns = @JoinColumn(name = "features_id"))
    private List<Features> features;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "products_id", nullable = false)
    private List<Images> images;

    @ManyToOne(optional = false)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @ManyToOne(optional = false)
    @JoinColumn(name = "cities_id", nullable = false)
    private Cities cities;

    public Products(){}

    public Products(Long id, String name, String description, List<Features> features, List<Images> images, Category category, Cities cities) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.features = features;
        this.images = images;
        this.category = category;
        this.cities = cities;
    }

    public Products(String name, String description, List<Features> features, List<Images> images, Category category, Cities cities) {
        this.name = name;
        this.description = description;
        this.features = features;
        this.images = images;
        this.category = category;
        this.cities = cities;
    }

    @Override
    public String toString() {
        return "Products{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", features=" + features +
                ", images=" + images +
                ", category=" + category +
                ", cities=" + cities +
                '}';
    }
}

