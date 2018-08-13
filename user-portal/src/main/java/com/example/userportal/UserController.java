package com.example.userportal;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*",maxAge = 3600)
@RestController
@RequestMapping({"/users"})
public class UserController {

    @Autowired UserService userService;

    @PostMapping("/create")
    public User createUser(@RequestBody User user){
        return userService.createUser(user);
    }

    @GetMapping(path = {"/{id}"})
    public User findUserById(@PathVariable("id") int id){
        return userService.findUserById(id);
    }

    @PutMapping(path ={"/update/{id}"})
    public User updateUser(@PathVariable("id") int id,@RequestBody User user){
        user.setId(id);
        return userService.updateUser(user);
    }

    @DeleteMapping(path ={"/delete/{id}"})
    public User deleteUser(@PathVariable("id") int id) {
        return userService.deleteUser(id);
    }

    @GetMapping
    public List<User> findAllUsers(){
        return userService.findAllUsers();
    }
}
