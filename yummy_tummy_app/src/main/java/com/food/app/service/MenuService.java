package com.food.app.service;

import com.food.app.domain.Menu;
import com.food.app.dto.MenuDTO;
import com.food.app.mapper.MenuMapper;
import com.food.app.repository.MenuRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MenuService {
    private static final Logger log = LoggerFactory.getLogger(MenuService.class);

    @Autowired
    MenuRepository menuRepository;

    @Autowired
    MenuMapper menuMapper;


    public void saveMenuItem(MenuDTO menuDTO){
       Menu menu =  menuMapper.toEntity(menuDTO);
        menuRepository.save(menu);
    }

    public List<MenuDTO> getMenuItems(){

        List<Menu> menuList = menuRepository.findAll();

        List<MenuDTO> menuDTOList = new ArrayList<>();
        menuList.forEach(menu -> menuDTOList.add(menuMapper.toDTO(menu)));

        return menuDTOList;
    }
}
