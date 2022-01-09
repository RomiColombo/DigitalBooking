package com.grupo2.DigiRED.controller;

import com.grupo2.DigiRED.ResourceNotFoundException;
import com.grupo2.DigiRED.model.Category;
import com.grupo2.DigiRED.model.CategoryDTO;
import com.grupo2.DigiRED.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST})
public class CategoryController {

    @Autowired
    CategoryService service;

    @PostMapping
    public ResponseEntity<?> newCategory(@RequestBody CategoryDTO category) {
        service.createCategory(category);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public Category findCategory(@PathVariable Long id) throws ResourceNotFoundException {
        return service.findCategory(id);
    }

    @GetMapping
    public List<Category> getAllCategories() {
        return service.getAllCategories();
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> updateCategory(@PathVariable Long id, @RequestBody CategoryDTO category) throws ResourceNotFoundException {
        service.updateCategory(id, category);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    // delete
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) throws ResourceNotFoundException {
        service.deleteCategory(id);
        return ResponseEntity.status(HttpStatus.OK).body("Categoría eliminada...");
    }

}
