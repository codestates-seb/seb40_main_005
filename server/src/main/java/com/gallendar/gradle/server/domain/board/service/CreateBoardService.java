package com.gallendar.gradle.server.domain.board.service;

import com.gallendar.gradle.server.domain.board.dto.BoardPostDto;
import com.gallendar.gradle.server.domain.board.dto.BoardResponseDto;
import com.gallendar.gradle.server.domain.board.entity.Board;
import com.gallendar.gradle.server.domain.board.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CreateBoardService {

    private final BoardRepository boardRepository;

    @Transactional
    public Board createBoard(Board board){

        return boardRepository.save(board);

    }

    public BoardResponseDto toController(Board board) {

        BoardResponseDto boardResponseDto = new BoardResponseDto();
        boardResponseDto.setBoardId(board.getBoardId());
        boardResponseDto.setTitle(board.getTitle());
        boardResponseDto.setContent(board.getContent());
        boardResponseDto.setMusic(board.getMusic());
        boardResponseDto.setCreatedAt(board.getCreatedAt());
        boardResponseDto.setUpdatedAt(board.getUpdatedAt());

        return boardResponseDto;
    };

}
