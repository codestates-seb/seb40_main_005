package com.gallendar.gradle.server.tags.domain;

import com.gallendar.gradle.server.global.auditing.BaseTimeEntity;
import com.gallendar.gradle.server.tags.type.TagStatus;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Tags extends BaseTimeEntity {
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
    public Tags(String tagsMember, TagStatus tagStatus) {
        this.tagsMember = tagsMember;
        this.status = tagStatus;
    }

    public void changeStatus(TagStatus tagStatus) {
        this.status = tagStatus;
    }
    public void changeTagsMember(TagStatus tagStatus){
        this.tagsMember= String.valueOf(tagStatus);
    }
}
