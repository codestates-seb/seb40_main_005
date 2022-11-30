package com.gallendar.gradle.server.members.domain;

import com.gallendar.gradle.server.board.entity.QBoard;
import com.gallendar.gradle.server.tags.domain.QBoardTags;
import com.gallendar.gradle.server.tags.domain.QTags;
import com.gallendar.gradle.server.tags.type.TagStatus;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
public class MembersRepositoryCustomImpl implements MembersRepositoryCustom {
    private final JPAQueryFactory jpaQueryFactory;
    QMembers qMembers = QMembers.members;
    QBoard qBoard = QBoard.board;
    QBoardTags qBoardTags = QBoardTags.boardTags;
    QTags qTags = QTags.tags;

    @Override
    public List<Members> findByUser(String id) {
        List<Members> list = jpaQueryFactory
                .selectFrom(qMembers)
                .where(qMembers.id.contains(id))
                .fetch();
        return list;
    }

    @Override
    public int CountBoardByMember(String id, Integer year, Integer month, Integer day) {
        int count = jpaQueryFactory
                .selectFrom(qBoard)
                .leftJoin(qBoard.members, qMembers).fetchJoin()
                .where(qMembers.id.eq(id)
                        , qBoard.created.year().eq(year)
                        , qBoard.created.month().eq(month)
                        , qBoard.created.dayOfMonth().eq(day))
                .fetch().size();
        return count;
    }

    @Override
    public int CountBoardByTag(String id, Integer year, Integer month, Integer day) {
        int count = jpaQueryFactory
                .selectFrom(qBoard)
                .leftJoin(qBoard.members, qMembers)
                .where(qMembers.id.eq(id),
                        qBoard.created.year().eq(year),
                        qBoard.created.month().eq(month),
                        qBoard.created.dayOfMonth().eq(day)).fetchJoin()
                .leftJoin(qBoard.boardTags, qBoardTags).fetchJoin()
                .leftJoin(qBoardTags.tags, qTags)
                .where(qTags.status.eq(TagStatus.shared)).fetchJoin()
                .fetch().size();
        return count;
    }
}
