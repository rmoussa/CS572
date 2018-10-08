var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
var morgan = require('morgan');
app.use(morgan('combined'));

// using validation
var validator = require('express-validator');
app.use(validator());

// to read form data in case(post requests)
app.use(express.urlencoded());

// import our entity
var grades = require('./grades');

// get requests (retrive entry)
app.get('/api/:id', (req, res, next) => {
    res.setHeader('content-type', 'application/json');

    // get id from request    
    var arr = grades.getById(req.params.id);
    res.end(JSON.stringify(arr));

});

// post requests (create entry)
// /api/:id/:name/:course/:grade
app.post('/api/', (req, res, next) => {
    res.setHeader('content-type', 'application/json');

    var id = req.body.id;
    var name = req.body.name;
    var course = req.body.course;
    var grade = req.body.grade;

    // insert
    grades.create(id, name, course, grade);

    // get what inserted
    var arr = grades.getById(id);
    res.end(JSON.stringify(arr));
});

// put requests (update an entry)
app.put('/api/', (req, res, next) => {
    // update and show result
    // console.log("put requests"); for ryan to test only

    var id = req.body.id;
    var name = req.body.name;
    var course = req.body.course;
    var grade = req.body.grade;

    // update
    grades.update(id, name, course, grade);
    res.end("Put request done");

});

// delete requests (delete existing entry)
app.delete('/api/', (req, res, next) => {
    // delete and show result
    var id = req.body.id;
    grades.delete(id);
    res.end("delete request done");

});


app.listen(8081, () => {
    console.log("Listening to 8081");
});