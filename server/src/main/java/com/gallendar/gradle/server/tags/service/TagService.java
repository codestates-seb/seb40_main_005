package com.gallendar.gradle.server.tags.service;

import com.gallendar.gradle.server.members.domain.MembersRepositoryCustomImpl;
import com.gallendar.gradle.server.tags.dto.CountBoardResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class TagService {
    private final MembersRepositoryCustomImpl membersRepositoryCustom;

    @Transactional
    public CountBoardResponse BoardCountByTagMember(String id, Integer year, Integer month, Integer day) {
        int count = membersRepositoryCustom.CountBoardByTag(id, year, month, day);
        log.info("태그 된 게시글 개수 : "+count);
        boolean flag=true;
        if(count>0){
            flag=false;
        }
        return new CountBoardResponse(flag);
    }
}
