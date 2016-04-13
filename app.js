
//Set up a basic webserver, using express to see if our code works.
//create a reference to express, mongoose and npm body-parser ***ask Thor about not installing correctly 2016-01-19
var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

var db;

if(process.env.ENV == 'Test') {
db = mongoose.connect('mongodb://localhost/bookAPI_test');
}
else{
  db = mongoose.connect('mongodb://localhost/bookAPI');
}
var Book = require('./models/bookModel');
//create an instance of express we can use to start running our stuff//
var app = express();
//set up a port, the first way in environ port then OR 3000...
var port = process.env.PORT || 3000;
//will add body and add the json object to req.body
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);
//app.use('/api/author', authorRouter);
//app.use('/api/title', titleRouter);
//app.use('/api/genre', genreRouter);


//set up a handler for a route, '/' is the root for our site, then a request and a response
//request sent by client
//response comes from our server
//send back a simple little welcome message...
app.get('/', function (req, res) {
    res.send('welcome to my little teensey weensy API!');
});

app.get('/car', function(req,res) {
  var car = {
    make: 'Chevrolet',
    model: 'Stanza',
    color: 'Green',
    options: {
        AC : true,
        GPS : true
    }
  };
    res.send(car);
  });
  
  
  
  
//have the app start listening on that port
app.listen(port, function(){
    console.log('Gulp is Running on PORT:' + port);
});

module.exports = app;
