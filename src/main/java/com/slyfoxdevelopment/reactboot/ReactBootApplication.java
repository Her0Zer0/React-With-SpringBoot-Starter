package com.slyfoxdevelopment.reactboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class ReactBootApplication {

    public static void main(String[] args) {
        SpringApplication.run(ReactBootApplication.class, args);
    }

}

@RestController
class TestController{
    @GetMapping("/api/test")
    String testing(){
        return "Successful";
    }
}
