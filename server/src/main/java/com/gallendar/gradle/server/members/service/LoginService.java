package com.gallendar.gradle.server.members.service;

import com.gallendar.gradle.server.global.auth.encoder.CommonEncoder;
import com.gallendar.gradle.server.global.auth.jwt.JwtUtils;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.members.dto.LoginRequest;
import com.gallendar.gradle.server.members.dto.LoginResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class LoginService {
    private final JwtUtils jwtUtils;
    private final MembersRepository membersRepository;
    private final CommonEncoder commonEncoder;

    public LoginResponse LoginMembers(LoginRequest loginRequest) {
        Members members = membersRepository.findById(loginRequest.getId()).orElseThrow(() -> new IllegalArgumentException("아이디 또는 비밀번호를 확인해주세요."));
        if (!commonEncoder.matches(loginRequest.getPassword(), members.getPassword())) {
            log.info("비밀번호가 일치하지 않습니다."+loginRequest.getClass());
            throw new IllegalArgumentException("아이디 또는 비밀번호를 확인해주세요.");
        }
        String token = jwtUtils.generateToken(loginRequest.getId());
        return new LoginResponse(token, members.getMembersId(), members.getId());
    }
}
