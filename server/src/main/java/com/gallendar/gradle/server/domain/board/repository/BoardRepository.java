package com.gallendar.gradle.server.domain.board.repository;

import com.gallendar.gradle.server.domain.board.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {
}
