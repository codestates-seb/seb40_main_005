package com.gallendar.gradle.server.members.controller;

import com.gallendar.gradle.server.global.auth.jwt.JwtRequestFilter;
import com.gallendar.gradle.server.members.dto.MemberInfoResponse;
import com.gallendar.gradle.server.members.dto.MemberTagStatusRequest;
import com.gallendar.gradle.server.members.dto.MemberTagStatusResponse;
import com.gallendar.gradle.server.members.service.MemberInfoService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
@Slf4j
public class MemberInfoController {
    private final MemberInfoService memberInfoService;

    /**
     * 나의 정보 요청
     *
     * @param token
     * @return
     */
    @ApiOperation(value = "나의 정보 요청", notes = "아이디, 이메일 반환")
    @GetMapping
    public MemberInfoResponse getMyInfoById(@RequestHeader(value = JwtRequestFilter.HEADER_KEY) String token) {
        log.info("마이페이지 조회 요청");
        return memberInfoService.myInfoGetById(token);
    }

    /**
     * 태그 로그 조회
     *
     * @param token
     * @param memberTagStatusRequest
     * @param pageable
     * @return
     */
    @ApiOperation(value = "태그 로그 조회", notes = "누가 누구한테 공유 했는지와 상태를 반환")
    @GetMapping("/tag")
    public List<MemberTagStatusResponse> getMySharedStatusById(@RequestHeader(value = JwtRequestFilter.HEADER_KEY) String token, MemberTagStatusRequest memberTagStatusRequest, Pageable pageable) {
        log.info("태그 로그 조회 요청");
        return memberInfoService.mySharedStatusGetById(token, memberTagStatusRequest, pageable);
    }
}
