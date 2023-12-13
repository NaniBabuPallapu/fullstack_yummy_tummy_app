package com.food.app.resource;

import com.food.app.dto.OrderItemDTO;
import com.food.app.service.OrderItemService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/orderItem")
public class OrderItemResource {
  private final Logger log = LoggerFactory.getLogger(OrderItemResource.class);


  @Autowired
  OrderItemService orderItemService;

  @PostMapping("/saveOrderItemsList")
  public ResponseEntity<String> saveOrderItem(@RequestBody List<OrderItemDTO> orderItemDTOList) {

    try {
      orderItemService.saveOrderItemList(orderItemDTOList);
      return new ResponseEntity<>("ORDER ITEMS ARE SAVED", HttpStatus.ACCEPTED);
    } catch (Exception e) {
      log.info("Exception Occurred while saving the OrderItems in DB exception : ", e);
      return new ResponseEntity<>("FAILED TO SAVE ORDER ITEMS", HttpStatus.BAD_REQUEST);
    }
  }

}
