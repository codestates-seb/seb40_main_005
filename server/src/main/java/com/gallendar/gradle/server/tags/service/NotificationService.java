package com.gallendar.gradle.server.tags.service;

import com.gallendar.gradle.server.tags.domain.Tags;
import com.gallendar.gradle.server.tags.domain.TagsRepository;
import com.gallendar.gradle.server.tags.domain.TagsRepositoryCustomImpl;
import com.gallendar.gradle.server.tags.dto.NotificationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NotificationService {
    private final TagsRepository tagsRepository;
    private final TagsRepositoryCustomImpl tagsRepositoryCustom;

    public NotificationResponse tagsFindById(String id){
        return null;
    }
}
