package com.gallendar.gradle.server.board.dto;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.tags.domain.BoardTags;
import com.gallendar.gradle.server.tags.domain.Tags;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
public class BoardSearchResponse {
    private Long boardId;
    private String title;
    private String content;
    private LocalDateTime createdPost;
    private LocalDateTime modifiedPost;
    private String writer;
    private String category;
    private List<String> tagMember;

    public static BoardSearchResponse from(Board board, List<String> tagsMembers) {
        Long boardId = board.getBoardId();
        String title = board.getTitle();
        String content = board.getContent();
        LocalDateTime createdPost = board.getCreatedAt();
        LocalDateTime modifiedPost = board.getUpdatedAt();
        String writer = board.getMembers().getId();
        String category = board.getCategory().getCategoryTitle();
        List<String> tagsMember = tagsMembers;

        return BoardSearchResponse.builder()
                .boardId(boardId)
                .title(title)
                .content(content)
                .createdPost(createdPost)
                .modifiedPost(modifiedPost)
                .writer(writer)
                .tagMember(tagsMember)
                .category(category)
                .build();
    }
}
