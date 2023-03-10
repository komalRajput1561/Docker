# Dockrizing and Testing a REST API in Node JS with Express using Mocha and Chai


## Docker Build
```
sudo docker build -t login_mongo_nodejs .
```

## Docker Run
```
sudo docker run --rm login_mongo_nodejs
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

## Remove the containers
```
docker rm my-mongo-container
```
## To test the Pactum test scripts
```
sudo docker compose run app npm test
```