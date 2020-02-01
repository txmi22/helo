require('dotenv').config();
const express = require('express');
      session = require('express-session'),
      cors = require('cors'),
      massive = require('massive'),
      app = express(),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
      authCtrl = require('./controller')

app.use(express.json());
app.use(cors());

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365
        }
    })
)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db on')
    app.listen(SERVER_PORT, () => console.log(`Server on ${SERVER_PORT}`))
});

//Auth Endpoints
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.post('/auth/logout', authCtrl.logout);
app.get('/auth/user', authCtrl.getUser)

//Post Endpoints
app.post('/api/post', authCtrl.addPost);
app.get('/api/post/:postid', authCtrl.getPost);