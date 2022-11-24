package com.gallendar.gradle.server.members.service;

import com.gallendar.gradle.server.exception.BusinessLogicException;
import com.gallendar.gradle.server.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;


@RequiredArgsConstructor
@Component
public class SendEmail {

    private final JavaMailSender emailSender;
    private final RedisUtil redisUtil;
    public static final String authNum = CreateAuthNum.createNum();

    public MimeMessage createEmailForm(String email) throws MessagingException {
        String setFrom = "5kamjas.gallender@gmail.com";
        String title = "Gallendar 회원가입 인증 번호";

        MimeMessage message = emailSender.createMimeMessage();
        message.addRecipients(MimeMessage.RecipientType.TO, email);
        message.setSubject(title);
        message.setFrom(setFrom);

        String content = "";
        content += "<div width='100%' style='margin:0;background-color:#fff'>";
        content += "<div style='margin:auto;max-width:600px;padding-top:50px' class='email-container'>";
        content += " <table role='presentation' cellspacing='0' cellpadding='0' width='100%' align='center' id='emailBodyContainer' style='border:0px;solid #d6d6d6;max-width:600px'>";
        content += "<tbody><tr>";
        content += "<td style='background-color:#fff;color:#444;font-family:\"Amazon Ember\",\"Helvetica Neue\",Roboto,Arial,sans-serif;font-size:14px;line-height:140%;padding:25px 35px'>";
        content += "<h1 style='font-size:20px;font-weight:bold;line-height:1.3;margin:0 0 15px 0'>이메일 주소 확인</h1>";
        content += "<p style='margin:0;padding:0'>Gallendar 에 회원가입을 요청해주셔서 감사합니다. 사용자가 본인임을 확인하기 위해 아래 코드를 입력해주세요.</p>";
        content += "<p style='margin:0;padding:0'></p>";
        content += "</td>";
        content += "</tr>";
        content += "<tr>";
        content += "<td style='background-color:#fff;color:#444;font-family:\"Amazon Ember\",\"Helvetica Neue\",Roboto,Arial,sans-serif;font-size:14px;line-height:140%;padding:25px 35px;padding-top:0;text-align:center'>";
        content += "<div style='font-weight:bold;padding-bottom:15px'> 인증 번호 </div>";
        content += "<div style='color:#000;font-size:36px;font-weight:bold;padding-bottom:15px'>" + authNum + "</div>";
        content += "<div>(이 코드는 5분 동안 유효합니다.)</div>";
        content += "</td>";
        content += "</tr>";
        content += "</div>";

        message.setText(content, "utf-8", "html");
        return message;
    }

    public void send(String email) throws Exception {
        MimeMessage message = createEmailForm(email);
        try {
            redisUtil.setDataExpire(authNum, email, 60 * 5L);
            emailSender.send(message);
        } catch (MailException mailException) {
            mailException.printStackTrace();
            throw new IllegalArgumentException();
        }
    }

    public String verifyEmail(String authNum, String email) {
        String memberEmail = redisUtil.getData(authNum);

        if (memberEmail == null) {
            throw new BusinessLogicException(ExceptionCode.AUTH_NUMBER_MISS_MATCH);
        } else if (!memberEmail.equals(email)) {
            throw new BusinessLogicException(ExceptionCode.AUTH_NUMBER_MISS_MATCH);
        } else {
            redisUtil.deleteData(authNum);
            return "SUCCESSFUL!";
        }
    }
}
