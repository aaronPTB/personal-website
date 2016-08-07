express = require("express");
app = express();

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/static/spoopy"));
app.use(express.static(__dirname + "/static/pages/welcome"));

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get("/", function(req, res) {
	res.sendFile("index.html");
});

// commented out, only used for spoopy purposes
app.get("/nsfw", function(req, res) {
	//res.sendFile("static/spoopy/trash.html",{root: __dirname});
})

app.param('post', function (req, res, next, id) {
  console.log('get for post ' + id);
  next();
});
app.get("/blog/:id", function(reg, res) {

})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("The server is running on port 3000");
    }
});
