package com.gallendar.gradle.server.members.service;

import com.gallendar.gradle.server.exception.BusinessLogicException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@RequiredArgsConstructor
@Service
public class MailService {
    @Autowired
    private final SendEmail sendEmail;

    public void sendAuthEmail(String email) throws Exception {
        sendEmail.send(email);

    }

    public String checkAuthNum(String key, String email) throws BusinessLogicException {
        return sendEmail.verifyEmail(key, email);
    }
}
