package com.example.BuildFlow.Repo;

import com.example.BuildFlow.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {
}
