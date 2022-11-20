package com.gallendar.gradle.server.members.service;

import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepositoryCustomImpl;
import com.gallendar.gradle.server.members.dto.MemberSearchResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MemberSearchService {
    private final MembersRepositoryCustomImpl membersRepositoryCustom;

    public List<MemberSearchResponse> MemberSearchById(String id) {
        List<Members> members = membersRepositoryCustom.findByUser(id);
        return members.stream().map(MemberSearchResponse::from).collect(Collectors.toList());

    }
}
