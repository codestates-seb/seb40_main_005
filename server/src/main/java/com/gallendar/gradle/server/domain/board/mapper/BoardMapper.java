package com.gallendar.gradle.server.domain.board.mapper;

import com.gallendar.gradle.server.domain.board.dto.BoardPostDto;
import com.gallendar.gradle.server.domain.board.dto.BoardResponseDto;
import com.gallendar.gradle.server.domain.board.entity.Board;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardMapper {
    Board boardPostDtoToBoard(BoardPostDto boardPostDto);

    default BoardResponseDto boardToBoardResponseDto(Board board) {

        BoardResponseDto boardResponseDto = new BoardResponseDto();
        boardResponseDto.setBoardId(board.getBoardId());
        boardResponseDto.setTitle(board.getTitle());
        boardResponseDto.setContent(board.getContent());
        boardResponseDto.setPhoto(board.getPhoto());
        boardResponseDto.setMusic(board.getMusic());
        boardResponseDto.setCreatedAt(board.getCreatedAt());
        boardResponseDto.setUpdatedAt(board.getUpdatedAt());

        return boardResponseDto;
    };
}
