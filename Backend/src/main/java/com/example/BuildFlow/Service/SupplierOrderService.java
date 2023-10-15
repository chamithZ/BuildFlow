package com.example.BuildFlow.Service;

import com.example.BuildFlow.DTO.SupplierOrderDTO;
import com.example.BuildFlow.Entity.SupplierOrder;
import com.example.BuildFlow.Repo.SupplierOrderRepo;
import com.example.BuildFlow.Utill.VarList;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SupplierOrderService {

    @Autowired
    private SupplierOrderRepo supplierOrderRepo;

    @Autowired
    private ModelMapper modelMapper;

    public String saveSupplierOrder(SupplierOrderDTO supplierOrderDTO) {
        if (supplierOrderRepo.existsById(supplierOrderDTO.getOrderId())) {
            return VarList.RSP_DUPLICATED;
        } else {
            supplierOrderRepo.save(modelMapper.map(supplierOrderDTO, SupplierOrder.class));
            return VarList.RSP_SUCCESS;
        }
    }

    public List<SupplierOrderDTO> getAllSupplierOrders() {
        List<SupplierOrder> supplierOrderList = supplierOrderRepo.findAll();
        return modelMapper.map(supplierOrderList, new TypeToken<ArrayList<SupplierOrderDTO>>() {}.getType());
    }

    public SupplierOrderDTO getSingleSupplierOrder(int orderId) {
        if (supplierOrderRepo.existsById(orderId)) {
            SupplierOrder supplierOrder = supplierOrderRepo.findById(orderId).orElse(null);
            return modelMapper.map(supplierOrder, SupplierOrderDTO.class);
        } else {
            return null;
        }
    }

    public String deleteSupplierOrder(int orderId) {
        if (supplierOrderRepo.existsById(orderId)) {
            supplierOrderRepo.deleteById(orderId);
            return VarList.RSP_SUCCESS;
        } else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }

    public String updateSupplierOrder(SupplierOrderDTO supplierOrderDTO) {
        if (supplierOrderRepo.existsById(supplierOrderDTO.getOrderId())) {
            supplierOrderRepo.save(modelMapper.map(supplierOrderDTO, SupplierOrder.class));
            return VarList.RSP_SUCCESS;
        } else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }
}
