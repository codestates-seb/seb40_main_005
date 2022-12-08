package com.gallendar.gradle.server.members.controller;

import com.gallendar.gradle.server.exception.BusinessLogicException;
import com.gallendar.gradle.server.members.dto.*;
import com.gallendar.gradle.server.members.service.ChangePasswordService;
import com.gallendar.gradle.server.members.service.CreateMemberService;
import com.gallendar.gradle.server.members.service.MemberSearchService;
import com.gallendar.gradle.server.members.service.QuitMemberService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import javax.validation.Valid;


@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
@Slf4j
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
        log.info("태그 하려는 유저 찾기 요청");
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
        log.info("아이디 찾기 요청");
        return memberSearchService.idFindByEmail(email);
    }

    /**
     * 비밀번호 변경
     *
     * @param changePasswordRequest
     * @return
     */
    @PatchMapping("/password")
    public ChangePasswordResponse changePasswordById(@Valid @RequestBody ChangePasswordRequest changePasswordRequest) {
        log.info("비밀번호 변경 요청");
        return changePasswordService.passwordChangeById(changePasswordRequest);
    }

     /**
     * 아이디 중복 확인
     * @param id
     * @return
     */
    @ApiOperation(value = "아이디 중복 확인", notes = "입력한 아이디가 이미 가입되어있는지 확인 할 수 있다.")
    @GetMapping("/checkId/{id}")
    public ResponseEntity<String> checkMemberId(@PathVariable String id) {
        log.info("아이디 중복 확인 요청");
        return (createMemberService.checkMemberIdDuplication(id) ?
                ResponseEntity.status(HttpStatus.CONFLICT).body("This ID is already in use.")
                : ResponseEntity.status(HttpStatus.OK).body("This ID is available."));
    }

    /**
     * 이메일 중복확인
     * @param email
     * @return
     */
    @ApiOperation(value = "이메일 중복 확인", notes = "입력한 이메일이 이미 가입되어있는지 확인 할 수 있다.")
    @GetMapping("/checkEmail/{email}")
    public ResponseEntity<String> checkMemberEmail(@PathVariable String email) {
        log.info("이메일 중복 확인 요청");
        return (createMemberService.checkMemberEmailDuplication(email) ?
                ResponseEntity.status(HttpStatus.CONFLICT).body("This Email is already in use.")
                : ResponseEntity.status(HttpStatus.OK).body("This email is available."));
    }

    /**
     * 회원가입
     * @param signupRequestDto
     * @return
     */
    @ApiOperation(value = "회원가입", notes = "가입되어 있지 않은 아이디와 이메일 그리고 이메일 인증을 통해 회원가입을 할 수 있다.")
    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody SignupRequestDto signupRequestDto) {
        log.info("회원가입 요청");
        try {
            createMemberService.createMember(signupRequestDto);
        } catch (BusinessLogicException businessLogicException) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This email or Id is already in use");
        }

        return ResponseEntity.status(HttpStatus.CREATED).body("successful");
    }
}