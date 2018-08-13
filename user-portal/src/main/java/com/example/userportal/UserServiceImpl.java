package com.example.userportal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired UserRepository userRepository;

    @Override
    public User createUser(User user){
        return userRepository.save(user);
    }

    @Override
    public User findUserById(int id){
       return userRepository.findById(id);
    }

    @Override
    public User updateUser(User user){

        return userRepository.save(user);
    }

    @Override
    public User deleteUser(int id){
        User user = findUserById(id);
        if(user != null){
            userRepository.delete(user);
        }
        return user;
    }

    @Override
    public List<User> findAllUsers(){

        return userRepository.findAll();
    }
}
