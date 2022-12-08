package com.gallendar.gradle.server.tags;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.members.dto.MemberTagStatusRequest;
import com.gallendar.gradle.server.tags.domain.TagsRepositoryCustomImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.util.List;

@SpringBootTest
@RunWith(SpringRunner.class)
public class GetSharedStatusTest {
    @Autowired
    private TagsRepositoryCustomImpl tagsRepositoryCustom;

    @Test
    @Transactional
    public void getSharedStatusByIdTest() {
        PageRequest pageRequest = PageRequest.of(0, 5);
        MemberTagStatusRequest memberTagStatusRequest = new MemberTagStatusRequest(null, null, null);
        List<Board> boards = tagsRepositoryCustom.getSharedStatusById("usertest1", memberTagStatusRequest, pageRequest);
        boards.forEach(board -> {
            board.getBoardTags().forEach(boardTags -> {
                System.out.println("현재 태그상태 " + boardTags.getTags().getStatus());
                System.out.println("누구한테 = " + boardTags.getTags().getTagsMember());
            });
        });
    }
}
