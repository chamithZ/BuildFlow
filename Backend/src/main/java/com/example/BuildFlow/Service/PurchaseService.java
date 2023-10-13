package com.example.BuildFlow.Service;


import com.example.BuildFlow.DTO.PurchaseDTO;
import com.example.BuildFlow.Entity.Purchase;
import com.example.BuildFlow.Repo.PurchaseRepo;
import com.example.BuildFlow.Utill.VarList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional

public class PurchaseService {
    @Autowired
    PurchaseRepo purchaserepo;
    @Autowired
    ModelMapper modelMapper;

    public String makePurchase(PurchaseDTO purchaseDTO){
        if(purchaserepo.existsById(purchaseDTO.getPurchaseId())){
            return VarList.RSP_DUPLICATED;
        }
        else{
            purchaserepo.save(modelMapper.map(purchaseDTO, Purchase.class));
            return VarList.RSP_SUCCESS;
        }
    }

    public String updatePurchase(PurchaseDTO purchaseDTO){
        if(purchaserepo.existsById(purchaseDTO.getPurchaseId())){
            purchaserepo.save(modelMapper.map(purchaseDTO,Purchase.class));
            return VarList.RSP_SUCCESS;
        }
        else{
            return VarList.RSP_NO_DATA_FOUND;
        }
    }

    public String cancelPurchase(int purchaseId){
        if(purchaserepo.existsById(purchaseId)){
            purchaserepo.deleteById(purchaseId);
            return VarList.RSP_SUCCESS;
        }
        else{
            return VarList.RSP_NO_DATA_FOUND;

        }
    }

    public PurchaseDTO getPurchase(int purchaseId){
        if(purchaserepo.existsById(purchaseId)){
            Purchase purchase= purchaserepo.findById(purchaseId).orElse(null);
            return modelMapper.map(purchase,PurchaseDTO.class);
        }
        else{
            return null;

        }
    }

}

