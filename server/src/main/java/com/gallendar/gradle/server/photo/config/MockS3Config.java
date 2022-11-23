//package com.gallendar.gradle.server.photo.config;
//
//import com.amazonaws.auth.AWSStaticCredentialsProvider;
//import com.amazonaws.auth.AnonymousAWSCredentials;
//import com.amazonaws.client.builder.AwsClientBuilder;
//import com.amazonaws.services.s3.AmazonS3;
//import com.amazonaws.services.s3.AmazonS3ClientBuilder;
//import io.findify.s3mock.S3Mock;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Primary;
//import org.springframework.context.annotation.Profile;
//import org.springframework.web.util.UriComponentsBuilder;
//
//import javax.annotation.PostConstruct;
//import javax.annotation.PreDestroy;
//import java.io.IOException;
//
//@Slf4j
//@Profile({"local"})
//@Configuration
//public class MockS3Config {
//
//    @Value("${cloud.aws.region.static}")
//    private String region;
//
//    @Value("${cloud.aws.s3.bucket}")
//    private String bucket;
//
//    @Value("${cloud.aws.s3.mock.port}")
//    private int port;
//
//    @Bean
//    S3Mock s3Mock(){
//        return new S3Mock.Builder()
//                .withPort(port)
//                .withInMemoryBackend()
//                .build();
//    }
//
//    @PostConstruct
//    public void startS3Mock() throws IOException{
//        port = ProcessUtils.isRunningPort(port) ? ProcessUtils.findAvailableRandomPort() : port;
//        this.s3Mock().start();
//        log.info("S3 Mock 서버가 실행됩니다. port: {}", port);
//    }
//
//    @PreDestroy
//    public void destroyS3Mock(){
//        this.s3Mock().shutdown();
//        log.info("인메모리 S3 Mock 서버가 종료됩니다. port: {}", port);
//    }
//
//    @Bean
//    @Primary
//    public AmazonS3 amazonS3Client(){
//        AwsClientBuilder.EndpointConfiguration endpoint = new AwsClientBuilder.EndpointConfiguration(getUri(), region);
//        AmazonS3 client = AmazonS3ClientBuilder
//                .standard()
//                .withPathStyleAccessEnabled(true)
//                .withEndpointConfiguration(endpoint)
//                .withCredentials(new AWSStaticCredentialsProvider(new AnonymousAWSCredentials()))
//                .build();
//        client.createBucket(bucket);
//        return client;
//    }
//
//    private String getUri(){
//        return UriComponentsBuilder.newInstance()
//                .scheme("http")
//                .host("localhost")
//                .port(port)
//                .build()
//                .toUriString();
//    }
//}
