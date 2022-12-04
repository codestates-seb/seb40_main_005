package com.gallendar.gradle.server.tags.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagsRepository extends JpaRepository<Tags,Long> {
    Tags findByTagsMember(String tagsMember);

}
