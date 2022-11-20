package com.gallendar.gradle.server.board.repository;

import com.gallendar.gradle.server.board.entity.Board;

public interface BoardRepositoryCustom {
    Board findById(Long boardId,String userId);
}
