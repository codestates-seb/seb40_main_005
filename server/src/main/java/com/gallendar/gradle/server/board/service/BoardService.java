package com.gallendar.gradle.server.board.service;

import com.gallendar.gradle.server.board.dto.BoardCreateRequestDto;
import com.gallendar.gradle.server.board.dto.BoardListResponseDto;
import com.gallendar.gradle.server.board.dto.BoardResponseDto;
import com.gallendar.gradle.server.board.dto.BoardUpdateRequestDto;
import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.tags.dto.TagsCreateDto;
import org.springframework.data.domain.Page;

import java.io.IOException;
import java.util.List;

public interface BoardService {
    Long save(BoardCreateRequestDto requestDto, List<String> tagsMembers) throws IOException;
    Long update(Long boardId, BoardUpdateRequestDto requestDto);
    BoardResponseDto findById (Long boardId);
//    Page<Board> findAllDesc(int page, int size);
    List<Board> findAllDesc(int page, int size);
}
