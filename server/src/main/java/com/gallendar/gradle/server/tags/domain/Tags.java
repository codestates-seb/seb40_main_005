package com.gallendar.gradle.server.tags.domain;

import javax.persistence.*;

@Entity
public class Tags {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tags_id")
    private Long id;

    @Column(name = "tags_member")
    private String tagsMember;

    @Column
    private String status;
}
