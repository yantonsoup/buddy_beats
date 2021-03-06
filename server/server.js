var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

const userController = require('./controllers/userController');
const boardController = require('./controllers/boardController');

var app = express();

const mongoose = require('mongoose');



const Board = require('./models/boardModel');


const mongoURI = 'mongodb://localhost/buddydb';
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB ORM');
});


app.use(express.static(__dirname +'./../')); //serves the index.html
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json())

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    console.log('you hit / get route with body of: ' )
    res.send('hello world');
});


app.post('/saveBoard', boardController.saveBoard , function(req,res,next){
    
    res.status(200);
    res.send();
});

app.get('/getBoards', boardController.getBoards, function(req,res,next){
   
    console.log('yo');
    console.log(res.boards)

    res.status(200);
    res.send(res.boards);
});


// app.get('/save', function(req,res,next){
//     console.log('you made a post request to /save');
//     res.status(200);
//     res.send();
// });



//THIS HAS TO BE DOWN HERE OMG THAT WAS MY PROBLEM ALL ALONG
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})