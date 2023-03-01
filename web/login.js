const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const app = express();
const dbConfig = require('./dbConfig');

// const connection = mysql.createPool({
// 	connectionLimit: 10,
// 	host: process.env.MYSQL_HOST || 'localhost',
// 	user: process.env.MYSQL_USER || 'root',
// 	password: process.env.MYSQL_PASSWORD || 'password',
// 	database: process.env.MYSQL_DATABASE || 'test'
// });

const connection = mysql.createPool(dbConfig);

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

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);
  console.log(password);
  if (username && password) {
    connection.query('SELECT * FROM loginusers',function (err, result1, fields) {
    if (err) throw err;
    console.log(result1);
    });
    connection.query('SELECT * FROM loginusers WHERE uid1 = ? AND pwd = ?', [username,password],function (err, results, fields) {
      if (err) throw err;
    // res.json(results[0]);
      if (results.length > 0) {
        req.session.loggedin = true;
        req.session.username = username;
        res.redirect('/home');
       // res.json(result1);
      } else {
        res.send('Incorrect username or password');
      }           
      res.end();
    });
  } else {
    res.send('Please enter username and password');
    res.end();
  }
});


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

app.get('/add', (req, res) => {
  res.sendFile(__dirname + '/add.html');
});


app.get('/success', (req, res) => {
  res.sendFile(__dirname + '/success.html');
});

app.post('/register', (req, res) => {
  if (req.session.loggedin) {
    const username1 = req.body.username1;
    const password1 = req.body.password1;

    console.log("Printing username and password");
    console.log(username1);
    console.log(password1);
    // Check if the user already exists
    const checkQuery = 'SELECT * FROM loginusers WHERE uid1 = ? AND pwd = ?';
    connection.query(checkQuery, [username1,password1], (err, results) => {
      if (err) throw err;

      // If the query returns any results, the user already exists
      if (results.length > 0) {
        res.status(400).send('User already exists');
        return;
      }

      // If the user does not exist, insert the new user into the table
      const insertQuery = 'INSERT INTO loginusers (uid1, pwd) VALUES (?, ?)';
      connection.query(insertQuery, [username1, password1], (err, result) => {
        if (err) throw err;

        console.log(`Inserted new user: ${username1}`);
        res.redirect('/success');
       console.log(result);
        connection.end();
        res.end();
      });
    });
  } else {
    res.redirect('/');
  }
});


// app.post('/register', (req, res) => {
//   if(req.session.loggedin){
//   const username1 = req.body.username1;
//   const password1 = req.body.password1;
//  // const { username1, password1 } = req.body;
//   console.log("Printing username and password");
//   console.log(username1);
//   console.log(password1);
//   const query = 'INSERT INTO loginusers (uid1, pwd) VALUES (?, ?)';
//   connection.query(query, [username1, password1], (err, result) => {
//     if (err) throw err;
//       console.log(`Inserted new user: ${username1}`);
//      // res.sendFile(__dirname + '/success.html');
//       res.redirect('/success.html');
//      // console.log(result.affectedRows + " are record inserted");
//       connection.end();
//       res.end();
//   });
// } else {
//   res.redirect('/');
// }
// });

// app.put('/users', (req, res) => {
//  // const id = req.params.id;
//   const { username, password } = req.body;
//   const query = 'UPDATE loginusers SET uid1 = ?, pwd = ? WHERE id = ?';
//   connection.query(query, [username, password], function (err, results, fields) {
//     if (err) throw err;
//     res.json({ message: `User with name ${username} updated!` });
//   });
// });

// const registerRouter = require('./register');
// app.use('/', registerRouter);


app.listen(5000, () => console.log('listining on port 5000'));




