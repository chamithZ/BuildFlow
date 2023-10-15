package com.example.BuildFlow.Repo;

import com.example.BuildFlow.Entity.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceRepo extends JpaRepository<Invoice,Integer> {
}
