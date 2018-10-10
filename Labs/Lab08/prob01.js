// 1 
db.restaurants.find().pretty()
// 2 
db.restaurants.find({},{restaurant_id:1,name:1,district:1,cuisine:1});
// 3
db.restaurants.find({},{restaurant_id:1,name:1,district:1,cuisine:1,_id:0});
// 4
db.restaurants.find({},{restaurant_id:1,name:1,district:1,zipcode:1,_id:0});
// 5
db.restaurants.find({"district":"Bronx"});
// 6
db.restaurants.find({district:{$eq:'Bronx'}}).limit(5); // Another way
// 7
db.restaurants.find({district:{$eq:'Bronx'}}).skip(5).limit(5);
// 8
db.restaurants.find({'address.coord.0':{$lt:-95.754168}});
// 9
db.restaurants.find({$and:[{cuisine:{$not:{$eq:'American'}}},{'grades.score':{$gt:70}},{'address.coord.0':{$lt:-65.754168}}]});
// 10
db.restaurants.find({name:{$regex:'^Wil'}},{restaurant_id:1,name:1,district:1,cuisine:1}).pretty();
// 11
db.restaurants.find({name:{$regex:'ces$'}},{restaurant_id:1,name:1,district:1,cuisine:1}).pretty();
// 12
db.restaurants.find({name : {$regex : ".*Reg.*"}},{restaurant_id:1,name:1,district:1,cuisine:1}).pretty();

// 13
db.restaurants.find({district:{$eq:'Bronx'},cuisine:{$in:['American','Chinese']}})

// 14
db.restaurants.find({district:{$in:['Staten Island','Queens','Bronx','Broklyn']}},{restaurant_id:1,name:1,district:1,cuisine:1})

// 15
db.restaurants.find({district:{$nin:['Staten Island','Queens','Bronx','Broklyn']}},{restaurant_id:1,name:1,district:1,cuisine:1})

// 16
db.restaurantCollection.find({'grades.score':{$lt:10}},{restaurant_id:1,name:1,district:1,cuisine:1})

// 17
db.restaurants.find({'address.coord.1':{$gt:42, $lte: 52} },{restaurant_id:1,name:1,address:1});

// 18
db.restaurants.find().sort({"name":1})

// 19
db.restaurants.find().sort({"name":-1})

// 20
db.restaurants.find().sort({cuisine:1,district:1})

// 21
db.restaurants.find({'address.street':{$exists:true}})

// 22
db.restaurants.find({'address.coord':{$type:'double'}})

// 23
db.restaurants.find({name:{$regex:'^Mad'}},{name:1,district:1,'address.coord':1,cuisine:1})