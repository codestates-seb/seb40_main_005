package com.gallendar.gradle.server.tags.domain;

import com.gallendar.gradle.server.tags.type.TagStatus;
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
    @Enumerated(EnumType.STRING)
    private TagStatus status;

    @OneToMany(mappedBy = "tags", cascade = CascadeType.REMOVE)
    private List<BoardTags> boardTags;
    @Builder
    public Tags(String tagsMember,TagStatus tagStatus) {
        this.tagsMember = tagsMember;
        this.status = tagStatus;
    }
}
