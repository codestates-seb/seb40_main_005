package com.gallendar.gradle.server.members.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MemberInfoResponse {
    private String id;
    private String email;
}
