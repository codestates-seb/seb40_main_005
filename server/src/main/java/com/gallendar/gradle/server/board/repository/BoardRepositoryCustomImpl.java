package com.gallendar.gradle.server.board.repository;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.entity.QBoard;
import com.gallendar.gradle.server.category.domain.QCategory;
import com.gallendar.gradle.server.exception.Status;
import com.gallendar.gradle.server.members.domain.QMembers;
import com.gallendar.gradle.server.photo.entity.QPhoto;
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
    QPhoto qPhoto=QPhoto.photo;

    @Override
    public Board findById(Long boardId, String userId) {
        Board board = jpaQueryFactory
                .selectFrom(qBoard)
                .where(qBoard.boardId.eq(boardId))
                .leftJoin(qBoard.category,qCategory).fetchJoin()
                .leftJoin(qBoard.boardTags, qBoardTags).fetchJoin()
                .leftJoin(qBoardTags.tags,qTags)
                .where(qTags.status.eq(TagStatus.alert), qTags.tagsMember.eq(userId)).fetchJoin()
                .fetchOne();
        return board;
    }

    @Override
    public List<Board> findByBoard(Integer year, Integer month, String category, String id) {
        List<Board> list = jpaQueryFactory
                .selectFrom(qBoard)
                .leftJoin(qBoard.members, qMembers)
                .where(qMembers.id.eq(id)
                        , eqYear(year)
                        , eqMonth(month)).fetchJoin()
                .leftJoin(qBoard.category, qCategory)
                .where(eqCategory(category)).fetchJoin()
                .leftJoin(qBoard.boardTags, qBoardTags).fetchJoin()
                .distinct()
                .fetch();
        return list;
    }

    @Override
    public List<Board> findByBoardId(Long boardId,String id) {
        List<Board> list=jpaQueryFactory
                .selectFrom(qBoard)
                .leftJoin(qBoard.members,qMembers)
                .where(qMembers.id.eq(id)
                ,qBoard.boardId.eq(boardId)).fetchJoin()
                .leftJoin(qBoard.photo,qPhoto).fetchJoin()
                .leftJoin(qBoard.category,qCategory).fetchJoin()
                .leftJoin(qBoard.boardTags,qBoardTags).fetchJoin()
                .fetch();
        return list;
    }

    @Override
    public List<Board> findByCategory(String id){
        List<Board> list=jpaQueryFactory
                .selectFrom(qBoard)
                .leftJoin(qBoard.members,qMembers)
                .where(qMembers.id.eq(id))
                .leftJoin(qBoard.category,qCategory).fetchJoin()
                .fetch();
        return list;
    }



    @Override
    public int findByCategoryCount(Long id){
        int count=jpaQueryFactory
                .selectFrom(qBoard)
                .leftJoin(qBoard.category,qCategory)
                .where(qCategory.categoryId.eq(id)).fetchJoin()
                .fetch().size();
        return count;
    }

    @Override
    public List<Board> findByTagMembers(Long boardId) {
        List<Board> list=jpaQueryFactory
                .selectFrom(qBoard)
                .where(qBoard.boardId.eq(boardId))
                .leftJoin(qBoard.boardTags,qBoardTags).fetchJoin()
                .leftJoin(qBoardTags.tags,qTags).fetchJoin()
                .distinct()
                .fetch();
        return list;
    }

    @Override
    public List<Board> findAllBoardById(String id) {
        List<Board> list=jpaQueryFactory
                .selectFrom(qBoard)
                .leftJoin(qBoard.members,qMembers)
                .where(qMembers.id.eq(id)).fetchJoin()
                .leftJoin(qBoard.boardTags,qBoardTags).fetchJoin()
                .leftJoin(qBoardTags.tags,qTags).fetchJoin()
                .fetch();
        return list;
    }

    private BooleanExpression eqYear(Integer year) {
        if (year == null) {
            return null;
        }
        return qBoard.created.year().eq(year);
    }

    private BooleanExpression eqMonth(Integer month) {
        if (month == null) {
            return null;
        }
        return qBoard.created.month().eq(month);
    }

    private BooleanExpression eqDay(Integer day) {
        if (day == null) {
            return null;
        }
        return qBoard.created.dayOfMonth().eq(day);
    }

    private BooleanExpression eqCategory(String category) {
        if (StringUtils.hasText(category)) {
            return qBoard.category.categoryTitle.eq(category);
        }
        return null;
    }
}
