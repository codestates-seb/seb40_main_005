package com.gallendar.gradle.server.board.repository;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.entity.QBoard;
import com.gallendar.gradle.server.category.domain.QCategory;
import com.gallendar.gradle.server.members.domain.QMembers;
import com.gallendar.gradle.server.tags.domain.QBoardTags;
import com.gallendar.gradle.server.tags.domain.QTags;
import com.gallendar.gradle.server.tags.type.TagStatus;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import java.util.List;


@RequiredArgsConstructor
@Repository
public class BoardRepositoryCustomImpl implements BoardRepositoryCustom {
    private final JPAQueryFactory jpaQueryFactory;

    QBoard qBoard = QBoard.board;
    QBoardTags qBoardTags = QBoardTags.boardTags;
    QMembers qMembers = QMembers.members;
    QCategory qCategory = QCategory.category;
    QTags qTags = QTags.tags;

    @Override
    public Board findById(Long boardId, String userId) {
        Board board = jpaQueryFactory
                .selectFrom(qBoard)
                .where(qBoard.boardId.eq(boardId))
                .join(qBoard.boardTags, qBoardTags).fetchJoin()
                .where(qBoardTags.tags.status.eq(TagStatus.alert), qBoardTags.tags.tagsMember.eq(userId))
                .fetchOne();
        return board;
    }

    @Override
    public List<Board> findByBoard(Integer year, Integer month, Integer day, String category, Long id) {
        List<Board> list = jpaQueryFactory
                .selectFrom(qBoard)
                .leftJoin(qBoard.members, qMembers)
                .where(qMembers.membersId.eq(id)
                        , eqYear(year)
                        , eqMonth(month)
                        , eqDay(day)).fetchJoin()
                .leftJoin(qBoard.category, qCategory)
                .where(eqCategory(category)).fetchJoin()
                .leftJoin(qBoard.boardTags, qBoardTags).fetchJoin()
                .distinct()
                .fetch();
        return list;
    }

    private BooleanExpression eqYear(Integer year) {
        if (year == null) {
            return null;
        }
        return qBoard.createdAt.year().eq(year);
    }

    private BooleanExpression eqMonth(Integer month) {
        if (month == null) {
            return null;
        }
        return qBoard.createdAt.month().eq(month);
    }

    private BooleanExpression eqDay(Integer day) {
        if (day == null) {
            return null;
        }
        return qBoard.createdAt.dayOfMonth().eq(day);
    }

    private BooleanExpression eqCategory(String category) {
        if (StringUtils.hasText(category)) {
            return qBoard.category.categoryTitle.eq(category);
        }
        return null;
    }
}
