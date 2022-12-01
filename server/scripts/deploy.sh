#!/bin/bash

REPOSITORY=~/home/ec2-user
PROJECT_NAME=server-0.0.1-SNAPSHOT

echo "> Build 파일 복사"

cp $REPOSITORY/deploy/*.jar $REPOSITORY/

echo "> 현재 구동중인 애플리케이션 pid 확인"

CURRENT_PID=$(pgrep -fl server-0.0.1-SNAPSHOT | grep java | awk '{print $1}')

echo "현재 구동중인 어플리케이션 pid: $CURRENT_PID"

if [ -z "$CURRENT_PID" ]; then
  echo ">현재 구동중인 어플리케이션이 없으므로 종료하지 않는다."
else
  echo "> kill -15 $CURRENT_PID"
  kill -15 $CURRENT_PID
  sleep 10
fi

echo "> 새 어플리케이션 배포"

JAR_NAME=$(ls -tr $REPOSITORY/*.jar | tail -n 1)

echo "> JAR_NAME: $JAR_NAME"

echo "> $JAR_NAME 에 실행 권한 추가"

chmod +x $JAR_NAME
echo "> $JAR_NAME 실행"

nohup java -jar \
    $JAR_NAME > $REPOSITORY/nohup.out 2>&1 &
