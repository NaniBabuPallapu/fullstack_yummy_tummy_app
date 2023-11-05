package com.food.app.dto;

import java.math.BigDecimal;


public class OrderItemDTO {


    private Integer orderItemId;

    private String itemName;

    private String itemDescription;


    private String itemFromRestaurant;

    private Boolean isItemAvailable;


    private BigDecimal itemPrice;

    private String itemType;

    private String distance;

    private Integer quantity;


    private OrderDTO orderDTO;

}
