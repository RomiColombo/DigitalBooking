package com.grupo2.DigiRED.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo2.DigiRED.ResourceNotFoundException;
import com.grupo2.DigiRED.model.*;
import com.grupo2.DigiRED.repository.ImagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ImagesService {

    @Autowired
    ImagesRepository repository;

    @Autowired
    ObjectMapper mapper;

    // calling all the images
    public List<Images> getAllImages(){
        return repository.findAll();
    }

    // creating image
    public void createImages(ImagesDTO images){
        for (Images c : getAllImages())
            if(c.getTitle().equals(images.getTitle()) && c.getUrl().equals(images.getUrl()))
                return;
        repository.save(mapper.convertValue(images, Images.class));
    }

    // reading image by id
    public Images findImage(Long id) throws ResourceNotFoundException {
        Images i = repository.findById(id).orElse(null);
        if(i == null)
            throw new ResourceNotFoundException("No se encontro la imagen");
        return i;
    }

    // updating images
    public void updateImages(Long id, ImagesDTO imagesDTO) throws ResourceNotFoundException {
        Images images = findImage(id);

        images.setTitle(imagesDTO.getTitle());
        images.setUrl(imagesDTO.getUrl());
        repository.save(images);
    }

    // deleting image
    public String deleteImage(Long id) throws ResourceNotFoundException {
        String deleted = findImage(id).getTitle();
        repository.deleteById(id);
        return "La imagen " + deleted + " ha sido eliminada exitosamente";
    }


}
