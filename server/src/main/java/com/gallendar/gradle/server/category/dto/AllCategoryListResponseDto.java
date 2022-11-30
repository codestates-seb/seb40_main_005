package com.gallendar.gradle.server.category.dto;
import com.gallendar.gradle.server.category.domain.Category;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class AllCategoryListResponseDto {

    private String categoryTitle;


    public static AllCategoryListResponseDto from(String categoryTitle) {

        return AllCategoryListResponseDto.builder()
                .categoryTitle(categoryTitle)
                .build();
    }
}
