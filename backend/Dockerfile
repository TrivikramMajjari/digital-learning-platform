FROM openjdk:11-jre-slim
VOLUME /tmp
COPY target/digital-learning-platform-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]