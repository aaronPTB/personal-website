import Express from 'express';

const app = Express();
app.use(Express.static(__dirname + '/client/public'));

app.get("/", function(req, res) {
  res.send("hello!");
})

app.listen(80,'0.0.0.0', function() {
  console.log("app is listening");
})
