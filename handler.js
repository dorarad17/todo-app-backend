"use strict";
const uuidv4 = require("uuid/v4");
const serverless = require("serverless-http");
const express = require("express");
const app = express();
const mysql = require("mysql");

const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_SCHEMA
});

// Retrieving tasks
app.get("/tasks", function(req, res) {
	connection.query('SELECT * FROM `tasks` WHERE `userId` = "364"', function(
		error,
		results,
		fields
	) {
		// error will be an Error if one occurred during the query
		if (error) {
			console.error("error fetching tasks", error);
			res.status(500).json({ errorMessage: error });
		} else {
			// Query was successful
			res.json({ tasks: results });
		}
	});
});

// Creating tasks
app.post("/tasks", function(req, res) {
	res.json({
		message: "post working"
	});
});

// Updating tasks
app.put("/tasks/:taskId", function(req, res) {
	res.json({
		message: "put working"
	});
});

// Deleting tasks
app.delete("/tasks/:taskId", function(req, res) {
	res.json({
		message: "delete working"
	});
});

module.exports.tasks = serverless(app);
