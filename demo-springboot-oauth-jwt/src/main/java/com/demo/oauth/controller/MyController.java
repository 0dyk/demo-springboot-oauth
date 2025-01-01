package com.demo.oauth.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;


@Controller
public class MyController {

    @GetMapping("/my")
    public ResponseEntity<?> my(){
        return ResponseEntity.ok("Hello World");
    }
}
