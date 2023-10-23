package com.example.BuildFlow.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data

public class OrderDTO {
    int orderId;
    String supplier;
    String deliveryAddress;
    String requiredDate;
    int quantity;
    double price;
    String description;
    String orderStatus;
}
