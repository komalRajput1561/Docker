Node.js —A Javascript framework used for building backend for your applications.  
Express — Framework for node.js  
npm (node package manager) — package manager for installing necessary modules to work with your application.  


●  we should have node.js installed in our system  
   node --version  
● create a new folder and open the folder  
   $ mkdir express-demo  
   $ cd express-demo  
   $ code .  
● create our main application file.  
   $ touch index.js  
● Open your terminal at the location of your folder, and type npm init  
  $ npm init  
● The above command initializes npm for your project, give yes for the default options. You will see a package.json file created.  

package.json file contains information about your application including all the dependencies.  
● The next step, install express using npm.  
   $ npm install express  
● write our server code in index.js In this step we have created node.js app  
● To run your application, use   
   $ node index.js  
So In the above step we can make sure that our app is running in localhost.  

Let's Dockerization of  Node.js Application  
● Create a "Deckerfile" in a same directory and write a script according to our requirement.  
● Build a Docker Image using Dockerfile  
   $ docker build -t docker-express-app .  
● To check whether Image is created.  
   $ docker images  
● Creating container for an Image  
   $ docker run --name express-api -d -p 4000:4000 docker-express-app  
● we can view our running instance using,  
   $ docker ps  
● To stop/start the instance,
  $ docker stop express-api  
  $ docker start express-api  














