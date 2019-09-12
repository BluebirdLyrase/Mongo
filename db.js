var mongo = require("mongodb");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var options = {useUnifiedTopology: true,useNewUrlParser:true};



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


  MongoClient.connect(url,options, function(err, db) {
    if (err) throw err;
    var dbo = db.db("coc");
    var query = {subject_id:"977-341"};
    dbo.collection("classroom")
    .find(query)
    .toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });

  