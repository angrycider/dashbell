'use strict'

var dash_button = require('node-dash-button'),
    dash = dash_button('XX:XX:XX:XX:XX:XX'), //REPLACE WITH YOUR ADDRESS
    exec = require('child_process').exec;

dash.on('detected', function() {
    console.log('Button pushed!');
});
