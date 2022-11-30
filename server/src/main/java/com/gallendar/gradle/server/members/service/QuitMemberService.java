package com.gallendar.gradle.server.members.service;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepository;
import com.gallendar.gradle.server.board.repository.BoardRepositoryCustomImpl;
import com.gallendar.gradle.server.global.auth.jwt.JwtUtils;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.tags.domain.BoardTagsRepository;
import com.gallendar.gradle.server.tags.domain.Tags;
import com.gallendar.gradle.server.tags.domain.TagsRepository;
import com.gallendar.gradle.server.tags.type.TagStatus;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class QuitMemberService {
    private final MembersRepository membersRepository;
    private final BoardRepositoryCustomImpl boardRepositoryCustom;
    private final BoardRepository boardRepository;
    private final TagsRepository tagsRepository;
    private final BoardTagsRepository boardTagsRepository;
    private final JwtUtils jwtUtils;
    @Transactional
    public ResponseEntity<?> quitMemberById(String token) {
        String memberId=jwtUtils.getMemberIdFromToken(token);
        Members members = membersRepository.findById(memberId).orElseThrow(() -> new IllegalArgumentException());
        log.info("게시글 삭제");
        List<Board> boards = boardRepositoryCustom.findAllBoardById(memberId);
        List<String> tagMember=new ArrayList<>();
        boards.forEach(board -> {
            log.info(board.getBoardId().toString());
            board.getBoardTags().forEach(boardTags -> {
                tagMember.add(boardTags.getTags().getTagsMember());
                tagsRepository.delete(boardTags.getTags());
                boardTagsRepository.delete(boardTags);
            });
            boardRepository.delete(board);
        });
        log.info("탈퇴한 회원이 태그한 태그멤버 변경");
        tagMember.forEach(t->{
            Tags tags=tagsRepository.findByTagsMember(memberId);
            tags.changeTagsMember(TagStatus.quitMember);
        });

        log.info("회원 삭제");
        membersRepository.delete(members);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set(HttpHeaders.AUTHORIZATION, null);
        return new ResponseEntity<>(httpHeaders,HttpStatus.OK);
    }
}
