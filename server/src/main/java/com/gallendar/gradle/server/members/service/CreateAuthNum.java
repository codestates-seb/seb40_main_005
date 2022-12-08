package com.gallendar.gradle.server.members.service;

import java.util.Random;

public class CreateAuthNum {

    public static String createNum() {
        StringBuffer key = new StringBuffer();
        Random random = new Random();

        for (int i = 0; i < 8; i++) {
            int index = random.nextInt(3);

            switch (index) {
                case 0:
                    key.append((char) ((int) (random.nextInt(26)) + 65));
                    break;
                case 1:
                    key.append((char) ((int) (random.nextInt(26)) + 97));
                    break;
                case 2:
                    key.append((random.nextInt(10)));
                    break;
            }
        }
        String authNum = key.toString();
        return authNum;
    }


}
