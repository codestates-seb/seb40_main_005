package com.gallendar.gradle.server.tags.domain;

import com.gallendar.gradle.server.tags.type.TagStatus;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class TagsRepositoryCustomImpl implements TagsRepositoryCustom {
    private final JPAQueryFactory jpaQueryFactory;
    QTags qTags = QTags.tags;
    QBoardTags qBoardTags = QBoardTags.boardTags;

    @Override
    public List<Tags> findByTagsMember(String tagsMember) {
        List<Tags> list = jpaQueryFactory
                .selectFrom(qTags)
                .where(qTags.status.eq(TagStatus.alert))
                .join(qTags.boardTags, qBoardTags).fetchJoin()
                .where(qTags.tagsMember.eq(tagsMember))
                .fetch();
        return list;
    }
}
