package com.gallendar.gradle.server.tags.controller;

import com.gallendar.gradle.server.exception.Message;
import com.gallendar.gradle.server.exception.Status;
import com.gallendar.gradle.server.tags.dto.NotificationResponse;
import com.gallendar.gradle.server.tags.service.NotificationService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
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
     * @param userId
     * @return
     */
    @ApiOperation(value = "태그 알림", notes = "현재 로그인 한 유저의 태그된 게시글에 대한 정보를 간단히 응답한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "리스트 형식의 공유한 사람의 ID, 제목, 공유 된 시간")
    })
    @GetMapping
    public List<NotificationResponse> findTagsById(@RequestParam(value = "userId") String userId) {
        return notificationService.tagsFindById(userId);
    }

    /**
     * 태그된 게시글 수락
     *
     * @param userId
     * @param boardId
     * @return
     */
    @ApiOperation(value = "태그 수락", notes = "태그된 게시글을 수락하게 되면, 태그된 게시글을 나의 게시글에 복사한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "공유가 수락되었습니다.")
    })
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
    @ApiOperation(value = "태그 거절", notes = "태그된 게시글을 거절하게 되면, 데이터베이스의 상태를 변경한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "공유가 거절되었습니다.")
    })
    @GetMapping("/deny")
    public ResponseEntity<Message> passByTagBoard(@RequestParam(value = "userId") String userId, @RequestParam(value = "boardId") Long boardId) {
        return notificationService.denyTagBoard(userId, boardId);
    }
}
