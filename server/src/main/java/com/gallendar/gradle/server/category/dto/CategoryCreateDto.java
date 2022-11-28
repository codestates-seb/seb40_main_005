package com.gallendar.gradle.server.category.dto;

import com.gallendar.gradle.server.category.domain.Category;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CategoryCreateDto {
    private String categoryTitle;
    private Long memberId;

    @Builder
    public CategoryCreateDto(String categoryTitle){
        this.categoryTitle = categoryTitle;
    }

    public Category toEntity(){
        return Category.builder()
                .categoryTitle(categoryTitle)
                .build();
    }
}
