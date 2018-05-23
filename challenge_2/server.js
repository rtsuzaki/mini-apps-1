var express = require('express');
var app = express();
var bodyParser = require('body-parser');


// //To parse URL encoded data
// app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())

app.use(express.static('client'));
app.use('/scripts', express.static(__dirname + '/node_modules/'))


app.get('/', function(req, res){
    res.sendFile(__dirname + './index.html');
 });  

app.post('/', function(req, res){
    // console.log(req.body)
    var count = 1;
    var flatten = function(inputObj) {
        var allKeys = Object.keys(inputObj)
        allKeys.splice(allKeys.indexOf('children'))
        allKeys.unshift('ID');
        var csv = (allKeys.slice()).join()
        csv+='<br />'
      
        var innerFlatten = function(obj) {
          for (var i = 0; i < allKeys.length; i++) {
            if (i === 0) {
                csv+=count + ',';
                count++;
            } else if (i === allKeys.length - 1) {
                csv+=(obj[allKeys[i]]+'<br />');
            } else {
              csv+=(obj[allKeys[i]] + ',')
            }
          }
          if (obj.children.length === 0) {
            return;
          } else {
            obj.children.forEach((child) => {
              innerFlatten(child)
            })
          }
        }
        innerFlatten(inputObj);
        return csv;
    }

    res.send(flatten(req.body));
});
 
 app.listen(3000);


