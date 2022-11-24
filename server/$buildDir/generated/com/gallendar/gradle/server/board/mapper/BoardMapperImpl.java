package com.gallendar.gradle.server.board.mapper;

import com.gallendar.gradle.server.board.dto.BoardResponseDto;
import com.gallendar.gradle.server.board.entity.Board;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-24T14:08:23+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class BoardMapperImpl implements BoardMapper {

    @Override
    public List<BoardResponseDto> boardsToBoardResponseDto(List<Board> boards) {
        if ( boards == null ) {
            return null;
        }

        List<BoardResponseDto> list = new ArrayList<BoardResponseDto>( boards.size() );
        for ( Board board : boards ) {
            list.add( boardToBoardResponseDto( board ) );
        }

        return list;
    }

    protected BoardResponseDto boardToBoardResponseDto(Board board) {
        if ( board == null ) {
            return null;
        }

        BoardResponseDto.BoardResponseDtoBuilder boardResponseDto = BoardResponseDto.builder();

        boardResponseDto.boardId( board.getBoardId() );
        boardResponseDto.title( board.getTitle() );
        boardResponseDto.content( board.getContent() );
        boardResponseDto.music( board.getMusic() );
        boardResponseDto.createdAt( board.getCreatedAt() );
        boardResponseDto.updatedAt( board.getUpdatedAt() );

        return boardResponseDto.build();
    }
}
