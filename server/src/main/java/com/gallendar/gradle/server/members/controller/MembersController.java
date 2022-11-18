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
public class MembersController {


    private final JwtUtils jwtUtils;
    private final MemberSearchService memberSearchService;

    private final CreateMemberService createMemberService;



    @GetMapping("/members/{email}")
    public List<MemberSearchResponse> searchMemberById(@PathVariable(value = "email") String email) {
        return memberSearchService.MemberSearchById(email);
    }


    @GetMapping("/members/checkId/{id}")
    public ResponseEntity<String> checkMemberId(@PathVariable String id) {
        if (createMemberService.checkMemberIdDuplication(id)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("해당 ID 는 이미 사용중입니다.");
        }
        return ResponseEntity.status(HttpStatus.OK).body("사용 가능한 ID 입니다."); // 고려해 봐야 할 부분
    }


    @GetMapping("/members/checkEmail/{email}")
    public ResponseEntity<String> checkMemberEmail(@PathVariable String email) {
        if (createMemberService.checkMemberEmailDuplication(email)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("해당 Email 은 이미 사용중입니다.");
        }
        return ResponseEntity.status(HttpStatus.OK).body("사용 가능한 email 입니다.");
    }


    @PostMapping("/members")
    public ResponseEntity<String> postMember(@Valid @RequestBody SignupRequestDto signupRequestDto) {

        createMemberService.createMember(signupRequestDto);

        return ResponseEntity.status(HttpStatus.CREATED).body("회원가입 성공");  // 이메일 인증 추가시 수정 필요
    }

    //Todo: 회원 탈퇴
    @DeleteMapping("/members/{members-id}")
    public String deleteMembers(){
        String response = "회원탈퇴";
        return response;
    }

    //Todo: 마이페이지 조회
    @GetMapping("/members/mypage/{members-id}")
    public String getMyPage(@PathVariable("members-id") String id) {
        String response = "마에페이지 조회 ";
        return response;
    }

    //Todo: 회원정보 수정
    @PatchMapping("/members/user/")
    public String patchMember() {
        String response = " 회원정보 수정";
        return response;

    }

    //Todo: 회원정보 조회
    @GetMapping("/members/user/(members-id}")
    public String getMember(@PathVariable("members-id") String id) {
        String response = "회원정보 조회";
        return response;
    }
}