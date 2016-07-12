express = require("express");
app = express();

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/static/spoopy"));

app.get("/", function(req, res) {
	res.sendFile("index.html");
});

// commented out, only used for spoopy purposes
app.get("/nsfw", function(req, res) {
	res.sendFile("static/spoopy/trash.html",{root: __dirname});
})

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("The server is running on port 300");
    }
});