package com.gallendar.gradle.server.board.controller;

import com.gallendar.gradle.server.board.dto.*;
import com.gallendar.gradle.server.board.service.BoardCountService;
import com.gallendar.gradle.server.board.service.BoardSearchService;
import com.gallendar.gradle.server.board.service.BoardServiceImpl;
import com.gallendar.gradle.server.global.auth.jwt.JwtRequestFilter;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/boards")
@Slf4j
public class BoardController {

    @Autowired
    private final BoardServiceImpl boardService;
    private final BoardSearchService boardSearchService;
    private final BoardCountService boardCountService;

    /**
     * 게시글 작성
     *
     * @param requestDto
     * @param token
     * @return
     * @throws IOException
     */
    @PostMapping
    public ResponseEntity save(BoardCreateRequestDto requestDto, @RequestHeader(value = JwtRequestFilter.HEADER_KEY) String token) throws IOException {
        log.info("게시글 작성 요청");
        boardService.save(requestDto, token);
        return new ResponseEntity(HttpStatus.OK);
    }

    /**
     * 게시글 수정
     *
     * @param boardId
     * @param requestDto
     * @param token
     * @return
     */
    @PatchMapping("/{board-id}")
    public ResponseEntity update(@PathVariable("board-id") @Positive Long boardId,
                                 BoardUpdateRequestDto requestDto, @RequestHeader(value = JwtRequestFilter.HEADER_KEY) String token) throws IOException {
        log.info("게시글 수정 요청");
        boardService.update(boardId, requestDto, token);
        return new ResponseEntity(HttpStatus.OK);
    }


    /**
     * 게시글 삭제
     *
     * @param boardId
     * @return
     */
    @DeleteMapping("/{board-id}")
    public Long delete(@PathVariable("board-id") Long boardId, @RequestHeader(value = JwtRequestFilter.HEADER_KEY) String token) {
        boardService.delete(boardId, token);
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
        log.info("캘린더 조회 요청");
        return boardSearchService.SearchBoardByYearAndMonthAndCategory(year, month, category, token);
    }

    /**
     * 게시글 조회
     *
     * @param boardId
     * @param token
     * @return
     */
    @ApiOperation(value = "게시글 조회", notes = "boardId로 해당 게시글의 상세 내용을 볼 수 있다.")
    @GetMapping("/{boardId}")
    public List<BoardSearchByIdResponse> boardSearchByBoardId(@PathVariable(value = "boardId") Long boardId, @RequestHeader(value = JwtRequestFilter.HEADER_KEY) String token) {
        log.info("게시글 상세정보 요청");
        return boardSearchService.SearchBoardByBoardId(boardId, token);
    }

    /**
     * 게시글 작성 여부 반환
     * @param token
     * @param year
     * @param month
     * @param day
     * @return
     */
    @ApiOperation(value = "게시글 작성 여부 반환", notes = "false = 게시글 작성 불가능, true = 게시글 작성 가능")
    @GetMapping("/count")
    public BoardCountResponse boardCountById(@RequestHeader(value = JwtRequestFilter.HEADER_KEY) String token, @RequestParam int year, @RequestParam int month, @RequestParam int day) {
        log.info("게시글 작성 여부 반환 요청");
        return boardCountService.countBoardById(token, year, month, day);
    }
}
