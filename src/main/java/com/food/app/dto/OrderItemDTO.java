package com.food.app.dto;

import java.math.BigDecimal;


public class OrderItemDTO {


  private Integer orderItemId;

  private String itemName;

  private String itemImage;

  private Boolean nonVeg;


  private String itemDescription;


  private String itemFromRestaurant;

  private Boolean isItemAvailable;


  private BigDecimal itemPrice;

  private String itemType;

  private String distance;

  private Integer quantity;


  private OrderDTO orderDTO;

  public OrderItemDTO() {
  }

  public OrderItemDTO(Integer orderItemId, String itemName,String itemImage, Boolean nonVeg, String itemDescription, String itemFromRestaurant, Boolean isItemAvailable, BigDecimal itemPrice, String itemType, String distance, Integer quantity, OrderDTO orderDTO) {
    this.orderItemId = orderItemId;
    this.itemName = itemName;
    this.itemImage = itemImage;
    this.nonVeg = nonVeg;
    this.itemDescription = itemDescription;
    this.itemFromRestaurant = itemFromRestaurant;
    this.isItemAvailable = isItemAvailable;
    this.itemPrice = itemPrice;
    this.itemType = itemType;
    this.distance = distance;
    this.quantity = quantity;
    this.orderDTO = orderDTO;
  }


  public Integer getOrderItemId() {
    return orderItemId;
  }

  public void setOrderItemId(Integer orderItemId) {
    this.orderItemId = orderItemId;
  }

  public String getItemName() {
    return itemName;
  }

  public void setItemName(String itemName) {
    this.itemName = itemName;
  }

  public String getItemImage() {
    return itemImage;
  }

  public void setItemImage(String itemImage) {
    this.itemImage = itemImage;
  }

  public Boolean getNonVeg() {
    return nonVeg;
  }

  public void setNonVeg(Boolean nonVeg) {
    this.nonVeg = nonVeg;
  }

  public String getItemDescription() {
    return itemDescription;
  }

  public void setItemDescription(String itemDescription) {
    this.itemDescription = itemDescription;
  }

  public String getItemFromRestaurant() {
    return itemFromRestaurant;
  }

  public void setItemFromRestaurant(String itemFromRestaurant) {
    this.itemFromRestaurant = itemFromRestaurant;
  }

  public Boolean getItemAvailable() {
    return isItemAvailable;
  }

  public void setItemAvailable(Boolean itemAvailable) {
    isItemAvailable = itemAvailable;
  }

  public BigDecimal getItemPrice() {
    return itemPrice;
  }

  public void setItemPrice(BigDecimal itemPrice) {
    this.itemPrice = itemPrice;
  }

  public String getItemType() {
    return itemType;
  }

  public void setItemType(String itemType) {
    this.itemType = itemType;
  }

  public String getDistance() {
    return distance;
  }

  public void setDistance(String distance) {
    this.distance = distance;
  }

  public Integer getQuantity() {
    return quantity;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }

  public OrderDTO getOrderDTO() {
    return orderDTO;
  }

  public void setOrderDTO(OrderDTO orderDTO) {
    this.orderDTO = orderDTO;
  }

  @Override
  public String toString() {
    return "OrderItemDTO{" +
      "orderItemId=" + orderItemId +
      ", itemName='" + itemName + '\'' +
      ", nonVeg=" + nonVeg +
      ", itemDescription='" + itemDescription + '\'' +
      ", itemFromRestaurant='" + itemFromRestaurant + '\'' +
      ", isItemAvailable=" + isItemAvailable +
      ", itemPrice=" + itemPrice +
      ", itemType='" + itemType + '\'' +
      ", distance='" + distance + '\'' +
      ", quantity=" + quantity +
      ", orderDTO=" + orderDTO +
      '}';
  }
}
