package com.gallendar.gradle.server.board.controller;

import com.gallendar.gradle.server.board.dto.BoardCreateRequestDto;
import com.gallendar.gradle.server.board.dto.BoardUpdateRequestDto;
import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepository;
import org.junit.After;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class BoardControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private BoardRepository boardRepository;

    @Before
    public void setup(){
        restTemplate.getRestTemplate().setRequestFactory(new HttpComponentsClientHttpRequestFactory());
    }

    @After
    public void tearDown() throws Exception {
        boardRepository.deleteAll();
    }

    @Test
    public void Board_등록() throws Exception{
        // given
        String title = "title";
        String content = "content";
        String music = "music";
        BoardCreateRequestDto requestDto = BoardCreateRequestDto.builder()
                .title(title)
                .content(content)
                .music(music)
                .build();

        String url = "http://localhost:" + port + "/boards";

        // when
        ResponseEntity<Long> responseEntity = restTemplate.
                postForEntity(url, requestDto, Long.class);

        // then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK); //spring security 설정
        assertThat(responseEntity.getBody()).isGreaterThan(0L);

        List<Board> all = boardRepository.findAll();
        assertThat(all.get(0).getTitle()).isEqualTo(title);
        assertThat(all.get(0).getContent()).isEqualTo(content);

    }

    @Test
    public void Board_수정() throws Exception {
        // given
        Board savedBoard = boardRepository.save(Board.builder()
                .title("title")
                .content("content")
                .music("music")
                .build());

        Long updateBoardId = savedBoard.getBoardId();
        String expectedTitle = "title2";
        String expectedContent = "content2";
        String expectedMusic = "music2";

        BoardUpdateRequestDto requestDto =
                BoardUpdateRequestDto.builder()
                        .title(expectedTitle)
                        .content(expectedContent)
                        .music(expectedMusic)
                        .build();

        String url = "http://localhost:" + port + "/boards/" + updateBoardId;

        HttpEntity<BoardUpdateRequestDto> requestEntity = new HttpEntity<>(requestDto);

        // when
        ResponseEntity<Long> responseEntity = restTemplate.
                exchange(url, HttpMethod.PATCH,
                        requestEntity, Long.class);

        // then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);

        List<Board> all = boardRepository.findAll();
        assertThat(all.get(0).getTitle()).isEqualTo(expectedTitle);
        assertThat(all.get(0).getContent()).isEqualTo(expectedContent);
        assertThat(all.get(0).getMusic()).isEqualTo(expectedMusic);
    }
}
