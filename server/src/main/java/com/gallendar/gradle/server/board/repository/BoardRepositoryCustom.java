package com.gallendar.gradle.server.board.repository;

import com.gallendar.gradle.server.board.entity.Board;

import java.util.List;

public interface BoardRepositoryCustom {
    Board findById(Long boardId,String userId);
    List<Board> findByBoard(int year,int month,int day,String category);
}
