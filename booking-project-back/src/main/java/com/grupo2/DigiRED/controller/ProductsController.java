package com.grupo2.DigiRED.controller;

import com.grupo2.DigiRED.ResourceNotFoundException;
import com.grupo2.DigiRED.model.*;
import com.grupo2.DigiRED.service.ImagesService;
import com.grupo2.DigiRED.service.ProductsService;
import com.grupo2.DigiRED.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST})
public class ProductsController {

    @Autowired
    ProductsService service;
    @Autowired
    ReservationService reservationService;
    //Method to create product
    @PostMapping
    public ResponseEntity<?> newProduct(@RequestBody ProductsDTO products) {
        service.createProduct(products);
        return ResponseEntity.status(HttpStatus.OK).body("Producto creado exitosamente...");
    }

    //method to search product by id
    @GetMapping("/{id}")
    public Products findProduct(@PathVariable Long id) throws ResourceNotFoundException {
        return service.findProduct(id);
    }

    // method to search all products
    @GetMapping
    public List<Products> getAllProducts() {
        return service.getAllProducts();
    }

    //method to update product
    @PutMapping("/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Long id, @RequestBody ProductsDTO product) throws ResourceNotFoundException {
        service.updateProduct(id, product);
        return ResponseEntity.status(HttpStatus.OK).body("El producto ha sido actualizado...");
    }

    // method to delete product
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) throws ResourceNotFoundException {
        service.deleteProduct(id);
        return ResponseEntity.status(HttpStatus.OK).body("Producto eliminado...");
    }

    @GetMapping("/filter/{cityorcategory}")
    public List <Products> getByCategoryOrCity (@PathVariable String cityorcategory,
                @RequestParam(required = false) @DateTimeFormat(pattern="yyyy-MM-dd") LocalDate initialDate,
                @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd")LocalDate finalDate)
    {
        if(Objects.isNull(initialDate) && Objects.isNull(finalDate)){
            return service.findProductsByCategoryOrCities(cityorcategory);
        }
        List<Reservation> reservationList = reservationService.getAllReservations();
        List<Products> productsList = service.findProductsByCategoryOrCities(cityorcategory);
        if(reservationList.size()>0 && productsList.size()>0){
            reservationList.forEach( reserve ->{
                        if(
                                (
                                        (   initialDate.isAfter(reserve.getStartDate()) || initialDate.equals(reserve.getStartDate())   )
                                                &&
                                                (   initialDate.isBefore(reserve.getEndDate()) || initialDate.equals(reserve.getEndDate())   )
                                )   ||
                                        (
                                                (   finalDate.isAfter(reserve.getStartDate())  || finalDate.equals(reserve.getStartDate()) )
                                                        &&
                                                        (   finalDate.isBefore(reserve.getEndDate())  || finalDate.equals(reserve.getEndDate())    )
                                        )   ||
                                        (
                                                (   initialDate.isBefore(reserve.getStartDate()) || initialDate.equals(reserve.getStartDate())   )
                                                        &&
                                                        (   finalDate.isAfter(reserve.getEndDate())  || finalDate.equals(reserve.getEndDate())    )
                                        )
                        )   {
                            productsList.remove(reserve.getProduct());
                            System.out.println("Producto Retirado" + reserve.getProduct());
                        } else {
                            System.out.println("Sino que me de el producto" + reserve.getProduct());
                        }
                    }
            );
        }
        return productsList;
    }

    @GetMapping("/filter/{city}/{category}")
    public List <Products> getByCategoryAndCity (@PathVariable String city,@PathVariable String category ){
        return service.findProductsByCategoryAndCities(category, city);
    }
}