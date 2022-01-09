package com.grupo2.DigiRED.controller;


import com.grupo2.DigiRED.ResourceNotFoundException;
import com.grupo2.DigiRED.model.Reservation;
import com.grupo2.DigiRED.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.util.List;

@RestController
@RequestMapping("/reservations")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST})
public class ReservationController {

    @Autowired
    ReservationService service;
    //Method to create reservation
    @PostMapping
    public ResponseEntity<?> newReservation(@RequestBody Reservation reservation) throws MessagingException, UnsupportedEncodingException {
        service.createReservation (reservation);
        return ResponseEntity.status(HttpStatus.OK).body("Reserva creada exitosamente...");
    }

    //method to search Reservation by id
    @GetMapping("/{id}")
    public Reservation findReservation(@PathVariable Long id) throws ResourceNotFoundException {
        return service.findReservation (id);
    }

    @GetMapping("/users/{id}")
    public List<Reservation> findReservationByUsers(@PathVariable Long id) throws ResourceNotFoundException{
        return service.findReservationByUserId(id);
    }

    // method to search all Reservations
    @GetMapping
    public List<Reservation> getAllReservations() {
        return service.getAllReservations();
    }

    //method to update Reservation
    @PutMapping("/{id}")
    public ResponseEntity<?> updateReservation(@PathVariable Long id, @RequestBody Reservation r) throws ResourceNotFoundException {
        service.updateReservation(id, r);
        return ResponseEntity.status(HttpStatus.OK).body("La Reserva ha sido actualizado...");
    }

    // method to delete Reservation
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) throws ResourceNotFoundException {
        service.deleteReservation(id);
        return ResponseEntity.status(HttpStatus.OK).body("Reserva eliminado...");
    }
}