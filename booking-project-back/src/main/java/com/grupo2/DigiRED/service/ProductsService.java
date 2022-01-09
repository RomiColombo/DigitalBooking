package com.grupo2.DigiRED.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo2.DigiRED.ResourceNotFoundException;
import com.grupo2.DigiRED.model.Products;
import com.grupo2.DigiRED.model.ProductsDTO;
import com.grupo2.DigiRED.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ProductsService {

    @Autowired
    ProductsRepository repository;

    @Autowired
    ObjectMapper mapper;

    // calling all the product
    public List<Products> getAllProducts(){
        return repository.findAll();
    }

    // creating product
    public void createProduct(ProductsDTO products){
        for (Products p : getAllProducts())
            if(p.getName().equals(products.getName()) && p.getDescription().equals(products.getDescription()))
                return;
        repository.save(mapper.convertValue(products, Products.class));
    }

    // reading product by id
    public Products findProduct(Long id) throws ResourceNotFoundException {
        Products p = repository.findById(id).orElse(null);
        if(p == null)
            throw new ResourceNotFoundException("No se encontro el producto");
        return p;
    }

    // updating product
    public void updateProduct(Long id, ProductsDTO productDTO) throws ResourceNotFoundException {
        Products products = findProduct(id);

        products.setName(productDTO.getName());
        products.setDescription(productDTO.getDescription());
        repository.save(products);
    }

    // deleting product
    public String deleteProduct(Long id) throws ResourceNotFoundException {
        String deleted = findProduct(id).getName();
        repository.deleteById(id);
        return "El producto " + deleted + " ha sido eliminado exitosamente";
    }

    // Find by category
    public List<Products> findProductsByCategory(String title){
        return repository.findProductsByCategory_Title(title);
    }

    // Find by city
    public List<Products> findProductsByCities(String name){
        return repository.findProductsByCities_Name(name);
    }

    public List<Products> findProductsByCategoryOrCities(String categoryorcities){
        List <Products> filtered = repository.findProductsByCategory_Title(categoryorcities);
        return filtered.size() > 0 ? filtered : findProductsByCities(categoryorcities);
    }

    // Find by category and city
    public List<Products> findProductsByCategoryAndCities(String category, String cities){
        return repository.findProductsByCategory_TitleAndCities_Name(category, cities);
    }

    // Find by city and dates
    public List<Products> findProductsByCityAndDates(String ciudad, Date fechaInicial, Date fechafinal) {
        return repository.findAllAvailableProducts(ciudad, fechaInicial, fechafinal);
    }
}