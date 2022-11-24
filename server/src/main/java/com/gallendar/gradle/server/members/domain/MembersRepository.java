package com.gallendar.gradle.server.members.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MembersRepository extends JpaRepository<Members,Long> {
    Optional<Members> findById(String id);



    Optional<Members> findByEmail(String email);

    boolean existsById(String id);

    boolean existsByEmail(String email);
}
