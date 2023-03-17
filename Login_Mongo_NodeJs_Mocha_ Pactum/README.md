# Dockrizing and Testing a REST API in Node JS with Express using Mocha and Chai

## Docker Build

```sh
sudo docker build -t login_mongo_nodejs .
```

## Docker Run

```sh
sudo docker run --rm login_mongo_nodejs
```

## To go inside the docker container

```sh
sudo docker exec -it Container ID /bin/bash
```

## To copy the changed code from local machine to docker

```sh
sudo docker cp app.js  Container ID:/app
```

## Stop all the containers

```sh
sudo docker stop $(sudo docker ps -a -q)
```

## Remove all the containers

```sh
sudo docker rm $(sudo docker ps -a -q)
```

## Remove the containers

```sh
docker rm my-mongo-container
```

## To test the Pactum test scripts

```sh
sudo docker compose run app npm test --build
```

## To test the Automation Process using Webdriver

```sh
npx wdio wdio.conf.js
```

## list of processes using port 3000

```sh
sudo lsof -i :3000
kill <PID>

```
