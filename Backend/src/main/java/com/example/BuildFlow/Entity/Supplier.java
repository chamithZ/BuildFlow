package com.example.BuildFlow.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="Supplier")

public class Supplier {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int supplierId;
    private String supplierName;
    private String email;
    private String address;
    private Integer contactNo;
}
