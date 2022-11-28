package com.gallendar.gradle.server.category.dto;

import com.gallendar.gradle.server.category.domain.Category;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CategoryListResponseDto {

    private String categoryTitle;


    public static CategoryListResponseDto from(Category category) {

        String categoryTitle = category.getCategoryTitle();

        return CategoryListResponseDto.builder()
                .categoryTitle(categoryTitle)
                .build();
    }
}
