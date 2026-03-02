```
docker build --network=host -t jenkins .
docker run --network host -v "$(pwd)/home:/var/jenkins_home" -d jenkins
```
