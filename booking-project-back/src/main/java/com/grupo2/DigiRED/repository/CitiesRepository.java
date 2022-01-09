package com.grupo2.DigiRED.repository;

import com.grupo2.DigiRED.model.Cities;
import com.grupo2.DigiRED.model.CitiesDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CitiesRepository extends JpaRepository<Cities, Long> {
}
