const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const router = express.Router();

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
homePath = path.join(__dirname,"home.html");

router.get('/home', (req,res) => {

  res.sendFile(homePath);
});

/*
- Return all details from user.json file to client as JSON format
*/
userPath = path.join(__dirname,"user.json");

router.get('/profile', (req, res) => {
  fs.readFile(userPath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send("Internal Server Error");
      return;
    }
    const userData = JSON.parse(data);
    res.json(userData);
  });
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
// Login Route
router.get('/login', (req, res) => {
  const { username, password } = req.query;
  fs.readFile(userPath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send("Internal Server Error");
      return;
    }
    const users = JSON.parse(data);
    const user = users.find(u => u.username === username);

    if (!user) {
      res.json({
        status: false,
        message: "User Name is invalid"
      });
      return;
    }

    if (user.password !== password) {
      res.json({
        status: false,
        message: "Password is invalid"
      });
      return;
    }

    res.json({
      status: true,
      message: "User is valid"
    });
  });
});

// Logout Route
router.get('/logout', (req, res) => {
  const { username } = req.query;
  res.send(`<b>${username} successfully logged out.</b>`);
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port ' + (process.env.port || 8081));