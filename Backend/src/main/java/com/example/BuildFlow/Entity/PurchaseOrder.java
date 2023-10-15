package com.example.BuildFlow.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name="PurchaseOrders")
public class PurchaseOrder extends Order{
}
