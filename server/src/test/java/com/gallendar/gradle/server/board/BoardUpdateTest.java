package com.gallendar.gradle.server.board;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepositoryCustomImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@SpringBootTest
@RunWith(SpringRunner.class)
public class BoardUpdateTest {
    @Autowired
    private BoardRepositoryCustomImpl boardRepositoryCustom;

    @Test
    @Transactional
    public void listArrTest() {
        List<Board> oldTagsMember = boardRepositoryCustom.findByTagMembers(1L);
        List<String> oldTagsList = new ArrayList<>();
        List<String> newTagsMember = new ArrayList<>();


        oldTagsMember.forEach(board -> {
            board.getBoardTags().forEach(boardTags -> {
                oldTagsList.add(boardTags.getTags().getTagsMember());
            });
        });

        List<String> oldNoneMatchList=oldTagsList.stream().filter(o->newTagsMember.stream().noneMatch(Predicate.isEqual(o))).collect(Collectors.toList());
        List<String> newNoneMatchList=newTagsMember.stream().filter(n->oldTagsList.stream().noneMatch(Predicate.isEqual(n))).collect(Collectors.toList());
        System.out.println("oldNoneMatchList = " + oldNoneMatchList.toString());
        System.out.println("newNoneMatchList = " + newNoneMatchList.toString());
    }
}
