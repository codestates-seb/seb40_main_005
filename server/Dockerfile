FROM openjdk:11.0.10-jre-slim-buster
ARG JAR_FILE=server-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} gallendar-server.jar
ENTRYPOINT ["java","-jar","/gallendar-server.jar"]
