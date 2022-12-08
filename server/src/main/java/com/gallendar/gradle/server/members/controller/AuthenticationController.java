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

    /**
     * 인증번호 발송
     *
     * @param emailRequestDto
     * @throws Exception
     */
    @ApiOperation(value = "인증 번호 발송", notes = "가입하려하는 이메일로 인증번호를 발송한다.")
    @PostMapping("/email")
    public void sendAuthEmail(@Valid @RequestBody EmailRequestDto emailRequestDto) throws Exception {
        log.info("인증 번호 발송 요청");
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
        log.info("인증 번호 검증 요청");
        try {
            mailService.checkAuthNum(authNumDto.getAuthNum(), authNumDto.getEmail());
        } catch (BusinessLogicException businessLogicException) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This authentication number is incorrect");
        }
        return ResponseEntity.status(HttpStatus.OK).body("successful!");


    }
}
