package com.gallendar.gradle.server.tags.dto;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.tags.domain.BoardTags;
import com.gallendar.gradle.server.tags.domain.Tags;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Builder
@Getter
public class NotificationResponse {
    private String shareId;
    private Long boardId;
    private String title;
    private LocalDateTime shareDateTime;

    public static NotificationResponse from(BoardTags boardTags){
        String shareId=boardTags.getBoard().getMembers().getId();
        Long boardId=boardTags.getBoard().getBoardId();
        String title=boardTags.getBoard().getTitle();
        LocalDateTime shareDateTime=boardTags.getTags().getCreatedAt();
        return NotificationResponse.builder()
                .shareId(shareId)
                .boardId(boardId)
                .title(title)
                .shareDateTime(shareDateTime)
                .build();
    }
}
