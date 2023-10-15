package com.example.BuildFlow.Repo;

import com.example.BuildFlow.Entity.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseRepo extends JpaRepository<Purchase,Integer >{

}
