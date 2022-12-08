//package com.gallendar.gradle.server.board.mapper;
//
//import com.gallendar.gradle.server.board.dto.BoardResponseDto;
//import com.gallendar.gradle.server.board.entity.Board;
//import org.mapstruct.Mapper;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//@Mapper(componentModel = "spring")
//public interface BoardMapper {
//
//    List<BoardResponseDto> boardsToBoardResponseDto(List<Board> boards);
//
//    default List<BoardResponseDto> boardResponseDtos(List<Board> boards){
//        return boards
//                .stream()
//                .map(board -> BoardResponseDto
//                        .builder()
//                        .boardId(board.getBoardId())
//                        .title(board.getTitle())
//                        .content(board.getContent())
//                        .music(board.getMusic())
//                        .build())
//                .collect(Collectors.toList());
//    }
//}
