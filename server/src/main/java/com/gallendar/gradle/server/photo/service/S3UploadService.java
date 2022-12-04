package com.gallendar.gradle.server.photo.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.gallendar.gradle.server.board.dto.BoardUpdateRequestDto;
import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.photo.dto.PhotoCreateRequestDto;
import com.gallendar.gradle.server.photo.dto.PhotoResponseDto;
import com.gallendar.gradle.server.photo.dto.PhotoUpdateRequestDto;
import com.gallendar.gradle.server.photo.entity.Photo;
import com.gallendar.gradle.server.photo.repository.PhotoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;
import java.util.UUID;

/**
 * MultipartFile을 전달받고,
 * S3에 전달할 수 있도록 MultiPartFile을 File로 전환합니다.
 * 전환된 file을 S3에 public 읽기 권한으로 Put합니다.
 * 로컬에 생성된 File을 삭제합니다.
 * 업로드된 파일의 S3 URL 주소를 반환합니다.
 */

@Slf4j
@RequiredArgsConstructor
@Service
public class S3UploadService{



    @Value("${cloud.aws.s3.bucket}")
    private String bucket;


    private final AmazonS3 amazonS3;

    @Transactional
    public String upload(MultipartFile multipartFile) throws IOException{
        String fileName= UUID.randomUUID()+"-"+multipartFile.getOriginalFilename();

        ObjectMetadata objectMetadata=new ObjectMetadata();
        objectMetadata.setContentLength(multipartFile.getInputStream().available());
        amazonS3.putObject(bucket,fileName,multipartFile.getInputStream(),objectMetadata);
        String path = amazonS3.getUrl(bucket,fileName).toString();
        return path;
    }



//    @Transactional
//    public String update(Long photoId, PhotoUpdateRequestDto requestDto){
//        photoRepository.findById(photoId).orElseThrow(() -> new IllegalArgumentException("사진이 존재하지 않습니다."));
//
//        Optional.ofNullable(requestDto.getPath())
//                .ifPresent(path -> requestDto.setPath(path));
//
//        return requestDto.getPath();
//    }
//
//    @Transactional
//    public String find(Long photoId){
//        photoRepository.findById(photoId).orElseThrow(()-> new IllegalArgumentException("사진이 존재하지 않습니다."));
//        String key = photoRepository.findById(photoId).get().getPath() + "/"+ photoRepository.findById(photoId).get().getFileName();
//        return key;
//    }
//
//    public void delete(Long photoId){
//        photoRepository.findById(photoId);
//        String key = photoRepository.findById(photoId).get().getPath() + "/"+ photoRepository.findById(photoId).get().getFileName();
//        amazonS3.deleteObject(new DeleteObjectRequest(bucket,key));
//    }

}
// db -> S3 이미지 주소 저장 -> 이미지 주소가 필요하다,,,