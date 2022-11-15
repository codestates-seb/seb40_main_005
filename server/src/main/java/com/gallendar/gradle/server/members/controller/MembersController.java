package com.gallendar.gradle.server.members.controller;

import com.gallendar.gradle.server.global.auth.jwt.JwtUtils;
import com.gallendar.gradle.server.members.dto.LoginRequest;
import com.gallendar.gradle.server.members.dto.LoginResponse;
import com.gallendar.gradle.server.members.dto.MemberSearchResponse;
import com.gallendar.gradle.server.members.service.LoginService;
import com.gallendar.gradle.server.members.service.MemberSearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MembersController {
    private final LoginService loginService;
    private final JwtUtils jwtUtils;
    private final MemberSearchService memberSearchService;

    @PostMapping("/authentication")
    public LoginResponse membersLogin(@RequestBody LoginRequest loginRequest) {
        return loginService.LoginMembers(loginRequest);
    }

    @GetMapping("/members/search/{id}")
    public List<MemberSearchResponse> searchMemberById(@PathVariable(value = "id") String id) {
        return memberSearchService.MemberSearchById(id);
    }
}
