package com.food.app.domain;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Integer orderId;
    @Size(max = 10)
    @Column(name = "order_status")
    private String orderStatus;

    @Column(name = "price", precision = 12 , scale = 2)
    private BigDecimal price;

    @Column(name = "discount", precision = 12 , scale = 2)
    private BigDecimal discount;

    @Column(name = "gst_tax", precision = 12 , scale = 2)
    private BigDecimal gstTax;

    @Column(name = "total_amount", precision = 12 , scale = 2)
    private BigDecimal totalPrice;

    @Column(name = "is_submitted")
    private Boolean isSubmitted;

    @Column(name = "submitted_by")
    private String submittedBy;

    @Column(name = "submitted_date")
    private LocalDateTime submittedDate;

    @Column(name = "is_approved")
    private Boolean isApproved;

    @Column(name = "approved_by")
    private String approvedBy;

    @Column(name = "approved_date")
    private LocalDateTime approvedDate;

    @Column(name = "is_delivered")
    private Boolean isDelivered;

    @Column(name = "delivered_at")
    private LocalDateTime deliveredAt;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderItem> orderItemList;



}
