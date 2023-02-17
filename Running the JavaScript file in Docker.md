
# Running the JavaScript file in Docker.
## Introduction:
   Node.js —A Javascript framework used for building backend for your applications.
   
   Express — Framework for node.js.
   
   npm (node package manager) — package manager for installing necessary modules to work with your application.


## Features of Node.js

    1. Single-threaded

    2. I/O is Asynchronous and Event Driven

    3. Extremely fast

    4. Highly Scalable

    5. No buffering


## Installation Process and Steps


To install Node.js on Linux (Ubuntu) operating system, follow these instructions:

    1. Open Ubuntu Terminal (You can use shortcut keys Ctrl+Alt+T). 
```bash
2. Type command 'sudo apt-get install python-software-properties'.
```
```bash
3. Type command sudo apt-add-repository ppa:chris-lea/node.js.
```
```bash
4. Type command sudo apt-get update.
```
```bash
5. Type command sudo apt-get install nodejs npm.
```
```bash
6. Type command sudo apt-get install nodejs.
```

Installation completed. Now you can check the version of Node by 

```bash
 node --version.
```
Check the version of npm by 

```bash
npm -v.
```
Now you can check the node.js in your installed program list by typing this command:
```bash
dpkg --get-selections.
```

## Follow the commands to Run Javascript file in Docker

#### create a new folder and open the folder

```bash
 $ mkdir express-demo
```

```bash
 $ cd express-demo
```

```bash
 $ code ./
```

```bash
 create our main application file.
 $ touch index.js
```

```bash
 Open your terminal at the location of your folder, and type npm init
 $ npm init
```
#### The above command initializes npm for your project, give yes for the default options. You will see a package.json file created.

#### package.json file contains information about your application including all the dependencies.

```bash
 The next step, install express using npm.
 $ npm install express
```
#### write our server code in index.js In this step we have created node.js app

```bash
 To run your application, use
 $ node index.js
```
#### So In the above step we can make sure that our app is running in localhost.




## Let's Dockerization of Node.js Application

Create a "Deckerfile" in a same directory and write a script according to our requirement.

```bash
 Build a Docker Image using Dockerfile
 $ docker build -t docker-express-app .
```

```bash
 To check whether Image is created.
 $ docker images
```

```bash
 Creating container for an Image
 $ docker run --name express-api -d -p 4000:4000 docker-express-app
```

```bash
 we can view our running instance using,
 $ docker ps
```
```bash
  To stop/start the instance, $ docker stop express-api
  $ docker start express-api
```

