package com.gallendar.gradle.server.members.controller;

import com.gallendar.gradle.server.members.dto.LoginRequest;
import com.gallendar.gradle.server.members.dto.LoginResponse;
import com.gallendar.gradle.server.members.service.LoginService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Email;

@RestController
@RequiredArgsConstructor
@RequestMapping("/authentication")
public class AuthenticationController {

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
        return loginService.loginMembers(loginRequest);
    }


    //Todo: 로그아웃
    @GetMapping
    public String membersLogout() {
        String response = "로그아웃";
        return response;
    }


    //Todo: 유저 확인 ( 비밀번호 변경전 , 유저가 맞는지 확인한다 )
    @GetMapping("/user")
    public String userAuthentication(@RequestParam String id,
                                     @RequestParam String password) {
        String response = "비밀번호 변경전 이루어지는 유저확인";
        return response;
    }


    //Todo: 이메일 인증번호 발송
    @GetMapping("/{email}")
    public String getEmailAuthentication(@PathVariable Email email) {
        String response = "이메일 인증 테스트";
        return response;
    }

    //Todo: 이메일 인증번호 검증
    @PostMapping("/email")
    public String getEmailAuthenticationNumber(@Valid @RequestBody String authenticationNumber) {
        String response = "이메일 인증번호 검증";
        return response;

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
