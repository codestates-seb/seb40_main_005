package com.gallendar.gradle.server.members.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QMembers is a Querydsl query type for Members
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMembers extends EntityPathBase<Members> {

    private static final long serialVersionUID = -126404431L;

    public static final QMembers members = new QMembers("members");

    public final com.gallendar.gradle.server.global.auditing.QBaseTimeEntity _super = new com.gallendar.gradle.server.global.auditing.QBaseTimeEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    public final StringPath email = createString("email");

    public final StringPath id = createString("id");

    public final NumberPath<Long> membersId = createNumber("membersId", Long.class);

    public final StringPath password = createString("password");

    public final EnumPath<MemberRole> role = createEnum("role", MemberRole.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updatedAt = _super.updatedAt;

    public QMembers(String variable) {
        super(Members.class, forVariable(variable));
    }

    public QMembers(Path<? extends Members> path) {
        super(path.getType(), path.getMetadata());
    }

    public QMembers(PathMetadata metadata) {
        super(Members.class, metadata);
    }

}

