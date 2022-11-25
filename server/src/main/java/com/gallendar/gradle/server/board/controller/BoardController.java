package com.gallendar.gradle.server.board.controller;

import com.gallendar.gradle.server.board.dto.*;
import com.gallendar.gradle.server.board.mapper.BoardMapper;
import com.gallendar.gradle.server.board.service.BoardServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/boards")
public class BoardController {

    @Autowired
    private final BoardServiceImpl boardService;
    private final BoardMapper mapper;

    /**
     * 게시글 작성
     * @param requestDto
     * @return
     */
    @PostMapping
    public Long save(@RequestBody BoardCreateRequestDto requestDto){
        return boardService.save(requestDto);

    }

    /**
     * 게시글 수정
     * @param boardId
     * @param requestDto
     * @return
     */
    @PatchMapping("/{board-id}")
    public Long update(@PathVariable("board-id") @Positive long boardId,
                       @Valid @RequestBody BoardUpdateRequestDto requestDto){
        return boardService.update(boardId, requestDto);
    }


    /**
     * 단일 게시글 조회
     * @param boardId
     * @return
     */
    @GetMapping("/{board-id}")
    public BoardResponseDto findById(@PathVariable("board-id") Long boardId){

        return boardService.findById(boardId);
    }

//    @GetMapping
//    public List<BoardListResponseDto> findAll(int page, int size){
//        return boardService.findAllDesc();
//    }

    /**
     * 전체 게시글 조회
     * @param page
     * @param size
     * @return
     */
    @GetMapping
    public MultiResponseDto<BoardResponseDto> findByAll(@Positive @RequestParam(required = false,defaultValue = "1") int page,
                                                        @Positive @RequestParam(required = false, defaultValue = "10") int size){
        return new MultiResponseDto<>(mapper.boardsToBoardResponseDto(boardService.findAllDesc(page, size)), boardService.findAllBoard(page, size));
    }

    /**
     * 게시글 삭제
     * @param boardId
     * @return
     */
    @DeleteMapping("/{board-id}")
    public Long delete(@PathVariable("board-id") Long boardId){
        boardService.delete(boardId);
        return boardId;
    }
}