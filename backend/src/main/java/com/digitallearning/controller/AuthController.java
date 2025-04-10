package com.digitallearning.controller;

import com.digitallearning.model.User;
import com.digitallearning.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        if (userRepository.findByUsername(user.getUsername()) != null) {
            return "Username is already taken!";
        }
        user.setPassword(passwordEncoder.encode(user.getPassword())); // Encode password
        userRepository.save(user);
        return "User registered successfully!";
    }
}