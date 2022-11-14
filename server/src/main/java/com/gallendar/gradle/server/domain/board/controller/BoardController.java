package com.gallendar.gradle.server.domain.board.controller;

import com.gallendar.gradle.server.domain.board.dto.BoardCreateRequestDto;
import com.gallendar.gradle.server.domain.board.dto.BoardUpdateRequestDto;
import com.gallendar.gradle.server.domain.board.service.CreateBoardService;
import com.gallendar.gradle.server.domain.board.service.UpdateBoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RequiredArgsConstructor
@RestController
@RequestMapping("/boards")
public class BoardController {

    private final CreateBoardService createBoardService;
    private final UpdateBoardService updateBoardService;

    @PostMapping
    public Long save(@RequestBody BoardCreateRequestDto requestDto){
        return createBoardService.save(requestDto);

    }

    public Long update(@PathVariable("board-id") @Positive Long boardId,
                       @Valid @RequestBody BoardUpdateRequestDto requestDto){
        return updateBoardService.update(boardId, requestDto);
    }
}
