package com.example.userportal;


import java.util.List;

public interface UserService {

    User createUser(User user);

    User findUserById(int id);

    User updateUser(User user);

    User deleteUser(int id);

    List<User> findAllUsers();
}
