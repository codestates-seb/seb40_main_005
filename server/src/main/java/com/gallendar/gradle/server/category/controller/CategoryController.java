package com.gallendar.gradle.server.category.controller;


import com.gallendar.gradle.server.category.dto.AllCategoryListResponseDto;
import com.gallendar.gradle.server.category.dto.CategoryListResponseDto;
import com.gallendar.gradle.server.category.service.AllCategoryListService;
import com.gallendar.gradle.server.category.service.CategoryService;
import com.gallendar.gradle.server.global.auth.jwt.JwtRequestFilter;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("/category")
public class CategoryController {

    private final CategoryService categoryService;

    private final AllCategoryListService allCategoryListService;


    /**
     * 카테고리 검색
     *
     * @param token
     * @return
     */
    @ApiOperation(value = "게시글 작성 페이지 카테고리 전체 리스트", notes = "로그인한 해당 유저가 생성했던 모든 카테고리 리스트를 가져온다.")
    @GetMapping
    public List<CategoryListResponseDto> getAllCategory(@RequestHeader(value = JwtRequestFilter.HEADER_KEY) String token) {
        return categoryService.categoryList(token);
    }


    /**
     *
     * @param token
     * @return
     */
    @ApiOperation(value = "메인 페이지 카테고리 전체 리스트", notes = "로그인한 해당 유저가 생성했던 모든 카테고리 리스트를 가져온다.")
    @GetMapping("/main")
    public List<AllCategoryListResponseDto> getMainCategory(@RequestHeader(value = JwtRequestFilter.HEADER_KEY) String token) {
        return allCategoryListService.categoryList(token);
    }


}
