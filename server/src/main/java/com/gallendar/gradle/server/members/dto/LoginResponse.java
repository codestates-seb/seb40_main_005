package com.gallendar.gradle.server.members.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LoginResponse {
    @ApiModelProperty(value="토큰",dataType = "String")
    private String token;
    private Long id;
    private String memberId;
}
