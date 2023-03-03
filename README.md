# nodejsmysqldockercompose
A sample example of nodejs(dockerized container) and mysql(dockerized container).
This is a Node.js server-side application that connects to a MySQL database and provides endpoints for user authentication and CRUD operations on a "loginusers" table.


## Run
```
docker-compose up
```
This will start 2 dockerized container mysql and nodejs. 

**nodejs container** will connect to **mysql** running inside the container.

The app will be running on http://localhost:5000 
