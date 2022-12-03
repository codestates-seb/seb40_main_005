package com.gallendar.gradle.server.board.service;

import com.gallendar.gradle.server.board.dto.BoardSearchByIdResponse;
import com.gallendar.gradle.server.board.dto.BoardSearchResponse;
import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepositoryCustomImpl;
import com.gallendar.gradle.server.global.auth.jwt.JwtUtils;
import com.gallendar.gradle.server.tags.type.TagStatus;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;

@Service
@RequiredArgsConstructor
@Slf4j
public class BoardSearchService {
    private final BoardRepositoryCustomImpl boardRepositoryCustom;
    private final JwtUtils jwtUtils;

    @Transactional
    public List<BoardSearchResponse> SearchBoardByYearAndMonthAndCategory(int year, int month, String category, String token) {
        log.info("유저 검증");
        String memberId = jwtUtils.getMemberIdFromToken(token);
        log.info("검색 조건 실행");
        List<BoardSearchResponse> list = new ArrayList<>();
        List<Board> boards = boardRepositoryCustom.findByBoard(year, month, category, memberId);
        boards.forEach(board -> {
            AtomicBoolean atomicBoolean= new AtomicBoolean(false);
            board.getBoardTags().forEach(boardTags -> {
                if(boardTags.getTags().getStatus().equals(TagStatus.shared)){
                    atomicBoolean.set(true);
                }
            });
            list.add(BoardSearchResponse.from(board, atomicBoolean.get()));
        });
        return list;
    }
    @Transactional
    public List<BoardSearchByIdResponse> SearchBoardByBoardId(Long boardId,String token){
        String memberId= jwtUtils.getMemberIdFromToken(token);
        List<Board> boards=boardRepositoryCustom.findByBoardId(boardId,memberId);
        List<BoardSearchByIdResponse> list =new ArrayList<>();
        boards.forEach(board -> {
            List<String> tags=new ArrayList<>();
            board.getBoardTags().forEach(boardTags -> {
                tags.add(boardTags.getTags().getTagsMember());
            });
            list.add(BoardSearchByIdResponse.from(board,tags));
        });
        return list;
    }
}
