package com.gallendar.gradle.server.createMemberServiceTest;



import com.gallendar.gradle.server.members.domain.MemberRole;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.members.dto.SignupRequestDto;
import com.gallendar.gradle.server.members.service.CreateMemberService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import static org.mockito.ArgumentMatchers.any;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.*;


@ExtendWith(MockitoExtension.class)
public class CreateMemberServiceTest {

    @Mock
    private MembersRepository membersRepository;

    @InjectMocks
    private CreateMemberService createMemberService;

    @Spy
    private BCryptPasswordEncoder passwordEncoder;

    @Test
    @DisplayName("회원가입 테스트")

    public void signUpTest() {
        final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        final SignupRequestDto requestDto = new SignupRequestDto("test", "test123@gmail.com", "Testtest123!");
        final String encryptedPw = encoder.encode(requestDto.getPassword());

        doReturn(new Members(1L, requestDto.getId(), requestDto.getEmail(), encryptedPw, MemberRole.USER))
                .when(membersRepository).save(any(Members.class));

        // when
        Members member = createMemberService.createMember(requestDto);

        //then
        assertThat(member.getId(),is(equalTo(requestDto.getId())));
        assertThat(encoder.matches(requestDto.getPassword(),member.getPassword()),is(true));    // 수정 필요

        //verify
        verify(membersRepository, times(1)).save(any(Members.class));
        verify(passwordEncoder, times(1)).encode(any(String.class));

    }

    @DisplayName("이메일 중복 확인")
    @Test
    public void checkMemberEmailTest(){

        //given
        final SignupRequestDto requestDto = new SignupRequestDto("test", "test123@gmail.com", "Testtest123!");
        doReturn(true).when(membersRepository).existsByEmail(requestDto.getEmail()); //willreturn

        //when
        final boolean isDuplicated = createMemberService.checkMemberEmailDuplication(requestDto.getEmail());

        //then
        assertThat(isDuplicated,is(true));

    }


    @DisplayName("ID 중복 확인")
    @Test
    public void checkMemberIdTest(){

        //given
        final SignupRequestDto requestDto = new SignupRequestDto("test", "test123@gmail.com", "Testtest123!");
        doReturn(true).when(membersRepository).existsById(requestDto.getId()); //willreturn

        //when
        final boolean isDuplicated = createMemberService.checkMemberIdDuplication(requestDto.getId());

        //then
        assertThat(isDuplicated,is(true));

    }

}
