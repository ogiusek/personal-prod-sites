# if [ -d ".git" ]; then
#   echo "Repository exists. Pulling latest changes..."
#   git fetch origin ${GIT_BRANCH}
#   git checkout ${GIT_BRANCH}
#   git pull origin ${GIT_BRANCH}
# else
#   echo "Repository does not exist. Cloning..."
#   git clone https://${GITHUB_APP}:${GITHUB_ACCESS_TOKEN}@github.com/ogiusek/.git .
#   git checkout ${GIT_BRANCH}
# fi
#
echo "Hello World Scripts!"
echo "Current branch from script is: ${GIT_BRANCH}"
