'use strict'
var https = require('https');

var dash_button = require('node-dash-button'),
    dash = dash_button('XX:XX:XX:XX:XX:X'), //REPLACE WITH YOUR DASH BUTTON ADDRESS
    exec = require('child_process').exec;

dash.on('detected', function() {
    console.log('Button pushed!');
    https.get({
        host: 'XXXXXXXXXXX.execute-api.us-east-1.amazonaws.com', //Your API Gateway Domain
        path: '/prod/dashbell', //Your API Gateway Path
        headers: {'x-api-key': 'irM9OpQZRu3jduqHpkcGw6gE5YfA9c4pezNeFW8e'} //API Gateway API Token
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
        	console.log("Message Sent!");
        	console.log(body);
        });
    });
});