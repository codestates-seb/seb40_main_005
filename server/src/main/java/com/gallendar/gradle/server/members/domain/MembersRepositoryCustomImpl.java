package com.gallendar.gradle.server.members.domain;

import com.gallendar.gradle.server.board.entity.QBoard;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@RequiredArgsConstructor
@Repository
public class MembersRepositoryCustomImpl implements MembersRepositoryCustom {
    private final JPAQueryFactory jpaQueryFactory;
    QMembers qMembers = QMembers.members;
    QBoard qBoard = QBoard.board;

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
                        , qBoard.createdAt.year().eq(year)
                        , qBoard.createdAt.month().eq(month)
                        , qBoard.createdAt.dayOfMonth().eq(day))
                .fetch().size();
        return count;
    }
}
