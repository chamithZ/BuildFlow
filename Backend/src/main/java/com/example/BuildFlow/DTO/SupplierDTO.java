package com.example.BuildFlow.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data

public class SupplierDTO {
    private int supplierId;
    private String supplierName;
    private String email;
    private String address;
    private Integer contactNo;
    private String password;
    private String companyName ;
}
