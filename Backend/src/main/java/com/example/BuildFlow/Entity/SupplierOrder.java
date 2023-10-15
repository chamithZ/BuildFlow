package com.example.BuildFlow.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name="SupplierOrders")
public class SupplierOrder extends Order {
    private String deliveryStatus;
}
