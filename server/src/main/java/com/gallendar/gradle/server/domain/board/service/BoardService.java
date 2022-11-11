package com.gallendar.gradle.server.domain.board.service;

import com.gallendar.gradle.server.domain.board.dto.BoardPostDto;
import com.gallendar.gradle.server.domain.board.entity.Board;
import com.gallendar.gradle.server.domain.board.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    @Transactional
    public Board createBoard(Board board){

        return boardRepository.save(board);

    }

}
