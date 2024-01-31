package com.food.app.mapper;

import com.food.app.domain.Location;
import com.food.app.dto.LocationDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")

public interface LocationMapper {

  LocationDTO toDTO(Location location);

  Location toEntity(LocationDTO locationDTO);
}
