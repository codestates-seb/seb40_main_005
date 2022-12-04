package com.gallendar.gradle.server.tags;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepositoryCustomImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.util.List;

@SpringBootTest
@RunWith(SpringRunner.class)
public class FindByTagMembersTest {
    @Autowired
    private BoardRepositoryCustomImpl boardRepositoryCustom;

    @Test
    @Transactional
    public void findByTagMemberTest(){
        List<Board> tagMembers=boardRepositoryCustom.findByTagMembers(2L);
        tagMembers.forEach(board -> {
            board.getBoardTags().forEach(boardTags -> {
                System.out.println("boardTags.getTags().getTagsMember() = " + boardTags.getTags().getTagsMember());
            });
        });
    }
    @Test
    @Transactional
    public void findByIdTest(){
        Board board=boardRepositoryCustom.findById(9L,"usertest1");
        System.out.println("board.getCategory().getCategoryTitle() = " + board.getCategory().getCategoryTitle());
        board.getBoardTags().forEach(boardTags -> {
            System.out.println("boardTags.getTags().getTagsMember(); = " + boardTags.getTags().getTagsMember());
        });
    }
}
