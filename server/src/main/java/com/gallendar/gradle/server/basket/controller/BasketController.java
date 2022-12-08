package com.gallendar.gradle.server.basket.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/basket")
public class BasketController {
    @GetMapping
    public String searchBasket(){
        return "장바구니 조회";
    }
    @PostMapping
    public String addBasket(){
        return "장바구니 추가";
    }
    @DeleteMapping
    public String deleteBasket(){
        return "장바구니 삭제";
    }
}
