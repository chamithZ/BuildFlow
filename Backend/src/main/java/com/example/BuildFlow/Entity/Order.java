package com.example.BuildFlow.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="Orders")

public class Order {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    int orderId;
    String supplier;
    String deliveryAddress;
    String requiredDate;
    int quantity;
    String description;
    boolean orderStatus;
}
