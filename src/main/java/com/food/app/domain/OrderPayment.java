package com.food.app.domain;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
@Entity
@Table(name = "order_payment")
public class OrderPayment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_payment_id")
    private Integer orderPaymentId;

    @Column(name = "total_amount", precision = 12, scale = 2)
    private BigDecimal totalAmount;

    @Size(max = 30)
    @Column(name = "payment_method", length = 20)
    private String paymentMethod;

    @Column(name = "is_request_info")
    private Boolean requestCardInfo;

    @Column(name = "is_payment_successful")
    private Boolean isPaymentSuccessful;

    @OneToOne
    @JoinColumn(name = "order_id")
    private Order order;


}
