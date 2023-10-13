package com.example.BuildFlow.Service;

import com.example.BuildFlow.DTO.SupplierDTO;
import com.example.BuildFlow.Entity.Supplier;
import com.example.BuildFlow.Repo.SupplierRepo;
import com.example.BuildFlow.Utill.VarList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class SupplierService {
    @Autowired
    private SupplierRepo supplierRepo;

    @Autowired
    private ModelMapper modelMapper;

    public String addSupplier(SupplierDTO supplierDTO) {
        if (supplierRepo.existsById(supplierDTO.getSupplierId())) {
            return VarList.RSP_DUPLICATED;
        } else {
            supplierRepo.save(modelMapper.map(supplierDTO, Supplier.class));
            return VarList.RSP_SUCCESS;
        }
    }

    public String updateSupplier(SupplierDTO supplierDTO) {
        if (supplierRepo.existsById(supplierDTO.getSupplierId())) {
            supplierRepo.save(modelMapper.map(supplierDTO, Supplier.class));
            return VarList.RSP_SUCCESS;
        } else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }

    public String deleteSupplier(int supplierId) {
        if (supplierRepo.existsById(supplierId)) {
            supplierRepo.deleteById(supplierId);
            return VarList.RSP_SUCCESS;
        } else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }

    public List<SupplierDTO> getAllSupplier() {
        List<Supplier> supplierList = supplierRepo.findAll();
        return modelMapper.map(supplierList, new TypeToken<ArrayList<SupplierDTO>>() {

        }.getType());

    }

    public SupplierDTO getSupplier(int supplierId) {
        if(supplierRepo.existsById(supplierId)){
            Supplier sup =supplierRepo.findById(supplierId).orElse(null);
            return modelMapper.map(sup,SupplierDTO.class);
        }
        else{
            return null;
        }
    }
}
