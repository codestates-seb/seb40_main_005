package com.gallendar.gradle.server.tags.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QBoardTags is a Querydsl query type for BoardTags
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QBoardTags extends EntityPathBase<BoardTags> {

    private static final long serialVersionUID = 62201213L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QBoardTags boardTags = new QBoardTags("boardTags");

    public final com.gallendar.gradle.server.board.entity.QBoard board;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final QTags tags;

    public QBoardTags(String variable) {
        this(BoardTags.class, forVariable(variable), INITS);
    }

    public QBoardTags(Path<? extends BoardTags> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QBoardTags(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QBoardTags(PathMetadata metadata, PathInits inits) {
        this(BoardTags.class, metadata, inits);
    }

    public QBoardTags(Class<? extends BoardTags> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.board = inits.isInitialized("board") ? new com.gallendar.gradle.server.board.entity.QBoard(forProperty("board"), inits.get("board")) : null;
        this.tags = inits.isInitialized("tags") ? new QTags(forProperty("tags")) : null;
    }

}

