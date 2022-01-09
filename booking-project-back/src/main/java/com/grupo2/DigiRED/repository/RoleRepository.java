package com.grupo2.DigiRED.repository;


import com.grupo2.DigiRED.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository <Role,Long> {
    Role findByname(String userRole);
}
