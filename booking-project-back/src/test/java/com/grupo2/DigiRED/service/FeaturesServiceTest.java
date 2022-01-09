package com.grupo2.DigiRED.service;

import com.grupo2.DigiRED.ResourceNotFoundException;
import com.grupo2.DigiRED.model.Features;
import com.grupo2.DigiRED.model.FeaturesDTO;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
class FeaturesServiceTest {


    @Autowired
    FeaturesService featuresService;

    private Long id;
    private Long lastId;
    private int size;

    private static final String NOMBRE = "5";
    private static final String ICONO = "fa-solid fa-user";

    @BeforeAll
    void cargarDataSet() {
        List<Features> caracteristicas = featuresService.getAllFeatures();
        size = caracteristicas.size();
    }

    @Test
    void createFeatures() {
        assertEquals(featuresService.getAllFeatures().size(), size);
        featuresService.createFeature(new FeaturesDTO(NOMBRE, ICONO));
        id = featuresService.getAllFeatures().get(size).getId();
        assertTrue(id != null);
        assertEquals(featuresService.getAllFeatures().size(), size + 1);
        size = featuresService.getAllFeatures().size();
    }

    @Test
    void findFeatures() throws ResourceNotFoundException {
        Features caracteristica = featuresService.findFeature(id);
        assertNotNull(caracteristica);
        assertEquals(caracteristica.getName(), NOMBRE);
        assertEquals(caracteristica.getIcon(), ICONO);
    }

    @Test
    void updateFeatures() throws ResourceNotFoundException {
        String nuevoIcono = "fa-solid fa-coffee";
        assertEquals(featuresService.getAllFeatures().size(), size);
        featuresService.updateFeature(id, new FeaturesDTO(null, nuevoIcono));
        Features caracteristica = featuresService.findFeature(id);
        assertNotNull(caracteristica);
        assertEquals(caracteristica.getName(), NOMBRE);
        assertEquals(caracteristica.getIcon(), nuevoIcono);
        assertEquals(featuresService.getAllFeatures().size(), size);
    }

    @Test
    void traerTodas() {
        List<Features> caracteristicas = featuresService.getAllFeatures();
        assertEquals(caracteristicas.size(), size);
    }

    @Test
    void deleteFeatures() throws ResourceNotFoundException {
        assertEquals(featuresService.getAllFeatures().size(), size);
        featuresService.deleteFeature(id);
        assertThrows(ResourceNotFoundException.class, () -> featuresService.findFeature(id));
        assertEquals(featuresService.getAllFeatures().size(), size -1);
        size = featuresService.getAllFeatures().size();
    }
}