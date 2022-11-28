package com.gallendar.gradle.server.category.controller;


import com.gallendar.gradle.server.category.dto.CategoryListResponseDto;
import com.gallendar.gradle.server.category.service.ReadCategoryService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("/category")
public class CategoryController {

    private final ReadCategoryService readCategoryService;



    /**
     *
     * @param membersId
     * @return
     */
    @ApiOperation(value = "카테고리 전체 리스트", notes = "로그인한 해당 유저가 생성했던 모든 카테고리 리스트를 가져온다.")
    @GetMapping("/all/{member-id}")
    public List<CategoryListResponseDto> getAllCategory(@PathVariable("member-id") @Positive Long membersId) {
        return readCategoryService.categoryList(membersId);
    }


}
