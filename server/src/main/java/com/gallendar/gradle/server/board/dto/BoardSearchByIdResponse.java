package com.gallendar.gradle.server.board.dto;

import com.gallendar.gradle.server.board.entity.Board;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class BoardSearchByIdResponse {
    private Long boardId;
    private String writer;
    private String title;
    private String photo;
    private String music;
    private String url;
    private String content;
    private String category;
    private List<String> tagsMembers;

    public static BoardSearchByIdResponse from(Board board,List<String> tagsMember){
        Long boardId=board.getBoardId();
        String writer=board.getMembers().getId();
        String title=board.getTitle();
        String photo=board.getPhoto().getPath();
        String music=board.getMusic();
        String url=board.getUrl();
        String content= board.getContent();
        String category=board.getCategory().getCategoryTitle();
        List<String> tagsMembers=tagsMember;

        return BoardSearchByIdResponse.builder()
                .boardId(boardId)
                .writer(writer)
                .title(title)
                .photo(photo)
                .music(music)
                .url(url)
                .content(content)
                .category(category)
                .tagsMembers(tagsMembers)
                .build();
    }
}
