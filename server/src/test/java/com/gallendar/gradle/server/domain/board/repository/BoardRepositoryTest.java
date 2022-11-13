package com.gallendar.gradle.server.domain.board.repository;

import com.gallendar.gradle.server.domain.board.entity.Board;
import org.junit.After;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BoardRepositoryTest {

    @Autowired
    BoardRepository boardRepository;

    @After
    public void cleanup(){
        boardRepository.deleteAll();
    }

    @Test
    public void 게시글저장_불러오기(){
        //given
        String title = "테스트 제목";
        String content = "테스트 본문";
        String music = "테스트 링크";

        boardRepository.save(Board.builder()
                .title(title)
                .content(content)
                .music(music)
                .build());

        // when
        List<Board> boardList = boardRepository.findAll();

        //then
        Board board = boardList.get(0);
        assert(board.getTitle()).equals(title);
        assert(board.getContent()).equals(content);


    }
}
