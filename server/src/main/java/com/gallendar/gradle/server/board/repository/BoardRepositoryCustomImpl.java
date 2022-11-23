package com.gallendar.gradle.server.board.repository;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.entity.QBoard;
import com.gallendar.gradle.server.tags.domain.QBoardTags;
import com.gallendar.gradle.server.tags.type.TagStatus;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;


@RequiredArgsConstructor
@Repository
public class BoardRepositoryCustomImpl implements BoardRepositoryCustom {
    private final JPAQueryFactory jpaQueryFactory;

    QBoard qBoard = QBoard.board;
    QBoardTags qBoardTags = QBoardTags.boardTags;

    @Override
    public Board findById(Long boardId,String userId) {
        Board board = jpaQueryFactory
                .selectFrom(qBoard)
                .where(qBoard.boardId.eq(boardId))
                .join(qBoard.boardTags, qBoardTags).fetchJoin()
                .where(qBoardTags.tags.status.eq(TagStatus.alert),qBoardTags.tags.tagsMember.eq(userId))
                .fetchOne();
        return board;
    }

    @Override
    public List<Board> findByBoard(int year, int month, int day, String category) {
        return null;
    }
}
