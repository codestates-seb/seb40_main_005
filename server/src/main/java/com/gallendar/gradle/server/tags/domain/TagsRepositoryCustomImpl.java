package com.gallendar.gradle.server.tags.domain;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.entity.QBoard;
import com.gallendar.gradle.server.members.domain.QMembers;
import com.gallendar.gradle.server.tags.type.TagStatus;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class TagsRepositoryCustomImpl implements TagsRepositoryCustom {
    private final JPAQueryFactory jpaQueryFactory;
    QTags qTags = QTags.tags;
    QBoardTags qBoardTags = QBoardTags.boardTags;
    QBoard qBoard=QBoard.board;
    QMembers qMembers=QMembers.members;

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

    @Override
    public List<Board> getSharedStatusById(String id, Pageable pageable) {
        List<Board> list=jpaQueryFactory
                .selectFrom(qBoard)
                .leftJoin(qBoard.members,qMembers)
                .where(qMembers.id.eq(id)).fetchJoin()
                .leftJoin(qBoard.boardTags,qBoardTags).fetchJoin()
                .leftJoin(qBoardTags.tags,qTags).fetchJoin()
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();
        return list;
    }
}
