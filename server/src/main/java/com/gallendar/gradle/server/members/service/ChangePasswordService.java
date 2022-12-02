package com.gallendar.gradle.server.members.service;

import com.gallendar.gradle.server.global.auth.encoder.CommonEncoder;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.members.dto.ChangePasswordRequest;
import com.gallendar.gradle.server.members.dto.ChangePasswordResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class ChangePasswordService {
    private final MembersRepository membersRepository;
    private final CommonEncoder commonEncoder;

    @Transactional
    public ChangePasswordResponse passwordChangeById(ChangePasswordRequest changePasswordRequest) {
        Members members = membersRepository.findById(changePasswordRequest.getId()).orElseThrow(() -> {
            log.info("해당 아이디로 가입된 회원을 찾지 못하였습니다.");
            return new IllegalArgumentException();
        });
        members.changePassword(commonEncoder.encode(changePasswordRequest.getPassword()));
        return new ChangePasswordResponse(true);
    }
}
