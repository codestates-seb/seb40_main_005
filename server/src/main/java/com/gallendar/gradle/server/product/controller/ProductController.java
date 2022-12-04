package com.gallendar.gradle.server.product.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
public class ProductController {
    @PostMapping
    public String addProduct(){
        return "상품 등록";
    }
    @GetMapping
    public String searchProduct(){
        return "상품 조회";
    }
    @PatchMapping
    public String patchProduct(){
        return "상품 수정";
    }
    @DeleteMapping
    public String deleteProduct(){
        return "상품 삭제";
    }
}
