package com.gallendar.gradle.server.board;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepository;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.tags.domain.*;
import com.gallendar.gradle.server.tags.type.TagStatus;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import java.util.List;
import java.util.stream.Collectors;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@RunWith(SpringRunner.class)
public class RelationMappingTest {
    @Autowired
    private MembersRepository membersRepository;

    @Autowired
    private BoardRepository boardRepository;

    @Autowired
    private TagsRepository tagsRepository;

    @Autowired
    private BoardTagsRepository boardTagsRepository;

    @Autowired
    private TagsRepositoryCustomImpl tagsRepositoryCustom;

    @Test
    public void testManyToOneInsert() {
        Members members = Members.builder().id("user111").password("TEST1!12341111111").email("11").build();
        membersRepository.save(members);

        Members members1 = Members.builder().id("user222").password("TEST1!123111114").email("22").build();
        membersRepository.save(members1);

        for (int i = 1; i <= 3; i++) {
            Board board = Board.builder().title("user1 write post" + i).content("user1" + i).music("m").build();
            board.setMembers(members);
            boardRepository.save(board);
        }

        for (int i = 1; i <= 3; i++) {
            Board board = Board.builder().title("user2 write post" + i).content("user2" + i).music("m").build();
            board.setMembers(members1);
            boardRepository.save(board);
        }
    }

    @Test
    public void testManyToManyInsert() {
        Members members = Members.builder().id("user111").password("TEST1!12341111111").email("11").build();
        membersRepository.save(members);
        Board board = Board.builder().title("user1 write post").content("user1").music("m").build();
        board.setMembers(members);
        boardRepository.save(board);

        Tags tags = Tags.builder().tagsMember("user2222").build();
        tagsRepository.save(tags);

        BoardTags boardTags = new BoardTags();
        boardTags.setBoard(board);
        boardTags.setTags(tags);
        boardTagsRepository.save(boardTags);
    }

    @Test
    public void findTagsBoard(){
        Members members = Members.builder().id("user111").password("TEST1!12341111111").email("11").build();
        membersRepository.save(members);

        for (int i = 1; i <= 3; i++) {
            Board board = Board.builder().title("user1 write post" + i).content("user1" + i).music("m").build();
            board.setMembers(members);
            boardRepository.save(board);

            Tags tags=Tags.builder().tagsMember("user2222").tagStatus(TagStatus.alert).build();
            tagsRepository.save(tags);

            BoardTags boardTags=new BoardTags();
            boardTags.setTags(tags);
            boardTags.setBoard(board);
            boardTagsRepository.save(boardTags);
        }
        Board board = Board.builder().title("user1 write post"  ).content("user1" ).music("m").build();
        board.setMembers(members);
        boardRepository.save(board);
        List<Tags> list=tagsRepositoryCustom.findByTagsMember("user2222");
        list.stream().map(t->t.getBoardTags().stream().map(b->b.getBoard().getMembers().getId()).collect(Collectors.toList())).collect(Collectors.toList()).forEach(System.out::println);
    }
}
