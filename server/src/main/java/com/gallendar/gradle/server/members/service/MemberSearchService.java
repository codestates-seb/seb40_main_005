package com.gallendar.gradle.server.members.service;

import com.gallendar.gradle.server.exception.Message;
import com.gallendar.gradle.server.exception.Status;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.members.domain.MembersRepositoryCustomImpl;
import com.gallendar.gradle.server.members.dto.FindIdByEmailResponse;
import com.gallendar.gradle.server.members.dto.MemberSearchResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MemberSearchService {
    private final MembersRepositoryCustomImpl membersRepositoryCustom;
    private final MembersRepository membersRepository;

    public List<MemberSearchResponse> MemberSearchById(String id) {
        List<Members> members = membersRepositoryCustom.findByUser(id);
        return members.stream().map(MemberSearchResponse::from).collect(Collectors.toList());
    }

    public FindIdByEmailResponse idFindByEmail(String email) {
        Members members = membersRepository.findByEmail(email).orElseThrow(() -> new IllegalArgumentException());
        return new FindIdByEmailResponse(members.getId());
    }
}
