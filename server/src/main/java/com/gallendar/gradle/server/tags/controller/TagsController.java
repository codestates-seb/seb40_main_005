package com.gallendar.gradle.server.tags.controller;

import com.gallendar.gradle.server.tags.dto.NotificationResponse;
import com.gallendar.gradle.server.tags.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/notification")
public class TagsController {
    private final NotificationService notificationService;

    /**
     * 태그 알림 요청
     *
     * @param id
     * @return
     */
    @GetMapping
    public List<NotificationResponse> findTagsById(@RequestParam(value = "id") String id) {
        return notificationService.tagsFindById(id);
    }

    @GetMapping("/accept")
    public String acceptByTagBoard(@RequestParam(value = "id") String id) {
        return null;
    }

    @GetMapping("/pass")
    public String passByTagBoard() {
        return "거절 합니다.";
    }
}
