var express = require('express');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rose',
    database: 'mysql'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("connection Mysql etabli");
  });