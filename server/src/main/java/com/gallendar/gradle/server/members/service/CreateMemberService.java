package com.gallendar.gradle.server.members.service;


import com.gallendar.gradle.server.exception.BusinessLogicException;
import com.gallendar.gradle.server.exception.ExceptionCode;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.members.dto.SignupRequestDto;
import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@RequiredArgsConstructor
@Slf4j
public class CreateMemberService {

    private final MembersRepository membersRepository;

    private final PasswordEncoder passwordEncoder;


    public boolean checkMemberIdDuplication(String id) {
        log.info("레포지토리에 해당 아이디가 이미 존재하는지 확인");
        return membersRepository.existsById(id);
    }


    public boolean checkMemberEmailDuplication(String email) {
        log.info("레포지토리에 해당 이메일이 이미 존재하는지 확인");
        return membersRepository.existsByEmail(email);
    }

    @Transactional
    public void createMember(SignupRequestDto signupRequestDto) {

        String id = signupRequestDto.getId();
        String email = signupRequestDto.getEmail();
        log.info("가입하려는 이메일이 중복 확인이 이루어 졌는지 확인");
        if (membersRepository.existsByEmail(email)) {
            throw new BusinessLogicException(ExceptionCode.EMAIL_EXISTS);
        }
        log.info("가입하려는 아이디가 중복 확인이 이루어 졌는지 확인");
        if (membersRepository.existsById(id)) {
            throw new BusinessLogicException(ExceptionCode.ID_EXISTS);
        } else {
            log.info("유저가 입력한 비밀번호 암호화 시작");
            String password = signupRequestDto.getPassword();

            signupRequestDto.setPassword(passwordEncoder.encode(password));
            log.info("유저가 회원가입 시 입력한 정보들 저장");
            membersRepository.save(signupRequestDto.toEntity());

        }

    }

}
