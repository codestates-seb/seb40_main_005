package com.gallendar.gradle.server.members.controller;

import com.gallendar.gradle.server.global.auth.jwt.JwtRequestFilter;
import com.gallendar.gradle.server.members.dto.MemberInfoResponse;
import com.gallendar.gradle.server.members.service.MemberInfoService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
@Slf4j
public class MemberInfoController {
    private final MemberInfoService memberInfoService;

    @ApiOperation(value = "나의 정보 요청", notes = "아이디, 이메일 반환")
    @GetMapping
    public MemberInfoResponse getMyInfoById(@RequestHeader(value = JwtRequestFilter.HEADER_KEY) String token) {
        log.info("마이페이지 조회 요청");
        return memberInfoService.myInfoGetById(token);
    }

    @ApiOperation(value = "태그 로그 조회", notes = "누가 누구한테 공유 했는지와 상태를 반환")
    @GetMapping("/tag")
    public void getMySharedStatusById(@RequestHeader(value = JwtRequestFilter.HEADER_KEY) String token) {
        log.info("태그 로그 조회 요청");

    }
}
