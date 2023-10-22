package com.example.BuildFlow.Controller;

import com.example.BuildFlow.DTO.InquiryDTO;

import com.example.BuildFlow.DTO.InvoiceDTO;
import com.example.BuildFlow.DTO.ResponseDTO;
import com.example.BuildFlow.Service.InquiryService;
import com.example.BuildFlow.Utill.VarList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/inquiry")
public class InquiryCtrl {

    @Autowired
    private InquiryService inquiryService;

    @Autowired
    private ResponseDTO responseDTO;

    @PostMapping(value = "/saveInquiry")
    public ResponseEntity saveInquiry(@RequestBody InquiryDTO inquiryDTO) {
        try {
            String res = inquiryService.saveInquiry(inquiryDTO);
            if (res.equals(VarList.RSP_SUCCESS)) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success !");
                responseDTO.setContent(inquiryDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            } else if (res.equals(VarList.RSP_DUPLICATED)) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Already Registered !");
                responseDTO.setContent(inquiryDTO);
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

    @GetMapping(value = "/getAllInquiry")
    public ResponseEntity getAllInquiry() {
        try {
            List<InquiryDTO> inquiryDTOList = inquiryService.getAllInquiry();
            responseDTO.setCode(VarList.RSP_SUCCESS);
            responseDTO.setMessage("Success !");
            responseDTO.setContent(inquiryDTOList);
            return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
        } catch (Exception ex) {
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/getSingleInvoice/{inquiryId}")
    public ResponseEntity getSingleInvoice(@PathVariable int inquiryId) {
        try {
            InquiryDTO inquiryDTO = inquiryService.getSingleInquiry(inquiryId);
            if (inquiryDTO != null) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success !");
                responseDTO.setContent(inquiryDTO);
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

    @DeleteMapping("/deleteInvoice/{inquiryId}")
    public ResponseEntity deleteInvoice(@PathVariable int inquiryId) {
        try {
            String res = inquiryService.deleteInquiry(inquiryId);

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

    @PutMapping("/updateInquiry")
    public ResponseEntity updateInvoice(@RequestBody InquiryDTO inquiryDTO) {
        try {
            String res = inquiryService.updateInquiry(inquiryDTO);

            if (res.equals(VarList.RSP_SUCCESS)) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Update successfully!");
                responseDTO.setContent(inquiryDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            } else if (res.equals(VarList.RSP_NO_DATA_FOUND)) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Not Registered!");
                responseDTO.setContent(inquiryDTO);
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
