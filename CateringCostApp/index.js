
//Import Dependencies
/*var express = require('express');
var mysql = require('mysql');
var app = express();
var https = require('https');


//SQL Connection
var connection = mysql.createConnection ({
// properties...
    host: 'localhost',
    user: 'root',
    password: '',
    database: '' //database name within ''
})
*/


//Login/Registration Toggle
/*$('.login').click(function() {
    $('.login').hide();
    $('.register').animate({height: "toggle", opacity: "toggle"}, "slow");
})
$('.register').click(function() {
    $('.register').hide();
    $('.login').animate({height: "toggle", opacity: "toggle"}, "slow");
})*/

/*$(document).ready(function(){
    $(".register").hide();
    $(".login").click(function(event){
        event.preventDefault();
        $(".login").fadeToggle("slow");
        $(".register").toggle(1000);
    });
});*/

$('#registerLink').click(function() {
    $('.login').slideToggle();
    $('.register').animate({height: "toggle", opacity: "toggle"}, "slow");
})
$('#loginLink').click(function() {
    $('.register').slideToggle();
    $('.login').animate({height: "toggle", opacity: "toggle"}, "slow");
})




