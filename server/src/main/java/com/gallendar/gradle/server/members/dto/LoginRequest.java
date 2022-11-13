package com.gallendar.gradle.server.members.dto;

import lombok.Getter;

@Getter
public class LoginRequest {
    private String id;
    private String password;
}
