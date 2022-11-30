package com.gallendar.gradle.server.tags.type;

public enum TagStatus {
    /**
     * 태그 상태 관리
     * alert : 알림 상태
     * accept : 알림 수락
     * deny : 알림 거절
     * shared : 공유를 수락한 유저의 상태
     * delete : 게시글 삭제 하였을 때 알람 상태들의 상태를 변경
     * deleteTag : 게시글 수정에서 알람 상태들의 상태를 변경
     * quitMember : 탈퇴한 회원
     */

    alert,accept,deny,shared,delete,deleteTag,quitMember;

}
