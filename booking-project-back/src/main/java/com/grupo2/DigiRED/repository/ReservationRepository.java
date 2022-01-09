package com.grupo2.DigiRED.repository;

import com.grupo2.DigiRED.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long>  {

    @Query("select r from Reservation r WHERE r.id like :id")
    Reservation findByid(Long id);

    @Query("select r from Reservation r WHERE r.user.id = :id")
    List<Reservation> findByUserid(Long id);
}
