package com.gallendar.gradle.server.members.dto;


import com.gallendar.gradle.server.members.domain.Members;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class MemberSearchResponse {
    private String id;

    public static MemberSearchResponse from(Members members) {
        return new MemberSearchResponse(members.getId());
    }
}
