package com.gallendar.gradle.server.tags.domain;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.members.dto.MemberTagStatusRequest;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface TagsRepositoryCustom {
    List<Tags> findByTagsMember(String tagsMember);
    List<Board> getSharedStatusById(String id, MemberTagStatusRequest memberTagStatusRequest, Pageable pageable);
}
