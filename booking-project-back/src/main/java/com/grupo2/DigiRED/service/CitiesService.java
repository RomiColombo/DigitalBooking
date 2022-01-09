package com.grupo2.DigiRED.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo2.DigiRED.ResourceNotFoundException;
import com.grupo2.DigiRED.model.Cities;
import com.grupo2.DigiRED.model.CitiesDTO;
import com.grupo2.DigiRED.repository.CitiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CitiesService {

    @Autowired
    CitiesRepository repository;

    @Autowired
    ObjectMapper mapper;

    // calling all the cities
    public List<Cities> getAllCities(){
        return repository.findAll();
    }

    // creating city
    public void createCities(CitiesDTO cities){
        for (Cities c : getAllCities())
            if(c.getName().equals(cities.getName()) && c.getCountryName().equals(cities.getCountryName()))
                return;
        repository.save(mapper.convertValue(cities, Cities.class));
    }

    // reading city by id
    public Cities findCity(Long id) throws ResourceNotFoundException{
        Cities c = repository.findById(id).orElse(null);
        if(c == null)
            throw new ResourceNotFoundException("No se encontro la Ciudad");
        return c;
    }

    // updating city
    public void updateCities(Long id, CitiesDTO citiesDTO) throws ResourceNotFoundException {
        Cities cities = findCity(id);

        cities.setName(citiesDTO.getName());
        cities.setCountryName(citiesDTO.getCountryName());
        repository.save(cities);
    }

    // deleting city
    public String deleteCity(Long id) throws ResourceNotFoundException {
        String deleted = findCity(id).getName();
        repository.deleteById(id);
        return "La ciudad " + deleted + " ha sido eliminada exitosamente";
    }

}
