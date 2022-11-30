package com.gallendar.gradle.server.board.repository;

import com.gallendar.gradle.server.board.entity.Board;

import java.util.List;

public interface BoardRepositoryCustom {
    Board findById(Long boardId, String userId);

    List<Board> findByBoard(Integer year, Integer month, String category, String id);

    List<Board> findByBoardId(Long boardId,String id);

    List<Board> findByCategory(String id);

    int findByCategoryCount(Long id);

    List<Board> findByTagMembers(Long boardId);
    List<Board> findAllBoardById(String id);
}
