package com.gallendar.gradle.server.tags.controller;

import com.gallendar.gradle.server.exception.Message;
import com.gallendar.gradle.server.exception.Status;
import com.gallendar.gradle.server.tags.dto.NotificationResponse;
import com.gallendar.gradle.server.tags.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
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

    /**
     * 태그된 게시글 수락
     *
     * @param userId
     * @param boardId
     * @return
     */
    @GetMapping("/accept")
    public ResponseEntity<Message> acceptByTagBoard(@RequestParam(value = "userId") String userId, @RequestParam(value = "boardId") Long boardId) {
        return notificationService.acceptTagBoard(userId, boardId);
    }

    /**
     * 태그된 게시글 거절
     *
     * @param userId
     * @param boardId
     * @return
     */

    @GetMapping("/deny")
    public ResponseEntity<Message> passByTagBoard(@RequestParam(value = "userId") String userId, @RequestParam(value = "boardId") Long boardId) {
        return notificationService.denyTagBoard(userId, boardId);
    }
}
