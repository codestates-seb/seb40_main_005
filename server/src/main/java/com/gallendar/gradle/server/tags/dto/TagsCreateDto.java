package com.gallendar.gradle.server.tags.dto;

import com.gallendar.gradle.server.tags.domain.Tags;
import com.gallendar.gradle.server.tags.type.TagStatus;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import static com.gallendar.gradle.server.tags.type.TagStatus.alert;

@Setter
@Getter
public class TagsCreateDto {

    private String tagsMember;

    @Builder
    public TagsCreateDto(String tagsMember){
        this.tagsMember = tagsMember;
    }
    public Tags toEntity(){
        return Tags.builder()
                .tagsMember(tagsMember)
                .tagStatus(alert)
                .build();
    }
}
