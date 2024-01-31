package com.food.app.service;

import com.food.app.domain.Location;
import com.food.app.dto.LocationDTO;
import com.food.app.mapper.LocationMapper;
import com.food.app.repository.LocationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LocationService {
    private static final Logger log = LoggerFactory.getLogger(LocationService.class);

    @Autowired
    LocationMapper locationMapper;
    @Autowired
    LocationRepository locationRepository;
    public List<LocationDTO> findAllLocations() {
      List<Location> locations = locationRepository.findAll();

      List<LocationDTO> locationDTOS = new ArrayList<>();

      for(Location location : locations){
        locationDTOS.add(locationMapper.toDTO(location));
      }

      return locationDTOS;
    }

    public void saveLocationData(LocationDTO locationDTO){
     Location location =  locationMapper.toEntity(locationDTO);
     locationRepository.save(location);
    }
}
