'use strict'

var AWS = require('aws-sdk');
var sns = new AWS.SNS();

/****************
* Main
*****************/
exports.handler = (event, context, callback) => {
	console.log(event);

	try{
	    var params = {
	        Message: "Somebody Rang the Doorbell!",
	        Subject: "Somebody Rang the Doorbell!",
	        TopicArn: "arn:aws:sns:us-east-1:015077749639:dashbell"
	    };

	    sns.publish(params, function(err, data) {
	        if(err) {
	            console.error( new Date().toString("dd/MM/yyyy HH:mm:ss fff") + ': Error publishing to SNS: ' + err);
	            context.fail(err);
	        } else {
	            context.succeed(JSON.stringify(data));
	        }
	    });	
	}
	catch(err){
		console.error(err);
		context.fail(err);
	}
};