package com.gallendar.gradle.server.members.service;


import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.members.dto.SignupRequestDto;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
public class CreateMemberService {

    private final MembersRepository membersRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public CreateMemberService(MembersRepository membersRepository,
                              BCryptPasswordEncoder passwordEncoder){
        this.membersRepository = membersRepository;
        this.passwordEncoder = passwordEncoder;

    }
    /* ID 중복검사 */
    public boolean checkMemberIdDuplication(String id) {
        return membersRepository.existsById(id);
    }


    /* Email 중복검사 */
    public boolean checkMemberEmailDuplication(String email) {
       return membersRepository.existsByEmail(email);   // true 면 , 이미 존재하는 email 이다. false면 해당 email은 가입한 적 없다.
    }

     @Transactional
    /* member 저장 */
    public Members createMember (SignupRequestDto signupRequestDto){

        signupRequestDto.setPassword(passwordEncoder.encode(signupRequestDto.getPassword())); // 암호화

        return membersRepository.save(signupRequestDto.toEntity());
    }

}
