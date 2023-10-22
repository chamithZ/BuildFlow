package com.example.BuildFlow.Repo;

import com.example.BuildFlow.Entity.SupplierOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierOrderRepo extends JpaRepository<SupplierOrder,Integer> {
}
