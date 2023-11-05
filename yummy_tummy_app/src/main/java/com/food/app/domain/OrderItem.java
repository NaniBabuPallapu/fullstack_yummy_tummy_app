package com.food.app.domain;

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

    @Size(max = 20)
    @Column(name = "item_name")
    private String itemName;

    @Size(max = 255)
    @Column(name = "item_description")
    private String itemDescription;

    @Size(max = 40)
    @Column(name = "restaurant_name")
    private String itemFromRestaurant;

    @Column(name = "is_item_available")
    private Boolean isItemAvailable;


    @Column(name = "item_price" , precision = 12 , scale = 2)
    private BigDecimal itemPrice;

    @Column(name = "item_type")
    private String itemType;

    @Column(name = "distance_at")
    private String distance;

    @Column(name="quantity")
    private Integer quantity;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

}
