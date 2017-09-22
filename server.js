const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const config = require('./config')
const profileCtrl = require('./controllers/profileCtrl')
const userCtrl = require('./controllers/userCtrl')
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ 
    secret: config.sessionSecret,
    saveUninitialized: true,
    resave: true
}));
app.use(express.static(__dirname + '/public'))

app.post('/api/login', userCtrl.login)
app.get('/api/profiles', profileCtrl.getFriendsProfiles)

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
