package com.gallendar.gradle.server.members.dto;

import com.gallendar.gradle.server.tags.type.TagStatus;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class MemberTagStatusResponse {
    private String shareFrom;
    private String title;
    private String shareTo;
    private TagStatus status;
    private LocalDateTime time;

    public static MemberTagStatusResponse from(String from, String titled, String to, TagStatus tagStatus, LocalDateTime times) {
        String shareFrom = from;
        String title = titled;
        String shareTo = to;
        TagStatus status = tagStatus;
        LocalDateTime time = times;

        return MemberTagStatusResponse.builder()
                .shareFrom(shareFrom)
                .title(title)
                .shareTo(shareTo)
                .status(status)
                .time(time)
                .build();
    }
}
