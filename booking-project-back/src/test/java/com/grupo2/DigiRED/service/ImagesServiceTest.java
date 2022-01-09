package com.grupo2.DigiRED.service;

import com.grupo2.DigiRED.ResourceNotFoundException;
import com.grupo2.DigiRED.model.Images;
import com.grupo2.DigiRED.model.ImagesDTO;
import com.grupo2.DigiRED.model.Images;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
class ImagesServiceTest {

    @Autowired
    ImagesService imagesService;

    private Long id;
    private Long lastId;
    private int size;

    private static final String TITULO = "SUV";
    private static final String IMAGEN = "https://www.avis.cl/media/cache/categoria_716/uploads/imagenes/3b14ea9450f9261eadbfd359f1fa61e018d8e64d.jpg";

    @BeforeAll
    void cargarDataSet() {
        List<Images> images = imagesService.getAllImages();
        size = images.size();
        lastId = size!=0 ? images.get(size - 1).getId() : 0;
    }

    @Test
    void createImage() {
        assertEquals(imagesService.getAllImages().size(), size);
        imagesService.createImages(new ImagesDTO(TITULO, IMAGEN));
        id = imagesService.getAllImages().get(size).getId();
        assertTrue(id != null);
        assertEquals(imagesService.getAllImages().size(), size + 1);
        size = imagesService.getAllImages().size();
    }

    @Test
    void findImage() throws ResourceNotFoundException {
        Images images = imagesService.findImage(id);
        assertNotNull(images);
        assertEquals(images.getTitle(), TITULO);
        assertEquals(images.getUrl(), IMAGEN);
    }

    @Test
    void updateImage() throws ResourceNotFoundException {
        String nuevoTitulo = "Deportivo";
        assertEquals(imagesService.getAllImages().size(), size);
        imagesService.updateImages(id, new ImagesDTO(nuevoTitulo, null));
        Images images = imagesService.findImage(id);
        assertNotNull(images);
        assertEquals(images.getTitle(), nuevoTitulo);
        assertEquals(images.getUrl(), IMAGEN);
        assertEquals(imagesService.getAllImages().size(), size);
    }

    @Test
    void traerTodas() {
        List<Images> Images = imagesService.getAllImages();
        assertTrue(!Images.isEmpty());
        assertTrue(Images.size() == 1);
    }

    @Test
    void deleteImage() throws ResourceNotFoundException {
        assertEquals(imagesService.getAllImages().size(), size);
        imagesService.deleteImage(id);
        assertThrows(ResourceNotFoundException.class, () -> imagesService.findImage(id));
        assertEquals(imagesService.getAllImages().size(), size -1);
        size = imagesService.getAllImages().size();
    }


}