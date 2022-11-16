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

//    public MembersController(CreateMemberService createMemberService){
//        this.createMemberService = createMemberService;
//    }

    @PostMapping("/authentication")
    public LoginResponse membersLogin(@RequestBody LoginRequest loginRequest) {
        return loginService.LoginMembers(loginRequest);
    }

    @GetMapping("/search/{id}")
    public List<MemberSearchResponse> searchMemberById(@PathVariable(value = "id") String id) {
        return memberSearchService.MemberSearchById(id);
    }

    /* ID 중복검사 */
    @GetMapping("checkId/{id}")
    public ResponseEntity<String> checkMemberId( @PathVariable String id) {
        if(createMemberService.checkMemberIdDuplication(id)){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("해당 ID 는 이미 사용중입니다.");
        }
        return ResponseEntity.status(HttpStatus.OK).body("사용 가능한 ID 입니다."); // 고려해 봐야 할 부분
    }

    /* 이메일 중복검사 */
    @GetMapping("checkEmail/{email}")
    public ResponseEntity<String> checkMemberEmail(@PathVariable String email) {
        if(createMemberService.checkMemberEmailDuplication(email)){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("해당 Email 은 이미 사용중입니다.");
        }
        return ResponseEntity.status(HttpStatus.OK).body("사용 가능한 email 입니다.");
    }
    /* 회원가입 'submit' */
    @PostMapping
    public ResponseEntity<String> postMember(@Valid @RequestBody SignupRequestDto signupRequestDto) {

        createMemberService.createMember(signupRequestDto);

        return ResponseEntity.status(HttpStatus.CREATED).body("회원가입 성공");  // 이메일 인증 추가시 수정 필요
    }

}
