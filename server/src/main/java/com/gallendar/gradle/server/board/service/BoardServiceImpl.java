package com.gallendar.gradle.server.board.service;

import com.gallendar.gradle.server.board.dto.BoardCreateRequestDto;
import com.gallendar.gradle.server.board.dto.BoardListResponseDto;
import com.gallendar.gradle.server.board.dto.BoardResponseDto;
import com.gallendar.gradle.server.board.dto.BoardUpdateRequestDto;
import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.board.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService{

    private final BoardRepository boardRepository;

    /* 게시글 저장 */
    @Transactional
    public Long save(BoardCreateRequestDto requestDto){
        return boardRepository.save(requestDto.toEntity()).getBoardId();
    }
    /* 게시글 수정 */
    @Transactional
    public Long update(Long boardId, BoardUpdateRequestDto requestDto){
        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. boardId =" + boardId));

        board.update(requestDto.getTitle(), requestDto.getContent(), requestDto.getMusic());

        return boardId;
    }

    /* boardId로 게시글 조회 */
    @Transactional
    public BoardResponseDto findById (Long boardId){
        Board entity = boardRepository.findById(boardId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. boardId =" + boardId));

        return new BoardResponseDto(entity);
    }

    /* 전체 게시글 조회 */
    @Transactional(readOnly = true)
    public List<Board> findAllDesc(int page, int size){

        Page<Board> findAllBoard = findAllBoard(page, size);

        List<Board> boards = findAllBoard.getContent();

        return boards;

    }

    public Page<Board> findAllBoard(int page, int size){
        return boardRepository.findAllDescBy(PageRequest.of(page-1, size, Sort.by("boardId").descending()));
    }

    /* 게시글 삭제 */
    @Transactional
    public void delete (Long boardId){
        Board board = boardRepository.findById(boardId).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. boardId="+boardId));

        boardRepository.delete(board);
    }

}
