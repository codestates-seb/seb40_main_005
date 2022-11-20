package com.gallendar.gradle.server.board;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepository;
import com.gallendar.gradle.server.board.repository.BoardRepositoryCustomImpl;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.tags.domain.BoardTagsRepository;
import com.gallendar.gradle.server.tags.domain.Tags;
import com.gallendar.gradle.server.tags.domain.TagsRepository;
import com.gallendar.gradle.server.tags.domain.TagsRepositoryCustomImpl;
import com.gallendar.gradle.server.tags.type.TagStatus;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootTest
@RunWith(SpringRunner.class)
public class NotificationTest {
    @Autowired
    private MembersRepository membersRepository;

    @Autowired
    private BoardRepository boardRepository;

    @Autowired
    private TagsRepository tagsRepository;

    @Autowired
    private BoardRepositoryCustomImpl boardRepositoryCustom;
    @Autowired
    private TagsRepositoryCustomImpl tagsRepositoryCustom;

    @Test
    @Transactional
    public void acceptByTagBoard() {
        Board board = boardRepositoryCustom.findById(1L, "user2");
        board.getBoardTags().forEach(boardTags -> {
            System.out.println("boardTags = " + boardTags.getTags().getStatus());
            boardTags.getTags().changeStatus(TagStatus.accept);
            System.out.println("boardTags = " + boardTags.getTags().getStatus());
        });
    }

    @Test
    @Transactional
    public void denyByTabBoard(){
        Board board = boardRepositoryCustom.findById(1L, "user2");
        board.getBoardTags().forEach(boardTags -> {
            System.out.println("boardTags = " + boardTags.getTags().getStatus());
            boardTags.getTags().changeStatus(TagStatus.deny);
            System.out.println("boardTags = " + boardTags.getTags().getStatus());
        });
    }
}
