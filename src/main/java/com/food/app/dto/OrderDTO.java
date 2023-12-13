package com.food.app.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public class OrderDTO {


    private Integer orderId;

    private String orderStatus;

    private BigDecimal price;

    private BigDecimal discount;

    private BigDecimal gstTax;

    private BigDecimal totalPrice;

    private Boolean isSubmitted;

    private String submittedBy;


    private LocalDateTime submittedDate;

    private Boolean isApproved;

    private String approvedBy;

    private LocalDateTime approvedDate;

    private Boolean isDelivered;

    private LocalDateTime deliveredAt;

    private UserDTO userDTO;

    private List<OrderItemDTO> orderItemDTOList;



}
