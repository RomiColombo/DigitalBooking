package com.grupo2.DigiRED.service;

import com.grupo2.DigiRED.ResourceNotFoundException;
import com.grupo2.DigiRED.model.Category;
import com.grupo2.DigiRED.model.CategoryDTO;
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.function.Executable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class CategoryServiceTest {

    @Autowired
    CategoryService categoryService;

    private Long id;
    private Long lastId;
    private int size;

    private static final String TITULO = "SUV";
    private static final String DESCRIPCION = "Deportivo";
    private static final String IMAGEN = "https://www.avis.cl/media/cache/categoria_716/uploads/imagenes/3b14ea9450f9261eadbfd359f1fa61e018d8e64d.jpg";

    @Test
    void cargarDataSet() {
        List<Category> categories = categoryService.getAllCategories();
        size = categories.size();
        lastId = size!=0 ? categories.get(size - 1).getId() : 0;

        assertNotNull(TITULO);
        assertNotNull(DESCRIPCION);
        assertNotNull(IMAGEN);
    }

    @Test
    void createCategory() {
        assertEquals(categoryService.getAllCategories().size(), size);
        categoryService.createCategory(new CategoryDTO(TITULO, DESCRIPCION, IMAGEN));
        id = categoryService.getAllCategories().get(size).getId();
        assertTrue(id != null);
        assertEquals(categoryService.getAllCategories().size(), size + 1);
        size = categoryService.getAllCategories().size();
    }

    @Test
    void findCategory() throws ResourceNotFoundException {
        Category categoria = categoryService.findCategory(id);
        assertNotNull(categoria);
        assertEquals(categoria.getTitle(), TITULO);
        assertEquals(categoria.getDescription(), DESCRIPCION);
        assertEquals(categoria.getImage(), IMAGEN);
    }

    @Test
    void updateCategory() throws ResourceNotFoundException {
        String nuevaDes = "descripción";
        assertEquals(categoryService.getAllCategories().size(), size);
        categoryService.updateCategory(id, new CategoryDTO(null, nuevaDes, null));
        Category categoria = categoryService.findCategory(id);
        assertNotNull(categoria);
        assertEquals(categoria.getTitle(), TITULO);
        assertEquals(categoria.getDescription(), nuevaDes);
        assertEquals(categoria.getImage(), IMAGEN);
        assertEquals(categoryService.getAllCategories().size(), size);
    }

    @Test
    void traerTodas() {
        List<Category> categories = categoryService.getAllCategories();
        assertTrue(!categories.isEmpty());
        assertTrue(categories.size() == 1);
    }

    @Test
    void deleteCategory() throws ResourceNotFoundException {
        assertEquals(categoryService.getAllCategories().size(), size);
        categoryService.deleteCategory(id);
        assertThrows(ResourceNotFoundException.class, () -> categoryService.findCategory(id));
        assertEquals(categoryService.getAllCategories().size(), size -1);
        size = categoryService.getAllCategories().size();
    }



}