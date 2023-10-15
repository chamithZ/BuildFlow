package com.example.BuildFlow.Controller;

import com.example.BuildFlow.DTO.ResponseDTO;
import com.example.BuildFlow.DTO.SupplierDTO;
import com.example.BuildFlow.Service.SupplierService;
import com.example.BuildFlow.Utill.VarList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/supplier")

public class SupplierCtrl {

    @Autowired
    private SupplierService supplierService;

    @Autowired
    private ResponseDTO responseDTO;

    @PostMapping(value="/addSupplier")
    public ResponseEntity addSupplier(@RequestBody SupplierDTO supplierDTO){

        try{
            String res= supplierService.addSupplier(supplierDTO);
            if(res.equals("00")){
                responseDTO.setCode(VarList.RSP_DUPLICATED );
                responseDTO.setMessage("Success");
                responseDTO.setContent(supplierDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);

            }else if(res.equals("06")){
                responseDTO.setCode(VarList.RSP_DUPLICATED );
                responseDTO.setMessage("Employee registered");
                responseDTO.setContent(supplierDTO);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);

            }else{
                responseDTO.setCode(VarList.RSP_FAIL );
                responseDTO.setMessage("Error");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);

            }
        }catch( Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR );
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value="/updateSupplier")
    public ResponseEntity updateEmployee(@RequestBody SupplierDTO supplierDTO){

        try{
            String res= supplierService.updateSupplier(supplierDTO);
            if(res.equals("00")){
                responseDTO.setCode(VarList.RSP_DUPLICATED );
                responseDTO.setMessage("Success");
                responseDTO.setContent(supplierDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);

            }else if(res.equals("01")){
                responseDTO.setCode(VarList.RSP_NO_DATA_FOUND );
                responseDTO.setMessage("Not a Registered member ");
                responseDTO.setContent(supplierDTO);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);

            }else{
                responseDTO.setCode(VarList.RSP_FAIL );
                responseDTO.setMessage("Error");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);

            }
        }catch( Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR );
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/deleteSupplier/{supplierId}")
    public ResponseEntity deleteSupplier(@PathVariable int supplierId){
        try {
            String supplier = supplierService.deleteSupplier(supplierId);
            if (supplier.equals("00")) {
                responseDTO.setCode(VarList.RSP_DUPLICATED);
                responseDTO.setMessage("Success");
                responseDTO.setContent(supplier);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            } else {
                responseDTO.setCode(VarList.RSP_NO_DATA_FOUND);
                responseDTO.setMessage("No supplier found ");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }
        } catch(Exception e){
            responseDTO.setCode(VarList.RSP_ERROR );
            responseDTO.setMessage(e.getMessage());
            responseDTO.setContent(e);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getAllSuppliers")

    public ResponseEntity getAllSuppliers(){
        try{
            List<SupplierDTO> sup=supplierService.getAllSupplier();
            responseDTO.setCode(VarList.RSP_DUPLICATED );
            responseDTO.setMessage("Success");
            responseDTO.setContent(sup);
            return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);

        }catch(Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent((null));
            return new ResponseEntity(responseDTO,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getSupplier/{supplierId}")
    public ResponseEntity getSupplier(@PathVariable int supplierId){
        try{
            SupplierDTO supDTO= supplierService.getSupplier(supplierId);
            if(supDTO !=null){
                responseDTO.setCode(VarList.RSP_DUPLICATED );
                responseDTO.setMessage("Success");
                responseDTO.setContent(supDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            }
            else {
                responseDTO.setCode(VarList.RSP_NO_DATA_FOUND);
                responseDTO.setMessage("No Supplier found ");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);

            }}catch( Exception e){
            responseDTO.setCode(VarList.RSP_ERROR );
            responseDTO.setMessage(e.getMessage());
            responseDTO.setContent(e);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
