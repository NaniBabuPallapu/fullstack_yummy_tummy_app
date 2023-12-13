package com.food.app.dto;


import java.math.BigDecimal;

public class OrderPaymentDTO {


    private Integer orderPaymentId;

    private BigDecimal totalAmount;

    private String paymentMethod;


    private Boolean requestCardInfo;


    private Boolean isPaymentSuccessful;

    private OrderDTO orderDTO;


}
