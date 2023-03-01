# nodejsmysqldockercompose
A sample example of nodejs(dockerized container) and mysql(dockerized container).


## Run
```
docker-compose down
docker-compose up
```
This will start 2 dockerized container mysql and nodejs. 

**nodejs container** will connect to **mysql** running inside the container.

The app will be running on http://localhost:5000 
