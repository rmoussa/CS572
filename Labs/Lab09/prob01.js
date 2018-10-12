// 01-
db.statescollection.aggregate([{$match:{state:'IA'}},{$group:{_id:'$_id'}},{$project:{'zip_code':'$_id',_id:0}}])

// 02-
db.statescollection.aggregate([{$match:{pop:{$lt:1000}}},{$project:{'zip_Code':'$_id','_id':0}}])

// 03-
db.statescollection.aggregate([ {$group:{_id:'$city','num_of_occurrance':{$sum:1}}}, {$match:{'num_of_occurrance':{$gt:1}}}, {$sort:{state:1,city:1}} ])

// 04-
db.statescollection.aggregate([
    {$group:{_id:{state:'$state',city:'$city'},'sum_pop':{$sum:'$pop'}}},
    {$sort:{'_id.state':1,'sum_pop':-1}},
    {$group:{_id:'$_id.state','city':{$first:'$_id.city'},'pop':{$first:'$sum_pop'}}},
    {$project:{_id:0,state:'$_id',city:'$city','least population':'$pop'}}
    ])