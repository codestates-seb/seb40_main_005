package com.gallendar.gradle.server.tags.service;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepository;
import com.gallendar.gradle.server.board.repository.BoardRepositoryCustomImpl;
import com.gallendar.gradle.server.category.domain.Category;
import com.gallendar.gradle.server.category.domain.CategoryRepository;
import com.gallendar.gradle.server.exception.Message;
import com.gallendar.gradle.server.exception.Status;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.tags.domain.*;
import com.gallendar.gradle.server.tags.dto.NotificationResponse;
import com.gallendar.gradle.server.tags.type.TagStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NotificationService {
    private final TagsRepository tagsRepository;
    private final TagsRepositoryCustomImpl tagsRepositoryCustom;
    private final BoardRepositoryCustomImpl boardRepositoryCustom;
    private final BoardRepository boardRepository;
    private final MembersRepository membersRepository;
    private final BoardTagsRepository boardTagsRepository;

    @Transactional
    public List<NotificationResponse> tagsFindById(String userId) {
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
    public ResponseEntity<Message> acceptTagBoard(String userId, Long boardId) {
        Message message = new Message();
        message.setMessage("공유가 수락되었습니다.");
        message.setStatus(Status.OK);

        Board board = boardRepositoryCustom.findById(boardId, userId);
        Members members = membersRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException());

        board.getBoardTags().forEach(boardTags -> {
            boardTags.getTags().changeStatus(TagStatus.accept);
        });

        Board shareBoard = Board.builder().title(board.getTitle()).content(board.getTitle()).music(board.getMusic()).build();
        shareBoard.setMembers(members);
        boardRepository.save(shareBoard);

        Tags tags = Tags.builder().tagStatus(TagStatus.shared).tagsMember(board.getMembers().getId()).build();
        tagsRepository.save(tags);

        BoardTags shareBoardTags = new BoardTags();
        shareBoardTags.setBoard(shareBoard);
        shareBoardTags.setTags(tags);
        boardTagsRepository.save(shareBoardTags);

        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity<Message> denyTagBoard(String userId, Long boardId) {
        Message message = new Message();
        message.setMessage("공유가 거절되었습니다.");
        message.setStatus(Status.OK);
        Board board = boardRepositoryCustom.findById(boardId, userId);
        board.getBoardTags().forEach(boardTags -> {
            boardTags.getTags().changeStatus(TagStatus.deny);
        });
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
