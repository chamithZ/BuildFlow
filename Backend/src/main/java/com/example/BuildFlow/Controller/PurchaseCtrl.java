package com.example.BuildFlow.Controller;


import com.example.BuildFlow.DTO.OrderDTO;
import com.example.BuildFlow.DTO.PurchaseDTO;
import com.example.BuildFlow.DTO.ResponseDTO;
import com.example.BuildFlow.Service.PurchaseService;
import com.example.BuildFlow.Utill.VarList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/purchase")
public class PurchaseCtrl {

    @Autowired
    private PurchaseService purchaseService;

    @Autowired
    private ResponseDTO responseDTO;

    @PostMapping(value="/makePurchase")
    public ResponseEntity makePurchase(@RequestBody PurchaseDTO purchaseDTO){

        try{
            String res= purchaseService.makePurchase(purchaseDTO);
            if(res.equals("00")){
                responseDTO.setCode(VarList.RSP_DUPLICATED );
                responseDTO.setMessage("PurchaseDone");
                responseDTO.setContent(purchaseDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);

            }else if(res.equals("06")){
                responseDTO.setCode(VarList.RSP_DUPLICATED );
                responseDTO.setMessage("already Exists");
                responseDTO.setContent(purchaseDTO);
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


    @PutMapping(value="/updatePurchase")
    public ResponseEntity updatePurchase(@RequestBody PurchaseDTO purchaseDTO){

        try{
            String res= purchaseService.updatePurchase(purchaseDTO);
            if(res.equals("00")){
                responseDTO.setCode(VarList.RSP_DUPLICATED );
                responseDTO.setMessage("Success");
                responseDTO.setContent(purchaseDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);

            }else if(res.equals("01")){
                responseDTO.setCode(VarList.RSP_NO_DATA_FOUND );
                responseDTO.setMessage("purchase Invalid ");
                responseDTO.setContent(purchaseDTO);
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

    @DeleteMapping("/cancelPurchase/{purchaseId}")
    public ResponseEntity cancelOrder(@PathVariable int purchaseId){
        try {
            String supplier = purchaseService.cancelPurchase(purchaseId);
            if (supplier.equals("00")) {
                responseDTO.setCode(VarList.RSP_DUPLICATED);
                responseDTO.setMessage("Success");
                responseDTO.setContent(supplier);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            } else {
                responseDTO.setCode(VarList.RSP_NO_DATA_FOUND);
                responseDTO.setMessage(" Purchase not found ");
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

    @GetMapping("/getOrder/{orderId}")
    public ResponseEntity getOrder(@PathVariable int purchaseId){
        try{
            PurchaseDTO purchaseDTO= purchaseService.getPurchase(purchaseId);
            if(purchaseDTO !=null){
                responseDTO.setCode(VarList.RSP_DUPLICATED );
                responseDTO.setMessage("Success");
                responseDTO.setContent(purchaseDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            }
            else {
                responseDTO.setCode(VarList.RSP_NO_DATA_FOUND);
                responseDTO.setMessage("Purchase Not found");
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
