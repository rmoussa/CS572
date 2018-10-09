var express = require('express');
var app = express();

var encryption = require('crypto');
var myPassword = "asaadsaad";
var myKey = encryption.createDecipher("aes256", myPassword);

var MongoClient = require('mongodb').MongoClient;

app.use("/secret", (req, res, next) => {
    MongoClient.connect("mongodb://127.0.0.1:27017", function (error, client) {
        console.log("Connected");
        const db = client.db("lab07db");
        db.collection("lab07db").findOne({}, (err, doc) => {

            var decryption = myKey.update(doc.message, 'hex', 'utf8');
            res.end(decryption);

            client.close();
        });
    });
});


// configuration
app.listen(8081, () => {
    console.log("listening to port 8081");
})