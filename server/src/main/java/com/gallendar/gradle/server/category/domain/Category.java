package com.gallendar.gradle.server.category.domain;

import com.gallendar.gradle.server.members.domain.Members;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private Long categoryId;


    @Column
    private String categoryTitle;

    @Builder
    public Category(String categoryTitle) {
        this.categoryTitle = categoryTitle;
    }



}