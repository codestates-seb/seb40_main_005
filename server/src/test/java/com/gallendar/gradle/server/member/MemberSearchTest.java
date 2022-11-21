package com.gallendar.gradle.server.member;

import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.members.domain.MembersRepositoryCustomImpl;
import org.junit.After;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MemberSearchTest {
    @Autowired
    private MembersRepository membersRepository;

    @Autowired
    private MembersRepositoryCustomImpl membersRepositoryCustom;

    @BeforeEach
    void deleteRepository(){
        membersRepository.deleteAll();
    }
    @Test
    void addMembers() {
        //given
        Members members = Members.builder().id("t1").email("eee").password("1234").build();
        Members result = membersRepository.save(members);
        //when
        //then
        assertThat(result.getId()).isEqualTo("t1");
    }

    @Test
    void memberSearchTest_success() {
        //given
        Members members1 = Members.builder().id("aaa").email("123").password("123").build();
        Members members2 = Members.builder().id("bbb").email("4341").password("123").build();
        Members members3 = Members.builder().id("aabb").email("124444").password("123").build();
        Members members4 = Members.builder().id("abcd").email("123441").password("123").build();
        membersRepository.save(members1);
        membersRepository.save(members2);
        membersRepository.save(members3);
        membersRepository.save(members4);

        //when
        List<Members> memberId1 = membersRepositoryCustom.findByUser("a");
        List<Members> memberId2 = membersRepositoryCustom.findByUser("b");
        List<Members> memberId3 = membersRepositoryCustom.findByUser("c");

        //then
        assertThat(memberId1.size()).isEqualTo(3);
        assertThat(memberId2.size()).isEqualTo(3);
        assertThat(memberId3.size()).isEqualTo(1);
    }
    @Test
    void findIdByEmail(){
        Members members=membersRepository.findByEmail("123").orElseThrow(()->new IllegalArgumentException());
        assertThat(members.getId()).isEqualTo("aaa");
    }
}
