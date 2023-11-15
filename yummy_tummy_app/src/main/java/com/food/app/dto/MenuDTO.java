package com.food.app.dto;

import java.math.BigDecimal;

public class MenuDTO {

    private Integer itemId;


    private String itemName;

    private Boolean nonVeg;

    private String itemImage;


    private String itemDescription;


    private String itemFromRestaurant;


    private BigDecimal itemPrice;


    private String itemType;


    private String distance;

    public MenuDTO() {
    }

    public MenuDTO(String itemName, String itemImage, String itemDescription, String itemFromRestaurant, BigDecimal itemPrice, String itemType, String distance, Boolean nonVeg) {
        this.itemName = itemName;
        this.itemImage = itemImage;
        this.itemDescription = itemDescription;
        this.itemFromRestaurant = itemFromRestaurant;
        this.itemPrice = itemPrice;
        this.itemType = itemType;
        this.distance = distance;
        this.nonVeg = nonVeg;
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
        return "MenuDTO{" +
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
