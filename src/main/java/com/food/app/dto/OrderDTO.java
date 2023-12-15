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

    public OrderDTO() {
    }

    public Integer getOrderId() {
      return orderId;
    }

    public void setOrderId(Integer orderId) {
      this.orderId = orderId;
    }

    public String getOrderStatus() {
      return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
      this.orderStatus = orderStatus;
    }

    public BigDecimal getPrice() {
      return price;
    }

    public void setPrice(BigDecimal price) {
      this.price = price;
    }

    public BigDecimal getDiscount() {
      return discount;
    }

    public void setDiscount(BigDecimal discount) {
      this.discount = discount;
    }

    public BigDecimal getGstTax() {
      return gstTax;
    }

    public void setGstTax(BigDecimal gstTax) {
      this.gstTax = gstTax;
    }

    public BigDecimal getTotalPrice() {
      return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
      this.totalPrice = totalPrice;
    }

    public Boolean getSubmitted() {
      return isSubmitted;
    }

    public void setSubmitted(Boolean submitted) {
      isSubmitted = submitted;
    }

    public String getSubmittedBy() {
      return submittedBy;
    }

    public void setSubmittedBy(String submittedBy) {
      this.submittedBy = submittedBy;
    }

    public LocalDateTime getSubmittedDate() {
      return submittedDate;
    }

    public void setSubmittedDate(LocalDateTime submittedDate) {
      this.submittedDate = submittedDate;
    }

    public Boolean getApproved() {
      return isApproved;
    }

    public void setApproved(Boolean approved) {
      isApproved = approved;
    }

    public String getApprovedBy() {
      return approvedBy;
    }

    public void setApprovedBy(String approvedBy) {
      this.approvedBy = approvedBy;
    }

    public LocalDateTime getApprovedDate() {
      return approvedDate;
    }

    public void setApprovedDate(LocalDateTime approvedDate) {
      this.approvedDate = approvedDate;
    }

    public Boolean getDelivered() {
      return isDelivered;
    }

    public void setDelivered(Boolean delivered) {
      isDelivered = delivered;
    }

    public LocalDateTime getDeliveredAt() {
      return deliveredAt;
    }

    public void setDeliveredAt(LocalDateTime deliveredAt) {
      this.deliveredAt = deliveredAt;
    }

    public UserDTO getUserDTO() {
      return userDTO;
    }

    public void setUserDTO(UserDTO userDTO) {
      this.userDTO = userDTO;
    }

    public List<OrderItemDTO> getOrderItemDTOList() {
      return orderItemDTOList;
    }

    public void setOrderItemDTOList(List<OrderItemDTO> orderItemDTOList) {
      this.orderItemDTOList = orderItemDTOList;
    }
}
