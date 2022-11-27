package com.gallendar.gradle.server.board;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepository;
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
public class BoardSearchTest {
    @Autowired
    private BoardRepositoryCustomImpl boardRepositoryCustom;

    @Autowired
    private BoardRepository boardRepository;

    @Test
    @Transactional
    public void boardSearch() {
        int y = 2022;
        int m = 11;
        int d = 20;
        String category = null;
        Integer year = Integer.valueOf(y);
        Integer month = Integer.valueOf(m);
        Integer day = Integer.valueOf(d);
        List<Board> board = boardRepositoryCustom.findByBoard(year, month, null,"usertest39");
        System.out.println("board = " + board.size());
        board.forEach(board1 -> {
            System.out.println("title = " + board1.getTitle());
            System.out.println("board1 = " + board1.getCategory().getCategoryTitle());
            board1.getBoardTags().forEach(boardTags -> {
                System.out.println("boardTags = " + boardTags.getTags().getTagsMember());
            });
        });
    }
    @Test
    @Transactional
    public void boardSearchById(){
        List<Board> board=boardRepositoryCustom.findByBoardId(30L,"usertest40");
        System.out.println("board = " + board.size());
        board.forEach(board1 -> {
            System.out.println("board1 = " + board1.getBoardId());
            board1.getBoardTags().forEach(boardTags -> {
                System.out.println("TAGS = " + boardTags.getTags().getTagsMember());
            });

        });
    }
}