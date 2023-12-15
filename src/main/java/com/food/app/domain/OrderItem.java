package com.food.app.domain;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.math.BigDecimal;

@Entity
@Table(name = "order_item")
public class OrderItem {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "order_item_id")
  private Integer orderItemId;

  @Size(max = 100)
  @Column(name = "item_name")
  private String itemName;

  @Column(name = "item_img")
  private String itemImage;

  @Column(name = "non_veg", columnDefinition = "TINYINT(1) DEFAULT 0")
  private Boolean nonVeg;

  @Size(max = 255)
  @Column(name = "item_description")
  private String itemDescription;

  @Size(max = 100)
  @Column(name = "restaurant_name")
  private String itemFromRestaurant;

  @Column(name = "is_item_available")
  private Boolean isItemAvailable;


  @Column(name = "item_price", precision = 12, scale = 2)
  private BigDecimal itemPrice;

  @Column(name = "item_type")
  private String itemType;

  @Column(name = "distance_at")
  private String distance;

  @Column(name = "quantity")
  private Integer quantity;

  @Column(name = "is_selected")
  private Boolean isSelected;

  @ManyToOne
  @JoinColumn(name = "order_id")
  private Order order;

  public OrderItem() {
  }

  public OrderItem(Integer orderItemId, String itemName, String itemImage, Boolean nonVeg, String itemDescription, String itemFromRestaurant, Boolean isItemAvailable, BigDecimal itemPrice, String itemType, String distance, Integer quantity, Boolean isSelected, Order order) {
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
    this.isSelected = isSelected;
    this.order = order;
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

  public Boolean getSelected() {
    return isSelected;
  }

  public void setSelected(Boolean selected) {
    isSelected = selected;
  }

  public Order getOrder() {
    return order;
  }

  public void setOrder(Order order) {
    this.order = order;
  }

  @Override
  public String toString() {
    return "OrderItem{" +
      "orderItemId=" + orderItemId +
      ", itemName='" + itemName + '\'' +
      ", itemImage='" + itemImage + '\'' +
      ", nonVeg=" + nonVeg +
      ", itemDescription='" + itemDescription + '\'' +
      ", itemFromRestaurant='" + itemFromRestaurant + '\'' +
      ", isItemAvailable=" + isItemAvailable +
      ", itemPrice=" + itemPrice +
      ", itemType='" + itemType + '\'' +
      ", distance='" + distance + '\'' +
      ", quantity=" + quantity +
      ", isSelected=" + isSelected +
      ", order=" + order +
      '}';
  }
}
