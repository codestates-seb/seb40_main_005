package com.gallendar.gradle.server.members.controller;

import com.gallendar.gradle.server.exception.Message;
import com.gallendar.gradle.server.global.auth.jwt.JwtUtils;
import com.gallendar.gradle.server.members.dto.MemberSearchResponse;
import com.gallendar.gradle.server.members.dto.SignupRequestDto;
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

@RestController
@RequiredArgsConstructor
public class MembersController {


    private final JwtUtils jwtUtils;
    private final MemberSearchService memberSearchService;

    private final CreateMemberService createMemberService;


    /**
     * 유저 찾기(태그 추가할 때 사용)
     * @param id
     * @return
     */
    @ApiOperation(value = "유저 찾기",notes = "유저의 id 값으로 요청이 들어오면 해당 요청이 포함된 모든 결과를 리스트로 반환한다.")
    @GetMapping("/members/search")
    public List<MemberSearchResponse> searchMemberById(@RequestParam(value = "id") String id) {
        return memberSearchService.MemberSearchById(id);
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

    /**
     * 아이디 찾기
     * @param email
     * @return
     */
    @ApiOperation(value = "아이디 찾기",notes = "가입한 이메일을 통해서 로그인 아이디를 찾을 수 있다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "아이디 찾기")
    })
    @GetMapping("/members/find-id")
    public ResponseEntity<Message> findIdByEmail(@RequestParam("email") String email){
        return memberSearchService.idFindByEmail(email);
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