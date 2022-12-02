package com.gallendar.gradle.server.tags.domain;

import com.gallendar.gradle.server.board.entity.Board;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface TagsRepositoryCustom {
    List<Tags> findByTagsMember(String tagsMember);
    List<Board> getSharedStatusById(String id, Pageable pageable);
}
