package com.example.BuildFlow.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RequisitionDTO {
    private int refNum;
    private String supplierName ;
    private double cost ;
    private Date requiredDate;
    private int quantity ;
    private String description;
}
