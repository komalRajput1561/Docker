# nodejsmysqldockercompose
A sample example of nodejs(dockerized container) and mysql(dockerized container).
This is a Node.js server-side application that connects to a MySQL database and provides endpoints for user authentication and CRUD operations on a "loginusers" table.


## Run
```
sudo docker-compose up --build
```
This will start 2 dockerized container mysql and nodejs. 

**nodejs container** will connect to **mysql** running inside the container.

The app will be running on http://localhost:5000 

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