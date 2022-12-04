package com.gallendar.gradle.server.members.domain;

import com.gallendar.gradle.server.global.auditing.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor

public class Members extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "members_id")
    private Long membersId;
    @Column
    private String id;
    @Column
    private String email;
    @Column
    private String password;

    @Enumerated (EnumType.STRING)
    private MemberRole role;



    @Builder
    public Members(String id, String email, String password, MemberRole role){

        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    public void changePassword(String password){
        this.password=password;
    }
}
