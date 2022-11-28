package com.gallendar.gradle.server.board.service;

import com.gallendar.gradle.server.board.dto.BoardCreateRequestDto;
import com.gallendar.gradle.server.board.dto.BoardListResponseDto;
import com.gallendar.gradle.server.board.dto.BoardResponseDto;
import com.gallendar.gradle.server.board.dto.BoardUpdateRequestDto;
import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.category.domain.Category;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.tags.dto.TagsCreateDto;
import org.springframework.data.domain.Page;

import java.io.IOException;
import java.util.List;

public interface BoardService {
    void save(BoardCreateRequestDto requestDto, String token) throws IOException;

    Long update(Long boardId, BoardUpdateRequestDto requestDto,String token);
}
