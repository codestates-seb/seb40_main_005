package com.gallendar.gradle.server.board.service;

import com.gallendar.gradle.server.board.dto.BoardCreateRequestDto;
import com.gallendar.gradle.server.board.dto.BoardUpdateRequestDto;

import java.io.IOException;

public interface BoardService {
    void save(BoardCreateRequestDto requestDto, String token) throws IOException;

    void update(Long boardId, BoardUpdateRequestDto requestDto,String token) throws IOException;
    void delete(Long boardId,String token);
}
