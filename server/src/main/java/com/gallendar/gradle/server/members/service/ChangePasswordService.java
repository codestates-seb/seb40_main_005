package com.gallendar.gradle.server.members.service;

import com.gallendar.gradle.server.global.auth.encoder.CommonEncoder;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.members.dto.ChangePasswordRequest;
import com.gallendar.gradle.server.members.dto.ChangePasswordResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class ChangePasswordService {
    private final MembersRepository membersRepository;
    private final CommonEncoder commonEncoder;

    @Transactional
    public ChangePasswordResponse passwordChangeById(ChangePasswordRequest changePasswordRequest) {
        Members members = membersRepository.findById(changePasswordRequest.getId()).orElseThrow(() -> new IllegalArgumentException());
        members.changePassword(commonEncoder.encode(changePasswordRequest.getPassword()));
        return new ChangePasswordResponse(true);
    }
}
