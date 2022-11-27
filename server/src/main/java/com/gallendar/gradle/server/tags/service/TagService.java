package com.gallendar.gradle.server.tags.service;

import com.gallendar.gradle.server.members.domain.MembersRepositoryCustomImpl;
import com.gallendar.gradle.server.tags.dto.CountBoardResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class TagService {
    private final MembersRepositoryCustomImpl membersRepositoryCustom;

    @Transactional
    public CountBoardResponse BoardCountByTagMember(String id, Integer year, Integer month, Integer day) {
        int count = membersRepositoryCustom.CountBoardByMember(id, year, month, day);
        return new CountBoardResponse(count);
    }
}
