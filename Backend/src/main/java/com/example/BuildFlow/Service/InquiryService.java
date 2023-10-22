package com.example.BuildFlow.Service;

import com.example.BuildFlow.DTO.InquiryDTO;
import com.example.BuildFlow.DTO.InvoiceDTO;
import com.example.BuildFlow.Entity.Invoice;
import com.example.BuildFlow.Repo.InquiryRepo;
import com.example.BuildFlow.Repo.InvoiceRepo;
import com.example.BuildFlow.Utill.VarList;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InquiryService {

    @Autowired
    private InquiryRepo inquiryRepo;

    @Autowired
    private ModelMapper modelMapper;

    public String saveInquiry(InquiryDTO inquiryDTO) {
        if (inquiryRepo.existsById(inquiryDTO.getInquiry_id())) {
            return VarList.RSP_DUPLICATED;
        } else {
            inquiryRepo.save(modelMapper.map(inquiryDTO, Invoice.class));
            return VarList.RSP_SUCCESS;
        }
    }

    public List<InquiryDTO> getAllInquiry() {
        List<Invoice> invoiceList = inquiryRepo.findAll();
        return modelMapper.map(invoiceList, new TypeToken<ArrayList<InvoiceDTO>>() {}.getType());
    }

    public InquiryDTO getSingleInquiry(int inquiryId) {
        if (inquiryRepo.existsById(inquiryId)) {
            Invoice inquiry = inquiryRepo.findById(inquiryId).orElse(null);
            return modelMapper.map(inquiry, InquiryDTO.class);
        } else {
            return null;
        }
    }

    public String deleteInquiry(int inquiryId) {
        if (inquiryRepo.existsById(inquiryId)) {
            inquiryRepo.deleteById(inquiryId);
            return VarList.RSP_SUCCESS;
        } else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }

    public String updateInquiry(InquiryDTO inquiryDTO) {
        if (inquiryRepo.existsById(inquiryDTO.getInquiry_id())) {
            inquiryRepo.save(modelMapper.map(inquiryDTO, Invoice.class));
            return VarList.RSP_SUCCESS;
        } else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }
}


