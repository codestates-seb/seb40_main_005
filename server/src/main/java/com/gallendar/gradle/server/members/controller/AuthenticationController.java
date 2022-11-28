package com.gallendar.gradle.server.members.controller;

import com.gallendar.gradle.server.exception.BusinessLogicException;
import com.gallendar.gradle.server.members.dto.AuthNumDto;
import com.gallendar.gradle.server.members.dto.EmailRequestDto;
import com.gallendar.gradle.server.members.dto.LoginRequest;
import com.gallendar.gradle.server.members.dto.LoginResponse;
import com.gallendar.gradle.server.members.service.LoginService;
import com.gallendar.gradle.server.members.service.MailService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import io.swagger.annotations.ApiOperation;


@RestController
@RequiredArgsConstructor
@RequestMapping("/authentication")
@Slf4j
public class AuthenticationController {


    private final MailService mailService;

    private final LoginService loginService;

    /**
     * 로그인
     *
     * @param loginRequest
     * @return
     */
    @ApiOperation(value = "로그인", notes = "등록된 회원이 로그인을 시도하여 성공하면 토큰을 응답, 실패하면 예외발생")
    @PostMapping
    public LoginResponse membersLogin(@RequestBody LoginRequest loginRequest) {
        log.info("로그인 요청: " + loginRequest.getClass());
        return loginService.LoginMembers(loginRequest);
    }


    /**
     * 로그아웃
     *
     * @return
     */
    @ApiOperation(value = "로그아웃", notes = "헤더에 있는 토큰 값을 비운다.")
    @GetMapping
    public ResponseEntity<?> membersLogout() {
        log.info("로그아웃 요청");
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set(HttpHeaders.AUTHORIZATION, null);
        return new ResponseEntity<>(httpHeaders, HttpStatus.OK);
    }


    //Todo: 유저 확인 ( 비밀번호 변경전 , 유저가 맞는지 확인한다 )
    @GetMapping("/user")
    public String userAuthentication(@RequestParam String id,
                                     @RequestParam String password) {
        String response = "비밀번호 변경전 이루어지는 유저확인";
        return response;
    }


    /**
     * 인증번호 발송
     *
     * @param emailRequestDto
     * @throws Exception
     */
    @ApiOperation(value = "인증 번호 발송", notes = "가입하려하는 이메일로 인증번호를 발송한다.")
    @PostMapping("/email")
    public void sendAuthEmail(@Valid @RequestBody EmailRequestDto emailRequestDto) throws Exception {
        mailService.sendAuthEmail(emailRequestDto.getEmail());
    }

    /**
     * 인증번호 검증
     *
     * @param authNumDto
     * @return
     * @throws BusinessLogicException
     */
    @ApiOperation(value = "인증번호 검증", notes = "입력한 인증번호가 맞는지 확인한다.")
    @PostMapping("/email/verify")
    public ResponseEntity getEmailAuthenticationNumber(@Valid @RequestBody AuthNumDto authNumDto) throws BusinessLogicException {
        try {
            mailService.checkAuthNum(authNumDto.getAuthNum(), authNumDto.getEmail());
        } catch (BusinessLogicException businessLogicException) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This authentication number is incorrect");
        }
        return ResponseEntity.status(HttpStatus.OK).body("successful!");


    }

    //Todo: 비밀번호 변경
    @PatchMapping("/password")
    public String patchUserPassword(@RequestBody String password,
                                    @RequestBody String checkPassword) {
        String response = "비밀번호 변경";
        return response;
    }

    //Todo: 회원탈퇴
    @DeleteMapping("/{member-id}")
    public String deleteUser(@PathVariable(value = "member-id") String id) {
        String response = "회원탈퇴";
        return response;
    }

    //Todo: 마이페이지 조회
    @GetMapping("/mypage/{member-id}")
    public String getMyPage() {
        String response = "마이페이지 조회";
        return response;
    }

    //Todo: 회원정보 조회
    @GetMapping("/user/{member-id}")
    public String getUserInformation(@PathVariable("member-id") String id) {
        String response = "회원정보 조회";
        return response;
    }

    //Todo: 회원정보 수정
    @PatchMapping("/user")
    public String patchUserInformation() {
        String response = "회원정보 수정";
        return response;
    }


}
