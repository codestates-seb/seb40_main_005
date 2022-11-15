package com.gallendar.gradle.server.board.service;

import com.gallendar.gradle.server.board.dto.BoardCreateRequestDto;
import com.gallendar.gradle.server.board.dto.BoardListResponseDto;
import com.gallendar.gradle.server.board.dto.BoardResponseDto;
import com.gallendar.gradle.server.board.dto.BoardUpdateRequestDto;
import com.gallendar.gradle.server.board.entity.Board;
import org.springframework.data.domain.Page;

import java.util.List;

public interface BoardService {
    Long save(BoardCreateRequestDto requestDto);
    Long update(Long boardId, BoardUpdateRequestDto requestDto);
    BoardResponseDto findById (Long boardId);
//    Page<Board> findAllDesc(int page, int size);
    List<Board> findAllDesc(int page, int size);
}
