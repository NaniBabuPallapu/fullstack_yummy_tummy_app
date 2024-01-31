package com.food.app.mapper.mappingImpl;

import com.food.app.domain.Location;
import com.food.app.dto.LocationDTO;
import com.food.app.mapper.LocationMapper;
import org.springframework.stereotype.Component;

@Component
public class LocationMappingImpl implements LocationMapper {
  @Override
  public LocationDTO toDTO(Location location) {
    if(location == null){
      return null;
    }
    LocationDTO locationDTO  = new LocationDTO();
    locationDTO.setLocationId(location.getLocationId());
    locationDTO.setDoorNumber(location.getDoorNumber());
    locationDTO.setAddressLine1(location.getAddressLine1());
    locationDTO.setAddressLine2(location.getAddressLine2());
    locationDTO.setCity(location.getCity());
    locationDTO.setState(location.getState());
    locationDTO.setCountry(location.getCountry());
    locationDTO.setPinCode(location.getPinCode());

    return locationDTO;
  }

  @Override
  public Location toEntity(LocationDTO locationDTO) {
    if (locationDTO == null) {
      return null;
    }

    Location location = new Location();
    location.setLocationId(locationDTO.getLocationId());
    location.setDoorNumber(locationDTO.getDoorNumber());
    location.setAddressLine1(locationDTO.getAddressLine1());
    location.setAddressLine2(locationDTO.getAddressLine2());
    location.setCity(locationDTO.getCity());
    location.setState(locationDTO.getState());
    location.setCountry(locationDTO.getCountry());
    location.setPinCode(locationDTO.getPinCode());

    return location;
  }
}
