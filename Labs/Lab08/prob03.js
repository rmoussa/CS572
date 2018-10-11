var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var MongoClient = require('mongodb').MongoClient;

// to read form data in case(post requests)
var jsonParser = bodyParser.json();
app.use(express.urlencoded());
app.use(bodyParser.json());


// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8081/api)
router.get('/', function (req, res) {
    MongoClient.connect("mongodb://127.0.0.1:27017", function (error, client) {
        const db = client.db("lab08");
        var cursor = db.collection("ex03").find();
        var result = [];
        cursor.forEach((doc, err) => {
            result.push(doc);
        }, function () {
            client.close();
            // res.end(JSON.stringify(result));
            res.json(result);
        });
    });
});

//Insert Method in DB
function insert(name, category, longitude, latitude) {
    console.log(name, category, longitude, latitude);
    MongoClient.connect("mongodb://127.0.0.1:27017", function (error, client) {
        const db = client.db("lab08");
        var query = {
            'name': name,
            'category': category,
            'location': [longitude, latitude]
        };
        //console.log(query);
        db.collection("ex03").insert(query, (err, doc) => {
            if (err) {
                throw err;
            }
            console.log(JSON.stringify(doc));
            client.close();
        });
    });
}


//Insert Method in DB
function findNearest(res) {
    MongoClient.connect("mongodb://127.0.0.1:27017", function (error, client) {
        const db = client.db("lab08");
        // create index
        // db.collection("ex03").createIndex({'location':'2d'},()=>{
        //     console.log("created");
        // });

        var cursor = db.collection("ex03").find({
            location: {
                $near: [-91.9665342, 41.017654]
            }
        }).limit(2);

        var result = [];
        cursor.forEach((doc, err) => {
            result.push(doc);
        }, function () {
            console.log(result.length);
            client.close();
            res.end(JSON.stringify(result));
        });

    });
}


// /////////////////////////////////////////////////////
// 
// API part
// /////////////////////////////////////////////////////
router.route('/locations')

    // create a locations (accessed at POST http://localhost:8081/locations)
    .post(function (req, res) {
        console.log('We are in POST!!');
        console.log(req.body);

        var name = req.body.name;
        var category = req.body.category;
        var longitude = req.body.location[0];
        var latitude = req.body.location[1];

        // insert
        insert(name, category, longitude, latitude);
        res.end("Location inserted :)");
    })

    // get all the locations (accessed at GET http://localhost:8081/api/locations)
    .get(function (req, res) {
        // response.send(req.body);

    });

app.get('/api/nearest', (req, res, next) => {
    console.log("get nearest request");
    findNearest(res);
});


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(8081, () => {
    console.log("Listening to 8081");
});