package com.gallendar.gradle.server.category.dto;
import com.gallendar.gradle.server.category.domain.Category;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CategoryListResponseDto {

    private String categoryTitle;


    public static CategoryListResponseDto from(String categoryTitle) {

        return CategoryListResponseDto.builder()
                .categoryTitle(categoryTitle)
                .build();
    }
}