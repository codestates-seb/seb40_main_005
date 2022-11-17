package com.gallendar.gradle.server.members.dto;

import com.gallendar.gradle.server.members.domain.MemberRole;
import com.gallendar.gradle.server.members.domain.Members;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.validation.constraints.*;

@NoArgsConstructor
@Getter
@Setter
public class SignupRequestDto {

    @NotBlank(message = "아이디를 입력해주세요.")
    @Size(min=5)
    private String id;

    @NotBlank(message = "이메일을 입력해주세요.")
    @Email (message = "이메일 형식에 맞지 않습니다.")
    private String email;

    @NotBlank(message = "비밀번호를 입력해주세요.")
    @Pattern(regexp="(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,20}",
            message = "비밀번호는 영문 대,소문자와 숫자, 특수기호가 적어도 1개 이상씩 포함된 8자 ~ 20자의 비밀번호여야 합니다.")
    private String password;

    @Builder
    public SignupRequestDto( String id, String email, String password ){

        this.id = id ;
        this.email = email ;
        this.password = password;
    }

    public Members toEntity(){
        return Members.builder()
                .id(id)
                .email(email)
                .password(password)
                .build();
    }

}
