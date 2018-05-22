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
    let line = '';
    let flatten = function(inputObj) {
        let allKeys = Object.keys(inputObj);
        for (var i = 0; i < allKeys.length; i++) {
            if (allKeys[i] !== 'children' && i=== allKeys.length-1) {
                line += inputObj[allKeys[i]] + '\n';
                if (inputObj.children) {
                    
                }
            } else if (allKeys[i] !== 'children') {
                line += inputObj[allKeys[i]] + ',';
            }
        }
        return line;
    }

    res.send(flatten(req.body));
});
 
 app.listen(3000);


