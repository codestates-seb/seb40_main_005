package com.gallendar.gradle.server.tags.domain;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BoardTagsRepository extends JpaRepository<BoardTags,Long> {

    Optional<BoardTags> findById(Long id);
}
