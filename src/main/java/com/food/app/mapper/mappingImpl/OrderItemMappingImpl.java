package com.food.app.mapper.mappingImpl;

import com.food.app.domain.OrderItem;
import com.food.app.dto.OrderDTO;
import com.food.app.dto.OrderItemDTO;
import com.food.app.mapper.OrderItemMapper;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class OrderItemMappingImpl implements OrderItemMapper {
  @Override
  public OrderItemDTO toDTO(OrderItem orderItem) {

    if (orderItem == null){
      return null;
    }
    OrderItemDTO orderItemDTO = new OrderItemDTO();
    orderItemDTO.setOrderItemId(orderItem.getOrderItemId());
    orderItemDTO.setItemName(orderItem.getItemName());
    orderItemDTO.setItemImage(orderItem.getItemImage());
    orderItemDTO.setNonVeg(orderItem.getNonVeg());
    orderItemDTO.setItemDescription(orderItem.getItemDescription());
    orderItemDTO.setItemFromRestaurant(orderItem.getItemFromRestaurant());
    orderItemDTO.setItemAvailable(orderItem.getItemAvailable());
    orderItemDTO.setItemType(orderItem.getItemType());
    orderItemDTO.setDistance(orderItem.getDistance());
    orderItemDTO.setQuantity(orderItem.getQuantity());
    orderItemDTO.setItemPrice(orderItem.getItemPrice());
    //TODO: need to convert OrderItem into OrderItemDTO
    return orderItemDTO;
  }

  @Override
  public OrderItem toEntity(OrderItemDTO orderItemDTO) {

    if (orderItemDTO == null){
      return null;
    }
    OrderItem orderItem = new OrderItem();
    orderItem.setOrderItemId(orderItemDTO.getOrderItemId());
    orderItem.setItemName(orderItemDTO.getItemName());
    orderItem.setItemImage(orderItemDTO.getItemImage());
    orderItem.setNonVeg(orderItemDTO.getNonVeg());
    orderItem.setItemDescription(orderItemDTO.getItemDescription());
    orderItem.setItemFromRestaurant(orderItemDTO.getItemFromRestaurant());
    orderItem.setItemAvailable(orderItemDTO.getItemAvailable());
    orderItem.setItemType(orderItemDTO.getItemType());
    orderItem.setDistance(orderItemDTO.getDistance());
    orderItem.setQuantity(orderItemDTO.getQuantity());
    orderItem.setItemPrice(orderItemDTO.getItemPrice());
    //TODO: need to convert OrderItemDTO into OrderItem
    return orderItem;
  }
}
