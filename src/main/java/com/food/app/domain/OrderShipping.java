package com.food.app.domain;


import javax.persistence.*;

@Entity
@Table(name = "order_shipping")
public class OrderShipping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_shipping_id")
    private Integer orderShippingId;

    @OneToOne
    @JoinColumn(name = "location_id")
    private Location location;

    @OneToOne
    @JoinColumn(name = "contact_info_id")
    private ContactInfo contactInfo;

    @OneToOne
    @JoinColumn(name = "order_id")
    private Order order;




}
