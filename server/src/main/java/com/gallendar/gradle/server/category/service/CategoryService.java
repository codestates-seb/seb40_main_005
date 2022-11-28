package com.gallendar.gradle.server.category.service;

import com.gallendar.gradle.server.category.domain.Category;
import com.gallendar.gradle.server.category.domain.CategoryRepository;
import com.gallendar.gradle.server.category.dto.CategoryCreateDto;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;
    private final MembersRepository membersRepository;
    
    public void save(CategoryCreateDto categoryDto, Members members){
        String categoryTitle = categoryDto.getCategoryTitle();
        Members member = membersRepository.findById(categoryDto.getMemberId())
                .orElseThrow(() -> new IllegalArgumentException());
        if(categoryRepository.findByCategoryTitle(categoryDto.getCategoryTitle())==null
                ||categoryRepository.findByMemberId(categoryDto.getMemberId())==null) {
            Category category = categoryDto.toEntity();
            category.setMembers(members);
            categoryRepository.save(category);
        } else if (categoryRepository.findByCategoryTitle(categoryDto.getCategoryTitle()).getId()!=categoryRepository.findByMemberId(categoryDto.getMemberId()).getId()) {
            Category category = categoryDto.toEntity();
            category.setMembers(members);
            categoryRepository.save(category);

        }
        Category category = categoryRepository.findByCategoryTitle(categoryTitle);

    }
}
