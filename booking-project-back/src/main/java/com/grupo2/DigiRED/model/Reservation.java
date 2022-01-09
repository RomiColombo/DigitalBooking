package com.grupo2.DigiRED.model;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Time;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "reservations")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Time reservationHour;

    @DateTimeFormat(pattern="yyyy-MM-dd")
    private LocalDate startDate;

    @DateTimeFormat(pattern="yyyy-MM-dd")
    private LocalDate endDate;


    @ManyToOne(optional = false)
    @JoinColumn(name = "products_id", nullable = false)
    private Products product;

    @ManyToOne(optional = false)
    @JoinColumn(name = "users_id", nullable = false)
    private Users user;
}
