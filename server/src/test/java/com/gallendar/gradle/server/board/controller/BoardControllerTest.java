package com.gallendar.gradle.server.board.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
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
import org.springframework.http.*;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class BoardControllerTest {

    @Autowired
    private WebApplicationContext context;

    private MockMvc mvc;

    @Before
    public void setupMvc(){
        mvc = MockMvcBuilders
                .webAppContextSetup(context)
                .apply(springSecurity())
                .build();
    }

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private BoardRepository boardRepository;


    @After
    public void tearDown() throws Exception {
        boardRepository.deleteAll();
    }

    /**
     * Board Post Test
     * @throws Exception
     */
    @Test
    @WithMockUser
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
        mvc.perform(post(url)
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(requestDto)))
                .andExpect(status().isOk());


        // then
        List<Board> all = boardRepository.findAll();
        assertThat(all.get(0).getTitle()).isEqualTo(title);
        assertThat(all.get(0).getContent()).isEqualTo(content);


    }

    /**
     * Board Patch Test
     * @throws Exception
     */
    @Test
    @WithMockUser
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

        // when
        mvc.perform(patch(url)
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(requestDto)))
                .andExpect(status().isOk());

        // then
        List<Board> all = boardRepository.findAll();
        assertThat(all.get(0).getTitle()).isEqualTo(expectedTitle);
        assertThat(all.get(0).getContent()).isEqualTo(expectedContent);
        assertThat(all.get(0).getMusic()).isEqualTo(expectedMusic);
    }
}
