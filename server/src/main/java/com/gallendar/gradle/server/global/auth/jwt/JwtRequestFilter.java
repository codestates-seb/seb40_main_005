package com.gallendar.gradle.server.global.auth.jwt;

import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.members.domain.MembersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtRequestFilter extends OncePerRequestFilter {
    public static final String HEADER_KEY = "Authorization";
    private final MembersRepository membersRepository;
    private final JwtUtils jwtUtils;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        final String requestTokenHeader = request.getHeader(HEADER_KEY);
        String memberId = null;
        String jwtToken = null;

        // JWT 토큰은 "Beare token"에 있다. Bearer단어를 제거하고 토큰만 받는다.
        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            jwtToken = requestTokenHeader.substring(7);
            memberId = jwtUtils.getUsernameFromToken(jwtToken);
        }

        // 토큰을 가져오면 검증을 한다.
        if (memberId != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            Members members = membersRepository.findById(memberId).orElseThrow(() -> new IllegalArgumentException("올바르지 않은 사용자입니다."));

            // 토큰이 유효한 경우 수동으로 인증을 설정하도록 스프링 시큐리티를 구성한다.
            if (jwtUtils.validateToken(jwtToken)) {
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                        new UsernamePasswordAuthenticationToken(
                                members,
                                null,
                                null
                        );
                usernamePasswordAuthenticationToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );

                // 컨텍스트에 인증을 설정 한 후 현재 사용자가 인증되도록 지정한다.
                // 그래서 Spring Security 설정이 성공적으로 넘어간다.
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}
