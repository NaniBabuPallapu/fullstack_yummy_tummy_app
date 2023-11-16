package com.food.app.mapper.mappingImpl;

import com.food.app.domain.Menu;
import com.food.app.dto.MenuDTO;
import com.food.app.mapper.MenuMapper;
import org.springframework.stereotype.Component;

@Component
public class MenuMappingImpl implements MenuMapper {


    @Override
    public Menu toEntity(MenuDTO menuDTO) {

        if (menuDTO == null){
            return null;
        }

        Menu menu = new Menu();

        menu.setItemName(menuDTO.getItemName());
        menu.setNonVeg(menuDTO.getNonVeg());
        menu.setItemType(menuDTO.getItemType());
        menu.setItemDescription(menuDTO.getItemDescription());
        menu.setDistance(menuDTO.getDistance());
        menu.setItemPrice(menuDTO.getItemPrice());
        menu.setItemImage(menuDTO.getItemImage());
        menu.setItemFromRestaurant(menuDTO.getItemFromRestaurant());

        return menu;
    }

    @Override
    public MenuDTO toDTO(Menu menu) {

        if(menu == null){
            return null;
        }
        MenuDTO menuDTO = new MenuDTO();

        menuDTO.setItemName(menu.getItemName());
        menuDTO.setNonVeg(menu.getNonVeg());
        menuDTO.setItemType(menu.getItemType());
        menuDTO.setItemDescription(menu.getItemDescription());
        menuDTO.setDistance(menu.getDistance());
        menuDTO.setItemPrice(menu.getItemPrice());
        menuDTO.setItemImage(menu.getItemImage().split("/src")[1]);
        menuDTO.setItemFromRestaurant(menu.getItemFromRestaurant());

        return menuDTO;
    }
}
