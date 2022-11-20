package com.gallendar.gradle.server.board.repository;

import com.gallendar.gradle.server.board.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface BoardRepository extends JpaRepository<Board, Long> {

    Page<Board> findAllDescBy(Pageable pageable);
    Optional<Board> findById(Long id);
}
