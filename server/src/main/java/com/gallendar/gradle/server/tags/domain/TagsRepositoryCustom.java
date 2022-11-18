package com.gallendar.gradle.server.tags.domain;

import java.util.List;

public interface TagsRepositoryCustom {
    List<Tags> findByTagsMember(String tagsMember);
}
