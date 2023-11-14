package com.food.app.resource;

import com.food.app.enums.StringConstants;
import com.food.app.service.MenuService;
import com.food.app.utils.ApiResponse;
import com.food.app.dto.MenuDTO;
import com.food.app.utils.ResponseUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
public class MenuResource {
    private final Logger log = LoggerFactory.getLogger(MenuResource.class);


    @Autowired
    MenuService menuService;

    @PostMapping("/save-item")
    public ResponseEntity<ApiResponse<MenuDTO>> saveItem(@RequestBody MenuDTO menuDTO){

        ApiResponse<MenuDTO> response = null;
        try {
            response = new ApiResponse<>();
            menuService.saveMenuItem(menuDTO);
            ResponseUtils.updateResponse(response, menuDTO, StringConstants.SUCCESS);
            log.info("Successfully saved menu-item menuDto:{}",menuDTO);
        } catch (Exception e) {
            log.info("exception Occurred while saving item  menuDto : {}, error : {}",menuDTO,e);
            ResponseUtils.updateResponse(response, menuDTO, StringConstants.FAILED);
        }
        return new ResponseEntity<>(response,HttpStatus.CREATED);
    }

    @GetMapping("/get-menu-items")
    public List<MenuDTO> getMenuItemsList(){
        return menuService.getMenuItems();
    }

}

