// app.post('/register', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
  
//     const sql = `INSERT INTO loginusers (uid1, pwd) VALUES (?, ?)`;
//     const values = [username, password];
  
//     connection.query(sql, values, (err, result) => {
//       if (err) throw err;
//       console.log('New user inserted into database');
//       res.redirect('/success');
//     });
//   });
  