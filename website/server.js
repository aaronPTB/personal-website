var express = require("express");
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost';

var app = express();

//----General Parameters----//
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

//app.use(express.static(__dirname + "/static/pages/404"));
app.use(express.static(__dirname + "/static/pages/welcome"));

// function send404(res) {
// 	console.log("called")
// 	res.sendFile(__dirname + "/static/pages/404/index.html");
// 	res.end();
// }

//----Handling blog IDs----//
function findPost(db, id, callback) {
	var posts = db.collection("posts").find({post_id: id});
	posts.each(function(err, doc) {
		assert.equal(err, null);
		callback(doc);
	});
}

app.param('post', function (req, res, next, id) {
  console.log('get for post ' + id);
	if (id == "write") {
		res.send("coming soon");
	}
	else if (typeof(parseInt(id)) == "number"){
		id = parseInt(id);
		MongoClient.connect(url, function(err, db) {
		  assert.equal(null, err);
		  findPost(db, id, function(doc) {
					if (doc != null) {
						res.render(__dirname + "/templates/blogpost.html",
						{
							title: doc.head,
							post: doc.post,
						});
					}
					else {
						//send404(res);
					}
					db.close();
		  });
		});
	}
	else {
		//send404(res);
	}
});

//----Routing----//

app.get("/", function(req, res) {
	print("sending home page")
	res.sendFile(__dirname + "/static/pages/welcome/index.html");
	res.end();
});

// commented out, only used for spoopy purposes
app.get("/nsfw", function(req, res) {
	//res.sendFile("static/spoopy/trash.html",{root: __dirname});
})

app.get("/blog/:post", function(reg, res) {
	console.log("user accessing blog post")
	next()
})

//----Opening Port for Listening----//

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("The server is running on port 3000");
    }
});
