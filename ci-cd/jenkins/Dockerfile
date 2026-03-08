FROM jenkins/jenkins:lts-jdk21

# trivy:ignore:DS-0002
USER root

RUN mkdir -p /var/jenkins_home && chown -R jenkins:jenkins /var/jenkins_home
ENV JENKINS_HOME=/var/jenkins_home

RUN apt-get update && apt-get install --no-install-recommends -y lsb-release python3-pip ca-certificates curl gnupg && \
    curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg && \
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list && \
    apt-get update && \
    apt-get install --no-install-recommends -y docker-ce-cli

RUN jenkins-plugin-cli --plugins "blueocean docker-workflow git"
