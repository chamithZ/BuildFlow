package com.example.BuildFlow.Entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="Purchase")

public class Purchase {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    int purchaseId;
    double amount;
    String status;
    String date;

}
