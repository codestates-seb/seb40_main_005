package com.gallendar.gradle.server.members.domain;

import com.gallendar.gradle.server.global.auditing.BaseTimeEntity;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class Members extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "members_id")
    private Long membersId;
    @Column
    private String id;
    @Column
    private String email;
    @Column
    private String password;
}
