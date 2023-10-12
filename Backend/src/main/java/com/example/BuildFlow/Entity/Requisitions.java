package com.example.BuildFlow.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Requisitions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int refNum;
    private String supplierName ;
    private double cost ;
    private Date requiredDate;
    private int quantity ;
    private String description;
}
