package com.gallendar.gradle.server.membersControllerTest;


import com.google.gson.Gson;
import com.gallendar.gradle.server.members.controller.MembersController;
import com.gallendar.gradle.server.members.domain.MemberRole;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.dto.SignupRequestDto;
import com.gallendar.gradle.server.members.service.CreateMemberService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;


import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.hamcrest.MatcherAssert.assertThat;

import javax.validation.Valid;

@ExtendWith(MockitoExtension.class)
public class MembersControllerTest {

    @InjectMocks
    private MembersController membersController;

    @Mock
    private CreateMemberService createMemberService;
    private MockMvc mockMvc;

    @BeforeEach
    public void init() {
        mockMvc = MockMvcBuilders.standaloneSetup(membersController).build();
    }

    @Test
    @DisplayName("회원가입 테스트")
    void postMemberTest() throws Exception {

        Members member = new Members(1L, "test1", "test1@gmail.com", "Testtest1234!", MemberRole.USER);
        SignupRequestDto signupDto = new SignupRequestDto("test1", "test1@gmail.com", "Testtest1234!");
        given(createMemberService.createMember(any(SignupRequestDto.class))).willReturn(member);

        Gson gson = new Gson();
        String content = gson.toJson(signupDto);

        mockMvc.perform(MockMvcRequestBuilders.post("/members")
                                .content(content)
                                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated());


    }

    /* 이메일 중복검사 */
//        @GetMapping("/{email}")
    @Test
    @DisplayName("이메일 중복확인 테스트")
    void getDuplicatedEmailTest() throws Exception {


        String email = "test1@gmail.com";
        given(createMemberService.checkMemberEmailDuplication(email)).willReturn(false);


        mockMvc.perform(
                        get("/members/checkEmail/" + email))
                .andExpect(status().isOk())
                .andReturn();

    }

    /* ID 중복검사 */
//        @GetMapping("/{id}")
    @DisplayName("ID 중복확인 테스트")
    @Test
    void getDuplicatedIdTest() throws Exception {

        String id = "test1";
        given(createMemberService.checkMemberIdDuplication(id)).willReturn(false);

        mockMvc.perform(
                        get("/members/checkId/" + id))
                .andExpect(status().isOk())
                .andReturn();
    }
}
