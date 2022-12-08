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
public class TagConditionTest {
    @Autowired
    private MembersRepositoryCustomImpl membersRepositoryCustom;

    @Test
    @Transactional
    public void tagConditionByYearAndMonthAndDay() {
        int count = membersRepositoryCustom.CountBoardByMember("usertest39", 2022, 12, 26);
        System.out.println("count = " + count);
    }
}
