package com.gallendar.gradle.server.members.controller;

import com.gallendar.gradle.server.global.auth.jwt.JwtUtils;
import com.gallendar.gradle.server.members.dto.MemberSearchResponse;
import com.gallendar.gradle.server.members.dto.SignupRequestDto;
import com.gallendar.gradle.server.members.service.CreateMemberService;
import com.gallendar.gradle.server.members.service.MemberSearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MembersController {


    private final JwtUtils jwtUtils;
    private final MemberSearchService memberSearchService;

    private final CreateMemberService createMemberService;


    @GetMapping("/{email}")
    public List<MemberSearchResponse> searchMemberById(@PathVariable(value = "email") String email) {
        return memberSearchService.MemberSearchById(email);
    }


    @GetMapping("/checkId/{id}")
    public ResponseEntity<String> checkMemberId(@PathVariable String id) {
        return (createMemberService.checkMemberIdDuplication(id) ?
                ResponseEntity.status(HttpStatus.CONFLICT).body("This ID is already in use.")
                : ResponseEntity.status(HttpStatus.OK).body("This ID is available."));
    }


    @GetMapping("/checkEmail/{email}")
    public ResponseEntity<String> checkMemberEmail(@PathVariable String email) {
        return (createMemberService.checkMemberEmailDuplication(email) ?
                ResponseEntity.status(HttpStatus.CONFLICT).body("This Email is already in use.")
                : ResponseEntity.status(HttpStatus.OK).body("This email is available."));
    }


    @PostMapping
    public ResponseEntity<String> postMember(@Valid @RequestBody SignupRequestDto signupRequestDto) {

        createMemberService.createMember(signupRequestDto);

        return ResponseEntity.status(HttpStatus.CREATED).body("successful");
    }

    //Todo: 회원 탈퇴
    @DeleteMapping("/{members-id}")
    public String deleteMembers() {
        String response = "회원탈퇴";
        return response;
    }

    //Todo: 마이페이지 조회
    @GetMapping("/mypage/{members-id}")
    public String getMyPage(@PathVariable("members-id") String id) {
        String response = "마에페이지 조회 ";
        return response;
    }

    //Todo: 회원정보 수정
    @PatchMapping("/user")
    public String patchMember() {
        String response = " 회원정보 수정";
        return response;

    }

    //Todo: 회원정보 조회
    @GetMapping("/user/(members-id}")
    public String getMember(@PathVariable("members-id") String id) {
        String response = "회원정보 조회";
        return response;
    }
}
