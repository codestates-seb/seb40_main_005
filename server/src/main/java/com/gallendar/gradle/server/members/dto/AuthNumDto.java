package com.gallendar.gradle.server.members.dto;

import lombok.Getter;

import javax.validation.constraints.NotEmpty;

@Getter
public class AuthNumDto {
    @NotEmpty(message = "인증번호를 입력해주세요.")
    String authNum;
    @NotEmpty(message = "이메일 정보도 넘겨주세요.")
    String email;
}
