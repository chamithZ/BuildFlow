package com.example.BuildFlow.Controller;

import com.example.BuildFlow.DTO.InvoiceDTO;
import com.example.BuildFlow.DTO.ResponseDTO;
import com.example.BuildFlow.Service.InvoiceService;
import com.example.BuildFlow.Utill.VarList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/invoices")
public class InvoiceCtrl {

    @Autowired
    private InvoiceService invoiceService;

    @Autowired
    private ResponseDTO responseDTO;

    @PostMapping(value = "/saveInvoice")
    public ResponseEntity saveInvoice(@RequestBody InvoiceDTO invoiceDTO) {
        try {
            String res = invoiceService.saveInvoice(invoiceDTO);
            if (res.equals(VarList.RSP_SUCCESS)) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success !");
                responseDTO.setContent(invoiceDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            } else if (res.equals(VarList.RSP_DUPLICATED)) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Already Registered !");
                responseDTO.setContent(invoiceDTO);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            } else {
                responseDTO.setCode(VarList.RSP_FAIL);
                responseDTO.setMessage("ERROR !");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception ex) {
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/getAllInvoices")
    public ResponseEntity getAllInvoices() {
        try {
            List<InvoiceDTO> invoiceDTOList = invoiceService.getAllInvoices();
            responseDTO.setCode(VarList.RSP_SUCCESS);
            responseDTO.setMessage("Success !");
            responseDTO.setContent(invoiceDTOList);
            return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
        } catch (Exception ex) {
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/getSingleInvoice/{invoiceId}")
    public ResponseEntity getSingleInvoice(@PathVariable int invoiceId) {
        try {
            InvoiceDTO invoiceDTO = invoiceService.getSingleInvoice(invoiceId);
            if (invoiceDTO != null) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success !");
                responseDTO.setContent(invoiceDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            } else {
                responseDTO.setCode(VarList.RSP_NO_DATA_FOUND);
                responseDTO.setMessage("Invoice is not found!");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception ex) {
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/deleteInvoice/{invoiceId}")
    public ResponseEntity deleteInvoice(@PathVariable int invoiceId) {
        try {
            String res = invoiceService.deleteInvoice(invoiceId);

            if (res.equals(VarList.RSP_SUCCESS)) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success !");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            } else {
                responseDTO.setCode(VarList.RSP_NO_DATA_FOUND);
                responseDTO.setMessage("Invoice is not found!");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception ex) {
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/updateInvoice")
    public ResponseEntity updateInvoice(@RequestBody InvoiceDTO invoiceDTO) {
        try {
            String res = invoiceService.updateInvoice(invoiceDTO);

            if (res.equals(VarList.RSP_SUCCESS)) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Update successfully!");
                responseDTO.setContent(invoiceDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            } else if (res.equals(VarList.RSP_NO_DATA_FOUND)) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Not Registered!");
                responseDTO.setContent(invoiceDTO);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            } else {
                responseDTO.setCode(VarList.RSP_FAIL);
                responseDTO.setMessage("ERROR!");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception ex) {
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
