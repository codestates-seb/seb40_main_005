package com.gallendar.gradle.server.category.service;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepositoryCustomImpl;
import com.gallendar.gradle.server.category.dto.CategoryListResponseDto;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class ReadCategoryService {

    private final BoardRepositoryCustomImpl boardRepositoryCustom;

    public List<CategoryListResponseDto> categoryList(Long membersId) {
        List<CategoryListResponseDto> categoryList = new ArrayList<>();
        List<Board> boards=boardRepositoryCustom.findByCategory(membersId);

        boards.forEach( board -> {
            System.out.println(board.getCategory().getCategoryTitle());
            categoryList.add(CategoryListResponseDto.from(board.getCategory()));
        });

        return categoryList;
    }
}
