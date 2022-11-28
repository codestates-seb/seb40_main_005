package com.gallendar.gradle.server.members.domain;


import org.springframework.stereotype.Repository;

import java.util.List;


public interface MembersRepositoryCustom {
    List<Members> findByUser(String id);

    int CountBoardByMember(String id, Integer year, Integer month, Integer day);
}
