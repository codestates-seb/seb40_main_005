package com.gallendar.gradle.server.domain.board.service;

import com.gallendar.gradle.server.domain.board.dto.BoardResponseDto;
import com.gallendar.gradle.server.domain.board.dto.BoardUpdateRequestDto;
import com.gallendar.gradle.server.domain.board.entity.Board;
import com.gallendar.gradle.server.domain.board.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class UpdateBoardService {

    private BoardRepository boardRepository;
    @Transactional
    public Long update(Long boardId, BoardUpdateRequestDto requestDto){
        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. boardId =" + boardId));

        board.update(requestDto.getTitle(), requestDto.getContent(), requestDto.getMusic());

        return boardId;
    }

    public BoardResponseDto findById (Long boardId){
        Board entity = boardRepository.findById(boardId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. boardId =" + boardId));

        return new BoardResponseDto(entity);
    }
}
