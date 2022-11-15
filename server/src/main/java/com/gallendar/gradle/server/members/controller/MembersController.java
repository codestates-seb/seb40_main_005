package com.gallendar.gradle.server.members.controller;

import com.gallendar.gradle.server.global.auth.jwt.JwtUtils;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.dto.LoginRequest;
import com.gallendar.gradle.server.members.dto.LoginResponse;
import com.gallendar.gradle.server.members.dto.MemberSearchResponse;
import com.gallendar.gradle.server.members.dto.SignupRequestDto;
import com.gallendar.gradle.server.members.service.CreateMemberService;
import com.gallendar.gradle.server.members.service.LoginService;
import com.gallendar.gradle.server.members.service.MemberSearchService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MembersController {
    private final LoginService loginService;
    private final JwtUtils jwtUtils;
    private final MemberSearchService memberSearchService;

    private final CreateMemberService createMemberService;
    private final SignupRequestDto signupRequestDto;

    @PostMapping("/authentication")
    public LoginResponse membersLogin(@RequestBody LoginRequest loginRequest) {
        return loginService.LoginMembers(loginRequest);
    }

    @GetMapping("/members/search/{id}")
    public List<MemberSearchResponse> searchMemberById(@PathVariable(value = "id") String id) {
        return memberSearchService.MemberSearchById(id);
    }

    /* ID 중복검사 */
    @GetMapping("/{id}")
    public ResponseEntity<Boolean> checkMemberId( @PathVariable String id) {

        return ResponseEntity.ok(createMemberService.checkMemberIdDuplication(id)); // 고려해 봐야 할 부분
    }

    /* 이메일 중복검사 */
    @GetMapping("/{email}")
    public ResponseEntity<Boolean> checkMemberEmail(@PathVariable String email) {

        return ResponseEntity.ok(createMemberService.checkMemberEmailDuplication(email));  // 고려해 봐야 할 부분
    }
    /* 회원가입 'submit' */
    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody SignupRequestDto signupRequestDto) {

        createMemberService.createMember(signupRequestDto);

        return new ResponseEntity(HttpStatus.CREATED);  // 이메일 인증 추가시 수정 필요
    }

}
