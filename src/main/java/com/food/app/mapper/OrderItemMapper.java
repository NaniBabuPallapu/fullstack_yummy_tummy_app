package com.food.app.mapper;

import com.food.app.domain.OrderItem;
import com.food.app.dto.OrderItemDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface OrderItemMapper {

  OrderItemDTO toDTO(OrderItem orderItem);

  OrderItem toEntity(OrderItemDTO orderItemDTO);
}
