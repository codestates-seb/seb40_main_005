package com.gallendar.gradle.server.category.service;;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepositoryCustomImpl;
import com.gallendar.gradle.server.category.dto.AllCategoryListResponseDto;
import com.gallendar.gradle.server.category.dto.CategoryListResponseDto;

import com.gallendar.gradle.server.global.auth.jwt.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class AllCategoryListService {

    private final BoardRepositoryCustomImpl boardRepositoryCustom;
    private final JwtUtils jwtUtils;

    public List<AllCategoryListResponseDto> categoryList(String token) {
        String membersId = jwtUtils.getMemberIdFromToken(token);
        List<AllCategoryListResponseDto> categoryList = new ArrayList<>();
        List<Board> boards = boardRepositoryCustom.findByCategory(membersId);

        List<String> distinctCategory = boards.stream()
                .map(board -> board.getCategory().getCategoryTitle()).distinct().collect(Collectors.toList());
        distinctCategory.forEach(categoryTitle -> {
            categoryList.add(AllCategoryListResponseDto.from(categoryTitle));
        });
        return categoryList;

    }
}
