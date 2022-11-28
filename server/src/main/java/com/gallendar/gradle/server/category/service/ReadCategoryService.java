package com.gallendar.gradle.server.category.service;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepositoryCustomImpl;
import com.gallendar.gradle.server.category.dto.CategoryListResponseDto;

import com.gallendar.gradle.server.global.auth.jwt.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class ReadCategoryService {

    private final BoardRepositoryCustomImpl boardRepositoryCustom;
    private final JwtUtils jwtUtils;

    public List<CategoryListResponseDto> categoryList(String token) {
        String membersId = jwtUtils.getMemberIdFromToken(token);
        List<CategoryListResponseDto> categoryList = new ArrayList<>();
        List<Board> boards = boardRepositoryCustom.findByCategory(membersId);

        boards.forEach(board -> {
            categoryList.add(CategoryListResponseDto.from(board.getCategory()));
        });

        return categoryList;
    }
}
