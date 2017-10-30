var express = require('express');
var app = express();

var path = require('path');
const config = require('./config/database')

var mongoose = require('mongoose');
mongoose.connect(config.uri, (err)=> {
    if(err) {
        console.log('could not connect to database',err);
    } else {
        console.log('connected to database',config.db);
    }
});
mongoose.Promise = global.Promise;


app.use(express.static(__dirname + '/client/dist/'));
app.get('/', (req,res) =>{
    res.sendFile(Path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, ()=>{
    console.log('app running on port 8080');
})