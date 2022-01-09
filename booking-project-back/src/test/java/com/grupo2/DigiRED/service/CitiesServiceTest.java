package com.grupo2.DigiRED.service;

import com.grupo2.DigiRED.ResourceNotFoundException;
import com.grupo2.DigiRED.model.Cities;
import com.grupo2.DigiRED.model.CitiesDTO;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
class CitiesServiceTest {

    @Autowired
    CitiesService citiesService;

    private Long id;
    private Long lastId;
    private int size;

    private static final String CIUDAD = "Buenos Aires";
    private static final String PAIS = "Argentina";

    @BeforeAll
    void cargarDataSet() {
        List<Cities> ciudades = citiesService.getAllCities();
        size = ciudades.size();
        lastId = size!=0 ? ciudades.get(size - 1).getId() : 0;
    }

    @Test
    void createCities() {
        assertEquals(citiesService.getAllCities().size(), size);
        citiesService.createCities(new CitiesDTO(CIUDAD, PAIS));
        id = citiesService.getAllCities().get(size).getId();
        assertTrue(id != null);
        assertEquals(citiesService.getAllCities().size(), size + 1);
        size = citiesService.getAllCities().size();
    }

    @Test
    void findCities() throws ResourceNotFoundException {
        Cities ciudad = citiesService.findCity(id);
        assertNotNull(ciudad);
        assertEquals(ciudad.getName(), CIUDAD);
        assertEquals(ciudad.getCountryName(), PAIS);
    }

    @Test
    void updateCities() throws ResourceNotFoundException {
        String nuevaCiudad = "Corrientes";
        assertEquals(citiesService.getAllCities().size(), size);
        citiesService.updateCities(id, new CitiesDTO(null, nuevaCiudad));
        Cities ciudad = citiesService.findCity(id);
        assertNotNull(ciudad);
        assertEquals(ciudad.getName(), nuevaCiudad);
        assertEquals(ciudad.getCountryName(), PAIS);
        assertEquals(citiesService.getAllCities().size(), size);
    }

    @Test
    void traerTodas() {
        List<Cities> ciudades = citiesService.getAllCities();
        assertEquals(ciudades.size(), size);
    }

    @Test
    void deleteCities() throws ResourceNotFoundException {
        assertEquals(citiesService.getAllCities().size(), size);
        citiesService.deleteCity(id);
        assertThrows(ResourceNotFoundException.class, () -> citiesService.findCity(id));
        assertEquals(citiesService.getAllCities().size(), size - 1);
        size = citiesService.getAllCities().size();
    }


}