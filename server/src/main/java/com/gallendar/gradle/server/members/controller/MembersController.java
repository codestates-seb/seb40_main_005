package com.gallendar.gradle.server.members.controller;

import com.gallendar.gradle.server.exception.BusinessLogicException;
import com.gallendar.gradle.server.exception.ExceptionCode;
import com.gallendar.gradle.server.exception.Message;
import com.gallendar.gradle.server.global.auth.jwt.JwtUtils;
import com.gallendar.gradle.server.members.dto.*;
import com.gallendar.gradle.server.members.service.ChangePasswordService;
import com.gallendar.gradle.server.members.service.CreateMemberService;
import com.gallendar.gradle.server.members.service.MemberSearchService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MembersController {


    private final MemberSearchService memberSearchService;

    private final CreateMemberService createMemberService;
    private final ChangePasswordService changePasswordService;


    /**
     * 유저 찾기(태그 추가할 때 사용)
     *
     * @param id
     * @return
     */
    @ApiOperation(value = "유저 찾기", notes = "유저의 id 값으로 요청이 들어오면 해당 요청이 포함된 모든 결과를 리스트로 반환한다.")
    @GetMapping("/search")
    public List<MemberSearchResponse> searchMemberById(@RequestParam(value = "id") String id) {
        return memberSearchService.MemberSearchById(id);
    }


    /**
     * 아이디 찾기
     *
     * @param email
     * @return
     */
    @ApiOperation(value = "아이디 찾기", notes = "가입한 이메일을 통해서 로그인 아이디를 찾을 수 있다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "id")
    })
    @GetMapping("/find-id")
    public FindIdByEmailResponse findIdByEmail(@RequestParam("email") String email) {
        return memberSearchService.idFindByEmail(email);


    /**
     * 비밀번호 변경
     *
     * @param changePasswordRequest
     * @return
     */
    @ApiOperation(value = "비밀번호 변경", notes = "가입된 회원의 패스워드를 변경한다, 기존 설정된 비밀번호 패턴을 맞추지 않는다면 예외처리")
    @PatchMapping("/password")
    public ChangePasswordResponse changePasswordById(@Valid @RequestBody ChangePasswordRequest changePasswordRequest) {
        return changePasswordService.passwordChangeById(changePasswordRequest);
    }

    @GetMapping("/{email}")
    public List<MemberSearchResponse> searchMemberByEmail(@PathVariable(value = "email") String email) {
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
    public ResponseEntity postMember(@Valid @RequestBody SignupRequestDto signupRequestDto) {

        try {
            createMemberService.createMember(signupRequestDto);
        } catch (BusinessLogicException businessLogicException) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This email or Id is already in use");
        }

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