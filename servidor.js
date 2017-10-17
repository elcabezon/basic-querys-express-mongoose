var express = require('express');
var app = express();
var _jedi = require('./models/jedi');
module.exports = {
    start: function(){
        app.get('/jedis', function (req, res) {
            _jedi.find(function(err, results){
                if(err) res.send('Se ha producido un error.');
                if(!results || results.length==0) res.send('No se han encontrado registros')
                else {
                    res.send(results);
                }
            })
            
        });
        app.get('/jedis/:name', function (req, res) {
        
            _jedi.findOne({Nombre:req.params.name},function(err, results){
                if(err) res.send('Se ha producido un error.');
                if(!results) res.send('No se han encontrado registros')
                else {
                    res.send(results);
                }
            })
            
        });
        
        app.listen(3000, function () {
            console.log('Aplicación corriendo en el puerto 3000!');
        });
    }
}
function newFunction(req, res) {
    console.log("NAme:" + req.params.name);
    res.send("Name:" + req.params.name);
}

