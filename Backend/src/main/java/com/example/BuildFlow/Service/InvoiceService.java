package com.example.BuildFlow.Service;

import com.example.BuildFlow.DTO.InvoiceDTO;
import com.example.BuildFlow.Entity.Invoice;
import com.example.BuildFlow.Repo.InvoiceRepo;
import com.example.BuildFlow.Utill.VarList;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepo invoiceRepo;

    @Autowired
    private ModelMapper modelMapper;

    public String saveInvoice(InvoiceDTO invoiceDTO) {
        if (invoiceRepo.existsById(invoiceDTO.getInvoiceId())) {
            return VarList.RSP_DUPLICATED;
        } else {
            invoiceRepo.save(modelMapper.map(invoiceDTO, Invoice.class));
            return VarList.RSP_SUCCESS;
        }
    }

    public List<InvoiceDTO> getAllInvoices() {
        List<Invoice> invoiceList = invoiceRepo.findAll();
        return modelMapper.map(invoiceList, new TypeToken<ArrayList<InvoiceDTO>>() {}.getType());
    }

    public InvoiceDTO getSingleInvoice(int invoiceId) {
        if (invoiceRepo.existsById(invoiceId)) {
            Invoice invoice = invoiceRepo.findById(invoiceId).orElse(null);
            return modelMapper.map(invoice, InvoiceDTO.class);
        } else {
            return null;
        }
    }

    public String deleteInvoice(int invoiceId) {
        if (invoiceRepo.existsById(invoiceId)) {
            invoiceRepo.deleteById(invoiceId);
            return VarList.RSP_SUCCESS;
        } else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }

    public String updateInvoice(InvoiceDTO invoiceDTO) {
        if (invoiceRepo.existsById(invoiceDTO.getInvoiceId())) {
            invoiceRepo.save(modelMapper.map(invoiceDTO, Invoice.class));
            return VarList.RSP_SUCCESS;
        } else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }
}
