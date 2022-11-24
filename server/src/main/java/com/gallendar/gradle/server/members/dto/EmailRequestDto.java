package com.gallendar.gradle.server.members.dto;

import lombok.Getter;

import javax.validation.constraints.NotEmpty;

@Getter
public class EmailRequestDto {

    @NotEmpty(message = "이메일을 입력해주세요.")
    public String email;
}
