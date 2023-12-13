package com.food.app.domain;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name = "location")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "location_id")
    private Integer locationId;

    @Size(max = 10)
    @Column(name = "door_number" ,length = 10)
    private String doorNumber;

    @Size(max = 100)
    @Column(name = "address_line_1", length = 50)
    private String addressLine1;

    @Size(max = 100)
    @Column(name = "address_line_2", length = 50)
    private String addressLine2;

    @Size(max = 20)
    @Column(name = "city", length = 15)
    private String city;

    @Size(max = 20)
    @Column(name = "state", length = 15)
    private String state;

    @Size(max = 20)
    @Column(name = "country", length = 15)
    private String country;

    @Size(max = 10)
    @Column(name = "pin_code", length = 10)
    private String pinCode;


}
