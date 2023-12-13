package com.food.app.domain;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.math.BigDecimal;

@Entity
@Table(name = "menu")
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Integer itemId;

    @Size(max = 100)
    @Column(name = "item_name")
    private String itemName;

    @Column(name = "non_veg", columnDefinition = "TINYINT(1) DEFAULT 0")
    private Boolean nonVeg;


    @Column(name="item_img")
    private String itemImage;

    @Size(max = 255)
    @Column(name = "description")
    private String itemDescription;

    @Size(max = 100)
    @Column(name = "restaurant_name")
    private String itemFromRestaurant;

    @Column(name = "item_price" , precision = 12 , scale = 2)
    private BigDecimal itemPrice;

    @Column(name = "item_type")
    private String itemType;

    @Column(name = "distance_at")
    private String distance;


    public Menu(Integer itemId, String itemName, String itemImage, String itemDescription, String itemFromRestaurant, BigDecimal itemPrice, String itemType, String distance, Boolean nonVeg) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemImage = itemImage;
        this.itemDescription = itemDescription;
        this.itemFromRestaurant = itemFromRestaurant;
        this.itemPrice = itemPrice;
        this.itemType = itemType;
        this.distance = distance;
        this.nonVeg = nonVeg;
    }

    public Menu(String itemName, String itemImage, String itemDescription, String itemFromRestaurant, Boolean isItemAvailable, BigDecimal itemPrice, String itemType, String distance) {
        this.itemName = itemName;
        this.itemImage = itemImage;
        this.itemDescription = itemDescription;
        this.itemFromRestaurant = itemFromRestaurant;
        this.itemPrice = itemPrice;
        this.itemType = itemType;
        this.distance = distance;
    }

    public Menu() {

    }

    public Integer getItemId() {
        return itemId;
    }

    public void setItemId(Integer itemId) {
        this.itemId = itemId;
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

    public Boolean getNonVeg() {
        return nonVeg;
    }

    public void setNonVeg(Boolean nonVeg) {
        this.nonVeg = nonVeg;
    }

    @Override
    public String toString() {
        return "Menu{" +
                "itemId=" + itemId +
                ", itemName='" + itemName + '\'' +
                ", nonVeg='" + nonVeg + '\'' +
                ", itemImage='" + itemImage + '\'' +
                ", itemDescription='" + itemDescription + '\'' +
                ", itemFromRestaurant='" + itemFromRestaurant + '\'' +
                ", itemPrice=" + itemPrice +
                ", itemType='" + itemType + '\'' +
                ", distance='" + distance + '\'' +
                '}';
    }
}
