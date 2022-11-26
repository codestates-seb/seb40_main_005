package com.gallendar.gradle.server.board.controller;

import com.gallendar.gradle.server.board.dto.*;
//import com.gallendar.gradle.server.board.mapper.BoardMapper;
import com.gallendar.gradle.server.board.service.BoardSearchService;
import com.gallendar.gradle.server.board.service.BoardServiceImpl;
import com.gallendar.gradle.server.tags.dto.TagsCreateDto;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/boards")
public class BoardController {

    @Autowired
    private final BoardServiceImpl boardService;
//    private final BoardMapper mapper;
    private final BoardSearchService boardSearchService;

    /**
     * 게시글 작성
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
     * 단일 게시글 조회
     * @param boardId
     * @return
     */
    @GetMapping("/{board-id}")
    public BoardResponseDto findById(@PathVariable("board-id") Long boardId) {

        return boardService.findById(boardId);
    }





    /**
     * 게시글 삭제
     * @param boardId
     * @return
     */
    @DeleteMapping("/{board-id}")
    public Long delete(@PathVariable("board-id") Long boardId) {
        boardService.delete(boardId);
        return boardId;
    }




    /**
     * 캘린더 조건별로 조회
     *
     * @param year
     * @param month
     * @param day
     * @param category
     * @param id
     * @return
     */
    @GetMapping
    @ApiOperation(value = "조건별로 게시글 조회", notes = "year,month,day,category 은 조건에 따라 조회가능하고, id는 현재 로그인한 회원의 id 값입니다. id 값은 필수적으로 값을 넘겨줘야 합니다.")
    public List<BoardSearchResponse> boardSearchByYearAndMonthAndDayAndCategory(@RequestParam int year, @RequestParam int month, @RequestParam int day, @RequestParam String category, @RequestParam Long id) {
        return boardSearchService.SearchBoardByYearAndMonthAndDayAndCategory(year, month, day, category, id);
    }
}
