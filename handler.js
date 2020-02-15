"use strict";
const uuidv4 = require("uuid/v4");
const serverless = require("serverless-http");
const express = require("express");
const app = express();
const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "example.orgtr-course-rds.cettgt1wpnod.eu-west-2.rds.amazonaws.com",
	user: "xxxx",
	password: "xxxxx",
	database: "xxxx"
});

// Retrieving tasks
app.get("/tasks", function(req, res) {
	res.json({
		tasks: [
			{ id: uuidv4(), description: "Get milk", completed: false, priority: 1 },
			{
				id: uuidv4(),
				description: "Clean kitchen",
				completed: false,
				priority: 2
			},
			{
				id: uuidv4(),
				description: "Cook dinner",
				completed: false,
				priority: 3
			},

			{
				id: uuidv4(),
				description: "Other task",
				completed: false,
				priority: 3
			},
			{
				id: uuidv4(),
				description: "More tasks",
				completed: false,
				priority: 3
			}
		]
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
