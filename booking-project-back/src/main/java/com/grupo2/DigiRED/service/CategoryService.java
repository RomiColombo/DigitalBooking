package com.grupo2.DigiRED.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo2.DigiRED.GlobalExceptionHandler;
import com.grupo2.DigiRED.ResourceNotFoundException;
import com.grupo2.DigiRED.model.Category;
import com.grupo2.DigiRED.model.CategoryDTO;
import com.grupo2.DigiRED.repository.CategoryRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository repository;

    @Autowired
    ObjectMapper mapper;

    private static final Logger logger = Logger.getLogger(CategoryService.class);

    // create
    public void createCategory(CategoryDTO category){

        logger.info("Se esta creando la categoria: " + category.toString());

        for (Category cat : getAllCategories())
            if(cat.getTitle().equals(category.getTitle()) || cat.getDescription().equals(category.getDescription()))
                return;

        // se mapea el dto (parametro) a entidad, y se guarda la entidad..
        repository.save(mapper.convertValue(category, Category.class));
    }

    // read
    public List<Category> getAllCategories(){
        return repository.findAll();
    }

    // read by id
    public Category findCategory(Long id) throws ResourceNotFoundException{

        logger.info("Se esta buscando la categoria con id: " + id);

        Category category = repository.findById(id).orElse(null);
        if(category == null)
            throw new ResourceNotFoundException("No se encontro la categoria");
        return category;
    }

    // update
    public void updateCategory(Long id,CategoryDTO categoryDTO) throws ResourceNotFoundException {

        logger.info("Se esta actualizando la categoria con id: " + id + "\n con los siguientes datos: " + categoryDTO.toString());

        Category category = findCategory(id);

        category.setDescription(categoryDTO.getDescription());
        category.setImage(categoryDTO.getImage());
        category.setTitle(categoryDTO.getTitle());
        repository.save(category);
    }

    // delete
    public void deleteCategory(Long id) throws ResourceNotFoundException {

        logger.info("Se esta borrando la categoria con id: " + id);

        Category category = findCategory(id);

        repository.deleteById(id);
    }

}
