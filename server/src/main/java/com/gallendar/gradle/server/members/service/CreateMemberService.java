package com.gallendar.gradle.server.members.service;


import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.members.dto.SignupRequestDto;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@RequiredArgsConstructor
public class CreateMemberService {

    private final MembersRepository membersRepository;


    private final PasswordEncoding passwordEncoding;


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
    public Members createMember(SignupRequestDto signupRequestDto) {

        return membersRepository.save(passwordEncoding.passwordEncode(signupRequestDto).toEntity());


    }

}
