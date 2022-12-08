package com.gallendar.gradle.server.board.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QBoard is a Querydsl query type for Board
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QBoard extends EntityPathBase<Board> {

    private static final long serialVersionUID = 2127042288L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QBoard board = new QBoard("board");

    public final com.gallendar.gradle.server.global.auditing.QBaseTimeEntity _super = new com.gallendar.gradle.server.global.auditing.QBaseTimeEntity(this);

    public final NumberPath<Long> boardId = createNumber("boardId", Long.class);

    public final ListPath<com.gallendar.gradle.server.tags.domain.BoardTags, com.gallendar.gradle.server.tags.domain.QBoardTags> boardTags = this.<com.gallendar.gradle.server.tags.domain.BoardTags, com.gallendar.gradle.server.tags.domain.QBoardTags>createList("boardTags", com.gallendar.gradle.server.tags.domain.BoardTags.class, com.gallendar.gradle.server.tags.domain.QBoardTags.class, PathInits.DIRECT2);

    public final com.gallendar.gradle.server.category.domain.QCategory category;

    public final StringPath content = createString("content");

    public final DatePath<java.time.LocalDate> created = createDate("created", java.time.LocalDate.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    public final com.gallendar.gradle.server.members.domain.QMembers members;

    public final StringPath music = createString("music");

    public final com.gallendar.gradle.server.photo.entity.QPhoto photo;

    public final StringPath title = createString("title");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updatedAt = _super.updatedAt;

    public final StringPath url = createString("url");

    public QBoard(String variable) {
        this(Board.class, forVariable(variable), INITS);
    }

    public QBoard(Path<? extends Board> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QBoard(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QBoard(PathMetadata metadata, PathInits inits) {
        this(Board.class, metadata, inits);
    }

    public QBoard(Class<? extends Board> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.category = inits.isInitialized("category") ? new com.gallendar.gradle.server.category.domain.QCategory(forProperty("category")) : null;
        this.members = inits.isInitialized("members") ? new com.gallendar.gradle.server.members.domain.QMembers(forProperty("members")) : null;
        this.photo = inits.isInitialized("photo") ? new com.gallendar.gradle.server.photo.entity.QPhoto(forProperty("photo")) : null;
    }

}

