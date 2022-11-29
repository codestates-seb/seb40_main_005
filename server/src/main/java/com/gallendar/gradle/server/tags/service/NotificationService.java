package com.gallendar.gradle.server.tags.service;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepository;
import com.gallendar.gradle.server.board.repository.BoardRepositoryCustomImpl;
import com.gallendar.gradle.server.exception.Message;
import com.gallendar.gradle.server.exception.Status;
import com.gallendar.gradle.server.global.auth.jwt.JwtUtils;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.tags.domain.*;
import com.gallendar.gradle.server.tags.dto.NotificationResponse;
import com.gallendar.gradle.server.tags.type.TagStatus;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class NotificationService {
    private final TagsRepository tagsRepository;
    private final TagsRepositoryCustomImpl tagsRepositoryCustom;
    private final BoardRepositoryCustomImpl boardRepositoryCustom;
    private final BoardRepository boardRepository;
    private final MembersRepository membersRepository;
    private final BoardTagsRepository boardTagsRepository;
    private final JwtUtils jwtUtils;

    @Transactional
    public List<NotificationResponse> tagsFindById(String token) {
        String userId = jwtUtils.getMemberIdFromToken(token);
        List<NotificationResponse> list = new ArrayList<>();
        List<Tags> tags = tagsRepositoryCustom.findByTagsMember(userId);
        tags.forEach(tags1 -> {
            tags1.getBoardTags().forEach(boardTags -> {
                list.add(NotificationResponse.from(boardTags));
            });
        });
        return list;
    }

    @Transactional
    public ResponseEntity<Message> acceptTagBoard(String token, Long boardId) {
        Message message = new Message();
        message.setMessage("공유가 수락되었습니다.");
        message.setStatus(Status.OK);
        String userId = jwtUtils.getMemberIdFromToken(token);
        log.info("공유한 게시글 데이터 조회");
        Board board = boardRepositoryCustom.findById(boardId, userId);
        Members members = membersRepository.findById(userId).orElseThrow(() -> {
            log.info("유저 찾기 오류 " + NotificationService.class);
            return new IllegalArgumentException();
        });
        board.getBoardTags().forEach(boardTags -> {
            boardTags.getTags().changeStatus(TagStatus.accept);
        });
        log.info("공유를 수락하여 게시글 복사 시작");
        Board shareBoard = Board.builder().title(board.getTitle()).content(board.getContent()).music(board.getMusic()).url(board.getUrl()).created(board.getCreated()).build();
        shareBoard.setMembers(members);
        shareBoard.setCategory(board.getCategory());
        shareBoard.setPhoto(board.getPhoto());
        boardRepository.save(shareBoard);

        Tags tags = Tags.builder().tagStatus(TagStatus.shared).tagsMember(board.getMembers().getId()).build();
        tagsRepository.save(tags);

        BoardTags shareBoardTags = new BoardTags();
        shareBoardTags.setBoard(shareBoard);
        shareBoardTags.setTags(tags);
        boardTagsRepository.save(shareBoardTags);
        log.info("공유를 수락하여 게시글 복사 성공");
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity<Message> denyTagBoard(String token, Long boardId) {
        Message message = new Message();
        message.setMessage("공유가 거절되었습니다.");
        message.setStatus(Status.OK);
        String userId = jwtUtils.getMemberIdFromToken(token);
        log.info("공유에 실패한 게시글 데이터 조회");
        Board board = boardRepositoryCustom.findById(boardId, userId);
        board.getBoardTags().forEach(boardTags -> {
            boardTags.getTags().changeStatus(TagStatus.deny);
        });
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
