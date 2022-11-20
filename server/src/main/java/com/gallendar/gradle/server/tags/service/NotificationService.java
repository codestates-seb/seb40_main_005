package com.gallendar.gradle.server.tags.service;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepository;
import com.gallendar.gradle.server.board.repository.BoardRepositoryCustomImpl;
import com.gallendar.gradle.server.exception.Message;
import com.gallendar.gradle.server.exception.Status;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.tags.domain.Tags;
import com.gallendar.gradle.server.tags.domain.TagsRepository;
import com.gallendar.gradle.server.tags.domain.TagsRepositoryCustomImpl;
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

    public List<NotificationResponse> tagsFindById(String id) {
        List<NotificationResponse> list = new ArrayList<>();
        List<Tags> tags = tagsRepositoryCustom.findByTagsMember(id);
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

        Board shareBoard = Board.builder().title(board.getTitle()).content(board.getTitle()).music(board.getMusic()).build();
        shareBoard.setMembers(members);
        boardRepository.save(shareBoard);
        board.getBoardTags().forEach(boardTags -> {
            boardTags.getTags().changeStatus(TagStatus.accept);
        });
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
