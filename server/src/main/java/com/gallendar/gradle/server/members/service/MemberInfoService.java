package com.gallendar.gradle.server.members.service;

import com.gallendar.gradle.server.global.auth.jwt.JwtUtils;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.members.dto.MemberInfoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberInfoService {
    private final MembersRepository membersRepository;
    private final JwtUtils jwtUtils;
    public MemberInfoResponse myInfoGetById(String token){
        String memberId= jwtUtils.getMemberIdFromToken(token);
        Members members=membersRepository.findById(memberId).orElseThrow(()->new IllegalArgumentException());
        return new MemberInfoResponse(members.getId(),members.getEmail());
    }
}
