package com.gallendar.gradle.server.board.controller;

import com.gallendar.gradle.server.board.dto.BoardUpdateRequestDto;
import com.gallendar.gradle.server.board.dto.BoardCreateRequestDto;
import com.gallendar.gradle.server.board.service.CreateBoardService;
import com.gallendar.gradle.server.board.service.UpdateBoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RequiredArgsConstructor
@RestController
@RequestMapping("/boards")
public class BoardController {

    @Autowired
    private final CreateBoardService createBoardService;

    @Autowired
    private final UpdateBoardService updateBoardService;

    @PostMapping
    public Long save(@RequestBody BoardCreateRequestDto requestDto){
        return createBoardService.save(requestDto);

    }

    @PatchMapping("/{board-id}")
    public Long update(@PathVariable("board-id") @Positive Long boardId,
                       @Valid @RequestBody BoardUpdateRequestDto requestDto){
        return updateBoardService.update(boardId, requestDto);
    }
}
