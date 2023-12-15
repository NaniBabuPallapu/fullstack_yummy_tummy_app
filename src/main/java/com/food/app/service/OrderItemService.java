package com.food.app.service;

import com.food.app.domain.OrderItem;
import com.food.app.dto.OrderItemDTO;
import com.food.app.mapper.OrderItemMapper;
import com.food.app.repository.OrderItemRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderItemService {

    private static final Logger log = LoggerFactory.getLogger(OrderItemService.class);

    @Autowired
    OrderItemRepository orderItemRepository;

    @Autowired
    OrderItemMapper orderItemMapper;

    public void saveOrderItem(OrderItemDTO orderItemDTO){
      OrderItem orderItem = orderItemMapper.toEntity(orderItemDTO);
      orderItemRepository.save(orderItem);
      log.info("saved the order-item successfully OrderItem : {}",orderItem);
    }

    public void saveOrderItemList( List<OrderItemDTO> orderItemDTOList){

      List<OrderItem> orderItemList = new ArrayList<>();
      if(!orderItemDTOList.isEmpty()){
        for(OrderItemDTO orderItemDTO : orderItemDTOList){
          orderItemList.add(orderItemMapper.toEntity(orderItemDTO));
        }
      }
      orderItemRepository.saveAll(orderItemList);
      log.info("saved the list of order-items successfully OrderItemList : {}",orderItemList);
    }


}
