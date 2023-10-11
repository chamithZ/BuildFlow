package com.example.BuildFlow.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="Invoices")
public class Invoice {
    @Id
    private int invoiceId ;
    private String supplierName;
    private double amount ;
    private int quantity ;
    private String status ;
}
