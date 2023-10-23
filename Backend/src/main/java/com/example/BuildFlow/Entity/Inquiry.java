package com.example.BuildFlow.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;

public class Inquiry {
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
