package com.gallendar.gradle.server.exception;

import lombok.Getter;

public enum ExceptionCode {

    MEMBER_EXISTS(404, "Member exists"),

    ID_EXISTS(404, "This ID is already in use"),

    EMAIL_EXISTS(404,"This email is already in use"),
    AUTH_NUMBER_MISS_MATCH(404,"This authentication number is incorrect");
   
    @Getter
    private int status;
    @Getter
    private String message;

    ExceptionCode(int code, String message){
        this.status = code;
        this.message = message;
    }
}
