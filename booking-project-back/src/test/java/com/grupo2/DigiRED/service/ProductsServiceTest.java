package com.grupo2.DigiRED.service;

import com.grupo2.DigiRED.ResourceNotFoundException;
import com.grupo2.DigiRED.model.Category;
import com.grupo2.DigiRED.model.Cities;
import com.grupo2.DigiRED.model.Products;
import com.grupo2.DigiRED.model.ProductsDTO;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class ProductsServiceTest {

    @Autowired
    ProductsService productsService;

    @Autowired
    CitiesService citiesService;

    @Autowired
    CategoryService categoryService;

    private Long id;
    private Long lastId;
    private int size;

    private static final String NOMBRE = "Nuevo";
    private static final String DESCRIPCION = "Descripcion";
    private Cities CIUDAD;
    private Category CATEGORIA;



    @BeforeEach
    @Order(0)
    void cargarDataSet() {
        List<Products> productos = productsService.getAllProducts();
        size = productos.size();
        lastId = size!=0 ? productos.get(size - 1).getId() : 0;

        CIUDAD = citiesService.getAllCities().get(0);
        CATEGORIA = categoryService.getAllCategories().get(0);

        assertEquals(productos.size(), size);
        assertNotNull(NOMBRE);
        assertNotNull(DESCRIPCION);
        assertNotNull(CIUDAD);
        assertNotNull(CATEGORIA);
    }

    @Test
    @Order(1)
    void createProducts() {
        assertEquals(productsService.getAllProducts().size(), size);
        productsService.createProduct(new ProductsDTO(NOMBRE, DESCRIPCION, CIUDAD, CATEGORIA));
        List<Products> products = productsService.getAllProducts();
        assertEquals(products.size(), size + 1);
        id = products.get(size).getId();
        size = products.size();
    }

    @Test
    @Order(2)
    void findProducts() throws ResourceNotFoundException {
        Products producto = productsService.findProduct(id);
        assertNotNull(producto);
        assertEquals(producto.getName(), NOMBRE);
    }

    @Test
    @Order(3)
    void updateProducts() throws ResourceNotFoundException {
        String nuevoNombre = "KIA";
        assertEquals(productsService.getAllProducts().size(), size);
        productsService.updateProduct(id, new ProductsDTO(nuevoNombre, null, null, null));
        Products producto = productsService.findProduct(id);
        assertNotNull(producto);
        assertEquals(producto.getName(), nuevoNombre);
        assertEquals(productsService.getAllProducts().size(), size);
    }

    @Test
    @Order(4)
    void traerTodas() {
        List<Products> productos = productsService.getAllProducts();
        assertEquals(productos.size(), size);
    }

    @Test
    @Order(5)
    void deleteProducts() throws ResourceNotFoundException {
        assertEquals(productsService.getAllProducts().size(), size);
        productsService.deleteProduct(id);
        assertThrows(ResourceNotFoundException.class, () -> productsService.findProduct(id));
        assertEquals(productsService.getAllProducts().size(), size - 1);
        size = productsService.getAllProducts().size();
    }

}