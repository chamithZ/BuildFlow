package com.example.BuildFlow.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class PurchaseDTO {
    int purchaseId;
    double amount;
    String status;
    String date;
}

