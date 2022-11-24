package com.gallendar.gradle.server.members.service;

import com.gallendar.gradle.server.members.dto.SignupRequestDto;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class PasswordEncoding {

    private PasswordEncoder passwordEncoder;

    public SignupRequestDto passwordEncode(SignupRequestDto signupRequestDto) {
        String password = signupRequestDto.getPassword();
        signupRequestDto.setPassword(passwordEncoder.encode(password));
        return signupRequestDto;
    }
}
