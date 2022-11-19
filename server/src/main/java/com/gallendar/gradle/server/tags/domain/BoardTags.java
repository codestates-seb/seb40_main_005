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
    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;

    @ManyToOne
    @JoinColumn(name = "tags_id")
    private Tags tags;

    public void setTags(Tags tags) {
        this.tags = tags;
    }

    public void setBoard(Board board) {
        this.board = board;
    }
}
