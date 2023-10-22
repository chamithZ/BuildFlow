package com.example.BuildFlow.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InvoiceDTO {
    private int invoiceId ;
    private String supplierName;
    private double amount ;
    private int quantity ;
    private String status ;
}
