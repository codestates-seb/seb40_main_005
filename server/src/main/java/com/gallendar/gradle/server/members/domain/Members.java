package com.gallendar.gradle.server.members.domain;

import com.gallendar.gradle.server.global.auditing.BaseTimeEntity;
import com.gallendar.gradle.server.members.dto.SignupRequestDto;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;

@Entity
@Getter

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
    public Members(Long membersId, String id, String email, String password, MemberRole role){

        this.membersId = membersId;
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
