package com.gallendar.gradle.server.category.domain;


import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class Category {
    @Id
    @Column(name = "category_id")
    private Long id;

    @Column
    private String categoryTitle;
}
