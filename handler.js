"use strict";
const uuidv4 = require("uuid/v4");
const serverless = require("serverless-http");
const express = require("express");
const app = express();
app.use(express.json());
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
	// accept infor from client on what is created

	const taskToInsert = req.body;
	taskToInsert.taskId = uuidv4();

	// take info and pre-populate a SQL INSERT statement
	// execute the statement
	connection.query("INSERT INTO `tasks` SET ?", taskToInsert, function(
		error,
		results,
		fields
	) {
		if (error) {
			console.error("error inserting task", error);
			res.status(500).json({ errorMessage: error });
		} else {
			// return to the client info on the task created
			res.json({ tasks: taskToInsert });
		}
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
