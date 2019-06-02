var express = require('express')
var app = express()
var mysql = require('mysql');
var bodyParser = require('body-parser')
var cors = require('cors')
app.use(cors())
app.use(bodyParser.json())

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'loja'
});

connection.connect();

  app.get('/produtos',function (req,res){

    var query = connection.query('SELECT nome, preço from loja_tcg', req.body, function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });

   

    app.get('/produtos/:tipo',function (req,res){

      var query = connection.query('SELECT id_carta from loja_tcg', req.tipo, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
      });
    
  })

})
   
  app.listen(3000)