# Dockrizing and Testing a REST API in Node JS with Express using Mocha and Chai


## Docker Build
```
sudo docker build -t automation-framework .
```

## Docker Run
```
sudo docker run --rm automation-framework
```

## To go inside the docker container
```
sudo docker exec -it Container ID /bin/bash
```

## To copy the changed code from local machine to docker
```
sudo docker cp app.js  Container ID:/app
```

## Stop all the containers
```
sudo docker stop $(sudo docker ps -a -q)
```

## Remove all the containers
```
sudo docker rm $(sudo docker ps -a -q)
```