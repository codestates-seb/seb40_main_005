package com.gallendar.gradle.server.board.service;

import com.gallendar.gradle.server.board.dto.BoardSearchResponse;
import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepositoryCustomImpl;
import com.gallendar.gradle.server.global.auth.jwt.JwtUtils;
import com.gallendar.gradle.server.tags.type.TagStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class BoardSearchService {
    private final BoardRepositoryCustomImpl boardRepositoryCustom;
    private final JwtUtils jwtUtils;

    @Transactional
    public List<BoardSearchResponse> SearchBoardByYearAndMonthAndCategory(int year, int month, String category, String token) {
        String memberId = jwtUtils.getMemberIdFromToken(token);
        List<BoardSearchResponse> list = new ArrayList<>();
        List<Board> boards = boardRepositoryCustom.findByBoard(year, month, category, memberId);
        boards.forEach(board -> {
            Map<String, TagStatus> tags = new HashMap<>();
            board.getBoardTags().forEach(boardTags -> {
                tags.put(boardTags.getTags().getTagsMember(), boardTags.getTags().getStatus());
            });
            list.add(BoardSearchResponse.from(board, tags));
        });
        return list;
    }
}
