package com.gallendar.gradle.server.members.service;


import com.gallendar.gradle.server.exception.BusinessLogicException;
import com.gallendar.gradle.server.exception.ExceptionCode;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.members.dto.SignupRequestDto;
import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@RequiredArgsConstructor
public class CreateMemberService {

    private final MembersRepository membersRepository;


    private final PasswordEncoder passwordEncoder;


    /* ID 중복검사 */
    public boolean checkMemberIdDuplication(String id) {
        return membersRepository.existsById(id);
    }


    /* Email 중복검사 */
    public boolean checkMemberEmailDuplication(String email) {

        return membersRepository.existsByEmail(email);
    }

    @Transactional
    /* member 저장 */
    public void createMember(SignupRequestDto signupRequestDto) {

        String id = signupRequestDto.getId();
        String email = signupRequestDto.getEmail();
        if (membersRepository.existsByEmail(email)) {
            throw new BusinessLogicException(ExceptionCode.EMAIL_EXISTS);
        }
        if (membersRepository.existsById(id)) {
            throw new BusinessLogicException(ExceptionCode.ID_EXISTS);
        } else {
            String password = signupRequestDto.getPassword();

            signupRequestDto.setPassword(passwordEncoder.encode(password));

            membersRepository.save(signupRequestDto.toEntity());


        }

    }

}
