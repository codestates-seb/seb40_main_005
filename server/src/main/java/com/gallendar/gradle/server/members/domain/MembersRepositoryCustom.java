package com.gallendar.gradle.server.members.domain;



import java.util.List;


public interface MembersRepositoryCustom {
    List<Members> findByUser(String id);

    int CountBoardByMember(String id, Integer year, Integer month, Integer day);

    int CountBoardByTag(String id, Integer year, Integer month, Integer day);
}
