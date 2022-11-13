package com.gallendar.gradle.server.domain.board.controller;

import com.gallendar.gradle.server.domain.board.dto.BoardPostDto;
import com.gallendar.gradle.server.domain.board.dto.SingleResponseDto;
import com.gallendar.gradle.server.domain.board.entity.Board;
import com.gallendar.gradle.server.domain.board.mapper.BoardMapper;
import com.gallendar.gradle.server.domain.board.service.BoardService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/boards")
public class BoardController {

    private BoardService boardService;
    private BoardMapper mapper;

    @PostMapping
    public ResponseEntity postBoard(@RequestBody BoardPostDto boardDto){

        Board board = mapper.boardPostDtoToBoard(boardDto);

        Board savedBoard = boardService.createBoard(board);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.boardToBoardResponseDto(savedBoard)), HttpStatus.CREATED);
    }
}
