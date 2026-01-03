const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname,"../.env")});

const express = require("express");
const MongoStore = require("connect-mongo");

const app = express();
const PORT = 3000
const mongoUrl = 'mongodb://localhost:27017/Demo_Database';

//Express Sessions
const session = require("express-session");
const sessOpt = {
    name: "mySessionCookie",
    secret: "hush-hush",
    store: MongoStore.default.create({
        mongoUrl: mongoUrl,
        ttl: 14*24*60*60, //14 days
        autoRemove: 'native' //Automatically removes expired sessions
    }),
    cookie: { 
        maxAge: 1000 * 60 * 60 * 24 * 7 // Cookie expiration (1 week in milliseconds)
    }
}

if (app.get("env") == "production"){
    console.log('In Production')
    app.set("trust proxy", 1);
    sessOpt.cookie.secure = true;
}

app.use(session(sessOpt));

app.get("/", (req, res) => {
    //console.log(req.session);
    if(req.session.views){
        req.session.views++
    } else{
        req.session.views = 1;
    }
    res.send("Session check.\nCurrent Views: " + req.session.views);
});


app.listen(PORT, () => {
    console.log(`Listening on http://127.0.0.1:${PORT}`); // Log server start message
});
