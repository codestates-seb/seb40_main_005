package com.gallendar.gradle.server.tags.controller;

import com.gallendar.gradle.server.tags.dto.NotificationResponse;
import com.gallendar.gradle.server.tags.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/notification")
public class TagsController {
    private final NotificationService notificationService;

    /**
     * 현재 내가 태그 되었는지 확인
     * @param id
     * @return
     */
    @GetMapping
    public NotificationResponse findTagsById(@RequestParam(value = "id") String id){
        return null;
    }

    @GetMapping("/accept")
    public String acceptByTagBoard(){
        return "수락 합니다.";
    }
    @GetMapping("/pass")
    public String passByTagBoard(){
        return "거절 합니다.";
    }
}
