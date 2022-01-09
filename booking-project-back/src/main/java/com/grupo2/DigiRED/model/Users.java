package com.grupo2.DigiRED.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private boolean enable;
    private String verificationCode;

    @ManyToOne(optional = false)
    @JoinColumn(name = "rol_id", nullable = false)
    private Role rol;

    public boolean isEnabled() {
        return enable;
    }

}
