package com.grupo2.DigiRED.controller;

import com.grupo2.DigiRED.ResourceNotFoundException;
import com.grupo2.DigiRED.model.Category;
import com.grupo2.DigiRED.model.CategoryDTO;
import com.grupo2.DigiRED.model.Cities;
import com.grupo2.DigiRED.model.CitiesDTO;
import com.grupo2.DigiRED.service.CitiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cities")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST})
public class CitiesController {

    @Autowired
    CitiesService service;

    //Method to create city
    @PostMapping
    public ResponseEntity<?> newCity(@RequestBody CitiesDTO cities) {
        service.createCities(cities);
        return ResponseEntity.status(HttpStatus.OK).body("Ciudad creada exitosamente...");
    }

    //method to seach city by id
    @GetMapping("/{id}")
    public Cities findCity(@PathVariable Long id) throws ResourceNotFoundException {
        return service.findCity(id);
    }

    // method to seach all cities
    @GetMapping
    public List<Cities> getAllCities() {
        return service.getAllCities();
    }

    //method to update city
    @PutMapping("/{id}")
    public ResponseEntity<?> updateCity(@PathVariable Long id, @RequestBody CitiesDTO city) throws ResourceNotFoundException {
        service.updateCities(id, city);
        return ResponseEntity.status(HttpStatus.OK).body("Ciudad actualizada...");
    }

    // method to delete city
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) throws ResourceNotFoundException {
        service.deleteCity(id);
        return ResponseEntity.status(HttpStatus.OK).body("Ciudad eliminada...");
    }

}
