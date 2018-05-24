var express = require('express');
var app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db;

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res){
   res.sendFile(__dirname + "index.html");
});

// app.post('/submission', (req, res) => {
//     console.log(req.body)
// })

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) return console.log(err)
  db = client.db('myDatabase')
  app.listen(3000, () => {
    console.log('----->listening on port 3000')
  })

})

app.post('/submission', (req, res) => {
    db.collection('submission').save(req.body, (err, result) => {
      if (err) return console.log(err)
  
      console.log('saved to database')
      res.redirect('/')
    })
})
