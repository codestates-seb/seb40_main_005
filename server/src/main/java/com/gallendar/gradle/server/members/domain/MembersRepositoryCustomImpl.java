package com.gallendar.gradle.server.members.domain;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@RequiredArgsConstructor
@Repository
public class MembersRepositoryCustomImpl implements MembersRepositoryCustom{
    private final JPAQueryFactory jpaQueryFactory;
    QMembers qMembers=QMembers.members;

    @Override
    public List<Members> findByUser(String id) {
        List<Members> list=jpaQueryFactory
                .selectFrom(qMembers)
                .where(qMembers.id.contains(id))
                .fetch();
        return list;
    }
}
