package com.gallendar.gradle.server.category.service;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepositoryCustomImpl;
import com.gallendar.gradle.server.category.dto.CategoryListResponseDto;

import com.gallendar.gradle.server.global.auth.jwt.JwtUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
@Slf4j
public class CategoryService {

    private final BoardRepositoryCustomImpl boardRepositoryCustom;
    private final JwtUtils jwtUtils;

    public List<CategoryListResponseDto> categoryList(String token) {
        log.info("유저의 토큰 확인");
        String membersId = jwtUtils.getMemberIdFromToken(token);
        List<CategoryListResponseDto> categoryList = new ArrayList<>();
        List<Board> boards = boardRepositoryCustom.findByCategory(membersId);

        log.info("유저가 올렸던 게시물로부터 카테고리 불러오기");
        List<String> distinctCategory = boards.stream()
                .map(board -> board.getCategory().getCategoryTitle()).distinct().collect(Collectors.toList());
        distinctCategory.forEach(categoryTitle -> {
            categoryList.add(CategoryListResponseDto.from(categoryTitle));
        });
        return categoryList;

    }
}
