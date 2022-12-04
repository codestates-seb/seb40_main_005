package com.gallendar.gradle.server.category.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long> {
    Category findByCategoryTitle(String categoryTitle);
    boolean existsByCategoryTitle(String categoryTitle);
}
