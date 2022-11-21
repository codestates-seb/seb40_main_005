package com.gallendar.gradle.server.exception;

import lombok.Data;

@Data
public class Message {
    private Status status;
    private String message;

    private Object data;
    public Message() {
        this.status = Status.BAD_REQUEST;
        this.message = null;
        this.data=null;
    }
}
