package com.example.BuildFlow.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDTO {
    private int userId ;
    private String userName ;
    private String email;
    private String mobile ;
    private String address;
    private double salary;
    private String status ;
}
