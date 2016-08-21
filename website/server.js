var express = require("express");
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost';

var app = express();

//----General Parameters----//
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use("/static", express.static(__dirname + "/static"))

function send404(res) {
	console.log("called")
	res.sendFile(__dirname + "/static/pages/404/index.html");
}

//----Handling blog IDs----//
function findPost(db, id, callback) {
	db.collection("posts", function(err, collection) {
		collection.findOne({"post-id": id}, function(err, post) {
			console.dir(post);
			callback(post);
		})
	})
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
						var id_prev = id
						if (id > 1) {
							id_prev = id - 1
						}
						res.render(__dirname + "/templates/blogpost.html",
						{
							title: doc.head,
							post: doc.post,
							pp: "http://localhost:3000/blog/" + id_prev,
							pn: "http://localhost:3000/blog/" + (id + 1),
						});
					}
					else {
						send404(res);
					}
					db.close();
		  });
		});
	}
	else {
		send404(res);
	}
});

//----Routing----//

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/static/pages/welcome/index.html");
});

// commented out, only used for spoopy purposes
app.get("/nsfw", function(req, res) {
	//res.sendFile("static/spoopy/trash.html",{root: __dirname});
})

app.get("/blog", function(req, res) {
	console.log("user is searching posts")
	MongoClient.connect(url, function(err, db) {
		assert.equal(null, err);
		db.collection("posts", function(err, collection) {
			collection.find({}, function(err, posts) {
				posts.toArray(function(err, output) {
					console.log(output)
					res.render(__dirname + "/templates/blogpost_nav.html",
					{
						posts: output
					});
				})
			})
		})
	})
})

app.get("/blog/:post", function(req, res) {
	console.log("user accessing blog post")
	next()
})

// app.get("/create", function(req, res) {
// 	MongoClient.connect(url, function(err, db) {
// 		assert.equal(err, null);
// 		db.collection("posts").insert({
// 	    "post-id": 1,
// 	    "head": "Test Post",
// 	    "post": "Hello, world!"
// 		})
// 	})
// })

app.get("/debug", function(req, res){
	MongoClient.connect(url, function(err, db){
		assert.equal(err, null);
		var posts = db.collection("posts").find();
		posts.each(function(err, doc) {
			assert.equal(err, null);
			console.dir(doc);
		});
	})
})

//----Handling 404s----//
app.use(function(req, res, next) {
  res.sendStatus(404)
});
//----Opening Port for Listening----//

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("The server is running on port 3000");
    }
});
