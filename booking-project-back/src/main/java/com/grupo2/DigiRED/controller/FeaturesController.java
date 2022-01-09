package com.grupo2.DigiRED.controller;

import com.grupo2.DigiRED.ResourceNotFoundException;
import com.grupo2.DigiRED.model.Cities;
import com.grupo2.DigiRED.model.CitiesDTO;
import com.grupo2.DigiRED.model.Features;
import com.grupo2.DigiRED.model.FeaturesDTO;
import com.grupo2.DigiRED.service.CitiesService;
import com.grupo2.DigiRED.service.FeaturesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/features")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST})
public class FeaturesController {

    @Autowired
    FeaturesService service;

    //Method to create feature
    @PostMapping
    public ResponseEntity<?> newCity(@RequestBody FeaturesDTO feature) {
        service.createFeature(feature);
        return ResponseEntity.status(HttpStatus.OK).body("Característica creada exitosamente...");
    }

    //method to seach feature by id
    @GetMapping("/{id}")
    public Features findFeature(@PathVariable Long id) throws ResourceNotFoundException {
        return service.findFeature(id);
    }

    // method to seach all features
    @GetMapping
    public List<Features> getAllFeatures() {
        return service.getAllFeatures();
    }

    //method to update feature
    @PutMapping("/{id}")
    public ResponseEntity<?> updateFeature(@PathVariable Long id, @RequestBody FeaturesDTO feature) throws ResourceNotFoundException {
        service.updateFeature(id, feature);
        return ResponseEntity.status(HttpStatus.OK).body("Característica actualizada...");
    }

    // method to delete feature
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) throws ResourceNotFoundException {
        service.deleteFeature(id);
        return ResponseEntity.status(HttpStatus.OK).body("Característica eliminada...");
    }

}


