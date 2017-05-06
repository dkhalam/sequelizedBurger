var mysql = require('mysql');

var source = {
	localhost: {
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'burgers_db',
		port: 8889
	},
};

var connection = mysql.createConnection(source.localhost);

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// **************   HEROKU connection ************** 
// var connection = mysql.createConnection({
//     host: 'us-cdbr-iron-east-03.cleardb.net',
//     user: 'be8c1a7c210fed',
//     password: '4a613161',
//     database: 'heroku_3f36cc3ea3c6e2f',
//     connectionLimit: 5
// });
// connection.getConnection(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.error("Connected to : " + connection.threadId);
// });

// sdkjsd
module.exports = connection;