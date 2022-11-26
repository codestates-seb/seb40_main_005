package com.gallendar.gradle.server.board.controller;

import com.gallendar.gradle.server.board.dto.*;
import com.gallendar.gradle.server.board.mapper.BoardMapper;
import com.gallendar.gradle.server.board.service.BoardSearchService;
import com.gallendar.gradle.server.board.service.BoardServiceImpl;
import com.gallendar.gradle.server.global.auth.jwt.JwtRequestFilter;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
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
    private final BoardSearchService boardSearchService;

    /**
     * 게시글 작성
     *
     * @param requestDto
     * @return
     */
    @PostMapping
    public Long save(@RequestBody BoardCreateRequestDto requestDto) {
        return boardService.save(requestDto);

    }

    /**
     * 게시글 수정
     *
     * @param boardId
     * @param requestDto
     * @return
     */
    @PatchMapping("/{board-id}")
    public Long update(@PathVariable("board-id") @Positive long boardId,
                       @Valid @RequestBody BoardUpdateRequestDto requestDto) {
        return boardService.update(boardId, requestDto);
    }


    /**
     * 단일 게시글 조회
     *
     * @param boardId
     * @return
     */
    @GetMapping("/{board-id}")
    public BoardResponseDto findById(@PathVariable("board-id") Long boardId) {

        return boardService.findById(boardId);
    }


    /**
     * 게시글 삭제
     *
     * @param boardId
     * @return
     */
    @DeleteMapping("/{board-id}")
    public Long delete(@PathVariable("board-id") Long boardId) {
        boardService.delete(boardId);
        return boardId;
    }


    /**
     * 캘린더 조회
     *
     * @param year
     * @param month
     * @param category
     * @return
     */
    @GetMapping
    @ApiOperation(value = "캘린더 조회", notes = "(year, month, category) request 받아서 검색")
    public List<BoardSearchResponse> boardSearchByYearAndMonthAndCategory(@RequestParam int year, @RequestParam int month, @RequestParam String category, @RequestHeader(value = JwtRequestFilter.HEADER_KEY) String token) {
        return boardSearchService.SearchBoardByYearAndMonthAndCategory(year, month, category, token);
    }
}
