package com.gallendar.gradle.server.tags.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Tags {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tags_id")
    private Long id;

    @Column(name = "tags_member")
    private String tagsMember;

    @Column
    private String status;

    @OneToMany(mappedBy = "tags", cascade = CascadeType.REMOVE)
    private List<BoardTags> boardTags;

    @Transient
    private String tagStatus = "공유 신청이 되었습니다.";

    @Builder
    public Tags(String tagsMember) {
        this.tagsMember = tagsMember;
        this.status = tagStatus;
    }
}
