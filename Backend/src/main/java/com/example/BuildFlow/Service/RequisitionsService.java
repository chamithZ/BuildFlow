package com.example.BuildFlow.Service;


import com.example.BuildFlow.DTO.RequisitionDTO;
import com.example.BuildFlow.Entity.Requisitions;
import com.example.BuildFlow.Repo.RequisitionsRepo;
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
public class RequisitionsService {
    @Autowired
    private RequisitionsRepo requisitionsRepo;

    @Autowired
    private ModelMapper modelMapper;

    public String saveRequisition(RequisitionDTO requisitionDTO) {
        if (requisitionsRepo.existsById(requisitionDTO.getRefNum())) {
            return VarList.RSP_DUPLICATED;
        } else {
            requisitionsRepo.save(modelMapper.map(requisitionDTO, Requisitions.class));
            return VarList.RSP_SUCCESS;
        }
    }

    public List<RequisitionDTO> getAllRequisitions() {
        List<Requisitions> requisitionsList = requisitionsRepo.findAll();
        return modelMapper.map(requisitionsList, new TypeToken<ArrayList<RequisitionDTO>>() {}.getType());
    }

    public RequisitionDTO getSingleRequisition(int refNum) {
        if (requisitionsRepo.existsById(refNum)) {
            Requisitions requisitions = requisitionsRepo.findById(refNum).orElse(null);
            return modelMapper.map(requisitions, RequisitionDTO.class);
        } else {
            return null;
        }
    }

    public String deleteRequisition(int refNum) {
        if (requisitionsRepo.existsById(refNum)) {
            requisitionsRepo.deleteById(refNum);
            return VarList.RSP_SUCCESS;
        } else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }

    public String updateRequisition(RequisitionDTO requisitionDTO) {
        if (requisitionsRepo.existsById(requisitionDTO.getRefNum())) {
            requisitionsRepo.save(modelMapper.map(requisitionDTO, Requisitions.class));
            return VarList.RSP_SUCCESS;
        } else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }
}
