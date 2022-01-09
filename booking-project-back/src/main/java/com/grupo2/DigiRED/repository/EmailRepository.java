package com.grupo2.DigiRED.repository;

import com.grupo2.DigiRED.model.Reservation;
import com.grupo2.DigiRED.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailRepository {

    @Query("SELECT email FROM Reservation r INNER JOIN Users u ON u.id = r.users_id  WHERE r.id = :id")
    String findEmail(Long id);

}
