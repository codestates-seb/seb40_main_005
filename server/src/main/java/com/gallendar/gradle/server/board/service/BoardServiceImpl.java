package com.gallendar.gradle.server.board.service;

import com.gallendar.gradle.server.board.dto.BoardCreateRequestDto;
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
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.function.Predicate;
import java.util.stream.Collectors;

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
        log.info("게시글 작성 유저 확인");
        String memberId = jwtUtils.getMemberIdFromToken(token);
        Members members = membersRepository.findById(memberId)
                .orElseThrow(() -> new IllegalArgumentException());
        log.info("사진 업로드");
        String fileName = UUID.randomUUID() + "-" + requestDto.getPhoto().getOriginalFilename();
        String path = photoService.upload(requestDto.getPhoto());
        Photo photo = Photo.builder().fileName(fileName).path(path).build();
        photoRepository.save(photo);

        log.info("카테고리 안에 있는지 확인 시작");
        if (!categoryRepository.existsByCategoryTitle(requestDto.getCategoryTitle())) {
            log.info("카테고리가 없으닌간 삽입해야함");
            Category category = Category.builder()
                    .categoryTitle(requestDto.getCategoryTitle()).build();
            categoryRepository.save(category);
        }
        Category category = categoryRepository.findByCategoryTitle(requestDto.getCategoryTitle());
        Board board = requestDto.toEntity();
        board.setMembers(members);
        board.setPhoto(photo);
        board.setCategory(category);
        boardRepository.save(board);

        log.info("보드, 포토 저장");
        if (!requestDto.getTags().isEmpty()) {
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
    public void update(Long boardId, BoardUpdateRequestDto requestDto, String token) throws IOException {
        String memberId = jwtUtils.getMemberIdFromToken(token);
        log.info("본인이 작성하였는지 확인");
        Members members = membersRepository.findById(memberId)
                .orElseThrow(() -> new IllegalArgumentException());

        log.info("해당 게시글이 있는지 확인");
        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. boardId =" + boardId));

        log.info("태그 관련 로직 시작");
        List<Board> oldTagsMember = boardRepositoryCustom.findByTagMembers(boardId);
        List<String> oldTagsList = new ArrayList<>();
        List<String> newTagsMember = requestDto.getTags();

        oldTagsMember.forEach(board1 -> {
            board1.getBoardTags().forEach(boardTags -> {
                oldTagsList.add(boardTags.getTags().getTagsMember());
            });
        });

        List<String> oldNoneMatchList = oldTagsList.stream().filter(o -> newTagsMember.stream().noneMatch(Predicate.isEqual(o))).collect(Collectors.toList());
        List<String> newNoneMatchList = newTagsMember.stream().filter(n -> oldTagsList.stream().noneMatch(Predicate.isEqual(n))).collect(Collectors.toList());
        oldNoneMatchList.forEach(o -> {
            Tags tags = tagsRepository.findByTagsMember(o);
            if (tags.getStatus().equals(TagStatus.alert)) {
                tags.changeStatus(TagStatus.deleteTag);
            }
        });
        newNoneMatchList.forEach(n -> {
            BoardTags boardTags = new BoardTags();
            Tags tags = Tags.builder()
                    .tagsMember(n)
                    .tagStatus(TagStatus.alert)
                    .build();
            boardTags.setBoard(board);
            boardTags.setTags(tags);

            boardTagsRepository.save(boardTags);
            tagsRepository.save(tags);
        });
        log.info("카테고리 관련 로직 시작");
        log.info(requestDto.getCategoryTitle());
        if (!categoryRepository.existsByCategoryTitle(requestDto.getCategoryTitle())) {
            log.info("카테고리가 없으닌간 삽입해야함");
            Category category = Category.builder()
                    .categoryTitle(requestDto.getCategoryTitle()).build();
            categoryRepository.save(category);
        }

        Category category = categoryRepository.findByCategoryTitle(requestDto.getCategoryTitle());
        board.setCategory(category);

        log.info("사진 관련 시작");
        if(!requestDto.getPhoto().isEmpty()){
            String fileName = UUID.randomUUID() + "-" + requestDto.getPhoto().getOriginalFilename();
            String path = photoService.upload(requestDto.getPhoto());
            Photo photo = Photo.builder().fileName(fileName).path(path).build();
            board.setPhoto(photo);
            photoRepository.save(photo);
        }

        board.update(requestDto.getTitle(), requestDto.getContent(), requestDto.getMusic(), requestDto.getUrl(),requestDto.getCreated());
    }

    /* 게시글 삭제 */
    @Transactional
    public void delete(Long boardId, String token) {
        String memberId = jwtUtils.getMemberIdFromToken(token);
        log.info("본인이 작성하였는지 확인");
        Members members = membersRepository.findById(memberId)
                .orElseThrow(() -> new IllegalArgumentException());
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

        int count = boardRepositoryCustom.findByCategoryCount(board.getCategory().getCategoryId());
        if (count == 1) {
            Category category = categoryRepository.findByCategoryTitle(board.getCategory().getCategoryTitle());
            categoryRepository.delete(category);
        }
        boardRepository.delete(board);
    }
}