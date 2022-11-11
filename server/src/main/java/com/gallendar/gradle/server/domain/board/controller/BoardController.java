package com.gallendar.gradle.server.domain.board.controller;

import com.gallendar.gradle.server.domain.board.dto.BoardPostDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/boards")
public class BoardController {

    @PostMapping
    public ResponseEntity postBoard(@RequestBody BoardPostDto boardDto){

        return null;
    }
}
