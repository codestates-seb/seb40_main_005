package com.gallendar.gradle.server.members.service;

import com.gallendar.gradle.server.global.auth.jwt.JwtUtils;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.members.dto.LoginRequest;
import com.gallendar.gradle.server.members.dto.LoginResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final JwtUtils jwtUtils;
    private final MembersRepository membersRepository;
    @Autowired
    private final PasswordEncoder passwordEncoder;

    public LoginResponse loginMembers(LoginRequest loginRequest){
        final String memberId = loginRequest.getId();
        final String password = loginRequest.getPassword();
        Members members=membersRepository.findById(memberId).orElseThrow(()->new IllegalArgumentException("아이디 또는 비밀번호를 확인해주세요."));
        if(!passwordEncoder.matches(password,members.getPassword())){
            throw new IllegalArgumentException("아이디 또는 비밀번호를 확인해주세요.");
        }
        String token=jwtUtils.generateToken(memberId);
        return new LoginResponse(token);
    }
}
