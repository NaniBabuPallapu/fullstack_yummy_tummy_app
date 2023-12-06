package com.food.app.repository;

import com.food.app.domain.OrderShipping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderShippingRepository extends JpaRepository<OrderShipping, Integer> {
}
