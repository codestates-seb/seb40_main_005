package com.gallendar.gradle.server.board.controller;

import com.gallendar.gradle.server.board.dto.*;
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

import javax.validation.Valid;
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

    /**
     * 게시글 작성
     *
     * @param requestDto
     * @return
     */
    @PostMapping
    public ResponseEntity save(BoardCreateRequestDto requestDto, @RequestParam(value = "tags") List<String> tagsMembers) throws IOException {
        boardService.save(requestDto, tagsMembers);

        return new ResponseEntity(HttpStatus.OK);

    }

    /**
     * 게시글 수정
     *
     * @param boardId
     * @param requestDto
     * @return
     */
    @PatchMapping("/{board-id}")
    public ResponseEntity update(@PathVariable("board-id") @Positive long boardId,
                       @Valid @RequestBody BoardUpdateRequestDto requestDto) {
        return new ResponseEntity(HttpStatus.OK);
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
        log.info("캘린더 조회 요청");
        return boardSearchService.SearchBoardByYearAndMonthAndCategory(year, month, category, token);
    }

    /**
     * 게시글 조회
     * @param boardId
     * @param token
     * @return
     */
    @ApiOperation(value = "게시글 조회", notes = "boardId로 해당 게시글의 상세 내용을 볼 수 있다.")
    @GetMapping("/{boardId}")
    public List<BoardSearchByIdResponse> boardSearchByBoardId(@PathVariable(value = "boardId")Long boardId,@RequestHeader(value = JwtRequestFilter.HEADER_KEY) String token){
        log.info("게시글 상세정보 요청");
        return boardSearchService.SearchBoardByBoardId(boardId,token);
    }
}
