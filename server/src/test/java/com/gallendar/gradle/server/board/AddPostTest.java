package com.gallendar.gradle.server.board;

import com.gallendar.gradle.server.board.repository.BoardRepository;
import com.gallendar.gradle.server.tags.domain.TagsRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
public class AddPostTest {
    @Autowired
    private BoardRepository boardRepository;
    @Autowired
    private TagsRepository tagsRepository;

    @Test
    @Transactional
    void addPost(){
//        Board board=Board.builder().title("test").content("test111").music("1").build();
//        List<Tags> tags=new ArrayList<>();
//        tags.add("2");
    }
}
