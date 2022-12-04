package com.gallendar.gradle.server.board.service;

import com.gallendar.gradle.server.board.dto.BoardCountResponse;
import com.gallendar.gradle.server.global.auth.jwt.JwtUtils;
import com.gallendar.gradle.server.members.domain.MembersRepositoryCustomImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class BoardCountService {
    private final MembersRepositoryCustomImpl membersRepositoryCustom;
    private final JwtUtils jwtUtils;

    public BoardCountResponse countBoardById(String token, int year, int month, int day) {
        String memberId = jwtUtils.getMemberIdFromToken(token);
        log.info("선택된 날짜의 게시글 전체 개수 및 태그 상태의 게시글 개수 계산");
        int boardCount = membersRepositoryCustom.CountBoardByMember(memberId, year, month, day);
        int tagBoardCount = membersRepositoryCustom.CountBoardByTag(memberId, year, month, day);
        int count = boardCount - tagBoardCount;
        /**
         * 경우의 수      전체게시글  태그된 게시글       전체게시글-태그된 게시글
         * 0 0            0            0                   0 가능
         * 0 1            1            1                   0 가능
         * 1 0            1            0                   1 불가능
         * 1 1            2            1                   1 불가능
         * **/
        log.info("게시글 개수 : " + boardCount + " - " + tagBoardCount + " = " + count);
        boolean flag = true;
        if (count > 0) {
            flag = false;
        }
        return new BoardCountResponse(flag);
    }
}
