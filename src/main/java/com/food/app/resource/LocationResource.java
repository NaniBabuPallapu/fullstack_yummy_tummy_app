package com.food.app.resource;

import com.food.app.dto.LocationDTO;
import com.food.app.service.LocationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/location")
public class LocationResource {
  private final Logger log = LoggerFactory.getLogger(LocationResource.class);

  @Autowired
  LocationService locationService;

  @GetMapping("/locations")
  public List<LocationDTO> getLocations() {
    return locationService.findAllLocations();
  }


  @PostMapping("/saveLocation")
  public HttpStatus saveLocationData(@RequestBody LocationDTO locationDTO) {
    locationService.saveLocationData(locationDTO);
    return HttpStatus.CREATED;
  }

}
