package com.gallendar.gradle.server.board;


import com.gallendar.gradle.server.members.domain.MembersRepositoryCustomImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;

@SpringBootTest
@RunWith(SpringRunner.class)
public class CountBoardTest {
    @Autowired
    private MembersRepositoryCustomImpl membersRepositoryCustom;

    @Test
    @Transactional
    public void countBoardByIdTest() {
        int allCount = membersRepositoryCustom.CountBoardByMember("usertest1", 2022, 11, 30);
        int tagCount = membersRepositoryCustom.CountBoardByTag("usertest1", 2022, 11, 30);
        System.out.println("allCount = " + allCount);
        System.out.println("tagCount = " + tagCount);
    }
}
