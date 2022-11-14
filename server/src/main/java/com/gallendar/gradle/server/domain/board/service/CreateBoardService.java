package com.gallendar.gradle.server.domain.board.service;

import com.gallendar.gradle.server.domain.board.dto.BoardRequestDto;
import com.gallendar.gradle.server.domain.board.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CreateBoardService {

    private final BoardRepository boardRepository;
    @Transactional
    public Long save(BoardRequestDto requestDto){
        return boardRepository.save(requestDto.toEntity()).getBoardId();
    }

}
