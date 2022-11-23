package com.gallendar.gradle.server.tags.domain;

import com.gallendar.gradle.server.board.entity.Board;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class BoardTags {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_id")
    private Board board;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tags_id")
    private Tags tags;

    public void setTags(Tags tags) {
        if(this.tags!=null){
            this.tags.getBoardTags().remove(this);
        }
        this.tags = tags;
        tags.getBoardTags().add(this);
    }

    public void setBoard(Board board) {
        if(this.board!=null){
            this.board.getBoardTags().remove(this);
        }
        this.board = board;
        board.getBoardTags().add(this);
    }
}
