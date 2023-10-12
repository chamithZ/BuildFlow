package com.example.BuildFlow.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId ;
    private String userName ;
    private String email;
    private String mobile ;
    private String address;
    private double salary;
    private String status ;      // this is not sure about the type lets discuss this
}
