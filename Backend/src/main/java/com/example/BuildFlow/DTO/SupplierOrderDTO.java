package com.example.BuildFlow.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SupplierOrderDTO {
    private int orderId;
    private String supplier;
    private String deliveryAddress;
    private String requiredDate;
    private int quantity;
    private String description;
    private String orderStatus;
    private String deliveryStatus; // Additional property for SupplierOrder
}
