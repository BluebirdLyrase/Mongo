var mongo = require("mongodb");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var options = { useUnifiedTopology: true, useNewUrlParser: true };

///////////////////////////Select/////////////////////////////////////

// MongoClient.connect(url,options, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("coc");
//   dbo.collection("classroom").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });



//   MongoClient.connect(url,options, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("coc");
//     dbo.collection("classroom").findOne({}, function(err, result) {
//       if (err) throw err;
//       console.log(result.subject_id);
//       db.close();
//     });
//   });


// MongoClient.connect(url,options, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("coc");
//   var query = {subject_id:"977-341"};
//   dbo.collection("classroom")
//   .find(query)
//   .toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// MongoClient.connect(url, options, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("coc");
//   var query = { subject_id: "140-391" };
//   dbo.collection("classroom")
//     .find(query)
//     .toArray(function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
// });

/////////////////////like/////////////////////
// MongoClient.connect(url, options, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("coc");
//   var query = { subject_id: /^140/ };
//   dbo.collection("classroom")
//     .find(query)
//     .toArray(function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
// });

/////////////////////sort order////////////////////
// MongoClient.connect(url, options, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("coc");
//   var query = { 
//     subject_id: /^140/ 
//   };
//   var sort = {
//     subject_name: 1
//   }
//   dbo.collection("classroom")
//     .find(query)
//     .sort(sort)
//     .toArray(function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
// });

/////////////////////sort order////////////////////
// MongoClient.connect(url, options, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("coc");
//   var query = { 
//     subject_id: /^140/ 
//   };
//   var sort = {
//     subject_name: -1
//   }
//   dbo.collection("classroom")
//     .find(query)
//     .sort(sort)
//     .toArray(function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
// });




  //////////////////insert data//////////////////////
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("coc");
//   var newclass = {
//     subject_id: 'aa140-391'
//     , subject_name:'aaWeb UI'
//     , room:  '1202B'
//     , schedule:['Monday']
//     , lecturer: "Korawit"
//   };

//   dbo.collection("classroom")
//     .insertOne(newclass, function (err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
// });



// ///////////////////////////update/////////////////////////////////////
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("coc");
//     /////////Select target///////////////
//   var myquery = { subject_id:'140-391'};
//     /////////Set new value///////////////
//   var newvalues = {$set: {room: '1303'} };
//   dbo.collection("classroom").updateOne(myquery, newvalues, function(err, res) {
//     //////////or updateOne or updateMany
//     if (err) throw err;
//     console.log(res.result.nModified + " document(s) updated");
//     db.close();
//   });
// });

///////////////////////////Delete/////////////////////////////////////
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("coc");
//     /////////Select target///////////////
//   var myquery = { subject_id:'977-277'};
//   dbo.collection("classroom").deleteOne(myquery, function(err, res) {
//     //////////or deleteOne or deleteMany
//     if (err) throw err;
//     console.log(res.result.nModified + " document(s) deleted");
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("coc");
//     /////////Select target///////////////
//   var myquery = { subject_id:'aa140-391',subject_name:'aaWeb UI'};
//   dbo.collection("classroom").deleteOne(myquery, function(err, res) {
//     //////////or deleteOne or deleteMany
//     if (err) throw err;
//     console.log(res.result.nModified + " document(s) deleted");
//     db.close();
//   });
// });