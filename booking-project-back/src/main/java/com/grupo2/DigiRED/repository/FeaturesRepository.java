package com.grupo2.DigiRED.repository;

import com.grupo2.DigiRED.model.Features;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeaturesRepository extends JpaRepository<Features, Long> {
}
