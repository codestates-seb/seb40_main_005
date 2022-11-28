package com.gallendar.gradle.server.board.service;

import com.gallendar.gradle.server.board.dto.BoardCreateRequestDto;
import com.gallendar.gradle.server.board.dto.BoardResponseDto;
import com.gallendar.gradle.server.board.dto.BoardUpdateRequestDto;
import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepository;
import com.gallendar.gradle.server.board.repository.BoardRepositoryCustomImpl;
import com.gallendar.gradle.server.category.domain.Category;
import com.gallendar.gradle.server.category.domain.CategoryRepository;
import com.gallendar.gradle.server.global.auth.jwt.JwtUtils;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import com.gallendar.gradle.server.photo.entity.Photo;
import com.gallendar.gradle.server.photo.repository.PhotoRepository;
import com.gallendar.gradle.server.photo.service.S3UploadService;
import com.gallendar.gradle.server.tags.domain.*;
import com.gallendar.gradle.server.tags.domain.BoardTags;
import com.gallendar.gradle.server.tags.type.TagStatus;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class BoardServiceImpl implements BoardService {

    private final BoardRepository boardRepository;
    private final MembersRepository membersRepository;
    private final S3UploadService photoService;
    private final PhotoRepository photoRepository;
    private final BoardTagsRepository boardTagsRepository;
    private final TagsRepository tagsRepository;
    private final CategoryRepository categoryRepository;
    private final BoardRepositoryCustomImpl boardRepositoryCustom;
    private final JwtUtils jwtUtils;

    /* 게시글 저장 */
    @Transactional
    public void save(BoardCreateRequestDto requestDto, String token) throws IOException {
        String memberId = jwtUtils.getMemberIdFromToken(token);
        Members members = membersRepository.findById(memberId)
                .orElseThrow(() -> new IllegalArgumentException());

        String fileName = UUID.randomUUID() + "-" + requestDto.getPhoto().getOriginalFilename();
        String path = photoService.upload(requestDto.getPhoto());
        Photo photo = Photo.builder().fileName(fileName).path(path).build();
        photoRepository.save(photo);

        log.info("카테고리 안에 있는지 확인 시작");
        if (!categoryRepository.existsByCategoryTitle(requestDto.getCategory())) {
            log.info("카테고리가 없으닌간 삽입해야함");
            Category category = Category.builder()
                    .categoryTitle(requestDto.getCategory()).build();
            categoryRepository.save(category);
        }
        log.info("카테고리 안에 있어서 그대로 냅두고 연관관계중");
        Category category = categoryRepository.findByCategoryTitle(requestDto.getCategory());
        Board board = requestDto.toEntity();
        board.setMembers(members);
        board.setPhoto(photo);
        board.setCategory(category);
        boardRepository.save(board);

        log.info("보드, 포토 저장");
        if(!requestDto.getTags().isEmpty()) {
            requestDto.getTags().forEach(m -> {

                BoardTags boardTags = new BoardTags();
                Tags tags = Tags.builder()
                        .tagsMember(m)
                        .tagStatus(TagStatus.alert)
                        .build();
                boardTags.setBoard(board);
                boardTags.setTags(tags);

                boardTagsRepository.save(boardTags);
                tagsRepository.save(tags);
            });
        }
        log.info("태그 저장");
    }

    /* 게시글 수정 */
    @Transactional
    public Long update(Long boardId, BoardUpdateRequestDto requestDto,String token) {
        String memberId = jwtUtils.getMemberIdFromToken(token);
        log.info("본인이 작성하였는지 확인");
        Members members = membersRepository.findById(memberId)
                .orElseThrow(() -> new IllegalArgumentException());

        log.info("해당 게시글이 있는지 확인");
        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. boardId =" + boardId));

        Optional.ofNullable(requestDto.getTitle())
                .ifPresent(title -> requestDto.setTitle(title));
        Optional.ofNullable(requestDto.getContent())
                .ifPresent(content -> requestDto.setContent(content));
        Optional.ofNullable(requestDto.getMusic())
                .ifPresent(music -> requestDto.setMusic(music));
        Optional.ofNullable(requestDto.getPhoto())
                .ifPresent(photo -> requestDto.setPhoto(photo));
        Optional.ofNullable(requestDto.getCategoryTitle())
                .ifPresent(categoryTitle -> requestDto.setCategoryTitle(categoryTitle));
        Optional.ofNullable(requestDto.getTags())
                .ifPresent(setTagsMembers -> requestDto.getTags().forEach(m -> {
                    BoardTags boardTags = new BoardTags();
                    Tags tags = Tags.builder()
                            .tagsMember(m)
                            .tagStatus(TagStatus.alert)
                            .build();
                    boardTags.setBoard(board);
                    boardTags.setTags(tags);

                    boardTagsRepository.save(boardTags);
                    tagsRepository.save(tags);

                }));

        return boardId;
    }

    /* 게시글 삭제 */
    @Transactional
    public void delete(Long boardId) {
        Board board = boardRepository.findById(boardId).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. boardId=" + boardId));

        /**
         * Todo:
         * tag 상태가 alert인 tag만 tag status를 delete로 바꾼다.
         */

        board.getBoardTags().forEach(boardTag -> {
            if (boardTag.getTags().getStatus() == TagStatus.alert) {
                boardTag.getTags().changeStatus(TagStatus.delete);
            }
        });

        int count = boardRepositoryCustom.findByCategoryCount(board.getCategory().getId());
        if (count == 1) {
            Category category = categoryRepository.findByCategoryTitle(board.getCategory().getCategoryTitle());
            categoryRepository.delete(category);
        }
        boardRepository.delete(board);
    }


    /**
     * Todo:
     * ExceptionCode 작성후 error response 수정
     */
    private void isAuthorized(Board board, Members members) {
        if (!board.getMembers().equals(members)) {
            throw new IllegalArgumentException("사용자가 일치하지 않습니다.");
        }
    }
}