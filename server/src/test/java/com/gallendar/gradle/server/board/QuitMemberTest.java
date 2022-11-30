package com.gallendar.gradle.server.board;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepository;
import com.gallendar.gradle.server.board.repository.BoardRepositoryCustomImpl;
import com.gallendar.gradle.server.tags.type.TagStatus;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.util.List;

@SpringBootTest
@RunWith(SpringRunner.class)
public class QuitMemberTest {
    @Autowired
    private BoardRepositoryCustomImpl boardRepositoryCustom;

    @Test
    @Transactional
    public void findAllBoardTest() {
        List<Board> boards = boardRepositoryCustom.findAllBoardById("usertest2");
        boards.forEach(board -> {
            board.getBoardTags().forEach(boardTags -> {
                if(boardTags.getTags().getStatus().equals(TagStatus.alert)){
                        boardTags.getTags().changeStatus(TagStatus.quitMember);
                }
            });
        });
    }
}
