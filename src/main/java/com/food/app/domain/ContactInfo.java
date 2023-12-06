package com.food.app.domain;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name = "contact_info")
public class ContactInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "contact_info_id")
    private Integer contactInfoId;

    @Size(max = 26)
    @Column(name = "name",length = 26)
    private String name;

    @Size(max = 26)
    @Column(name = "email", length = 26)
    private String email;

    @Size(max = 26)
    @Column(name = "mobile_number", length = 26)
    private String mobileNumber;
}
