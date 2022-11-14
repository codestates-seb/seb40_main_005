package com.gallendar.gradle.server.domain.board.controller;

import com.gallendar.gradle.server.domain.board.dto.BoardRequestDto;
import com.gallendar.gradle.server.domain.board.service.CreateBoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/boards")
public class BoardController {

    private final CreateBoardService createBoardService;

    @PostMapping
    public Long save(@RequestBody BoardRequestDto requestDto){
        return createBoardService.save(requestDto);


    }
}
