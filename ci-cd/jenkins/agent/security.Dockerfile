FROM eclipse-temurin:21-jdk-alpine

ARG TRIVY_VERSION=0.69.3

RUN apk add --no-cache \
    ca-certificates \
    git \
    openssh-client \
    curl \
    bash

RUN curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b /usr/local/bin v${TRIVY_VERSION}

RUN addgroup -g 1000 jenkins && \
    adduser -u 1000 -G jenkins -D jenkins

USER jenkins
WORKDIR /home/jenkins

RUN trivy --version

EXPOSE 8080
