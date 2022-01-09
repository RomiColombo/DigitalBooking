package com.grupo2.DigiRED.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo2.DigiRED.ResourceNotFoundException;
import com.grupo2.DigiRED.model.Features;
import com.grupo2.DigiRED.model.FeaturesDTO;
import com.grupo2.DigiRED.repository.FeaturesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FeaturesService  {

    @Autowired
    FeaturesRepository repository;

    @Autowired
    ObjectMapper mapper;

    // calling all the features
    public List<Features> getAllFeatures(){
        return repository.findAll();
    }

    // creating feature
    public void createFeature(FeaturesDTO features){
        for (Features f : getAllFeatures())
            if(f.getName().equals(features.getName()) && f.getIcon().equals(features.getIcon()))
                return;
        repository.save(mapper.convertValue(features, Features.class));
    }

    // reading feature by id
    public Features findFeature(Long id) throws ResourceNotFoundException {
        Features f = repository.findById(id).orElse(null);
        if(f == null)
            throw new ResourceNotFoundException("No se encontro la característica.");
        return f;
    }

    // updating feature
    public void updateFeature(Long id, FeaturesDTO featuresDTO) throws ResourceNotFoundException {
        Features features = findFeature(id);

        features.setName(featuresDTO.getName());
        features.setIcon(featuresDTO.getIcon());
        repository.save(features);
    }

    // deleting feature
    public String deleteFeature(Long id) throws ResourceNotFoundException {
        String deleted = findFeature(id).getName();
        repository.deleteById(id);
        return "La caracteristica " + deleted + " ha sido eliminada exitosamente";
    }

}