package com.gallendar.gradle.server.members.controller;

import com.gallendar.gradle.server.global.auth.jwt.JwtRequestFilter;
import com.gallendar.gradle.server.members.dto.MemberInfoResponse;
import com.gallendar.gradle.server.members.service.MemberInfoService;
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
    @GetMapping
    public MemberInfoResponse getMyInfoById(@RequestHeader(value = JwtRequestFilter.HEADER_KEY) String token){
        log.info("마이페이지 조회 요청");
        return memberInfoService.myInfoGetById(token);
    }
}
