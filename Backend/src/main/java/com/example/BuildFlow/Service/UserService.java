package com.example.BuildFlow.Service;

import com.example.BuildFlow.DTO.UserDTO;
import com.example.BuildFlow.Entity.User;
import com.example.BuildFlow.Repo.UserRepo;
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
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;

    public String saveUser(UserDTO userDTO){
        if(userRepo.existsById(userDTO.getUserId())){
            return VarList.RSP_DUPLICATED;
        }
        else{
            userRepo.save(modelMapper.map(userDTO, User.class));
            return VarList.RSP_SUCCESS;
        }
    }

    public List<UserDTO> getAllUSers(){
        List<User> userList = userRepo.findAll();
        return modelMapper.map(userList,new TypeToken<ArrayList<UserDTO>>(){
        }.getType());
    }

    public UserDTO getSingleUser(int userId){
        if(userRepo.existsById(userId)){
            User user = userRepo.findById(userId).orElse(null);
            return modelMapper.map(user,UserDTO.class);
        }
        else {
            return null;
        }
    }

    public String deleteUser(int userId){
        if(userRepo.existsById(userId)){
            userRepo.deleteById(userId);
            return VarList.RSP_SUCCESS;
        }
        else{
            return VarList.RSP_NO_DATA_FOUND;
        }
    }

    public String updateUser(UserDTO userDTO){
        if(userRepo.existsById(userDTO.getUserId())){
            userRepo.save(modelMapper.map(userDTO,User.class));
            return  VarList.RSP_SUCCESS;
        }
        else{
            return VarList.RSP_NO_DATA_FOUND;
        }
    }
}
