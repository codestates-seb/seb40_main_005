package com.gallendar.gradle.server.category.dto;

import com.gallendar.gradle.server.category.domain.Category;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CategoryListResponseDto {

    private String label;
    private String value;


    public static CategoryListResponseDto from(String categoryTitle) {

        return CategoryListResponseDto.builder()
                .label(categoryTitle)
                .value(categoryTitle)
                .build();
    }
}

