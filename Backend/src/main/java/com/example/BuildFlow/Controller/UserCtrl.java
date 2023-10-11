package com.example.BuildFlow.Controller;

import com.example.BuildFlow.DTO.ResponseDTO;
import com.example.BuildFlow.DTO.UserDTO;
import com.example.BuildFlow.Service.UserService;
import com.example.BuildFlow.Utill.VarList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/users")
public class UserCtrl {

    @Autowired
    private UserService userService;

    @Autowired
    private ResponseDTO responseDTO;


    @PostMapping(value = "/saveUser")
    public ResponseEntity saveUser(@RequestBody UserDTO userDTO){
        try{
            String res = userService.saveUser(userDTO);
            if(res.equals("00")){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success !");
                responseDTO.setContent(userDTO);
                return  new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            }
            else if(res.equals("06")){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Already Registered !");
                responseDTO.setContent(userDTO);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }else {
                responseDTO.setCode(VarList.RSP_FAIL);
                responseDTO.setMessage("ERROR !");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }
        }
        catch (Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/getAllUsers")
    public ResponseEntity getAllUsers(){
        try{
            List<UserDTO> userDTOList = userService.getAllUSers();
            responseDTO.setCode(VarList.RSP_SUCCESS);
            responseDTO.setMessage("Success !");
            responseDTO.setContent(userDTOList);
            return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
        }
        catch (Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/getSingleUser/{userId}")
    public ResponseEntity getSingleUser(@PathVariable int userId){
        try{
            UserDTO userDTO = userService.getSingleUser(userId);
            if(userDTO != null){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success !");
                responseDTO.setContent(userDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            }
            else{
                responseDTO.setCode(VarList.RSP_NO_DATA_FOUND);
                responseDTO.setMessage("Employee is not exits !");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/deleteUser/{userId}")
    public ResponseEntity deleteEmployee(@PathVariable int userId){
        try{
            String res = userService.deleteUser(userId);

            if(res.equals("00")){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success !");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            }
            else {
                responseDTO.setCode(VarList.RSP_NO_DATA_FOUND);
                responseDTO.setMessage("Employee is not exits !");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/updateUser")
    public  ResponseEntity updateUser(@RequestBody UserDTO userDTO){
        try{
            String res= userService.updateUser(userDTO);

            if(res.equals("00")){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Update successfully !");
                responseDTO.setContent(userDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            }else if(res.equals("01")){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Not  Registered !");
                responseDTO.setContent(userDTO);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }else {
                responseDTO.setCode(VarList.RSP_FAIL);
                responseDTO.setMessage("ERROR !");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }
        }
        catch(Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
