package com.gallendar.gradle.server.members.service;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.global.auth.jwt.JwtUtils;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.members.dto.MemberInfoResponse;
import com.gallendar.gradle.server.members.dto.MemberTagStatusRequest;
import com.gallendar.gradle.server.members.dto.MemberTagStatusResponse;
import com.gallendar.gradle.server.tags.domain.TagsRepositoryCustomImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class MemberInfoService {
    private final MembersRepository membersRepository;
    private final TagsRepositoryCustomImpl tagsRepositoryCustom;
    private final JwtUtils jwtUtils;

    public MemberInfoResponse myInfoGetById(String token) {
        String memberId = jwtUtils.getMemberIdFromToken(token);
        Members members = membersRepository.findById(memberId).orElseThrow(() -> new IllegalArgumentException());
        return new MemberInfoResponse(members.getId(), members.getEmail());
    }

    public List<MemberTagStatusResponse> mySharedStatusGetById(String token, MemberTagStatusRequest memberTagStatusRequest, Pageable pageable) {
        String memberId = jwtUtils.getMemberIdFromToken(token);
        List<Board> tagStatus = tagsRepositoryCustom.getSharedStatusById(memberId, memberTagStatusRequest, pageable);
        List<MemberTagStatusResponse> list = new ArrayList<>();
        tagStatus.forEach(board -> {
            String to = board.getMembers().getId();
            String title = board.getTitle();
            board.getBoardTags().forEach(boardTags -> {
                list.add(MemberTagStatusResponse.from(to, title, boardTags.getTags().getTagsMember(), boardTags.getTags().getStatus(), boardTags.getTags().getUpdatedAt()));
            });
        });
        return list;
    }
}
