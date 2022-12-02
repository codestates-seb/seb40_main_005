package com.gallendar.gradle.server.members.service;

import com.gallendar.gradle.server.exception.BusinessLogicException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@RequiredArgsConstructor
@Service
@Slf4j
public class MailService {
    @Autowired
    private final SendEmail sendEmail;

    public void sendAuthEmail(String email) throws Exception {
        log.info("유저에게 인증번호가 담긴 메일 전송");
        sendEmail.send(email);

    }

    public String checkAuthNum(String key, String email) throws BusinessLogicException {
        log.info("유저가 입력한 인증번호 검증");
        return sendEmail.verifyEmail(key, email);

    }
}
