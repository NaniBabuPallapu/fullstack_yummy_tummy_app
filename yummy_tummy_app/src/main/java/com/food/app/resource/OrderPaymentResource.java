package com.food.app.resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/orderPayment")
public class OrderPaymentResource {
    private final Logger log = LoggerFactory.getLogger(OrderPaymentResource.class);

}