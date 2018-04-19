/*var express = require('express');
var mysql = require('mysql');
var app = express();
var https = require('https');

var connection = mysql.createConnection ({
// properties...
    host: 'localhost',
    user: 'root',
    password: '',
    database: '' //database name within ''
})
*/

/*$('.message a').click(function() {
    $('.form').animate({height: "toggle", opacity: "toggle"}, "slow");
})*/

$(document).ready(function(){
    $(".register").hide();
    $("#showSignUp").click(function(event){
        event.preventDefault();
        $(".login").fadeToggle("slow");
        $(".register").toggle(1000);

    });
});
