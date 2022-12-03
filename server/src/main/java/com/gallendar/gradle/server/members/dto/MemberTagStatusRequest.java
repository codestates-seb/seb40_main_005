package com.gallendar.gradle.server.members.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MemberTagStatusRequest {
    private Integer year;
    private Integer month;
    private Integer day;
}
