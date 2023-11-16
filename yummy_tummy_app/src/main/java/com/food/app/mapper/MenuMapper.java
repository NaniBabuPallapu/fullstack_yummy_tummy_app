package com.food.app.mapper;

import com.food.app.domain.Menu;
import com.food.app.dto.MenuDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MenuMapper {

    Menu toEntity(MenuDTO menuDTO);

    MenuDTO toDTO(Menu menu);
}
