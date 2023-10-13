package com.example.BuildFlow.Service;

import com.example.BuildFlow.DTO.OrderDTO;
import com.example.BuildFlow.Entity.Order;
import com.example.BuildFlow.Repo.OrderRepo;
import com.example.BuildFlow.Utill.VarList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional

public class OrderService {
    @Autowired
    private OrderRepo orderRepo;

    @Autowired
    private ModelMapper modelMapper;

    public  String addOrder(OrderDTO orderDTO){
        if(orderRepo.existsById(orderDTO.getOrderId())){
            return VarList.RSP_DUPLICATED;
        }
        else{
            orderRepo.save(modelMapper.map(orderDTO, Order.class));
            return VarList.RSP_SUCCESS;
        }
    }

    public String updateOrder(OrderDTO orderDTO){
        if(orderRepo.existsById(orderDTO.getOrderId())){
            orderRepo.save(modelMapper.map(orderDTO,Order.class));
            return VarList.RSP_SUCCESS;
        }
        else{
            return VarList.RSP_NO_DATA_FOUND;
        }
    }

    public String cancelOrder(int orderId) {
        if (orderRepo.existsById(orderId)) {
            orderRepo.deleteById(orderId);
            return VarList.RSP_SUCCESS;
        }
        else{
            return VarList.RSP_NO_DATA_FOUND;
        }

    }

    public OrderDTO getOrder(int orderId){
        if(orderRepo.existsById(orderId)){
            Order order=orderRepo.findById(orderId).orElse(null);
            return modelMapper.map(order,OrderDTO.class);
        }
        else{
            return null;
        }
    }

}




