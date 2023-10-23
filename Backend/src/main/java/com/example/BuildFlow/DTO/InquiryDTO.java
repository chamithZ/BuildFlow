package com.example.BuildFlow.DTO;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class InquiryDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int inquiry_id;
    private String requester ;
    private String status ;
    private double budget ;
    private Date deadline;
    private Date inquiryDate;
    private int priority ;
    private String description;
    private String reply;
}
