//importing the required dependency
const express = require('express'); //for building the server and to handle the http request
const session = require('express-session'); //for managing user sessions
const bodyParser = require('body-parser');  //for parsing HTTP request bodies
const cookieParser = require('cookie-parser'); //for parsing cookies
const mysql = require('mysql'); //for interacting with the MySQL database
const app = express();
const dbConfig = require('./dbConfig');
//code start from here

//The application starts by creating a connection pool to the MySQL database defined in "dbConfig.js"
//Configuring with MySQL database
const connection = mysql.createPool(dbConfig);

// Test the connection pool
connection.getConnection((err, connection) => {
  if (err) {

    console.error('Error connecting to database: ', err);
    return;
  }

  console.log('Connected to database successfully.');

  connection.release(); // method is called to release the connection back to the pool
});

module.exports = connection;

app.use(bodyParser.urlencoded({ extended: false }));
//Configuring express server
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: 'my_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

//returns a login form HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

//accepts username and password and authenticates the user against the "loginusers" table in the database. If the authentication succeeds, it sets the "loggedin" session variable and redirects to the "/home" endpoint; otherwise, it returns an error message.
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);
  console.log(password);
  if (username && password) {

    connection.getConnection((err, connection) => {

    connection.query('SELECT * FROM loginusers',function (err, result1, fields) {
    if (err) throw err;
    console.log(result1);
    connection.release();
    });
    });

    connection.getConnection((err, connection) => {
    connection.query('SELECT * FROM loginusers WHERE uid1 = ? AND pwd = ?', [username,password],function (err, results, fields) {
      if (err) throw err;
    // res.json(results[0]);
      if (results.length > 0) {
        req.session.loggedin = true;
        req.session.username = username;
        res.redirect('/home');
        res.json();
      } else {
        res.send('Incorrect username or password');
      }           
      res.end();
    });
    connection.release();
  });
  } else {
    res.send('Please enter username and password');
    res.end();
  }
});

// if the user is authenticated (i.e., if the "loggedin" session variable is set), it returns a welcome message and a button to add new users. Otherwise, it redirects to the "/" endpoint.
app.get('/home', (req, res) => {
  if (req.session.loggedin) {
   // res.send('Welcome back, ' + req.session.username + '! <a href="/add">Add Users</a>');
   res.send(`
   <html>
     <body>
       <h1>Welcome back, ${req.session.username}!</h1>
       <button onclick="window.location.href='/add'">Add new user</button>
     </body>
   </html>
 `);
  } else {
    res.redirect('/');
  }
});
// returns an HTML form to add new users.
app.get('/add', (req, res) => {
  res.sendFile(__dirname + '/add.html');
});


app.get('/success', (req, res) => {
  res.sendFile(__dirname + '/success.html');
});

//accepts username and password and inserts a new row into the "loginusers" table if the user does not already exist. If the user already exists, it returns an error message. If the insertion succeeds, it redirects to the "/success" endpoint.
app.post('/register', (req, res) => {
  if (req.session.loggedin) {
    const username = req.body.username;
    const password = req.body.password;

    console.log("Printing username and password");
    console.log(username);
    console.log(password);
    connection.getConnection((err, connection) => {
    // Check if the user already exists
    const checkQuery = 'SELECT * FROM loginusers WHERE uid1 = ? AND pwd = ?';
    connection.query(checkQuery, [username,password], (err, results) => {
      if (err) throw err;

      // If the query returns any results, the user already exists
      if (results.length > 0) {
        res.status(400).send('User already exists');
        return;
      }

      // If the user does not exist, insert the new user into the table
      const insertQuery = 'INSERT INTO loginusers (uid1, pwd) VALUES (?, ?)';
      connection.query(insertQuery, [username, password], (err, result) => {
        if (err) throw err;

        console.log(`Inserted new user: ${username}`);

        res.redirect(302, '/success');
        console.log(result);
        //connection.end();
        res.end();
        // This line will print the URL in postman body
        const url = req.protocol + '://' + req.get('host') + req.originalUrl;
        res.json();
        // res.redirect('/success');
        // console.log(result);
        // //This line will print the URL in postman body
        // const url = req.protocol + '://' + req.get('host') + req.originalUrl;
        // res.json({ url });
        // //connection.end();
        // res.end();
        connection.release();
      });});

    });
  } else {
    res.redirect('/');
  }
});

//accepts username and new password and updates the corresponding row in the "loginusers" table. 
//If the update succeeds, it returns a success message.
app.put('/users', (req, res) => {
  const { username, password } = req.body;
  const query = 'UPDATE loginusers SET pwd = ? WHERE uid1 = ?';
  connection.getConnection(function(err, connection) {
  connection.query(query, [password, username], (err, results, fields) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update user' });
    } else {

       //This line will print the URL in postman body
      const url = req.protocol + '://' + req.get('host') + req.originalUrl;
      res.json({ url });
     // res.json({ message: `User ${username} updated` });
    }
    connection.release();
  });});

});

// accepts username and password and deletes the corresponding row from the "loginusers" table. 
//If the deletion succeeds, it returns a success message.
app.delete('/user', (req, res) => {
  const { username, password } = req.body;
  const query = 'DELETE FROM loginusers WHERE uid1 = ? and pwd = ?';
  connection.getConnection(function(err, connection) {
  connection.query(query, [username,password], (err, results, fields) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to delete user' });
    } else { 
       //This line will print the URL in postman body
      const url = req.protocol + '://' + req.get('host') + req.originalUrl;
      //const url = req.protocol + '://' + req.get('host') + req.originalUrl;
     // pm.response.text(url);

      res.json({ url });
      // res.json({ message: `Username : ${username} is deleted` });
    }
    connection.release();
  });});
});



app.listen(5000, () => console.log('listining on port 5000'));




