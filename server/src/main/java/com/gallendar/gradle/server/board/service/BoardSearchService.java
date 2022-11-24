package com.gallendar.gradle.server.board.service;

import com.gallendar.gradle.server.board.dto.BoardSearchResponse;
import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepositoryCustomImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardSearchService {
    private final BoardRepositoryCustomImpl boardRepositoryCustom;

    @Transactional
    public List<BoardSearchResponse> SearchBoardByYearAndMonthAndDayAndCategory(int year, int month, int day, String category, Long id) {
        List<BoardSearchResponse> list = new ArrayList<>();
        List<Board> boards = boardRepositoryCustom.findByBoard(year, month, day, category, id);
        boards.forEach(board -> {
            List<String> tags = new ArrayList<>();
            board.getBoardTags().forEach(boardTags -> {
                tags.add(boardTags.getTags().getTagsMember());
            });
            list.add(BoardSearchResponse.from(board, tags));
        });
        return list;
    }
}
