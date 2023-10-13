package com.example.BuildFlow.Repo;

import com.example.BuildFlow.Entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepo extends JpaRepository<Order,Integer> {
}
