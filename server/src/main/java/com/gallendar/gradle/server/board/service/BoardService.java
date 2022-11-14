package com.gallendar.gradle.server.board.service;

import com.gallendar.gradle.server.board.dto.BoardCreateRequestDto;
import com.gallendar.gradle.server.board.dto.BoardResponseDto;
import com.gallendar.gradle.server.board.dto.BoardUpdateRequestDto;

public interface BoardService {
    Long save(BoardCreateRequestDto requestDto);
    Long update(Long boardId, BoardUpdateRequestDto requestDto);
    BoardResponseDto findById (Long boardId);
}
