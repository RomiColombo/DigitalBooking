package com.grupo2.DigiRED.controller;

import com.grupo2.DigiRED.ResourceNotFoundException;
import com.grupo2.DigiRED.model.Images;
import com.grupo2.DigiRED.model.ImagesDTO;
import com.grupo2.DigiRED.service.ImagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/images")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST})
public class ImagesController {

    @Autowired
    ImagesService service;

    //Method to create image
    @PostMapping
    public ResponseEntity<?> newImage(@RequestBody ImagesDTO images) {
        service.createImages(images);
        return ResponseEntity.status(HttpStatus.OK).body("Imagen creada exitosamente...");
    }

    //method to seach image by id
    @GetMapping("/{id}")
    public Images findImage(@PathVariable Long id) throws ResourceNotFoundException {
        return service.findImage(id);
    }

    // method to seach all images
    @GetMapping
    public List<Images> getAllImages() {
        return service.getAllImages();
    }

    //method to update image
    @PutMapping("/{id}")
    public ResponseEntity<?> updateImage(@PathVariable Long id, @RequestBody ImagesDTO image) throws ResourceNotFoundException {
        service.updateImages(id, image);
        return ResponseEntity.status(HttpStatus.OK).body("Images actualizada...");
    }

    // method to delete image
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) throws ResourceNotFoundException {
        service.deleteImage(id);
        return ResponseEntity.status(HttpStatus.OK).body("Imagen eliminada...");
    }

}
