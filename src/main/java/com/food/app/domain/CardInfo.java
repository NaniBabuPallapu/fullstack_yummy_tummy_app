package com.food.app.domain;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name = "card_info")
public class CardInfo {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name = "card_info_id")
    private Integer cardInfoId;

    @Size(max = 16)
    @Column(name = "card_number", length = 16)
    private String cardNumber;

    @Size(max = 8)
    @Column(name = "expiry_date", length = 8)
    private String expiryDate;

    @Size(max = 3)
    @Column(name ="cvv", length = 3)
    private Integer cvv;

    @Size(max = 25)
    @Column(name = "name_on_card", length = 25)
    private String nameOnCard;


    @Column(name = "secure_card")
    private Boolean secureCard;

    @OneToOne
    @JoinColumn(name = "order_payment_id")
    private OrderPayment orderPayment;

    @OneToOne
    @JoinColumn(name = "order_id")
    private Order order;

}
