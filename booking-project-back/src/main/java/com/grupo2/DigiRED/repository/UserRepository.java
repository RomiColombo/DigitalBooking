package com.grupo2.DigiRED.repository;

import com.grupo2.DigiRED.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users,Long> {
    Users findByEmail(String email);

    Boolean existsByEmail(String email);

    Users findByVerificationCode(String code);

    @Query("select u from Users u WHERE u.verificationCode like :verificationCode")
    Users findByVCQuery(String verificationCode);

}