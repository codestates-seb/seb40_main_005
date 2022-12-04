package com.gallendar.gradle.server.photo.controller;


import com.gallendar.gradle.server.board.dto.BoardUpdateRequestDto;
import com.gallendar.gradle.server.photo.dto.PhotoCreateRequestDto;
import com.gallendar.gradle.server.photo.dto.PhotoUpdateRequestDto;
import com.gallendar.gradle.server.photo.service.S3UploadService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.io.IOException;

/**
 * ImageFile을 S3 클라우드로 업로드
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("/photo")
public class PhotoController {

    private final S3UploadService s3UploadService;


    /**
     * 사진 저장
     * @param multipartFile
     * @return
     * @throws IOException
     */
    @PostMapping
    public String uploadPhoto(@RequestPart("images") MultipartFile multipartFile) throws IOException{

        return s3UploadService.upload(multipartFile);
    }


    /**
     * 사진 수정
     * @param photoId
     * @param requestDto
     * @return
     */
//    @PatchMapping("/{photo-id}")
//    public String updatePhoto(@PathVariable("photo-id") @Positive long photoId,
//                              @Valid @RequestBody PhotoUpdateRequestDto requestDto){
//        return s3UploadService.update(photoId, requestDto);
//    }

    /**
     * 사진 조회
     * @param photoId
     * @return
     */
//    @GetMapping("/{photo-id}")
//    public String findPhoto(@PathVariable("photo-id") @Positive long photoId){
//        return s3UploadService.find(photoId);
//    }

    /**
     * 사진 삭제
     * @param photoId
     */
//    @DeleteMapping("/{photo-id}")
//    public void deletePhoto(@PathVariable("photo-id") @Positive long photoId){
//        s3UploadService.delete(photoId);
//    }
}