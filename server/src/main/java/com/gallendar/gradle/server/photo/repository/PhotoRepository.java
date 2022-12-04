package com.gallendar.gradle.server.photo.repository;

import com.gallendar.gradle.server.photo.entity.Photo;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;

public interface PhotoRepository extends JpaRepository<Photo, Long> {
    Optional<Photo> findById(Long id);
}

