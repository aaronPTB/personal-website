import Express from 'express';

const app = Express();
app.use(Express.static(__dirname + '/client/public'));

app.get("/", function(req, res) {
  res.send("hello!");
})

app.listen(process.env.PORT || 5000, function() {
  console.log("app is listening");
})
