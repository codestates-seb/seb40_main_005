package com.gallendar.gradle.server.tags.service;

import com.gallendar.gradle.server.tags.domain.Tags;
import com.gallendar.gradle.server.tags.domain.TagsRepository;
import com.gallendar.gradle.server.tags.domain.TagsRepositoryCustomImpl;
import com.gallendar.gradle.server.tags.dto.NotificationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NotificationService {
    private final TagsRepository tagsRepository;
    private final TagsRepositoryCustomImpl tagsRepositoryCustom;

    public List<List<NotificationResponse>> tagsFindById(String id) {
        List<Tags> tags = tagsRepositoryCustom.findByTagsMember(id);
        return tags.stream()
                .map(tags1 -> tags1.getBoardTags().stream()
                        .map(NotificationResponse::from).collect(Collectors.toList())).collect(Collectors.toList());
    }
}
