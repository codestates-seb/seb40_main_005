package com.gallendar.gradle.server.tags.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTags is a Querydsl query type for Tags
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QTags extends EntityPathBase<Tags> {

    private static final long serialVersionUID = -312285189L;

    public static final QTags tags = new QTags("tags");

    public final com.gallendar.gradle.server.global.auditing.QBaseTimeEntity _super = new com.gallendar.gradle.server.global.auditing.QBaseTimeEntity(this);

    public final ListPath<BoardTags, QBoardTags> boardTags = this.<BoardTags, QBoardTags>createList("boardTags", BoardTags.class, QBoardTags.class, PathInits.DIRECT2);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final EnumPath<com.gallendar.gradle.server.tags.type.TagStatus> status = createEnum("status", com.gallendar.gradle.server.tags.type.TagStatus.class);

    public final StringPath tagsMember = createString("tagsMember");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updatedAt = _super.updatedAt;

    public QTags(String variable) {
        super(Tags.class, forVariable(variable));
    }

    public QTags(Path<? extends Tags> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTags(PathMetadata metadata) {
        super(Tags.class, metadata);
    }

}

